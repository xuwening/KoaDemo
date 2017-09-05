


const main = ctx => {
    console.log(ctx.request.body)
    ctx.body = JSON.stringify(ctx.request.body)
  }

  
module.exports = main