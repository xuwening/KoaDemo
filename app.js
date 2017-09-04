const Koa = require('koa');
const app = new Koa();

var router = require('koa-route'); 
const koaBody = require('koa-body')


// var route = router.post('/post', async function(ctx,next){  
//   console.log(ctx.request.body)
//   ctx.body = "you post data:"+JSON.stringify({id:id});  
//  });

const main = ctx => {
  console.log(ctx.request.body)
  ctx.body = 'haahdhd'
}

app.use(koaBody())
app.use(router.post('/post', main))

// app.use(async ctx => {
//   console.log(ctx.request.body)
//   ctx.body = 'Hello World';
// });

app.listen(3000);

//node app.js