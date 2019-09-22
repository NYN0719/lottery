<template>
	<div id="loginbox">
		<div class="login_bigbox">
			<div style="min-height: 460px">
				<div v-show="!type">
					<h2>登录</h2>
					<!-- <div class="login_top">
						<div class="zh_box">
							<div>账号：</div>
							<div>
								<input type="text" v-model="loin.zh">
							</div>
						</div>
						<div class="zh_box">
							<div>密码：</div>
							<div>
								<input type="text" v-model="loin.mm">
							</div>
						</div>
						<div>
							<button class="surebtn" @click="loin_ajax">确定</button>
						</div>
					</div> -->
				</div>
				<div v-show="type">
					<h2>注册</h2> 
					<div class="login_top">
						<div class="touxiangimg">
							<input class="file_in" type="file" @change="files($event)">
							<img class="touxiangimg" v-if="url" :src="url">
						</div>
						<div class="zc_box">
							<div class="zh_box">	
								<div>账号：</div>
								<div>
									<input type="text" v-model="loup.zh">
								</div>
							</div>
							<div class="zh_box">
								<div>密码：</div>
								<div>
									<input type="text" v-model="loup.mm">
								</div>
							</div>
						</div>
						<!-- {statatype == yes?name:'index':name:'login'} -->
						<div class="sure_box">
							<!-- <router-link to="/"> -->
								<button class="surebtn" @click="loup_ajax">确定</button>
							<!-- </router-link> -->
						</div>
					</div>
				</div>
			</div>
			<div class="btn">
				<div style="background: yellowgreen" @click="type=false">登录</div>
				<div style="background: orange" @click="type=true">注册</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		name:'loginbox',
		data(){
			return{
				statatype:'',
				type:true,
				url:'',
				loup:{
					zh:'',
					mm:'',
					img_url:''
				},
				loin:{
					nc:'',
					zh:'',

				}
			}
		},
		methods:{
			files(event){
				var f = event.target.files[0]
				var d = new FormData
				d.append('img',f)
				this.$http.post('/file/file',d,{
					headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
				}).then((data)=>{
					console.log(data)
					this.loup.img_url = data.data
					this.url = 'http://localhost:8999/images/'+data.data
					localStorage.imglink = this.url
				})
			},
			loup_ajax(){
				this.$axios.post('/users/up',this.loup)
				  .then(res => {
					  console.log(res.data)
					  this.statatype = res.data.type
					  if(this.statatype == 'yes'){
						  console.log(12)
						  location.href = 'http://localhost:8080/'
					  }
					  // alert(res.data.data)
				  })
				  .catch(err =>{
					  console.log(err)
				  })
			}
			
		}
			
	}
</script>


<style scoped>
	a{text-decoration: none;color: black}
	.login_bigbox{
		font-size: 0.24rem;
	}
	.btn{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.btn div{
		float: left;
		width: 50%;
		text-align: center;
	}
	.zc_box{
		width: 100%;
		margin-top: 0.6rem;
	}
	.zh_box{
		width: 3.6rem;
		height:0.6rem;
		padding: 0 1.4rem;
	}
	.login_top{
		margin-top: 2rem;
	}
	.zh_box div{
		float: left;
	}
	.pwd_box{
		height:0.2rem;
		margin:0.2rem 0;
	}
	.pwd_box div{
		float: left;
	}
	.touxiangimg{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background:pink;
		margin:0 auto;
		overflow: hidden;
		position: relative;
		margin-bottom: 0.2rem;
	
	}
	h2{
		line-height:0.6rem;
		text-indent: 1em;
	}
	.file_in{
		opacity: 0;
		position: absolute;
		left: 0;
		top:0.3rem;
		z-index: 2;
	}
	.sure_box{
		
	}
	.surebtn{
		width: 30%;
		height: 0.5rem;
		background:green;
		position: absolute;
		left: 50%;
		margin-left: -15%;
	}
	.head{
		width: 100%;
		height: 0.6rem;
		background:black;
	}
	.loupin{
		float: right;
		line-height:0.6rem;
		margin:0 0.6rem;
		color: white;
	}
	.loupin a{
		color: white;
	}
</style>