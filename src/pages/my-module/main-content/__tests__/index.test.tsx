import { shallow } from 'enzyme'
import React from 'react'
import { ITEMS } from '../../list.example'
import { getUniqueID } from '../../utils'
import { Aside } from '../aside'
import { MainContent } from '../'

const mockedUUID = 'mocked-unique-ID'
jest.mock('../../utils', () => ({
  getUniqueID: jest.fn(() => mockedUUID),
}))

describe('MyModule::MainContent', () => {
  const defaults = {
    items: ITEMS,
    methodA() {},
    methodB() {},
  }
  const addBtn = '[data-qa="main-content-add-item-btn"]'

  beforeEach(() => {
    ;(getUniqueID as jest.Mock).mockClear()
  })

  it('renders as a "main" element', () => {
    const tree = shallow(<MainContent {...defaults} />)
    expect(tree.type()).toBe('main')
  })

  it('renders a couple of articles', () => {
    const tree = shallow(<MainContent {...defaults} />)
    const articles = tree.find('article')
    expect(articles).toHaveLength(2)
  })

  it('renders the first article', () => {
    const tree = shallow(<MainContent {...defaults} />)

    const article = tree.find('article').at(0)
    const firstChild = article.childAt(0)
    const secondChild = article.childAt(1)

    expect(firstChild.text()).toBe('Article')
    expect(firstChild.type()).toBe('h1')
    expect(secondChild.text()).toBe(
      'I am text in article, also there can be an image:'
    )
  })

  it('renders the second article', () => {
    const tree = shallow(<MainContent {...defaults} />)
    const article = tree.find('article').at(1)
    expect(article).toMatchSnapshot()
  })

  it('calls "methodA" on button click', () => {
    const methodA = jest.fn()
    const tree = shallow(<MainContent {...defaults} methodA={methodA} />)
    tree.find(addBtn).simulate('click')
    expect(methodA).toHaveBeenCalledWith(`item-${mockedUUID}`)
  })

  it('instantiates the Aside component', () => {
    const tree = shallow(<MainContent {...defaults} />)
    expect(tree.find(Aside).exists()).toBe(true)
  })
})
