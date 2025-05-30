// server/index.js 
const express = require('express');
const paymentRouter = require('./routes/paymentRouter');
const app = express();

app.use(express.json());
app.use('/api', paymentRouter);

app.listen(5000, () => console.log('Server running on port 5000'));
