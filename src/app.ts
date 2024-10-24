import dotenv from "dotenv";
import express from "express";

import { userRouter } from "./users/routes";

dotenv.config();

const port = process.env.NODE_DOCKER_PORT

const app = express()
app.use(express.json())


app.use('/users', userRouter);


app.listen(port, () => console.log(`Server has started on port: ${port}`))