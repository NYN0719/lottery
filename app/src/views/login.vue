<template>
	<div id="loginbox">
		<div class="login_bigbox">
			<div style="height: 100%;" v-show="!type">
				<div>
					<div class="zh_box">
						<input type="text" v-model="loup.zh" placeholder="请输入账号">
					</div>
					<div class="zh_box">
						<input type="text" v-model="loup.mm" placeholder="请输入密码">
					</div>
					<div class="sure_box">
						<!-- <router-link to="/"> -->
							<button class="surebtn" @click="loup_ajax">确定</button>
						<!-- </router-link> -->
					</div>
				</div>
			</div>
			<div>
				<div v-show="type">
					<div>
						<div class="touxiangimg">
							<input class="file_in" type="file" @change="files($event)">
							<img class="touxiangimg" v-if="url" :src="url">
						</div>
						<div class="zc_box">
							<div class="zh_box">	
								<input type="text" v-model="loup.zh" placeholder="请输入账号">
							</div>
							<div class="zh_box">
								<input type="text" v-model="loup.mm" placeholder="请输入密码">
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
						  location.href = 'http://localhost:8080/'
						  alert('登录成功')
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
	input,button{outline: none;}
	 #loginbox{
	    position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		background-color:#00422c;
	 }
	.login_bigbox{
		font-size: 0.24rem;
		margin-top: 1.5rem;
	}
	.inupbtn{
		width: 100%;
		height: 0.65rem;
	}
	.btn{
		width: 90%;
		height: 0.65rem;
		line-height: 1rem;
		margin:0 auto;	
	}
	.btn div{
		float: left;
		width: 50%;
		height: 0.65rem;
		line-height: 0.65rem;
		text-align: center;
	}
	.loginbtn{
		background: #147114;
		border-radius: 0.5rem 0 0 0.5rem;
	}
	.logupbtn{
		background: #147114;
		border-radius: 0 0.5rem 0.5rem 0;
	}
	.zc_box{
		width: 100%;
		margin-top: 0.6rem;
	}
	.zh_box{
		width: 100%;
		height:0.8rem;
		margin:0 auto;
		margin-bottom: 0.2rem;
	}
	.zh_box input{
		width: 80%;
		height:0.8rem;
		font-size: 0.32rem;
		color: #757575;
		margin: 0 auto;
		display: block;
		background: #00422c;
		outline: none;
		border: none;
		border-bottom: 0.03rem solid #757575;
	}
	.pwd_box{
		height:0.2rem;
		margin:0.2rem 0;
	}
	.touxiangimg{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background:#CCCCCC;
		margin:0 auto;
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
		top:0;
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
		z-index: 2;
		font-size: 0;
	}
	.sure_box{
		width: 100%;
		height: 0.86rem;
		margin-top: 0.45rem;
		margin-bottom: 1.8rem;
	}
	.sure_box button{
		display: block;
		width: 80%;
		height: 0.86rem;
		font-size: 0.28rem;
		border-radius: 0.2rem;
		background: #147114;
		margin:0 auto;
		border: none;
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