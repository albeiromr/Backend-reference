import express from 'express';
const app = express();
import {router} from './routes/index';

app.use('/api', router);





export default app;