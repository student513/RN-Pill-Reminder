import { observable, action } from 'mobx'
import { createContext } from 'react'
import { Time, Date, Week } from '../helper/interface'

class SetDayTimeStore {
  @observable Name: string = ''
  @observable Dosage: string = ''
  @observable Day: Week = null
  @observable Time: Time = null
  @observable TimeList: Time[] = null
  @observable isEndRepeat: boolean = false
  @observable EndRepeat: Date = null
  @observable Critical: boolean = false
  @observable NextTime: {
    date: number
    time: Time
    day: Week
  } = null
  
  // @action
  // increase = () => {
  //   this.number++
  // }
  
  // @action
  // decrease = () => {
  //   this.number--
  // }
}

export const setDayTimeStore = new SetDayTimeStore()
export const setDayTimeStoreContext = createContext(setDayTimeStore)