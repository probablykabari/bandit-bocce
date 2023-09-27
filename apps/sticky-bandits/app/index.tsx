import { router } from 'expo-router'
import { Button, Text, View } from 'tamagui'

export default function SignIn() {

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Button
        onPress={() => {
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/')
        }}>
        Sign In
      </Button>
    </View>
  )
}
