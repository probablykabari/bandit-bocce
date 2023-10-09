import { FlatList } from "react-native-gesture-handler"
import { ThreadItem } from "./ThreadItem"
import { useRecoilValue } from "recoil"
import { MessageList } from "state/data-fetching"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTheme, getToken, Spacer } from "tamagui"


export const MessagesFlatList = () => {
  const messages = useRecoilValue(MessageList)
  const theme = useTheme()
  const listPadding = getToken('$space.8')
  const insets = useSafeAreaInsets()

  return (
    <FlatList
      data={messages}
      style={{ flex: 1, flexGrow: 2, paddingBottom: listPadding + insets.bottom }}
      inverted
      automaticallyAdjustKeyboardInsets={false}
      contentContainerStyle={{ backgroundColor: theme.background.get() }}
      ItemSeparatorComponent={Spacer}
      renderItem={({ item }) => <ThreadItem key={item.id} item={item} />}
    />
  )
}
