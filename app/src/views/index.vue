<template>
    <div style="min-height:100vh; background: #077552;">
        <div class="top">
            <span  class="x">
            </span>
             <h4><span>{{time}}</span>好！朋友 </h4>
            <router-link to="/login">
                    <div class="item_img">
                         <img :src="this.url" alt="">
                    </div>
            </router-link>
             <div class="user">Nyn</div>
             <ul class="mnj">
                <li>0模拟金</li>
                <li>0积分 
                    <router-link to='/jifen'>
                            兑换
                    </router-link>
                </li>
             </ul>
        </div>
        <div class="bottom" style="min-height:auto;">
          
                <div v-for="(i,index) in arr" class="aaa" :key="index">
                <router-link to="/lotteryHall">
                    <div class="item">
                        
                        <img :src="i.type?img1:img2" alt="">
                        <p class="tlt">{{i.title}}</p>
                        
                    </div>
                    <md-button class="ani md-icon-button md-accent">
                            
                        </md-button>
                </router-link>
                </div>
           
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                tiem:'',
                url:'',
                hour:0,
                img1:'http://haoxg.xyz/lottery/img/happyk3.ea0489f1.png',
                img2:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',
                arr:[
                    {   
                        type:true,
                        title:'河北快三',
                    },
                    {
                        type:false,
                        
                        title:'安徽快三',
                    },
                    {
                        type:false,
                        title:'江苏快三',
                    },
                    {
                        type:false,
                        title:'江西快三',
                    },
                    {
                        type:false,
                        title:'内蒙古快三',
                    },
                    {
                        type:false,
                        title:'吉林快三',
                    },
                    {
                        type:false,
                        title:'湖北快三',
                    },
                    {
                        type:false,
                        title:'贵州快三',
                    },
                    {
                        type:false,
                        title:'广西快三',
                    },
                    {
                        type:false,
                        title:'甘肃快三',
                    },
                    {
                        type:false,
                        title:'福建快三',
                    },
                    {

                        type:false,
                        title:'北京快三',
                    },
                    {
                        type:false,
                        title:'上海快三',
                    },
                    
                ]
            }
        },
        created(){
            this.url=localStorage.imglink
            var tim = new Date()
			this.hour = tim.getHours()
			if (this.hour > 6 && this.hour <=10) {
				this.time = '上午'
			}else if(this.hour > 10 && this.hour <= 14){
				this.time = '中午'
			}else if(this.hour > 14 && this.hour <= 18){
				this.time = '下午'
			}else if(this.hour > 18 && this.hour <= 24){
				this.time = '晚上'
			}else{
				this.time = '早晨'
			}
        },
    }
</script>









<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .tlt{
        font-size: 0.20rem;
        color: #48B892;
        
        padding:0.2rem 0;
    }
    .item{
        height: 1.2rem;
    }
    .aaa{
        float: left;
        width: 25%;
        position: relative;
        text-align: center;
        margin-top:0.2rem; 
    }
    .md-accent{
        position: absolute;
        left: 50%;
        top:0;
        margin-left: -0.28rem;
        width:0.56rem;
        height: 0.56rem; 
        border-radius:50%; 
    }
    .item img{
        width: 0.56rem;
        height: 0.56rem;
        border-radius:50%; 
    }
    .bottom{
        width: 100%;
        height: 4rem;
        background: #077552;
    }
    .mnj{
        display: flex;
        margin:0 20px;
        background:  rgb(7, 74, 53);
    }
    .mnj li{
        flex: 1;
        font-size: 0.20rem;
        list-style: none;
        text-align: center;
        line-height: 0.68rem;
        color: #FFab00;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    .user{
        text-align: center;
        font-size: 0.26rem;
        color: #fff;
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .top{
        width: 100%;
        height: 2.5rem;
        background: rgb(8, 83, 60);
    }
    .x{
        float: right;
        font-size: 0.20rem;
        position: absolute;
        font-weight: 100;

        color: #fff;
        right: 0;
        line-height: 0.68rem;
    }
       h4{
        font-size: 0.30rem;
        text-align: center;
        /* margin-left: 0.2rem; */
        line-height: 0.6rem;
        color: #f5f5f5!important;
        padding: 0.08rem 0;
    }
    .item_img{
        width: 0.6rem;
        /* padding: 0.1rem 0; */
        height: 0.6rem;
       margin: 0 auto;
        background:#ccc;
        position: relative;
        border-radius:50%; 
        font-size: 0;
    }
    .item_img img{
        width: 100%;
        height: 100%;
        border-radius:50%; 
}
</style>