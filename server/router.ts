import { Router } from "oak/mod.ts";

const messages: string[] = [];

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "Chat server";
  })
  .get("/messages", (ctx) => {
    ctx.response.body = messages;
  })
  .post("/messages", async (ctx) => {
    const { value } = ctx.request.body();
    const message = await value;
    console.log(message);
    messages.push(message);
    ctx.response.body = messages;
  });

export default router;
