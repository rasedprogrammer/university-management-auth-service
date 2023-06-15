import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/university-management'); // Use Locally
    //await mongoose.connect(config.database_url as string);
    logger.info('Connect Database🛢️ Successfully');

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed To Connect Database🛢️');
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
