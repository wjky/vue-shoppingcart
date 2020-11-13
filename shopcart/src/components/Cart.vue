<template>
  <div>
    <h2>购物车</h2>
    <table border="1">
      <tr>
        <th>商品</th>
        <th>数量</th>
        <th>单价</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in cartdata" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count * item.price }}</td>
        <td>
          <button @click="reduce(item)">-</button>
          <button @click="add(item)">+</button>
        </td>
      </tr>
    </table>
    <p>共计：{{ gongji }}</p>
  </div>
</template>

<script>
import { mapState,mapGetters} from "vuex";
export default {
  computed: {
    ...mapState({
      cartdata: "cart",
    }),
   /*  gongji() {
      return this.$store.getters.filterCount
    }, */
    ...mapGetters({
      gongji:'filterCount'
    })
  },
  methods: {
    add(item) {
      this.$store.commit("onAdd", item);
    },
    reduce(item) {
      this.$store.commit("onReduce", item);
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
table th,
table td {
  padding: 5px 10px;
}
button {
  margin: 0 5px;
}
</style>