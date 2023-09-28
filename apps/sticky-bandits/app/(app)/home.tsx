import { Drawer } from "expo-router/drawer";
import HomeScreen from "screens/Home";

export default function() {

  return <>
    <Drawer.Screen options={{ headerTitle: '' }} />
    <HomeScreen />
  </>
}
