"use strict";

const Koa = require("koa");
const Router = require("@koa/router");
const { koaBody } = require("koa-body");

const app = new Koa();
const router = new Router();

router.post("/users", (ctx) => {
  console.log('requested from client...')
  const { name } = ctx.request?.body;
  if (!name) {
    ctx.body = { status: 'error', msg: 'Please provide a `name` parameter.' }
  } else {
    ctx.body = { name, email: `${name.toLowerCase()}@foxmail.com` };
  }
});

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(10086, () => {
  console.log("Server is running on port 10086");
});
