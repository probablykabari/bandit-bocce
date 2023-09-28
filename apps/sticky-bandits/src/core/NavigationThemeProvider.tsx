import { ThemeProvider, type Theme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { useTheme } from 'tamagui'

export default function NavigationThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme()
  const scheme = useColorScheme()

  const themeSettings: Theme = {
    dark: scheme === 'dark',
    colors: {
      primary: theme.color.get(),
      background: theme.background.get(),
      card: theme.color2.get(),
      text: theme.color.get(),
      border: theme.borderColor.get(),
      notification: theme.color7.get()
    }
  }

  return <ThemeProvider value={themeSettings}>{children}</ThemeProvider>
}
