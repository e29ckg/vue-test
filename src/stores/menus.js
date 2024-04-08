import { defineStore } from 'pinia'

export const useMenusStore = defineStore('menus', {
  state: () => ({
    menu:[
      {
        path: '/',
        name: 'Dashboard',
        icon: 'dashboard'
      },
      {
        path: '/about',
        name: 'About',
        icon: 'person'
      },
      {
        path: '/profile',
        name: 'Profile',
        icon: 'map'
      }
    ]
    
  })
})