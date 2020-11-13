<template>
  <div id="app">
    <nav>
      <router-link to="/home">首页</router-link>
      <router-link to="/list">商品列表</router-link>
      <router-link to="/cart">购物车</router-link>
    </nav>
    <div>
        <keep-alive>
      <router-view></router-view>
       </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
nav a{
  text-decoration: none;
  margin: 0 10px;
}
.router-link-active{
  color: red;
}
</style>
