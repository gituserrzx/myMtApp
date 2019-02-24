<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span='10'>
            <geo />
        </el-col>
        <el-col :span='14'>
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
import MNav from '@/components/header/nav'
import Geo from '@/components/header/geo'
export default{
    components:{
        MNav,
        Geo
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss";
</style>