<template>
  <div class="choose-wrap"  @click='showWrap' v-document-click='documentClick'>
    <div :class="['choose',isChange?'disabled':'']"   >
      <span>{{changeTitle}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showList}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col" v-for="(item,index) in  list" :key="index">
           <template v-if='!disabled'>
            <span :class="{'mt-item':true,'active': value.provinceName == changeTitle}" v-for="(value,i) in item" :key='i' @click='changeTit(value)'>{{value.provinceName}}</span>  
              </template>
              <template v-else>
            <span :class="{'mt-item':true,'active': value.name == changeTitle}"  v-for="(value,i) in item" :key='i' @click='changeTit(value)'>{{value.name}}</span>
              </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // showList: false,
        }
    },
  props: ["title", "list","showList",'changeTitle','disabled','isChange'],
  methods:{
      showWrap(e){
          if(this.isChange){
              return false;
           }
          // this.showList = true;

            e.stopPropagation()
           this.$emit('changeactive', true )

      },
      documentClick(){
          // this.showList = false;
          this.$emit('changeactive', false )
      },
      changeTit(item){
        // this.documentClick()
        this.$emit('changeTit',item)
        setTimeout(()=>{
            this.$emit('changeactive', false )
      },0)

      }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>