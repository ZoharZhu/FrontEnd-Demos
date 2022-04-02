// 1.引入express
const express = require("express")

// 2.创建应用对象
const app = express()

// 3.创建路由规则 request是对请求的封装 reponse是对响应的封装
app.get('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 设置响应体
  response.send("HELLO AJAX GET")
})

// app.post()
app.all('/server', (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  // 设置响应头 设置允许所有形式的请求头
  response.setHeader("Access-Control-Allow-Headers", "*")
  response.send("HELLO AJAX POST")
})

// 返回JSON数据
app.all('/json-server', (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setHeader("Access-Control-Allow-Headers", "*")
  const date = {
    name: "BY"
  }
  let str = JSON.stringify(date)
  response.send(str)
})

// 针对IE缓存
app.get('/ie', (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.send("HELLO IE")
})

// 延时响应
app.get('/delay', (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  setTimeout(() => {
    response.send("延时响应")
  }, 3000);
})

//axios 服务
app.all('/axios-server', (request, response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = {name:'Zohar'}
  //设置响应
  response.send(JSON.stringify(data))
})

//jsonp 服务
app.all('/jsonp-server', (request, response)=>{
  const data = {name:'Zohar'}
  let str = JSON.stringify(data)
  // response.send('hello jsonp') 会报错
  // 服务端要返回“函数调用” 参数是想要返回的数据
  // response.send('console.log("hello jsonp")')
  response.send(`handle(${str})`)
})

//jsonp实践 用户名检测是否存在
app.all('/check-username', (request, response)=>{
  const data = {
      exist: 1,
      msg: '用户名已经存在'}
  //设置响应
  let str = JSON.stringify(data)
  response.send(`handle(${str})`)
})

//cors
app.all('/cors-server', (request, response)=>{
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Method', '*')
  response.send('hello CORS')
})

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务已启动， 8000端口监听中...");
})