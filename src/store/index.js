import { createStore } from 'vuex'
import {cuestionario} from './cuestionario.js'

export default createStore({
  state: {
    usuarios: [
      {
        id: 0,
        username: "admin",
        email: "admin@admin.com",
        password: "admin123456789"
      }
    ],
    cuestionario: cuestionario
  },
  mutations: {
  },
})
