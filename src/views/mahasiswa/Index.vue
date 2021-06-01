<template>
    <router-link class="btn btn-primary" to="/Createabsen"> Tambah Data </router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Alamat ID</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(absen, index) in Absen " :key="index">
      <td>{{ absen.waktu_absen }}</td>
      <td>{{ absen.mahasiswa_id }}</td>
      <td>{{ absen.matkul_id }}</td>
      <td>{{ absen.keterangan }}</td>
      <td>
          <button class="btn btn-warning"> Edit </button>
          <button class="btn btn-danger"> Hapus </button>
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
import axios from 'axios'
// @ is an alias to /src
//import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'
  
export default {
  name: 'Home',
  components: {
    
        
  },
  setup(){
    let absen = ref([])
    onMounted(() => {
      axios.get('127.0.018000/api/absen/')
      .then(response => {
        absen.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function absenDelete(id){
      axios.delete(`127.0.01:8000/api/absen/${id}`)
      .then(() =>{
        let x = this.absen.map(absen => absen.id).indexOf(id);
        this.absen.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }
    return  {
      absen,
      absenDelete
    }
  }
    
};
</script>