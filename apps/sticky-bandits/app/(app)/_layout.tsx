import { D, pipe } from '@mobily/ts-belt'
import { useNavigation, usePathname, useRouter } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useTheme } from 'tamagui'

// const getScreenPath = (route: Record<string, string>) => pipe(
//   route,
//   D.
// )

export default function DrawerLayout() {
  const theme = useTheme()

  return (
    <Drawer
      screenOptions={({ route }) => {

        // console.log("route", route)
        return {
          headerTintColor: theme.color7.get()
        }
      }
    }>
      <Drawer.Screen name="home" options={{ headerTitle: ' ' }} />
      <Drawer.Screen name="findSubsStack" options={{ headerTitle: ' ', title: 'Find a Sub' }} />
    </Drawer>
  )
}
