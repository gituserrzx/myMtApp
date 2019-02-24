<template>
  <div class="m-istyle">
    <dl @mouseover="over" v-for="item in navList" :key="item.title">
      <dt>{{item.title}}</dt>
      <dd
        :data-type="item.tab"
        :class="{active:kind == item.tab}"
        v-for="item in item.tabList"
        :key="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in list[kind]" :key="item.title">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
               <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- <div class="price-info" v-if='item.rentNum && item.priceInfo.currentPrice'>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.priceInfo.currentPrice}}</span>
              </span>
              <span class="old-price">门市价¥{{item.priceInfo.oldPrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div> -->
            <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                <span class="price-symbol numfont"></span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div> -->
              <!-- <div class="price-info" v-else-if="avg_price && units">
                <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.priceInfo.avg_price}}</span>
                <span class='units'>/{{item.priceInfo.units}}</span>
              </span> -->
            <!-- </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/api/index.js'
export default {
  created(){
    axios.getContainerContent().then(res => {
      console.log(res)
       this.list = res.data.data;
    })
  },
  data() {
    return {
      kind: "all",
      list: {}
    };
  },
  props: ["navList"],
  methods: {
    over(e) {
      let dom = e.target;
      let domName = dom.tagName.toLowerCase();
      if (domName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");

    }
  }
};
</script>

<style lang='scss' >
@import "@/assets/css/index/artistic.scss";
</style>