import { A, F, O, pipe } from '@mobily/ts-belt'

export const appendNullableArray =
  <A>(arr: A[]) =>
  (nArray: A[] | null) =>
    pipe(nArray, O.fromNullable, O.map(A.concat(arr)), O.toNullable, F.toMutable)
