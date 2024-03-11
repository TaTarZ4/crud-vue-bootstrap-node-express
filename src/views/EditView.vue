<template lang="">
    <div class="w-50 m-auto">
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Username</span>
            <input type="text" class="form-control" placeholder="Username" v-model="data.username">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">First name</span>
            <input type="text" class="form-control" placeholder="First name" v-model="data.fname">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Last name</span>
            <input type="text" class="form-control" placeholder="Last name" v-model="data.lname">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Passsword</span>
            <input type="text" class="form-control" placeholder="Passsword" v-model="data.password">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Confrim password</span>
            <input type="text" class="form-control" placeholder="Confrim password" v-model="data.confirmPassword">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Img</span>
            <input type="text" class="form-control" placeholder="Link Address Img" v-model="data.avatar">
        </div>
        <div class="btn btn-primary" @click="submit" >submit</div>
    </div>
</template>
<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute()
    const data = ref({
        username : '',
        fname : '',
        lname : '',
        password : '',
        confirmPassword : '',
        avatar : '',
    })

    const getData = async () => {
        await axios.get(`${import.meta.env.VITE_API}/user/${route.params.id}`)
        .then((res)=>{
            data.value.username = res.data[0].username
            data.value.fname = res.data[0].fname
            data.value.lname = res.data[0].lname
            data.value.avatar = res.data[0].avatar
            data.value.password = res.data[0].password
            data.value.confirmPassword = res.data[0].password
        }).catch((err)=>{
            alert(err)
        })
    }

    const updatedUser = async () => {
        await axios.put(`${import.meta.env.VITE_API}/user`,{
            "fname" : data.value.fname ,
            "lname" : data.value.lname ,
            "username" : data.value.username ,
            "password" : data.value.password ,
            "avatar" : data.value.avatar ,
            "id" : route.params.id
        }).catch((err)=>{
            alert(err)
        })
    }

    const submit = async () => {
        if( data.value.password == data.value.confirmPassword){
            await updatedUser()
            await alert(" User created successfully ")
            await router.push('/')
        } else {
            alert(" Passwords don't match ")
            data.value.password = ''
            data.value.confirmPassword = ''
        }
    }

    getData()
</script>
<style lang="">
    
</style>