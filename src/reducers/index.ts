import { combineReducers } from 'redux'
import MyModuleReducer from '../pages/my-module/_reducer'

export default combineReducers<any, any>({
  myModule: MyModuleReducer,
})
