import { Application } from "oak/mod.ts";
import router from "./router.ts";

const app = new Application();

const PORT = Number(Deno.env.get("PORT")) || 4000;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => console.log(`Listening on port ${PORT}`));

app.listen({ port: PORT });
