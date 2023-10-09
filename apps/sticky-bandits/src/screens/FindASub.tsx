import { Plus, PlusCircle } from "@tamagui/lucide-icons"
import { useFocusEffect, useRouter } from "expo-router"
import { useState } from "react"
import { Pressable } from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { useRecoilState } from "recoil"
import { SubRequestsState } from "state/sub-requests"
import { Button, Popover, YGroup, YStack, Text, H1, ListItem, useStyle, H3, XStack, SizableText } from "tamagui"

const FindASubScreen = () => {
  const [subRequests] = useRecoilState(SubRequestsState)
  const subListStyle = useStyle({ minHeight: '$16' })
  const router = useRouter()

  return (
    <YStack flex={1}>
      <H3 fontSize={'$6'}>Active Sub Requests</H3>
      <XStack>
        <Button icon={PlusCircle} theme={'blue_alt1'} onPress={() => router.push('/(app)/findSubsStack/create-request')}>Post a request for subs</Button>
        <Button icon={PlusCircle} theme={'blue_alt1'} onPress={() => router.push('/(app)/findSubsStack/1234')}>Show</Button>
      </XStack>
      <FlatList
        data={subRequests}
        renderItem={({ item }) => (
          <ListItem title={`${item.number_needed} needed for ${item.team_id}`} subTitle={`${item.times.join(', ')}`} />
        )}
      />
    </YStack>
  )
}

export default FindASubScreen
