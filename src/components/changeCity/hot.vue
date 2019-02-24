<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for='item in hotList' :key='item.name'>{{item.name}}</dd>
        </dl>
    </div>
</template>

<script>
export default{
    props:[
        'title',
        'hotList'
    ]
}
</script>

<style lang='scss'>
    @import '@/assets/css/changecity/hot.scss';
</style>