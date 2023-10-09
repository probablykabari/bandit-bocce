import type { GiphyMedia } from '@giphy/react-native-sdk'
import type { ImagePickerAsset } from 'expo-image-picker'
import { atom, atomFamily, selector } from 'recoil'

export const CurrentMessage = atom<string>({
  key: 'current-post/message',
  default: ''
})

type MessageAsset = ImagePickerAsset | GiphyMedia

export const CurrentPostAssets = atom<MessageAsset[]>({
  key: 'current-post/assets',
  default: []
})

export const CurrentPost = selector({
  key: 'current-post/value',
  get({ get }) {
    const message = get(CurrentMessage)
    const media = get(CurrentPostAssets)

    const isValid = message.length > 0
    // TODO reformat media

    return {
      message,
      media,
      isValid
    }
  }
})
