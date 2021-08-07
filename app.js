//导入 express
const express = require('express')

//创建服务器的实例对象
const app = express()

//导入并配置 cors 跨域中间件
const cors = require('cors')
app.use(cors())

//配置解析表单数据的中间件，注意：这个中间件只能解析application/x-www-form-urlencoded 格式的表单数据
app.unsubscribe(express.urlencoded({extended: false}))

//导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)

//启动服务器
app.listen(3007,() =>{
    console.log('api server running at http://127.0.0.1:3007');
})