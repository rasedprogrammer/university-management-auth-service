"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const logger_1 = require("./shared/logger");
process.on('uncaughtException', error => {
    logger_1.errorLogger.error(error);
    process.exit(1);
});
let server;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //await mongoose.connect('mongodb://127.0.0.1:27017/university-management'); // Use Locally
            yield mongoose_1.default.connect(config_1.default.database_url);
            logger_1.logger.info('Connect Database🛢️ Successfully');
            server = app_1.default.listen(config_1.default.port, () => {
                logger_1.logger.info(`Application listening on port ${config_1.default.port}`);
            });
        }
        catch (err) {
            logger_1.errorLogger.error('Failed To Connect Database🛢️');
        }
        process.on('unhandledRejection', error => {
            if (server) {
                server.close(() => {
                    logger_1.errorLogger.error(error);
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    });
}
main();
process.on('SIGTERM', () => {
    logger_1.logger.info('SIGTERM is received');
    if (server) {
        server.close();
    }
});
