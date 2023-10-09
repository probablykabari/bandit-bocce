import { atom } from "recoil";
import type { models } from "util/types/models";

export const SubRequestsState = atom<models.SubRequest[]>({
  key: 'sub-requests/active',
  default: []
})
