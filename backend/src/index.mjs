import express from 'express';
import routes from './routes/index.mjs'
import mongoose from 'mongoose';
import cors from 'cors';
import errorHandlerMiddleware from './middlewares/errorsHandler.mjs';
import notFound from './middlewares/not-found.mjs';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());


app.use(routes);
app.use(errorHandlerMiddleware);
app.use(notFound);

async function start(port) {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookstore');
    app.listen(port, () => {
      console.log("Connected to MongoDB");
      console.log(`Server is running on port ${port}`);
    })
  } catch(error) {
    console.log(error);
  }
}

start(port);