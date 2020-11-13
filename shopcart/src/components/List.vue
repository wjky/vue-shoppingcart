<template>
  <div>
      <h2>商品列表</h2>
        <ul>
            <li v-for="item in goods" :key="item.id">{{item.title}}--{{item.price}}
                <button @click="addcart(item)">添加商品</button>
            </li>

        </ul>
      <mycart></mycart>
  </div>
</template>

<script>
import mycart from '@/components/Cart.vue';
export default {
  components:{
      mycart
  },
  data() {
      return {
     goods:[
         {id:0,title:'HTML',price:100},
         {id:1,title:'CSS',price:200},
         {id:2,title:'VUE.JS',price:500},
       ],
      }
  },
  methods: {
    addcart(item){
      this.$store.commit('addlistcart',item)
    }
   },
}
</script>

<style>
  ul{
      list-style: none;
  }
  ul li{
      line-height: 30px;
  }
</style>