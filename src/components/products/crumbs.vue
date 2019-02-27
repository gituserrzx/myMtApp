<template>
    <div class="m-crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right" class='el-breadcrumb'>
        <el-breadcrumb-item >{{position.name}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{position.name}}{{$route.params.name}}</el-breadcrumb-item>
</el-breadcrumb>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
    computed: {
        ...mapState(['position'])
    }
}
</script>

<style >

</style>
