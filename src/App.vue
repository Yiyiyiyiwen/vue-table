<template>
  <div id="app">
    <router-link to="/">任务1</router-link>
    <router-link to="/layer">任务2</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
import Basetable from "./Basetable"
import Layer from "./Layer"
export default {
  name: "app",
  data(){
    return{

    }
  },
  components:{
    Basetable,Layer
  }
}
</script>

<style>
body{
  padding: 50px 5px;
}
</style>
