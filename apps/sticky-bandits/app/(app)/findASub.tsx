import Drawer from "expo-router/drawer";
import FindASubScreen from "screens/FindASub";

export default function() {

  return (
    <>
      <Drawer.Screen options={{ headerTitle: '', title: 'Find a Sub' }} />
      <FindASubScreen />
    </>
  )
}
