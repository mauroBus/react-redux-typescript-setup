import { MyItemActionType } from './_actions'
import { METHOD_A, METHOD_B } from './_actionTypes'
import { ITEMS } from './list.example'

export type State = {
  items: MyItem[]
}

const initialState: State = {
  items: ITEMS,
}

export default (state: State = initialState, action: MyItemActionType) => {
  switch (action.type) {
    case METHOD_A:
      return {
        ...state,
        items: [...state.items, action.item],
      }

    case METHOD_B: {
      const editedItem = action.item
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === editedItem.id ? editedItem : todo
        ),
      }
    }

    default:
      return state
  }
}
