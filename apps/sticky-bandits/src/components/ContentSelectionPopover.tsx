import { Plus } from "@tamagui/lucide-icons"
import { useState } from "react"
import { Pressable } from "react-native"
import { Popover, YGroup, Button, Text } from "tamagui"

export const ContentSelectionPopover = () => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>()

  return (
    <Popover placement="bottom" allowFlip size="$5">
      <Popover.Trigger asChild>
        <Button icon={Plus} size={'$2'} scaleIcon={2} circular />
      </Popover.Trigger>
      <Popover.Adapt platform="native">
        <Popover.Sheet modal dismissOnSnapToBottom>
          <Popover.Sheet.Overlay />
          <Popover.Sheet.Frame>
            <Popover.Adapt.Contents />
          </Popover.Sheet.Frame>
        </Popover.Sheet>
      </Popover.Adapt>

      <Popover.Content
        elevate
        animation={['quick', { opacity: { overshootClamping: true } }]}
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}>
        <Popover.Arrow />
        <YGroup>
          <YGroup.Item>
            <Pressable>
              <Text>Stuff</Text>
            </Pressable>
          </YGroup.Item>
        </YGroup>
      </Popover.Content>
    </Popover>
  )
}
