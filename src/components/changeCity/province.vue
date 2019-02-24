<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
    :changeTitle ='province'
      title="省份"
      :list="provinceList"
      @changeTit ='changeProvince'
      @changeactive="changePActive"
      :showList="provinceFlag"
      :disabled='provinceDisabled'
    />
    <m-select title="城市" 
              :changeTitle='city'
              :list="cityList" 
              @changeTit ='changeCity'
              @changeactive="changeCActive" 
              :showList="cityFlag"
              :disabled='cityDisabled'
              :isChange='isChange'
              />
    <span>直接搜索：</span>
   <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :loading ='loading'
     :remote-method="remoteMethod"
   >
    <el-option
      v-for="item in selectList"
      :key="item"
      :value='item'
      :label='item'
      >
    </el-option>
  </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/select.vue";
import axios from '@/api/index.js'
export default {
  created(){
    // axios.getCityList().then(res => {
    //   const cityList = res.data.data;
    //   for(var prop in cityList){
    //     this.cityList.push(cityList[prop].name)
    //   }
    // })
     axios.getProvinceList().then(res => {
      const provinceList = res.data.data;
      let col = Math.ceil(provinceList.length / 12)
      for(let i = 0;i < col; i++){
        this.provinceList[i] = provinceList.slice(i*12, i*12+12)
      }
    })

  },
  data() {
    return {
        searchWord:'',
        provinceList: [],
        cityList: [],
        provinceFlag: false,
        cityFlag: false,
        selectList:["北京", "合肥", "上海", "深圳", "广州", "天津", "蚌埠"],
        loading:false,
        city: '城市',
        province: '省份',
        cityDisabled: true,
        provinceDisabled: false,
        isChange: true
          };
  },
  methods: {
    changePActive(flag) {
      this.provinceFlag = flag;
      if (flag) {
        this.cityFlag = false;
      }
    },
    changeCActive(flag) {
      this.cityFlag = flag;
      if (flag) {
        this.provinceFlag = false;
      }
    },
    changeCity(value){
        this.city = value.name;
        this.$store.dispatch('setPosition',value)
        this.$router.push({name:'index'})
    },
    changeProvince(value){
        this.province = value.provinceName;
        let col = Math.ceil(value.cityInfoList.length / 12)
        for(let i = 0;i < col; i++){
        this.cityList[i] = value.cityInfoList.slice(i*12, i*12+12)
      }
           this.isChange = false;

    },
    remoteMethod(query){

      }

  },
  components: {
    MSelect
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>