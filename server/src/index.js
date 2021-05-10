import express from "express";
import { json, urlencoded } from "body-parser";
import db from "./queries";

const app = express();
const port = 3000;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.get("/users", db.getUsers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
