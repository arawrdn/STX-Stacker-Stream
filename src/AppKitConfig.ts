import { createAppKit } from '@reown/appkit/react'
import { StacksAdapter } from '@reown/appkit-adapter-stacks'
import { stacks } from '@reown/appkit/networks'

export const projectId = '180a7164cfa9e5388daf1160841f65a0'

export const appKit = createAppKit({
  adapters: [new StacksAdapter()],
  networks: [stacks],
  projectId,
  metadata: {
    name: 'Stacker Stream',
    description: 'Exclusive Content for Bitcoin Supporters',
    url: 'https://stackerstream.app',
    icons: ['https://stacks.org/logo.png']
  },
  features: {
    email: true,
    socials: ['x', 'discord'], // Community focus
    analytics: true
  }
})
