import { App } from "./app"
import { LoggerService } from '../src/services/logger.service';
import { connect, ConnectOptions, set } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const mongo = ""
// new App().server.listen(3000);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

set('strictQuery', true);

if (process.env.NODE_ENV !== 'test') {
    connect(mongo, options).then(() => {
        //logger.info('Connected to MongoDB');
        new App().server.listen(3000)
        console.log("Servidor port: " + 3000);
        // App.listen(port, () =>
        //     logger.info(`The Web Server is Listening at http://${host}:${port}`)
        // );
    });
}

// const logger = LoggerService.getLogger();

