import { State as MyModuleState } from '../../src/pages/my-module/_reducer'

declare global {
  type AppState = {
    myModule: MyModuleState
  }

  type StateProp<T extends keyof AppState> = AppState[T]
}

export {}
