import { Heart, Smile, Frown, Copy, Flag, Flame, HelpingHand, Award, Reply } from '@tamagui/lucide-icons'
import { useCallback } from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { CurrentInteractiveMessageId } from 'state/content-interaction'
import { messageAtomFamily } from 'state/data-fetching'
import { Sheet, XGroup, Spacer, YGroup, ListItem, Button, type SheetProps, Card, SizableText, Separator, Text, Input } from 'tamagui'
import { BlurView } from 'expo-blur'
import * as Clipboard from 'expo-clipboard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ThreadItemActionMenuProps extends SheetProps {}

export const ThreadItemActionMenu = (props: ThreadItemActionMenuProps) => {
  const [messageId, setMessageId] = useRecoilState(CurrentInteractiveMessageId)
  const messageLoadable = useRecoilValueLoadable(messageAtomFamily(messageId))
  const message = messageLoadable.valueMaybe()
  const open = !!message
  const insets = useSafeAreaInsets()

  const setOpen = useCallback(
    (isOpen: boolean) => {
      setMessageId(current => (isOpen ? current : null))
    },
    [setMessageId]
  )

  const copyMessageText = useCallback(() => {
    const value = messageLoadable.valueOrThrow().message

    Clipboard.setStringAsync(value)
  }, [messageLoadable])

  return (
    <Sheet open={open} onOpenChange={setOpen} modal snapPoints={[60]} dismissOnSnapToBottom {...props}>
      <Sheet.Overlay>
        <BlurView style={{ flex: 1, width: '100%', height: '100%' }} />
      </Sheet.Overlay>

      <Sheet.Frame backgroundColor={'$backgroundTransparent'} space="$2.5" paddingHorizontal="$6">
        <XGroup
          size="$3"
          padding="$2.5"
          backgroundColor="$background"
          separator={<Spacer size="$2.5" />}
          alignSelf="flex-end">
          <XGroup.Item>
            <Button icon={Heart} unstyled pressStyle={{ opacity: 0.75 }} scaleIcon={1.5} />
          </XGroup.Item>
          <XGroup.Item>
            <Button icon={Smile} unstyled pressStyle={{ opacity: 0.75 }} scaleIcon={1.5} />
          </XGroup.Item>
          <XGroup.Item>
            <Button icon={Frown} unstyled pressStyle={{ opacity: 0.75 }} scaleIcon={1.5} />
          </XGroup.Item>
          <XGroup.Item>
            <Button icon={Flame} unstyled pressStyle={{ opacity: 0.75 }} scaleIcon={1.5} />
          </XGroup.Item>
          <XGroup.Item>
            <Button icon={Award} unstyled pressStyle={{ opacity: 0.75 }} scaleIcon={1.5} />
          </XGroup.Item>
        </XGroup>

        <Card theme={'alt2'}>
          <Card.Header>
            <SizableText numberOfLines={6}>{message?.message}</SizableText>
          </Card.Header>
        </Card>

        <YGroup size="$3" backgroundColor="$background" separator={<Separator />} maxWidth='$15' alignSelf='center'>
          <YGroup.Item>
            <ListItem icon={Reply} title="Reply" backgroundColor="transparent" pressTheme />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              icon={Copy}
              title="Copy Text"
              backgroundColor="transparent"
              pressTheme
              onPress={copyMessageText}
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem icon={<Flag color={'$red10'} />} title="Report" backgroundColor="transparent" pressTheme />
          </YGroup.Item>
        </YGroup>
      </Sheet.Frame>
    </Sheet>
  )
}
