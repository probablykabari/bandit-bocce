import { StatusBar } from 'expo-status-bar'
import { YStack, Text } from 'tamagui'

const HomeScreen = () => (
  <YStack backgroundColor={'$blue10'} flex={1}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
  </YStack>
)

export default HomeScreen
