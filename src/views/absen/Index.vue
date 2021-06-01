<template>
    <router-link class="btn btn-primary" to="/Createabsen"> Tambah Data </router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Waktu Absen</th>
      <th scope="col">Mahasiswa ID</th>
      <th scope="col">Mata Kuliah ID</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(mhs, index) in Mahasiswa " :key="index">
      <td>{{ mhs.waktu_absen }}</td>
      <td>{{ mhs.mahasiswa_id }}</td>
      <td>{{ mhs.matkul_id }}</td>
      <td>{{ mhs.keterangan }}</td>
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
    let mahasiswa = ref([])
    onMounted(() => {
      axios.get('127.0.0.1:8000/api/mahasiswa/')
      .then(response => {
        mahasiswa.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function mahasiswaDelete(id){
      axios.delete(`127.0.0.1:8000/api/mahasiswa/${id}`)
      .then(() =>{
        let x = this.mahasiswa.map(mahasiswa => mahasiswa.id).indexOf(id);
        this.mahasiswa.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }
    return  {
      mahasiswa,
      mahasiswaDelete
    }
  }
    
};
</script>