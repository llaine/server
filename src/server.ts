import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import FaceRouter from 'routes/face';

const app = express();
const PORT = 8080;

const env = app.get('env') === 'development';
app.use(helmet());
app.use(morgan(env ? 'dev' : 'combined'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// Resources routing starts here
app.use('/faces', FaceRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} in ${env ? 'development' : 'production'} mode`);
})
