import { defineStore } from 'pinia'
import { store } from '@/store'
import { IAppType, IRobotAccount } from '../types'
import { robotAccount } from '@/constants'
export const useAppStore = defineStore({
  id: 'app',
  state: (): IAppType => ({
    collapse: false,
    robotAccount,
    currentRobotAccount: JSON.parse(localStorage.getItem('robotAccount')) || robotAccount[0]
  }),
  getters: {
    getCollapse(): boolean {
      return this.collapse
    },
    getRobotAccount(): IRobotAccount[] {
      return this.robotAccount
    },
    getCurrentRobotAccount(): IRobotAccount {
      return this.currentRobotAccount
    }
  },
  actions: {
    setCollapse(e: boolean) {
      this.collapse = e
    },
    setRobotAccount(e: IRobotAccount[]) {
      this.robotAccount = e
    },
    setCurrentRobotAccount(e: IRobotAccount) {
      localStorage.setItem('robotAccount', JSON.stringify(e))
      this.currentRobotAccount = e
    }
  },
})

export function useAppStoreHook() {
  return useAppStore(store)
}
