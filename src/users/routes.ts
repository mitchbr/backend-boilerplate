import { Request, Response, Router } from "express";
import { v4 as uuid4 } from 'uuid';

import { db } from '../db';

export const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const users = await db
            .selectFrom('users')
            .selectAll()
            .execute()
        res.status(200).send(users)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

userRouter.post('/', async (req: Request, res: Response) => {
    const { username } = req.body
    try {
        const result = await db
            .insertInto('users')
            .values({
                id: uuid4(),
                username: username,
            })
        res.status(200).send({ message: "Successfully added child" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
