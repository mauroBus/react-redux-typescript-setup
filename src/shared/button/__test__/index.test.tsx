import { shallow } from 'enzyme'
import React from 'react'
import { Button } from '../'

describe('Button', () => {
  const defaults = {
    className: '',
    disabled: false,
    onClick() {},
    onKeyDown() {},
  }

  it('matches snapshot', () => {
    const tree = shallow(<Button {...defaults}>Children</Button>)
    expect(tree).toMatchSnapshot()
  })

  it('renders as a "button" element', () => {
    const tree = shallow(<Button {...defaults} />)
    expect(tree.type()).toBe('button')
  })

  it('renders its children', () => {
    const child = <span>'Hello'</span>
    const tree = shallow(<Button>{child}</Button>)
    expect(tree.find('button').containsMatchingElement(child)).toBe(true)
  })

  it('connects the onClick handler', () => {
    const onClick = jest.fn()
    const tree = shallow(<Button onClick={onClick}>Hello</Button>)
    tree.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('calls onKeyDown handler', () => {
    const onKeyDown = jest.fn()
    const tree = shallow(<Button onKeyDown={onKeyDown}>Hello</Button>)
    tree.find('button').simulate('keyDown', {})
    expect(onKeyDown).toHaveBeenCalled()
  })

  it('does nothing on `keyDown` if there is no `onKeyDown` prop', () => {
    const tree = shallow(<Button>Hello</Button>)
    expect(() => tree.find('button').simulate('keyDown', {})).not.toThrow()
  })

  it('prevents calling `onKeyDown` handler when ‘Enter’ is pressed and button is disabled', () => {
    const onKeyDown = jest.fn()
    const tree = shallow(
      <Button disabled onKeyDown={onKeyDown}>
        Hello
      </Button>
    )
    tree
      .find('button')
      .simulate('keyDown', { key: 'Enter', preventDefault: () => {} })
    expect(onKeyDown).not.toHaveBeenCalled()
  })

  it('sets aria-disabled, rather than disabled so it can still be focused', () => {
    const onClick = jest.fn()
    const tree = shallow(
      <Button disabled onClick={onClick}>
        Hello
      </Button>
    )
    const button = tree.find('button')
    expect(button.prop('disabled')).toBeUndefined()
    expect(button.prop('aria-disabled')).toBe('true')
    button.simulate('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('focuses the element when focus is called', () => {
    const focus = jest.fn()
    const tree = shallow<Button>(<Button>Hello</Button>)

    const btn = document.createElement('button')
    btn.focus = focus

    tree.instance().setButtonRef(btn)
    tree.instance().focus()
    expect(focus).toHaveBeenCalled()
  })

  it('prevents default behavior when hitting Enter on a disabled button', () => {
    const preventDefault = jest.fn()
    const tree = shallow(<Button disabled>Hello</Button>)
    tree.simulate('keyDown', {
      key: 'Enter',
      preventDefault,
    })
    expect(preventDefault).toHaveBeenCalled()
  })
})
