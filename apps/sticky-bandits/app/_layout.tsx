import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import { useColorScheme } from 'react-native'
import { RecoilRoot } from 'recoil'
import { TamaguiProvider, Theme } from 'tamagui'

import tamaguiConfig from '../tamagui.config'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import NavigationThemeProvider from 'core/NavigationThemeProvider'

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
    <RecoilRoot>
      <TamaguiProvider config={tamaguiConfig} defaultTheme='light'>
        <Theme name={`${scheme}_green`}>
          <NavigationThemeProvider>
            <Slot />
          </NavigationThemeProvider>
        </Theme>
      </TamaguiProvider>
    </RecoilRoot>
  )
}

export default RootLayout
