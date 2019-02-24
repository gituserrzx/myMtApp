<template>
    <div class="m-menu">
        <dl class='nav' @mouseleave="menuLeave" >
            <dt>全部分类</dt>
            <dd v-for='(v,i) in menuList' :key='i' @mouseenter="menuEnter(v)" >
                <i :class='v.type'></i>
                <span>{{v.name}}</span>
                <span class='arrow'></span>
            </dd>
        </dl>
            <dl class="detail" v-if='curList' @mouseenter="detailEnter" @mouseleave="detailLeave" >
                <template  v-for='(item,index) in curList.items'   >
                <h4 :key='index'>{{item.title}}</h4>
                <router-link tag='dd' to='/' v-for='(item,i) in item.items' :key="item+'_'+i">{{item}}</router-link>
                 </template>  
            </dl>
       
         
    </div>
</template>

<script>
import axios from '@/api/index.js'
export default{
     created (){
        axios.getMenuList().then(res => {
            this.menuList = res.data.data
        })
    },
    data(){
        return {
            curList:'',
            menuList:[]
        }
    },
    methods:{
        menuEnter(v){
            this.curList = v;
        },
        menuLeave(){
           this.timer = setTimeout(() => {
                this.curList = null
            },200)

        },
        detailEnter(item){
            clearTimeout(this.timer)
        },
        detailLeave(){
            this.curList = null;
        }
    },

}
</script>

<style lang='scss'>
    @import '@/assets/css/index/index.scss';
</style>