import { faker } from '@faker-js/faker'
import { A, D, O, pipe } from '@mobily/ts-belt'
import { atom, atomFamily, selector, selectorFamily } from 'recoil'
import { MockGenerator } from 'util/mock-generators'

export const MessageList = atom({
  key: 'messages/all',
  default: Promise.resolve(new MockGenerator().messages())
})

/**
 * returns the selected message by id
 * @throws An exception if the message does not exist
 */
export const messageAtomFamily = selectorFamily({
  key: 'messages/by-id',
  get(param) {
    return ({ get }) => {
      const messages = get(MessageList)
      return pipe(
        messages,
        A.find(item => item.id === param),
        O.getExn
      )
    }
  }
})
