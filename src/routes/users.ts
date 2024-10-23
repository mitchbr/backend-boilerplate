import express, { NextFunction, Request, Response, Router } from "express";

export const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('Users');
});
userRouter.post('/', (req, res) => {
  res.send('Users');
});
