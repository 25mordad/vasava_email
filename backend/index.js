import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config()


import listRoutes from './routes/email.js';


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/email', listRoutes);


const PORT = process.env.PORT;

try {
  app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
} catch (e) {
  console.log(`${error} did not connect`)
}
