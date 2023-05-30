import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

// Use Cors
app.use(cors())
// Use Parser
app.use(express.json())
// Use URL Encode
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
