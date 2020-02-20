import { shallow } from 'enzyme'
import React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { Header } from '../header'
import { MainContent } from '../main-content'
import { Footer } from '../footer'
import { MyModule } from '../'

describe('MyModule', () => {
  const mockStore = configureStore<AppState, AppActions>()
  const defaults = {
    className: '',
    methodA() {},
    methodB() {},
  }
  const defaultState: StateProp<'myModule'> = {
    items: [{ id: '1', text: '1...' }],
  }
  const getState = (stateOverrides = {}): AppState => {
    return {
      myModule: {
        ...defaultState,
        ...stateOverrides,
      },
    }
  }
  let store: MockStoreEnhanced<AppState, AppActions>

  beforeEach(() => {
    store = mockStore(getState())
  })

  it('renders a custom className', () => {
    const className = 'myCustomClassName'
    const tree = shallow(
      // @ts-ignore (store)
      <MyModule {...defaults} store={store} className={className} />
    ).dive()

    expect(tree.hasClass(className)).toBe(true)
  })

  it('renders the page title', () => {
    // @ts-ignore (store)
    const tree = shallow(<MyModule {...defaults} store={store} />).dive()

    const title = tree.dive().find('title')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('My module')
  })

  it('renders the Header component', () => {
    // @ts-ignore (store)
    const tree = shallow(<MyModule {...defaults} store={store} />).dive()

    const header = tree.dive().find(Header)
    expect(header.exists()).toBe(true)
    expect(header.props()).toEqual({})
  })

  it('renders the MainContent component', () => {
    // @ts-ignore (store)
    const tree = shallow(<MyModule {...defaults} store={store} />).dive()
    // @ts-ignore
    const { methodA, methodB } = tree.props()

    const header = tree.dive().find(MainContent)
    expect(header.exists()).toBe(true)
    expect(header.props()).toMatchObject({
      items: store.getState().myModule.items,
      methodA,
      methodB,
    })
  })

  it('renders the Footer component', () => {
    // @ts-ignore (store)
    const tree = shallow(<MyModule {...defaults} store={store} />).dive()

    const header = tree.dive().find(Footer)
    expect(header.exists()).toBe(true)
    expect(header.props()).toEqual({})
  })
})
