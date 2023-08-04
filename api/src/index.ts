import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { newsRoutes } from './routes/newsRoutes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Hindu Headlines API')
})

app.use("/api/v1/news", newsRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})