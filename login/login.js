
var router = require('koa-route'); 
const koaBody = require('koa-body')

const main = ctx => {
  console.log(ctx.request.body)
  ctx.body = 'haahdhd'
}

class Person {

}

module.exports = Person

