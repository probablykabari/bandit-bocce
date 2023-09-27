import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RecoilRoot } from 'recoil'
import { TamaguiProvider } from 'tamagui'

import tamaguiConfig from '../tamagui.config'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const scheme = useColorScheme()
  const navTheme = scheme === 'dark' ? DarkTheme : DefaultTheme
  const [fontsLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RecoilRoot>
        <TamaguiProvider config={tamaguiConfig}>
          <ThemeProvider value={navTheme}>
            <Slot />
          </ThemeProvider>
        </TamaguiProvider>
      </RecoilRoot>
    </GestureHandlerRootView>
  )
}

export default RootLayout
