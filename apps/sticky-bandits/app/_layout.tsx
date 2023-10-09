import { Slot, SplashScreen } from 'expo-router'
import { LogBox, useColorScheme } from 'react-native'
import { RecoilRoot } from 'recoil'
import { TamaguiProvider, Theme } from 'tamagui'

import tamaguiConfig from '../tamagui.config'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import NavigationThemeProvider from 'core/NavigationThemeProvider'

SplashScreen.preventAutoHideAsync()
LogBox.ignoreLogs(['Please use `router.redirect` instead'])

const RootLayout = () => {
  const scheme = useColorScheme()
  const [fontsLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <RecoilRoot>
      <TamaguiProvider config={tamaguiConfig} defaultTheme='light'>
        <Theme name={`${scheme ?? "light"}_green`}>
          <NavigationThemeProvider>
            <Slot />
          </NavigationThemeProvider>
        </Theme>
      </TamaguiProvider>
    </RecoilRoot>
  )
}

export default RootLayout
