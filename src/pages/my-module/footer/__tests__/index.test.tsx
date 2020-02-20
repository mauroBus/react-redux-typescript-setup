import { shallow } from 'enzyme'
import React from 'react'
import { Footer } from '../'

describe('MyModule::Footer', () => {
  it('renders as a "footer" element', () => {
    const tree = shallow(<Footer />)
    expect(tree.type()).toBe('footer')
  })

  it('renders text message', () => {
    const tree = shallow(<Footer />)
    expect(tree.text()).toBe('This is a footer.')
  })

  it('renders', () => {
    const tree = shallow(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})
