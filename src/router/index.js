import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AbsenIndex from '../views/absen/Index.vue'
import MhsIndex from '../views/mahasiswa/Index.vue'
import Createabsen from '../views/absen/CreateAbsen'
import Createmhs from '../views/mahasiswa/CreateMhs.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/absen',
    name: 'Absensi',
    component: AbsenIndex
  },

  {
    path: '/mahasiswa',
    name: 'Mahasiswa',
    component: MhsIndex
  },

  {
    path: '/createabsen',
    name: 'Create Absen',
    component: Createabsen
  },

  {
    path: '/createmhs',
    name: 'Create Mahasiswa',
    component: Createmhs
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
