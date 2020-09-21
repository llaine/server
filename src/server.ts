import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import FaceRouter from 'routes/face';

const app = express();

const env = app.get('env') === 'development';
app.use(helmet());
app.use(morgan(env ? 'dev' : 'combined'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// Resources routing starts here
app.use('/faces', FaceRouter);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  return res.status(500).json({ error: err.message || 'Something went wrong' });
});

export default app;
