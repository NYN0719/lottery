module.exports = {
<<<<<<< HEAD
    devServer: {
        proxy: {
          '/file':{//一级路由
            target: 'http://localhost:8999',//路由地址
            ws: true,//必须要写的
            changeOrigin: false//必须要写的
          },
          '/users':{
            target: 'http://localhost:8999',
            ws: true,
            changeOrigin: false
          },
		  
        }
    }
=======
  devServer: {
      proxy: {
        '/users/': {//一级路由
          target: 'http://localhost:8000/',//路由地址
          ws: true,//必须要写的
          changeOrigin: true//必须要写的
        },
      }
  }
>>>>>>> 785338f23d66cbf19cb8c924426ce98cbe9d48c7
}