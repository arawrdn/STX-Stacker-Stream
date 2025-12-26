import { useAppKitAccount } from '@reown/appkit/react'
import { callReadOnlyFunction } from '@stacks/transactions'
import { useState, useEffect } from 'react'

export default function ContentGate({ contentId }: { contentId: number }) {
  const { address, isConnected } = useAppKitAccount()
  const [hasAccess, setHasAccess] = useState(false)

  const verifyAccess = async () => {
    if (!address) return;

    // Call Clarity contract without gas fees (Read-only)
    const result = await callReadOnlyFunction({
      contractAddress: 'SP123...DEPLOYED_ADDR',
      contractName: 'stacker-access',
      functionName: 'is-authorized',
      functionArgs: [/* args converted to CV */],
      senderAddress: address
    });
    
    // Logic to update setHasAccess based on result
    setHasAccess(true); // Simplified for demo
  }

  return (
    <div className="content-box">
      {!isConnected ? (
        <div className="locked">
          <h3>🔒 Exclusive Content</h3>
          <p>Connect your wallet to verify your Stacker status.</p>
          <appkit-button />
        </div>
      ) : hasAccess ? (
        <article>
          <h2>The Future of Bitcoin L2</h2>
          <p>This content is only visible to loyal STX holders...</p>
        </article>
      ) : (
        <p>You need at least 100 STX to view this article.</p>
      )}
    </div>
  )
}
