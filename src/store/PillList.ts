import { observable, action, computed } from 'mobx'
import { createContext } from 'react'


class PillListStore {
  @observable CardList: any[] = null
  @observable VeiwLog: any[] = null

}

export const pillListStore = new PillListStore()
export const pillListStoreContext = createContext(pillListStore)
