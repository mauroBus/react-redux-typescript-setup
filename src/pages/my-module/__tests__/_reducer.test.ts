import { METHOD_A, METHOD_B } from '../_actionTypes'
import { ITEMS } from '../list.example'
import reducer from '../_reducer'

describe('MyModule::reducer', () => {
  // @ts-ignore
  const defaultState = reducer(undefined, {})
  const item = { id: '1', text: '1!!' }

  it('defaults the state', () => {
    expect(defaultState).toEqual({
      items: ITEMS,
    })
  })

  it("handles the methodA's action", () => {
    const afterState = reducer(defaultState, {
      type: METHOD_A,
      item,
    })

    expect(afterState).toEqual({
      items: [...ITEMS, item],
    })
  })

  it("handles the methodB's action", () => {
    const editedItem = {
      id: ITEMS[0].id,
      text: 'some new text...',
    }
    const afterState = reducer(defaultState, {
      type: METHOD_B,
      item: editedItem,
    })

    expect(afterState).toEqual({
      items: [editedItem, ...ITEMS.slice(1, ITEMS.length)],
    })
  })
})
