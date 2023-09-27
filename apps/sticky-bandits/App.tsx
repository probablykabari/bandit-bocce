import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, Text, YStack } from 'tamagui'
import tamaguiConfig from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <YStack backgroundColor={'$blue10'} flex={1}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </YStack>
    </TamaguiProvider>
  )
}
