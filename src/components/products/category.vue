<template>
  <div class="m-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in categoryList" :key="item.type">
        <m-select :list="item.subList" :name="item.title"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in areaList" :key="index">
        <m-select :list="item.subList" :name="item.title"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import axios from '@/api/index.js'
export default {
  created(){
    axios.getCategoryList().then(res => {
      this.areaList = res.data.data;
    })
    axios.getCategoryList().then(res => {
      console.log( res.data.data)
      this.categoryList = res.data.data;
    })
  },
  components: {
    MSelect
  },
  data() {
    return {
      categoryList: [
      ],
      areaList: [
      ]
    };
  }
};
</script>

<style >
</style>
