<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
        <el-col :span='3' class="left">
            <router-link to="/">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </router-link>
        </el-col>
        <el-col :span="15" class="center">
            <div class="wrapper">
            <el-input type="text" placeholder="搜索商家或地点" v-model='searchWord' @input='input' @blur="blur" @focus='focus'></el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
            <dl class="hotPlace" v-if="isHotPlace">
                <dt>热门搜索</dt>
                <dd><router-link v-for='item in hotPlaceList' :key="item" :to='{name:"goodsList",params:{name:item}}'>{{item}}</router-link></dd>
            </dl>
            <dl class="searchList" v-if="isSearchList">
                <dd v-for='(item,index) in searchList' :key="index"><router-link :to='{name:"goodsList",params:{name:item}}'>{{item}}</router-link></dd>
            </dl>
            </div>
            <p class="suggest">
                <a href="#" v-for='item in suggestList' :key='item'>{{item}}</a>
            </p>
        </el-col>
    </el-row>
    </div>
</template>

<script>
import  axios from "@/api/index.js"
export default{
    data(){
        return {
            searchWord: '',
            isFocus:false,
            hotPlaceList: [],
            suggestList:[],
            searchList:[]
        }
    },
    computed:{
        isHotPlace(){
           return this.isFocus && !this.searchWord
        },
        isSearchList(){
           return  this.isFocus && this.searchWord
        }
    },
    methods: {
        focus(){
            this.isFocus = true;
        },
        blur(){
            setTimeout(() => this.isFocus = false,200)
        },
        input(){
            axios.getSearchList().then(res => {
                // console.log(res.data.data.list)
                const list = res.data.data.list;
                this.searchList = list.filter((item) => {
                    return item.includes(this.searchWord)
                })
            })
        }
    },
    created(){
        axios.getHotWord().then(res => {
            if(res.data.data.length > 4){
                this.hotPlaceList = res.data.data.slice(0,4)
            }
            this.suggestList = res.data.data
        })
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
    @import '@/assets/css/public/header/search.scss';
</style>