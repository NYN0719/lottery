<template>
  <div class="lotteryHall">
    <header>
      <div>
        <p style="margin-top:0.2rem;">上期开奖</p>
        <p>136</p>
      </div>
      <div>
        <p style="margin-top:0.2rem;">距 01 期截止</p>
      
        <p>{{stopTimeM}}:{{stopTimeS}}</p>
      </div>
    </header>
    <div class="content_hk">
      <ul class="change_hk">
        <li @click="tabs = true" :class="tabs==true?'abc':''">
          选号          
        </li>
        <li @click="tabs = false" :class="tabs==true?'':'abc'">
           走势图          
        </li>
      </ul>
      
      <!-- 选号 -->
      <div class="tainer_hk" v-show="tabs">
        <div class="check_hk">
          <div class="rules_hk">
            <div>
              <span @click="palyStyle=!palyStyle">
                玩法：
                <i>{{play_data[play_index]}}</i> 
              </span>
            </div>
            <ul class="playListType" v-show="palyStyle">
              <li v-for="(i,idx) in play_data" :key="idx" @click="check_list(i,idx)">{{i}}</li>
            </ul>
            <div>
              <router-link to="/rule">
                  ?
              </router-link>
            </div>
          </div>
          <div class="checkType_hk" style="margin-left:0.3rem;line-height:0.6rem;color:#48B892;">
            <span>{{play_data[play_index]}}</span>
            猜开奖号码相加的和
          </div>
          <div class="playList_hk">
            <!-- 和值 -->
            <div
              v-if="play_index==0"
              v-for="(and,idx) in andValue"
              :key="idx"
              @click.prevent="heightLinght(and,(idx+1),$event)"
              :class="index_action == idx?'active_bor_bkd_clo':''"
            >
              <div>{{and.num}}</div>
              <div>奖励{{and.award}}积分</div>
            </div>
            <!-- 三同号 -->
            <div
              v-if="play_index==1"
              v-for="(and,idx) in threeAlike"
              :key="idx"
              @click="heightLinght(and,(idx+1),$event)"
              :class="index_action == idx?'active_bor_bkd_clo':''"
            >
              <div>{{and.num}}</div>
              <div>奖励{{and.award}}积分</div>
            </div>
            <!-- 二同号 -->
            <div
              v-if="play_index==2"
              v-for="(and,idx) in twoAlike[0].data"
              :key="idx"
              @click="heightLinght(and,(idx+1),$event)"
              :class="index_action == idx?'active_bor_bkd_clo':''"
            >
              <div>{{and.num}}</div>
              <div>奖励{{and.award}}积分</div>
            </div>
            <!-- 三不同 -->
            <div
              v-if="play_index==3"
              v-for="(and,idx) in twoAlike[1].data"
              :key="idx"
              @click="heightLinght(and,(idx+1),$event)"
              :class="index_action == idx?'active_bor_bkd_clo':''"
            >
              <div>{{and.num}}</div>
              <div>奖励{{and.award}}积分</div>
            </div>
            <!--二不同 -->
            <div
              v-if="play_index==4"
              v-for="(and,idx) in twoAlike[2].data"
              :key="idx"
              @click="heightLinght(and,(idx+1),$event)"
              :class="index_action == idx?'active_bor_bkd_clo':''"
            >
              <div>{{and.num}}</div>
              <div>奖励{{and.award}}积分</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 走势图 -->
      <div class="goList" v-show="!tabs">
        <div class="goListHeader">
          <table>
            <thead >
              <tr>
                <th>期次</th>
                <th>开奖</th>
                <th>大小</th>
                <th>单双</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="goListTainer">

          
          <table>
            <thead>
              <tr v-for="i in 30" :key="i" :style="{backgroundColor:(i%2)!=0?'green':''}">
                <th>{{i}}期</th>
                <th>123</th>
                <th>小</th>
                <th>双</th>
                <th>{{Math.ceil(Math.random()*6)}}</th>
                <th>{{Math.ceil(Math.random()*6)}}</th>
                <th>{{Math.ceil(Math.random()*6)}}</th>
                <th>{{Math.ceil(Math.random()*6)}}</th>
                <th>{{Math.ceil(Math.random()*6)}}</th>
                <th>{{Math.ceil(Math.random()*6)}}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <div class="bottom_hk">
      <div>
        共 {{click_count}} 注
        <span>0 模拟金</span>
      </div>
      <div @click="al">
        确定
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      click_count: 0,
      click_total: 0,
      play_index: 0,
      play_data: ["和值", "三同号", "二同号", "三不同", "二不同"],
      play_rules: [
        "猜开奖号码相加的和",
        ["三同号", "三同号通选", "猜中豹子号(三个相同号)"],
        [
          "二同号",
          "选择同号和不同号的组合，奖励80积分",
          "猜开奖中的2个指定的相同号码，奖励15积分"
        ],
        [
          "三不同号",
          "三连号",
          "猜开奖的三个不同号码，奖励40积分",
          "123,234,345,456，任一开出即中10积分"
        ],
        ["二不同号", "猜开奖中的2个指定的不同号码，奖励8积分"]
      ],
      tabs: true,
      index_action: null,
      andValue: [
        { num: "4", award: "80" },
        { num: "5", award: "40" },
        { num: "6", award: "25" },
        { num: "7", award: "16" },
        { num: "8", award: "12" },
        { num: "9", award: "10" },
        { num: "10", award: "9" },
        { num: "11", award: "9" },
        { num: "12", award: "10" },
        { num: "13", award: "12" },
        { num: "14", award: "16" },
        { num: "15", award: "25" },
        { num: "16", award: "40" },
        { num: "17", award: "80" }
      ],
      threeAlike: [
        { num: "111", award: "240" },
        { num: "222", award: "240" },
        { num: "333", award: "240" },
        { num: "444", award: "240" },
        { num: "555", award: "240" },
        { num: "666", award: "240" }
      ],
      twoAlike: [
        {
          radio: "1",
          data: [
            { num: "11", award: "240" },
            { num: "22", award: "240" },
            { num: "33", award: "240" },
            { num: "44", award: "240" },
            { num: "55", award: "240" },
            { num: "66", award: "240" }
          ]
        },
        {
          radio: "2",
          data: [
            { num: "1", award: "240" },
            { num: "2", award: "240" },
            { num: "3", award: "240" },
            { num: "4", award: "240" },
            { num: "5", award: "240" },
            { num: "6", award: "240" }
          ]
        },
        {
          radio: "3",
          data: [
            { num: "11*", award: "240" },
            { num: "22*", award: "240" },
            { num: "33*", award: "240" },
            { num: "44*", award: "240" },
            { num: "55*", award: "240" },
            { num: "66*", award: "240" }
          ]
        }
      ],
      palyStyle: false,
      stopTimeS: 0,
      stopTimeM: 10,
      timer:null
    };
  },
  created() {
    this.add()
    // setInterval(() => {
    //   this.stopTimeS == 0 ? this.stopTimeS = 59 : this.stopTimeS --
    // }, 1000);
  },
  methods: {
    al(){
      alert('至少选择一注选号')
    },
    add() {
      var _this = this;
      var timer = window.setInterval(function() {
        if (_this.stopTimeS === 0 && _this.stopTimeM !== 0) {
          _this.stopTimeS = 59;
          _this.stopTimeM -= 1;
        } else if (_this.stopTimeM === 0 && _this.stopTimeS === 0) {
          _this.stopTimeS = 0;
          window.clearInterval(timer);
        } else {
          _this.stopTimeS -= 1;
        }
      }, 1000);
    },
    check_list(i, idx) {
      this.play_index = idx;
      this.palyStyle = false;
    },
    heightLinght(item, idx, evt) {
      console.log(evt)
      this.click_count++;
      if (evt.path[1].className == "") {
        evt.path[1].className = "active_bor_bkd_clo";
      } else {
        evt.path[1].className = "";
      }
    }
  }
};

