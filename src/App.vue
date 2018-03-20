<template>
<div>
<vhead ></vhead>
 <div class="tab">
   <router-link to="/vgoods">商品</router-link>
   <router-link to="/vratings">评价</router-link>
   <router-link to="/vseller">商家</router-link>
  
 </div>
 
 <div>
    <router-view></router-view>
 </div>
</div>

</template>

<script>
import vhead from './components/vheader/vhead';

export default {
  components:{
    vhead
  }
}

</script>
<style lang="scss" scoped>
@import "./common/style/minxi.scss";
.tab{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  line-height: 40px;
  a{
    text-decoration: none;
    display: block;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
