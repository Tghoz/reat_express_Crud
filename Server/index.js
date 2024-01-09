console.clear();
console.log("Server-On");

import express from "express";
import { PORT } from "./config.js";
import Cors from "cors";
import indexRouter from "./router/index.routes.js";
import testRouter from "./router/test.routes.js";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(Cors());
app.use(express.json());
app.use(indexRouter);
app.use(testRouter);

app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