</script>

<style scoped>
  .abc{
    border-bottom:#ffab00 solid 2px;
  }
.lotteryHall {
  height: 100%;
  width: 100%;
  font-size: 0.22rem;
}
header {
  width: 100%;
  height: 0.86rem;
  background-color: #08533c;
  display: flex;
  color: white;
  font-size: 0.2rem;
}
header > div {
  flex: 1;
  text-align: center;
  border-right: 0.01rem solid #000;
}
.content_hk {
  background-color: #077552;
  height: 10.5rem;
}
.content_hk .change_hk {
  line-height: 0.3rem;
  background-color: rgb(22, 153, 103);
  display: flex;
}
.content_hk .change_hk > li {
  flex: 1;
  text-align: center;
  height: 0.6rem;
  color: #ffab00;
  line-height: 0.6rem;
  font-size: 0.3rem;
}
.tainer_hk {
  min-height: 4rem;
  padding-top: 0.1rem;
  /* height: 0.4rem; */
}
.tainer_hk .playListType {
  width: 1.25rem;
  line-height: 0.6rem;
  position: absolute;
  top: 0;
  left: 0.3rem;
  background-color: white;
  z-index: 66;
  text-align: center;
}
.rules_hk {
  display: flex;
  position: relative;
}
.rules_hk > div {
  flex: 9;
}
.rules_hk > div:first-of-type {
  margin-left: 0.3rem;
}
.rules_hk > div:first-of-type span {
  padding: 0.12rem 0.16rem;
  text-align: center;
  display: inline-block;
  background-color: rgb(22, 153, 103);
  color: white;
  font-size: 0.22rem;
}
.rules_hk > div:last-of-type {
  flex: 1;
  text-align: center;
  /* color: rgb(22, 153, 103);
    border: 0.01rem solid rgb(22, 153, 103);
    border-radius: 50%; */
}
.playList_hk {
  padding: 0 0.4rem;
  display: flex;
  flex-wrap: wrap;
}
.check_hk {
  position: relative;
}
.check_hk .playList_hk > div {
  width: 1.7rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.22rem;
  color: white;
  background-color: #08533c;
  border: 0.02rem solid #229474;
  margin: 0.08rem;
}
.check_hk .playList_hk > div:last-child{
  margin-left: 0.4rem;
}
.check_hk .playList_hk > div:nth-last-child(2){
  margin-left: 0.9rem;
}
/*  边框 背景色 颜色*/
.active_bor_bkd_clo {
  border-color: #cc9830 !important;
  color: #cc9830 !important;
  background-color: rgba(#cc9830, #cc9830, #cc9830, 0.3) !important;
}
.goList{
  height: 9rem;
  overflow-y: scroll;  
  /* overflow: hidden; */
}
.goList table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;
  color: #48b892;
}
.goList table tr > th {
  border-bottom: 0.01rem solid #00422c;
  border-right: 0.01rem solid #00422c;
  background-color: #0b5f45;
  width: 10%;
  height: 0.6rem;
  font-size: 0.23rem;
}
.goList .goListTainer table tr:nth-child(odd) th {
  background-color: #08533c;
}
.bottom_hk {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: green;
  display: flex;
}
.bottom_hk > div {
  flex: 2;
  text-align: center;
  line-height: 0.8rem;
  background-color: #b71c1c !important;
  color: white;
  font-size: 0.3rem;
}
.bottom_hk > div:first-of-type {
  flex: 8;
  background-color: #212121 !important;
}
.bottom_hk > div:first-of-type span {
  color: #ffc107 !important;
}
</style>