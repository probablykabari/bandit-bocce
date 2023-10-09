import { atom, atomFamily } from "recoil"

export const commentReaction = atomFamily({
  key: 'content/interaction'
})

export const commentFlag = atomFamily({
  key: 'content/flag'
})

/**
 * Message selected for intactions (ie. likes, reporting, etc)
 */
export const CurrentInteractiveMessageId = atom<number | null>({
  key: 'content/current-message-interaction',
  default: null
})
