import express  from 'express'
// import { sampleProducts } from './data'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { productRouter } from './routers/productRouter'


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


app.use('/api/products', productRouter)



const PORT = 4000
app.listen(PORT, () => {
    console.log((`server started at http://localhost:${PORT}`))
})





