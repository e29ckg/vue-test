import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstname: 'e29ckg',
    lastname: '111'
  }),
  actions: {
    updateProfile(userData) {
      this.firstname = userData.firstname
      this.lastname = userData.lastname
    }
  }
})