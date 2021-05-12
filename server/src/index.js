import express from "express";
import { json, urlencoded } from "body-parser";

import config from "./env";
import { privateRouter, publicRouter } from "./routes";

const app = express();

const port = config.app.port;
const host = config.app.host;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/api", publicRouter);
app.use("/api", privateRouter);

app.listen(port, host, () => {
  console.log(`App running at http://${host}:${port}/api`);
});
