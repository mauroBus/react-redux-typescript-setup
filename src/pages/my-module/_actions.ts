import * as types from './_actionTypes'
import { getUniqueID } from './utils'

export type MyItemActionType = MethodAActionType | MethodBActionType

export type MethodAActionType = {
  type: typeof types.METHOD_A
  item: MyItem
}
export type MethodBActionType = {
  type: typeof types.METHOD_B
  item: MyItem
}

export const methodA = (text: string): MethodAActionType => ({
  type: types.METHOD_A,
  item: {
    id: getUniqueID(),
    text,
  },
})

export const methodB = (item: MyItem): MethodBActionType => ({
  type: types.METHOD_B,
  item,
})
