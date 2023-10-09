import { Copy, Flag, Frown, Heart, Smile } from "@tamagui/lucide-icons"
import { formatDistanceToNow } from "date-fns"
import { useCallback, useMemo, useState } from "react"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, { runOnJS } from "react-native-reanimated"
import { YStack, XStack, SizableText, Avatar, Card, Paragraph, Text, XGroup, Button, Spacer, AnimatePresence, Sheet, YGroup, ListItem } from "tamagui"
import type { models } from "util/types/models"
import * as Haptics from 'expo-haptics'
import { useSetRecoilState } from "recoil"
import { CurrentInteractiveMessageId } from "state/content-interaction"
// import { BlurView } from 'expo-blur'
import { consola } from 'consola'

interface ThreadItemProps {
  item: models.Message
}

export const ThreadItem = ({ item }: ThreadItemProps) => {
  const setInteractiveMessage = useSetRecoilState(CurrentInteractiveMessageId)

  const showMenuGesture = useCallback(() => {
    Haptics.selectionAsync()
    setInteractiveMessage(item.id)
  }, [item.id, setInteractiveMessage])

  return (
    <YStack paddingHorizontal="$2.5" space="$2.5">
      <XStack justifyContent="space-between" paddingLeft="$6">
        <SizableText size="$1">{item.user.display_name}</SizableText>
        <SizableText size="$1">{formatDistanceToNow(item.created_at)}</SizableText>
      </XStack>
      <XStack space="$1.5">
        <Avatar circular size="$2" alignSelf="flex-end">
          <Avatar.Image src={item.user.profile_image} />
          <Avatar.Fallback bc="$green6" justifyContent="center" alignItems="center">
            <Text>KH</Text>
          </Avatar.Fallback>
        </Avatar>
        <Card elevate elevation="$0.75" flex={1} onLongPress={showMenuGesture}>
          <Card.Header>
            <SizableText>{item.message}</SizableText>
          </Card.Header>
        </Card>
      </XStack>
      <Animated.FlatList
        horizontal
        data={item.photos}
        keyExtractor={item => item}
        style={{ width: '50%', marginLeft: '50%' }}
        renderItem={({ item }) => (
          <XStack height={240} flexShrink={1}>
            <Animated.Image source={{ uri: item, width: 800 }} style={{ width: '50%', aspectRatio: 4 / 6 }} />
          </XStack>
        )}
      />
    </YStack>
  )
}
