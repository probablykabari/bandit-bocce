import { createAnimations } from '@tamagui/animations-moti'
import { config } from '@tamagui/config'
import { createTamagui } from 'tamagui'

const animations_ = createAnimations({
  fast: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250
  },
  medium: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  slow: {
    type: 'spring',
    damping: 20,
    stiffness: 60
  },
  bounce: {
    damping: 9,
    mass: 0.9,
    stiffness: 150
  }
} as const)

const tamaguiConfig = createTamagui(config)
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
