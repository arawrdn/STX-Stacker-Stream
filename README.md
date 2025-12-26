# Stacker Stream

A "Proof-of-Stacking" paywall protocol. It allows creators to lock content behind Bitcoin-native requirements.

## What makes it different?
Traditional paywalls ask for money. **Stacker Stream** asks for **Conviction**. It checks the blockchain to see if you are an active participant in the Stacks ecosystem. 
- No payment required.
- Access is granted based on your balance and holding time.
- Uses **Reown AppKit** for a seamless "Social-to-Blockchain" onboarding.

## Tech Highlights
- **Zero-Gas Verification**: Uses Clarity read-only calls to verify eligibility.
- **WalletKit Socials**: Allows users to link their Discord/X via Reown for community-based whitelisting.
- **Privacy First**: No personal data stored; only on-chain balance verification.

## Setup
1. Clone & `npm install`.
2. Ensure your Reown Project ID `180a7...` is in the config.
3. Deploy the `stacker-access.clar` contract.
4. Run `npm run dev`.

## 📜 Contract logic
The system uses the `stx-get-balance` and `block-height` functions to ensure that only "diamond hands" can access the most premium content.
