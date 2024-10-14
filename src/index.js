import 'dotenv/config'
import express from 'express'
import { Routes } from './routes/index.js'
import { connectDB } from './config/db.js'

const app = express()
app.use(express.json())

connectDB()
Routes(app)

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})