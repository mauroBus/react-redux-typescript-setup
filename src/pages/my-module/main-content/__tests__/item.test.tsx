import { shallow } from 'enzyme'
import React from 'react'
import { Item } from '../item'
import styles from '../item.css'

describe('MyModule::MainContent::Item', () => {
  const defaults = {
    id: 'myId',
    text: 'myText',
  }

  it('renders as a "li" element', () => {
    const tree = shallow(<Item {...defaults} />)
    expect(tree.type()).toBe('li')
    expect(tree.hasClass(styles.item)).toBe(true)
  })

  it('renders the `text` prop inside', () => {
    const tree = shallow(<Item {...defaults} />)
    expect(tree.text()).toBe(defaults.text)
  })
})
