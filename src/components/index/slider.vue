<template>
      <div class="slide">
    <span class="demonstration"></span>
    <el-carousel >
      <el-carousel-item v-for="item in imgList" :key="item.src">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default{
    data(){
        return{
            imgList:[{
                url: '/',
                src:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },
            {
                url: '/',
                src:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            },
             {
                url: '/',
                src:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
            }]
        }
    }
}
</script>

<style >

</style>