<template>
  <div class="m-products-list">
    <ul>
      <li
        :class='{"s-nav-active":item.active,"s-price": item.key == "s-price"}'
        v-for="item in navList"
        :key="item.name"
      >{{item.name}}</li>
    </ul>
    <el-row>
        <item v-for='item in recommendList' :key='item.key' :meta='item'/>
    </el-row>
  </div>
</template>

<script>
import item from './item.vue'
import axios from '@/api/index.js'
export default {
  created(){
      axios.getRecommendList().then(res => {
        const data = res.data.data;
        data.forEach(element => {
            element.score = Number(element.score)
        });
       this.recommendList = res.data.data
      })
    },
    components:{
        item
    },
  data() {
    return {
      navList: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          name: "价格排序",
          key: "s-price",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      recommendList: [
      ]
    };
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/products/list.scss";
</style>