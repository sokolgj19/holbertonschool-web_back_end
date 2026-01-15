/* eslint-disable */

import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT);

export default app;
