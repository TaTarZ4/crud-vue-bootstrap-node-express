<template lang="">
    <div class="w-50 m-auto">
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Username</span>
            <input type="text" class="form-control" placeholder="Username" v-model="addUser.username">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">First name</span>
            <input type="text" class="form-control" placeholder="First name" v-model="addUser.fname">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Last name</span>
            <input type="text" class="form-control" placeholder="Last name" v-model="addUser.lname">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Passsword</span>
            <input type="text" class="form-control" placeholder="Passsword" v-model="addUser.password">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Confrim password</span>
            <input type="text" class="form-control" placeholder="Confrim password" v-model="addUser.confirmPassword">
        </div>
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text">Img</span>
            <input type="text" class="form-control" placeholder="Link Address Img" v-model="addUser.avatar">
        </div>
        <div class="btn btn-primary" @click="submit" >submit</div>
    </div>
</template>
<script setup>
    import router from '@/router';
    import axios, { Axios } from 'axios';
    import { ref } from 'vue'

    const addUser = ref({
        fname: '',
        lname: '',
        username: '',
        password: '',
        confirmPassword: '',
        avatar: '',
    })

    const insert_user = async () => {
        await axios.post(`${import.meta.env.VITE_API}/user`,{
            "fname" : addUser.value.fname ,
            "lname" : addUser.value.lname ,
            "username" : addUser.value.username ,
            "password" : addUser.value.password ,
            "avatar" : addUser.value.avatar ,
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            alert(err)
        })
    }

    const submit = async () => {
        if( addUser.value.password == addUser.value.confirmPassword){
            await insert_user()
            await alert(" User created successfully ")
            await router.push('/')
        } else {
            alert(" Passwords don't match ")
            addUser.value.password = ''
            addUser.value.confirmPassword = ''
        }
    }
</script>
<style lang="">
    
</style>