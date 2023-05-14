import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

const MONGODB_URI =
process.env.MONGODB_URI || 'mongodb://localhost/avaloze'
mongoose.set('strictQuery', true)
mongoose
.connect(MONGODB_URI)
.then(() => {
    console.log('connected to mongodb')
})
.catch(() => {
    console.log('error mongodb')
})


app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})

app.get('/api/products/:slug', (req: Request, res: Response) => {
    res.json(sampleProducts.find((x) => x.slug === req.params.slug)) // this should be sampleproduct or just product cuz on homepage line 22 we are
})

const PORT = 4000
app.listen(PORT, () => {
    console.log((`server started at http://localhost:${PORT}`))
})
