import { shallow } from 'enzyme'
import React from 'react'
import { Aside } from '../aside'
import styles from '../aside.css'

describe('MyModule::MainContent::Aside', () => {
  const navSelector = '[data-qa="aside-nav"]'
  const linkSelector = '[data-qa="aside-nav-link"]'

  it('renders as a "main" element', () => {
    const tree = shallow(<Aside />)
    expect(tree.type()).toBe('aside')
    expect(tree.hasClass(styles.aside)).toBe(true)
  })

  it('renders the title as first child', () => {
    const tree = shallow(<Aside />)
    expect(tree.childAt(0).text()).toBe('Aside')
  })

  it('renders the main nav', () => {
    const tree = shallow(<Aside />)
    expect(tree.find(navSelector).exists()).toBe(true)
  })

  it('renders the list items with proper link', () => {
    const tree = shallow(<Aside />)
    const listItems = tree.find(linkSelector)

    expect(listItems).toHaveLength(4)

    listItems.forEach((item, index) => {
      const link = item.find('a')
      expect(link.exists()).toBe(true)
      expect(link.text()).toBe(`Link ${index + 1}`)
      expect(link.hasClass(styles.link)).toBe(true)
    })
  })
})
