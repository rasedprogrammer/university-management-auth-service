import express, { Application } from 'express'
import usersRouter from './app/modules/users/users.route'
import cors from 'cors'
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// Use Cors
app.use(cors())

// Use Parser
app.use(express.json())

// Use URL Encode
app.use(express.urlencoded({ extended: true }))

// Use API route
app.use('/api/v1/users/', usersRouter)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'Invalid Request')
//   // res.send('Hello World!')
// })

app.use(globalErrorHandler)

export default app
