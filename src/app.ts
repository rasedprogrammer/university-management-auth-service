import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

// Use Cors
app.use(cors())

// Use Parser
app.use(express.json())

// Use URL Encode
app.use(express.urlencoded({ extended: true }))

// Use API route
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
