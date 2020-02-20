import * as types from '../_actionTypes'
import { getUniqueID } from '../utils'
import * as creators from '../_actions'

const mockedUUID = 'mocked-unique-ID'

jest.mock('../utils', () => ({
  getUniqueID: jest.fn(() => mockedUUID),
}))

describe('MyModule::actions', () => {
  beforeEach(() => {
    ;(getUniqueID as jest.Mock).mockClear()
  })

  it('creates a proper methodA action', () => {
    const text = 'text'
    const action = creators.methodA(text)

    expect(action).toEqual({
      type: types.METHOD_A,
      item: {
        id: mockedUUID,
        text,
      },
    })

    expect(getUniqueID).toHaveBeenCalled()
  })

  it('creates a proper methodB action', () => {
    const item = { id: '1', text: '1!' }
    const action = creators.methodB(item)

    expect(action).toEqual({
      type: types.METHOD_B,
      item,
    })

    expect(getUniqueID).not.toHaveBeenCalled()
  })
})
