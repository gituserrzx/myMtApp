<template>
    <div class='categroy'>
        <dl class='m-categroy' >
            <dt>{{title}}</dt>
            <dd v-for='item in list'  :key='item'>
                <a :href="'#city-'+item" >{{item}}</a>
            </dd>
        </dl>
        <dl class='m-categroy-section' v-for='(item,index) in cityGroup' :id="'city-'+ index" :key='index'>
            <dt>{{index}}</dt>
            <dd v-for='value in item'  :key='value.id' @click='changeCity(value)'><span>{{value.name}}</span> </dd>
        </dl>
    </div>
</template>

<script>
import axios from '@/api/index.js'
export default{
    props:['title'],
    data(){
        return {
            list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList:[],
            cityGroup: null
        }
    },
    created(){
        axios.getCityList().then(res => {
           const data = res.data.data;
             const obj = {};
        data.forEach((item) => {
            if (!obj[item.firstChar.toUpperCase()]){
                obj[item.firstChar.toUpperCase()] = []
            }
            obj[item.firstChar.toUpperCase()].push(item)
            this.cityGroup = obj
        })
        })
    //     var data = [{
    //     "id": 1,
    //     "name": "北京",
    //     "pinyin": "beijing",
    //     "acronym": "bj",
    //     "rank": "S",
    //     "firstChar": "b"
    // },
    // {
    //     "id": 10,
    //     "name": "上海",
    //     "pinyin": "shanghai",
    //     "acronym": "sh",
    //     "rank": "S",
    //     "firstChar": "s"
    // }]

    },
    methods:{
        changeCity(item){
            this.$store.dispatch('setPosition',item )
            this.$router.push({name: 'index'})
        }
    }
}
</script>

<style lang='scss'>
    @import '@/assets/css/changecity/categroy.scss';
</style>