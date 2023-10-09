import { XStack, TextArea,  Button, type StackProps, Input } from "tamagui"
import { ContentSelectionPopover } from "./ContentSelectionPopover"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useRecoilState } from "recoil"
import { CurrentMessage } from "state/content-generation"


type MediaCreationStackProps = StackProps & {
  onSubmit(): void
}

export const MediaCreationStack = ({onSubmit, ...stackProps}: MediaCreationStackProps) => {
  const insets = useSafeAreaInsets()
  const [message, setMessage] = useRecoilState(CurrentMessage)
  const disableSubmit = !message.length

  return (
    <XStack
      minHeight="$6"
      flexShrink={1}
      paddingTop="$2.5"
      paddingBottom={insets.bottom}
      backgroundColor="$background"
      space="$2"
      paddingHorizontal="$2.5"
      justifyContent="center" {...stackProps}>
      <ContentSelectionPopover />
      <TextArea
        placeholder="Send a message"
        theme="alt1"
        size="$2"
        flex={1}
        value={message}
        onChangeText={setMessage}
        numberOfLines={undefined}
        maxLength={500}
      />
      <Button size="$3" chromeless onPress={onSubmit} disabled={disableSubmit}>
        Send
      </Button>
    </XStack>
  )
}
