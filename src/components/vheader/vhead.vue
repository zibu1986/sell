<template>
  <div class="header"> 
      <div class="content-wrapper">
          <div class="avatar">
              <img width="64" height="64" :src="seller.avatar" alt="">
          </div>
      </div>
    <div class="content">
        <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
        </div>
    <div class="bullentin-wrapper">
        
    </div>
    <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
    </div>

    <div v-if="seller.supports" class="support">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
    </div>

    </div>
      

  </div>
</template>

<script>
export default {
 data() {
    return{
      seller:{}
    }
  },
  created(){
    var that=this;
    this.$axios.get('http://localhost:8087/api/seller')
  .then(function (response) {
    that.seller= response.data.data;
    console.log(that.seller)
    
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
</script>

<style lang="scss" scoped>
.header{
    color: #fff;
    background: #000;  
    font-size: 0; 
    .content-wrapper
        {padding: 24px 12px 18px 24px;
        display: inline-block;
        .avatar{
        }

        }
        .content{
            display: inline-block;
            font-size: 14px;
        }
        

}
</style>