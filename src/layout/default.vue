<template>
<div class="layout-default">
    <el-container>
    <el-header style="height:''">
        <my-header class='m-header'/>
    </el-header>
    <el-main style="height:''">
        <router-view />
    </el-main>
    <el-footer style="height:''">
        <my-footer />
    </el-footer>
  </el-container>
</div>
</template>

<script>
import MyHeader from '@/components/header/index';
import  MyFooter from '@/components/footer/index';
export default {
    components:{
          MyHeader,
          MyFooter
    }
}
</script>
<style lang="sass">
    @import '@/assets/css/public/layout.scss'
</style>
