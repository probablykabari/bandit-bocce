import { Stack, useRouter } from "expo-router"
import { HeaderBackButton } from '@react-navigation/elements'
import { useNavigation } from "expo-router/src/useNavigation"


export default () => {
  const r = useRouter()

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name='index' options={{ title: 'Find Subs', headerShown: false }} />
      <Stack.Screen name='create-request' options={{ title: 'Create Sub Request', headerBackTitle: 'Cancel', headerBackButtonMenuEnabled: false, presentation: 'modal', headerLeft: (props) => <HeaderBackButton {...props} onPress={() => r.back()} /> } } />
      <Stack.Screen name='[request]' options={{ animationTypeForReplace: 'pop' , title: 'View Request', headerLeft: (props) => <HeaderBackButton {...props} onPress={() => r.replace('/findSubsStack/')} /> }} />
    </Stack>
  )
}
