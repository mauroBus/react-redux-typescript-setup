import { shallow } from 'enzyme'
import React from 'react'
import { MyModule } from '../pages/my-module'
import { App } from '../app'
import styles from './app.css'

describe('App', () => {
  it('instantiates the MyModule component', () => {
    const tree = shallow(<App />)
    expect(tree.type()).toBe(MyModule)
  })

  it('appends "app" class', () => {
    const tree = shallow(<App />)
    expect(tree.hasClass(styles.app)).toBe(true)
  })
})
