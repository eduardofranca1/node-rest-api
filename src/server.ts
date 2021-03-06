import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserRouter from "./routes/UserRouter";
import { mongodb } from "../src/config";

mongoose.connect(mongodb);

const server = express();
server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(UserRouter);

server.listen(3001);
