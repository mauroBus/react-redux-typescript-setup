import { getUniqueID } from '../utils'

describe('MyModule::utils', () => {
  const cRandom = Math.random

  beforeEach(() => {
    Math.random = () => 0.111
  })

  afterEach(() => {
    Math.random = cRandom
  })

  it('returns an unique uuid', () => {
    expect(getUniqueID()).toBe('3zutdjanm')
  })

  it.each([
    [0.1, '3llllllll'],
    [0.2, '777777777'],
    [0.3, 'assssssss'],
    [0.4, 'eeeeeeeee'],
    [0.5, 'i'],
    [0.6, 'lllllllll'],
    [0.7, 'p77777777'],
    [0.8, 'sssssssss'],
    [0.9, 'weeeeeeee'],
  ])('returns an unique uuid when Math.random() returns %s', (rand, result) => {
    Math.random = () => rand
    expect(getUniqueID()).toBe(result)
  })
})
