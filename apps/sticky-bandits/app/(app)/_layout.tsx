import { Drawer } from 'expo-router/drawer'
import { useTheme } from 'tamagui'

export default function DrawerLayout() {
  const theme = useTheme()

  return (
    <Drawer
      screenOptions={{
        headerTintColor: theme.color7.get()
    }} />
  )
}
