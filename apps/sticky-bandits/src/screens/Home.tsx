import { MediaCreationStack } from 'components/MessageCreationStack'
import { MessagesFlatList } from 'components/MessagesFlatList'
import { ThreadItemActionMenu } from 'components/ThreadItemActionMenu'
import { useFocusEffect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Suspense } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  getToken, Spinner
} from 'tamagui'


const HomeScreen = () => {
  const listPadding = getToken('$space.8')
  const insets = useSafeAreaInsets()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={listPadding + insets.bottom}>
      <StatusBar style="auto" />
      <Suspense fallback={<Spinner size='large' />}>
        <MessagesFlatList />
      </Suspense>

      <ThreadItemActionMenu />
      <MediaCreationStack onSubmit={() => {}} />
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
