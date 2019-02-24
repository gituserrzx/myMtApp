<template>
    <div >
        <el-row>
            <nav-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>

<script>
import navBar from '@/components/header/navBar'
import searchBar from '@/components/header/searchBar'
export default{
    components:{
        navBar,
        searchBar
    }
}
</script>

<style lang='scss'>
</style>