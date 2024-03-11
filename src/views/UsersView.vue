<template lang="">
  <div class="w-50 m-auto">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <td>No.</td>
          <td>Img</td>
          <td>First name</td>
          <td>Last name</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user , index) in users">
          <td>{{ index+1 }}</td>
          <td>#</td>
          <td>{{user.fname}}</td>
          <td>{{user.lname}}</td>
          <td>
            <router-link :to="`/edit/${user.id}`">
              <button class="btn btn-warning me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  const users = ref([])

  const fetch_user = async () => {
    await axios.get(`${import.meta.env.VITE_API}/user`)
    .then((res)=>{
      users.value = res.data
      console.log(users)
    }).catch((err)=>{
      alert(err)
    })
  }

  const deleteUser = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API}/user/${id}`)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      alert(err)
    })
    await fetch_user()
  }

  fetch_user()
</script>
<style lang="">
  
</style>