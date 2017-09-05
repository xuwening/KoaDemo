const Koa = require('koa')
const app = new Koa()

var router = require('koa-route')
const koaBody = require('koa-body')
const serve = require('koa-static')

import Person from './login/login'
import index from './router/index'


app.use(serve("./static"))
app.use(koaBody())
app.use(router.post('/post', index))

app.listen(3000);
