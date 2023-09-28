import { StatusBar } from 'expo-status-bar'
import {
  YStack,
  Text,
  Card,
  Paragraph,
  SizableText,
  Spacer,
  useTheme,
  getToken,
  Stack,
  XStack,
  Input,
  themeable,
  TextArea,
  Button,
  Image,
  Avatar,
  Popover,
  YGroup,
  Adapt
} from 'tamagui'
import { faker } from '@faker-js/faker'
import { FlatList } from 'react-native-gesture-handler'
import { useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Plus, PlusCircle } from '@tamagui/lucide-icons'
import { KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import { formatDistanceToNow } from 'date-fns'

const photos = [
  `https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80`,
  `https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
  `https://images.unsplash.com/photo-1581069700310-8cf2e1b6baf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
  `https://images.unsplash.com/photo-1562802378-063ec186a863?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c2hpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`
]

const generateMessage = () => {
  return {
    id: faker.number.int(),
    message: faker.lorem.lines(),
    photos: faker.helpers.maybe(() => faker.helpers.arrayElements(photos), { probability: 0.25 }),
    created_at: faker.date.recent(),
    user: {
      username: faker.internet.displayName(),
      display_name: faker.person.fullName(),
      profile_image: 'https://i.pravatar.cc/300'
    }
  }
}

const HomeScreen = () => {
  const messages = useMemo(() => {
    return faker.helpers.multiple(generateMessage, { count: { min: 5, max: 10 } })
  }, [])

  const theme = useTheme()
  const listPadding = getToken('$6', 'space')
  const insets = useSafeAreaInsets()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={listPadding + insets.bottom}>
      <StatusBar style="auto" />
      {/* <FlatList
        data={messages}
        style={{ flex: 1, flexGrow: 2, paddingBottom: listPadding + insets.bottom }}
        inverted
        automaticallyAdjustKeyboardInsets={false}
        contentContainerStyle={{ backgroundColor: theme.background.get() }}
        ItemSeparatorComponent={Spacer}
        renderItem={({ item }) => (
          <YStack key={item.id} paddingHorizontal="$2.5" space="$1.5">
            <XStack justifyContent="space-between" paddingLeft="$6">
              <SizableText size="$1">{item.user.display_name}</SizableText>
              <SizableText size="$1">{formatDistanceToNow(item.created_at)}</SizableText>
            </XStack>
            <XStack space="$1.5">
              <Avatar circular size={'$2'} alignSelf="flex-end">
                <Avatar.Image src={item.user.profile_image} />
                <Avatar.Fallback bc="$green6" justifyContent="center" alignItems="center">
                  <Text>KH</Text>
                </Avatar.Fallback>
              </Avatar>
              <Card elevate elevation={'$0.75'} flex={1}>
                <Card.Header>
                  <Paragraph>{item.message}</Paragraph>
                </Card.Header>
                <Card.Footer>{item.photos?.map(uri => <Image source={{ uri }} width={50} />)}</Card.Footer>
              </Card>
            </XStack>
          </YStack>
        )}
      /> */}
      <XStack
        minHeight={'$6'}
        flexShrink={1}
        paddingTop="$2.5"
        paddingBottom={insets.bottom}
        backgroundColor={'$background'}
        space="$2"
        paddingHorizontal="$2.5"
        justifyContent="center">
        <Popover placement="top-end" allowFlip size="$5">
          <Popover.Trigger asChild>
            <Button icon={Plus} size={'$2'} scaleIcon={2} circular />
          </Popover.Trigger>
          <Popover.Adapt platform='native'>
            <Popover.Sheet modal dismissOnSnapToBottom>
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
        <TextArea
          placeholder="Send a message"
          borderRadius={35}
          theme="alt2"
          size={'$2'}
          flex={1}
          numberOfLines={1}
          minHeight={'$3'}
        />
        <Button size={'$3'} chromeless>
          Send
        </Button>
      </XStack>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
