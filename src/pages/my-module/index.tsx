import React from 'react'
import t from 'format-message'
import { connect } from 'react-redux'
import { methodA, methodB } from './_actions'
import { Header } from './header'
import { MainContent } from './main-content'
import { Footer } from './footer'

type StateProps = {
  items: MyItem[]
}
type DispatchProps = {
  methodA: ActionProp<'myModule', 'methodA'>
  methodB: ActionProp<'myModule', 'methodB'>
}
type OwnProps = {
  className?: string
}
type Props = StateProps & DispatchProps & OwnProps

const _MyModule = ({ className, items, methodA, methodB }: Props) => (
  <div className={className}>
    <title>{t('My module')}</title>
    <Header />
    <MainContent items={items} methodA={methodA} methodB={methodB} />
    <Footer />
  </div>
)

const mapStateToProps = (state: AppState): StateProps => ({
  items: state.myModule.items,
})

const mapDispatchToProps: DispatchProps = { methodA, methodB }

export const MyModule = connect<StateProps, DispatchProps, OwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(_MyModule)
