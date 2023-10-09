import {
  type GiphyDialogMediaSelectEventHandler,
  GiphyDialog,
  GiphyDialogEvent,
  type GiphyMedia
} from '@giphy/react-native-sdk'
import { useEffect, useState } from 'react'

type ShowDialog = () => void

/**
 *
 * @returns [GiphyMedia, showDialog]
 * @see https://github.com/Giphy/giphy-react-native-sdk/blob/main/docs/api.md#example-2
 */
export const useGiphyDialogHandler = (): [GiphyMedia | null, ShowDialog] => {
  const [media, setMedia] = useState<GiphyMedia | null>(null)

  // Handling GIFs selection in GiphyDialog
  useEffect(() => {
    const handler: GiphyDialogMediaSelectEventHandler = e => {
      setMedia(e.media)
      GiphyDialog.hide()
    }
    const listener = GiphyDialog.addListener(GiphyDialogEvent.MediaSelected, handler)

    return listener.remove
  }, [setMedia])

  const showGhiphyDialog = GiphyDialog.show

  return [media, showGhiphyDialog]
}
