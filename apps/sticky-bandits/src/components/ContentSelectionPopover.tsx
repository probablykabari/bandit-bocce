import { O, pipe } from '@mobily/ts-belt'
import { Bot, Camera, Image, Plus } from '@tamagui/lucide-icons'
import { launchImageLibraryAsync, useMediaLibraryPermissions } from 'expo-image-picker'
import { useSetRecoilState } from 'recoil'
import { CurrentPostAssets } from 'state/content-generation'
import { Popover, YGroup, Button, Text, getToken, ListItem } from 'tamagui'
// import { useGiphyDialogHandler } from "hooks/useGiphyDialogHandler"

export const ContentSelectionPopover = () => {
  const offsetValue = getToken('$3', 'space')
  const [mediaPermissions, requestMediaPermissions] = useMediaLibraryPermissions()
  const setCurrentMedia = useSetRecoilState(CurrentPostAssets)
  // TODO - I don't feel like using native code yet so leaving this out for now
  // const [giphyMedia, showGiphyDialog] = useGiphyDialogHandler()

  const pickImages = async () => {
    console.log('click image picker')
    if (!mediaPermissions?.granted) {
      const response = await requestMediaPermissions()
      // TODO this should show an alert or something
      if (!response.granted) return
    }

    const imageResult = pipe(await O.fromPromise(launchImageLibraryAsync({ quality: 1 })), O.toNullable)
    if (imageResult?.assets) setCurrentMedia(current => [...current, ...imageResult.assets])
  }

  // useEffect(() => {
  //   if (giphyMedia) setCurrentMedia(current => [...current, giphyMedia])
  // }, [giphyMedia, setCurrentMedia])

  return (
    <Popover placement="top-end" allowFlip size="$1" offset={{ mainAxis: offsetValue, crossAxis: offsetValue }}>
      <Popover.Trigger asChild>
        <Button icon={Plus} size="$2" scaleIcon={2} circular />
      </Popover.Trigger>
      {/* <Popover.Adapt platform="native">
        <Popover.Sheet modal dismissOnSnapToBottom>
          <Popover.Sheet.Overlay />
          <Popover.Sheet.Frame>
            <Popover.Adapt.Contents />
          </Popover.Sheet.Frame>
        </Popover.Sheet>
      </Popover.Adapt> */}

      <Popover.Content
        bordered
        animation={['quick', { opacity: { overshootClamping: true } }]}
        enterStyle={{ y: 20, x: -10, opacity: 0 }}
        exitStyle={{ y: 20, x: -10, opacity: 0 }}>
        <YGroup size="$2" backgroundColor="transparent">
          <YGroup.Item>
            <ListItem
              icon={<Image color="$orange7" />}
              backgroundColor="transparent"
              scaleIcon={1.2}
              onPress={pickImages}>
              Add a Photo
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem icon={<Camera color="$orange7" />} backgroundColor="transparent" scaleIcon={1.2} disabled>
              Take a Photo (soon!)
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem icon={<Bot color="$orange7" />} backgroundColor="transparent" scaleIcon={1.2} disabled>
              Add from Giphy (soon!)
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </Popover.Content>
    </Popover>
  )
}
