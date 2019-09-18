<template>
    <div class="ly">
        <div class="box" style="padding: 0.2rem 0.15rem;">
            <h2>玩法规则</h2>
            <p>每期开出3个数字作为开奖号码，每个数字取值范围1-6（相当于摇3个骰子）。</p>
            <h2>奖励说明</h2>
            <table style="height:200px;border-left: 0.01rem solid  #ddd;">
                <tr v-for="(i,index) in arr" :key="index">
                    <td>{{i.a}}</td>
                    <td>{{i.b}}</td>
                    <td>{{i.c}}</td>
                </tr>
            </table>
            <h2>便捷返奖</h2>
            <p>奖励自动返还至用户账户中，可继续投注或者提现!</p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'ly',
    data() {
        return {
            arr:[
               {
                   a:"玩法",
                   b:"中奖条件",
                   c:"奖励（积分）"
               },
               {
                   a:"和值",
                   b:"猜中开奖号相加的和",
                   c:"9-80"
               },
               {
                   a:"三同号单选",
                   b:"猜中111、222、333、444、555、666中指定一个",
                   c:"240"
               },
               {
                   a:"三同号通选",
                   b:"111、222、333、444、555、666中任一个开出",
                   c:"40"
               },
               {
                   a:"二同号单选",
                   b:"猜中3个号（有2个号相同）",
                   c:"80"
               },
               
               {
                   a:"二同号复选",
                   b:"猜中开奖中相同的2个号",
                   c:"15"
               },
               {
                   a:"三不同号",
                   b:"猜中3个号（各不相同）",
                   c:"40"
               },
               {
                   a:"二不同号",
                   b:"猜中开奖中不相同的2个号",
                   c:"8"
               },
               {
                   a:"三连号通选",
                   b:"123，234，345，456任意一个开出",
                   c:"10"
               },
            ],
        }
    },
}
</script>
<style scoped>
    *{
        padding: 0;margin: 0;
    }
    h2{
        color: red;
        margin: 0.1rem 0 0.05rem;
        font-size: 0.16rem;
    }
    p{
        margin-bottom: 0.16rem;
        font-size: 0.14rem;
        color:#083a19;
    }
    tr:nth-child(odd){
        background: #eee;
    }
    td{
        border-top: 0.01rem solid #ddd;
        border-right: 0.01rem solid #ddd;
        padding: 0.05rem;
        text-align: center;
        min-width: 0.06rem;
        font-size: 0.16rem;
        color: #08533c
    }
</style>

