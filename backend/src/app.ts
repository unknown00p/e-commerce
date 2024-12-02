import connectDB from "./db"

// const express, { Response, request } = require('express')
import express, { Response, Request } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())

connectDB()

const port = 4000
app.get('/', (req: Request, res: Response) => {
    res.send('hello express typescript')
})

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
})