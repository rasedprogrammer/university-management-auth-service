import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

// Use Cors
app.use(cors());

// Use Parser
// Use URL Encode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declare Routes
app.use('/api/v1/', routes);

// Global Error Handler
app.use(globalErrorHandler);

// Not Found Page
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'The requested page not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
  next();
});

export default app;
