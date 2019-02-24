<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location"></i>
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name:'changeCity'}">切換城市</router-link>
            [
            <router-link to='/' v-for='item in navList' :key='item.name'> {{item.name}} </router-link>

             <!-- <a href="#">安徽省</a> -->
             <!-- <a href="#">蚌埠市</a>
             <a href="#">五河县</a> -->
             ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name:'login'}">立即登录</router-link>
            <router-link class="register" :to="{name:'register'}">注册</router-link>
        </div>
    </div>
</template>

<script>
import  axios from '@/api/index.js'
export default{
    created(){
        axios.getPosition().then(res => {
            const position = res.data.data
            this.$store.dispatch('setPosition', position)
            this.navList = this.$store.state.position.nearCity
        })
    },
    watch:{
        '$store.state.position.nearCity':function() {
           return this.navList = this.$store.state.position.nearCity
        }
    },
    data(){
        return {
            navList:[]
        }
    }
}
</script>

<style >

</style>