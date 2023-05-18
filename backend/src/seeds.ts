import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { sampleProducts } from './data'
import { ProductModel } from './models/ProductModel'
dotenv.config()

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

async function loadSeeds() {
    
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)
    console.log(createdProducts)
    process.exit()
}
 loadSeeds()