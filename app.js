const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

const koaBody = require('koa-body')
const serve = require('koa-static')

import login from './login/login'
import index from './router/index'


app.use(serve("./static"))
app.use(koaBody())

router.post('/', index)
router.redirect('/login', '/index.html')
router.redirect('/index', '/index.html')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);
