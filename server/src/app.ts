import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import mongoose = require('mongoose');
import errorHandler = require('errorhandler');

import { RushingRouter } from './routes/rushing-routes';

export class Server {

    private app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();
        this.routes();
    }

    private config() {

        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        mongoose.connect('mongodb://127.0.0.1/nfl', { useNewUrlParser: true });
        mongoose.connection.on('error', error => {
            console.error(error);
        });

        // catch 404 and forward to error handler
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        this.app.use(errorHandler());
    }

    private routes() {
        let router: express.Router;
        router = express.Router();

        RushingRouter.create(router);

        //use router middleware
        this.app.use(router);
    }
}
