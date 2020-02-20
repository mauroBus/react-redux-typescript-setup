declare global {
  type AppActions = {
    myModule: {
      methodA(text: string): any
      methodB(item: MyItem): any
    }
  }

  type ActionProp<
    T extends keyof AppActions,
    S extends keyof AppActions[T]
  > = AppActions[T][S]
}

export {}
