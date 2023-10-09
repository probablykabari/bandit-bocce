// giphy.setup.ios.ts
import { GiphySDK } from '@giphy/react-native-sdk'
import { getConfigValue } from './config'

GiphySDK.configure({
  apiKey: getConfigValue('giphyKey')
})
