import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);
app.use(errorHandler);

export default app;
