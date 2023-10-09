import { A, O, pipe } from "@mobily/ts-belt";
import { atom, selectorFamily } from "recoil";
import { MockGenerator } from "util/mock-generators";

export const CurrentCommunityID = atom<number | null>({
  key: 'common/community-id',
  default: null
})

export const TeamsState = atom({
  key: 'common/teams',
  default: Promise.resolve(new MockGenerator().teams())
})

export const TeamInfoState = selectorFamily({
  key: 'common/team-info',
  get(param){
    return ({ get }) => {
      const teams = get(TeamsState)
      return pipe(
        teams,
        A.find(item => item.id === param),
        O.getExn
      )
    }
  }
})
