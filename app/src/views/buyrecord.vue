<template>
	<div id="record">
		<div class="bigbox">
			<div class="continue_choose">
				<div class="button_choose">
					<span>
						<svg class="icon" aria-hidden="true">
						    <use xlink:href="#icon-hao"></use>
						</svg> 
					</span>
					继续选号
				</div>
			</div>
			<div class="record_bar_box">
				<div class="record_bar"></div>
			</div>
			<div class="record_null">
				<div class="record_box">
					最少选择一注,<span>去选号</span>
				</div>
			</div>
			<div class="record_datas">
				<div class="record_boxs">
					<div class="record_del">
						<svg class="icon dellogo" aria-hidden="true">
						    <use xlink:href="#icon-shanchuxiang-icon"></use>
						</svg> 
					</div>
					<div class="record_right">
						<p class="chose_nums">11</p>
						<div class="chose_datas">
							<span>和值  <i>2注</i></span>
							<span><i>2</i>模拟金</span>
						</div>
					</div>
				</div>
			</div>
			<div class="big_bottom">
				<div class="bom_left">
					<span>和值  <i>2注</i></span>
					<span class="bold"><i>2模拟金</i></span>
				</div>
				<div class="bom_right">
					投注
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'record',
		data() {
			return {
				
			}
		},
	}
</script>

<style>
	#record{
		width:6.4rem;
		height: 100%;
		background: rgb(243, 243, 243);
		position: fixed;
	}
	.bigbox{
		width: 6rem;
		height: 6rem;
		/* background: pink; */
		padding:0.2rem 0.2rem;
	}
	.continue_choose{
		width: 100%;
		margin-bottom: 0.1rem;
		
	}
	.button_choose{
		width: 1.3rem;
		padding: 0.1rem;
		color: #1976d2;
		font-size: 0.18rem;
		border: 0.01rem solid #1976d2;
		margin-left: 0.15rem;
	}
	.record_bar_box{
		width: 100%;
		
	}
	.record_bar{
		width: 100%;
		height: 0.18rem;
		border:0.02rem solid rgb(0,0,0,.2);
		border-radius: 0.2rem;
	}
	.record_null{
		width: 100%;
		margin-top: -0.1rem;
		border-bottom: 0.01rem solid grey;
	}
	.record_datas{
		width: 100%;
		border-bottom: 0.01rem solid grey;
	}
	.record_box{
		width: 5.6rem;
		height: 1.5rem;
		padding: 0 0.2rem;
		background: white;
		font-size: 0.22rem;
		text-align: center;
		line-height: 1.5rem;
		
		
	}
	.record_boxs{
		width: 5.6rem;
		height: 1.5rem;
		padding: 0 0.2rem;
		background: white;
		font-size: 0.22rem;
		line-height: 1.5rem;
		
	}
	.record_box span{
		color: #1976d2;
		padding:0 0.1rem;
	}
	.record_del{
		width: 1rem;
		height: 1.5rem;
		/* background: olive; */
		float: left;
		text-align: center;
	}
	.record_right{
		height: 1.5rem;
		overflow: hidden;
		/* background: salmon; */
	}
	.chose_nums{
		line-height: 0.4rem;
		color: #b71c1c;
		font-size: 0.24rem;
		/* background: sandybrown; */
		padding: 0 0.2rem;
		margin-top: 0.3rem;
	}
	.chose_datas{
		line-height: 0.4rem;
		/* background: sandybrown; */
		padding: 0 0.2rem;
		color: rgba(0,0,0,.54);
		margin-top: 0.06rem;
	}
	.chose_datas span{
		padding-right: 0.1rem;
	}
	.chose_datas i{
		font-style: normal;
		padding-right: 0.1rem;
	}
	.big_bottom{
		width: 100%;
		height: 1rem;
		font-size: 0.20rem;
		background: darkcyan;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.bom_left{
		width: 80%;
		height: 1rem;
		float: left;
		background: lightslategray;
		text-align: center;
		line-height: 1rem;
		color: white;
	}
	.bom_left span{
		padding-right: 0.1rem;
	}
	.bom_left i{
		font-style: normal;
		padding-right: 0.1rem;
	}
	.bold{
		color: #ffc107;
	}
	.bom_right{
		height: 1rem;
		margin-left: -80%;
		background: #f44336;
		text-align: center;
		line-height: 1rem;
		color: white;
	}
	.dellogo{
		font-size: 0.35rem;
		color: rgba(0,0,0,.54);
	}
</style>