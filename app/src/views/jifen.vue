<template>
    <div class="jifen">
        <div class="banner">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695339701&di=e614a2ae7b5d3fd39738839e46e534ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8415a77c3a4a80120a12372925c.jpg%402o.jpg">
        </div>
        <ul class="nav">
            <li @click="duihuan" :class="[type?'bor':'']">兑换区</li>
            <li @click="gouwu" :class="[!type?'bor':'']">购物区</li>
        </ul>
        <div class="zyl" style="width:6.4rem;position:relative;height:10rem;overflow: hidden;">
           <div class="zyl1" @touchstart="touchstart" @touchmove="touchmove" style="width: 12.8rem;position: absolute;left: 0;">
                <div class="content"style="float: left;width:6.4rem;" >
                        <div>
                            <div>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077945538&di=003d3de1479ae95ab6131ca11d042c4a&imgtype=0&src=http%3A%2F%2Fa.vpimg3.com%2Fupload%2Fmerchandise%2Fpdcvis%2F146767%2F2017%2F1104%2F115%2F88257c95-7205-4390-8eab-635fc8384069_t.jpg" class="kai1">
                            </div>
                            <p>iphoneX (尊贵铂金)</p>
                            <p>积分：999</p>
                            <p>市场参考价：9999.00</p>
                        </div>
                        <div>
                            <div class="yidong">
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077790483&di=716de166c55fe352462ca970809e926f&imgtype=0&src=http%3A%2F%2Fi1.hexunimg.cn%2F2016-03-15%2F182772684.jpg" class="ka">
                               
                            </div>
                                <p>话费充值卡</p>
                                <p>积分：100.00</p>
                                <p>市场参考价：9999.00</p>
                        </div>
            </div>
            <div class="content1"style="float: right; width:6.4rem;">
                        <div class="yan">
                            <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"></div>
                            <p>烟斗（小号）</p>
                            <p>积分：9999</p>
                            <p>市场参考价：9999.00</p>
                        </div>
                        <div class="yan">
                            <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"></div>
                            <p>烟斗（中号）</p>
                            <p>积分：9999</p>
                            <p>市场参考价：9999.00</p>
                        </div>
                        <div class="yan">
                            <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"></div>
                            <p>烟斗（大号）</p>
                            <p>积分：9999</p>
                            <p>市场参考价：9999.00</p>
                        </div>
             </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            type:true,
              startPointX: 0,
              changePointX: 0,
              showIndex: 0,
              imgSrc: ["1", "2"]
        }
    },
         methods: {
    duihuan() {
      this.type = true;
      var zyl1 = document.querySelector(".zyl1");
      zyl1.style.left = 0 + "rem";
      zyl1.style.transition = 0.55 + "s";
    },
gouwu() {
      this.type = false;
      var zyl1 = document.querySelector(".zyl1");
        zyl1.style.transition = 0.55 + "s";
      zyl1.style.left = -6.4 + "rem";
    },
    show(index) {
      this.changePointX = this.startPointX;
      var zyl1 = document.querySelector(".zyl1");
      zyl1.style.transition = 0.25 + "s";
      zyl1.style.left = `-${6.4 * index}rem`;
    },
    touchstart(e) {
      this.startPointX = e.changedTouches[0].pageX;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      let leftSlide = this.startPointX - currPointX;
      if (leftSlide && this.showIndex < this.imgSrc.length - 1) {
        this.show(++this.showIndex);
        this.type = false;
      } else if (leftSlide < -30 && this.showIndex > 0) {
        this.show(--this.showIndex);
        this.type = true;
      }
    }
  }
    }
</script>

<style scoped>
    .jifen{
        width: 100%;
        height: auto;
    }
    .banner{
        width: 100%;
        height: 1.8rem;
        background: pink;
    }
    .banner img{
        width: 100%;
        height: 100%; 
    }
    .bor{
        border-bottom: 1px solid red;
    }
    .nav{
        width: 100%;
        height:0.77rem;
        background:#ddd;
        display: flex;
    }
    .nav li{
        flex: 1;
        text-align: center;
        line-height: 0.77rem;
        font-size: 0.24rem;
    }
    .content{
        width: 100%;
        height: 4.3rem;
        display: flex;
        transition: 0.35s;
        /* display: none; */
        /* background: pink; */
    }
    .content div{
        flex: 1;
        width: 100%;
        height: 4.3rem;
        text-align: center;
        /* background: yellowgreen; */
        margin-top:0.2rem;
    }
    .content div div{
        height: 2.4rem;
        width: 100%;
        /* background: pink; */
        padding-top:0.2rem;
        
    }
    .kai1{
        width: 1.94rem;
        height: 2.2rem;
       
    }
    .content div p{
        font-size: 0.22rem;
        margin-top:0.1rem;
        color: rgb(2, 47, 2);
    }
    .ka{
        width: 1.89rem;
        height: 1.6rem;
        padding-top:0.5rem;
    }
    div.yidong{
         width: 1.94rem;
        height: 2.2rem;   
    }
    .content1{
        width: 100%;
        height: 10rem;
        transition: .35s;
        /* background: pink; */
    }
    .yan{
        width: 50%;
        height: 4rem;
        float: left;
        text-align: center;
        /* background: yellow; */
    }
    .yan div{
        width: 100%;
        height: 2rem;
        text-align: center;
    }
    .yan div img{
        width: 2rem;
        height: 2rem;
    }
    .yan p{
         font-size: 0.22rem;
        margin-top:0.1rem;
        color: rgb(2, 47, 2);
    }
</style>
