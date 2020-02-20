import { shallow } from 'enzyme'
import React from 'react'
import { Header } from '../'

describe('MyModule::Header', () => {
  it('renders as a "header" element', () => {
    const tree = shallow(<Header />)
    expect(tree.type()).toBe('header')
  })

  it('renders text message', () => {
    const tree = shallow(<Header />)
    expect(tree.text()).toBe('This is a header.')
  })

  it('renders', () => {
    const tree = shallow(<Header />)
    expect(tree).toMatchSnapshot()
  })
})
