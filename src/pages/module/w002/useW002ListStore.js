import { defineStore } from 'pinia'
import axios from '@axios'

export const useW002ListStore = defineStore('W002List', {
  actions: {
    // 👉 Fetch users data
    fetchList(params) {
      return axios.get('/module/w002', { params })
    },
  },
})
