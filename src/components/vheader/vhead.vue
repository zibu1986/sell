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
                <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                <span class="text">{{seller.supports[0].description}}</span>
                <div v-if="seller.supports" class="support-count">
                        <span class="count">{{seller.supports.length}}</span>
                        <i class="icon-keyboard_arrow_right"></i>
                </div>

        </div>

    </div>
   

  </div>
</template>

<script>
export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.classMap=['decrease',"discount","guarantee","invoice","special"]
    var that = this;
    this.$axios
      .get("http://localhost:8080/api/seller")
      .then(function(response) {
        that.seller = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped >
@import "../../common/style/base.scss";

.header {
  color: #fff;
  background: #000;
  font-size: 0;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    display: inline-block;
    .avatar {
      img{border-radius: 2px;}
    }
  }
  .content {
    display: inline-block;
    font-size: 14px;
    .title {
      margin: 2px 0 8px 0;
      .brand {
        display: inline-block;
        width: 30px;
        height: 18px;
        vertical-align: top;
        @include bg-img("./brand");
        background-size: 30px 18px;
        background-repeat: no-repeat;
      }
      .name {
        margin-left: 6px;
      }
    }
    .description{
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
    }
    .support{
        position: relative;
        .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            vertical-align: top;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease{@include bg-img("./decrease_1");}
            &.discount{@include bg-img("./discount_1");}
            &.guarantee{@include bg-img("./guarantee_1");}
            &.invoice{@include bg-img("./invoice_1");}
            &.special{@include bg-img("./special_1");}
        }
        .text{
            line-height: 12px;
            vertical-align: top;
            font-size: 10px;
            }
        .support-count{
            position: absolute;
            right: -72px;
            bottom:18px;
            background:#888;
            border-radius: 16px;
            padding: 0 16px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            .count{
                font-size:10px;
            }
        }
    }
  }
}
</style>