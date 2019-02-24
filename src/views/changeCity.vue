<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市：" :hotList="hotList"/>
    </el-row>
    <el-row>
      <hot title="最近访问：" :hotList="recentList"/>
    </el-row>
    <el-row>
      <category title="按拼音首字母选择"/>
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province";
import hot from "@/components/changeCity/hot";
import category from "@/components/changeCity/category";
import axios from "@/api/index.js";
export default {
  created() {
    axios.getRecentList().then(res => {
      this.recentList = res.data.data;
    });
    axios.getHotCityList().then(res => {
        this.hotList = res.data.data
    })
  },
  data() {
    return {
      hotList: [],
      recentList: []
    };
  },
  components: {
    province,
    hot,
    category
  }
};
</script>

<style lang='scss'>
</style>