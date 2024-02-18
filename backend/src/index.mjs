import express from 'express';
import routes from './routes/index.mjs'
import mongoose from 'mongoose';

const port = 3000;

const app = express();
app.use(express.json());

app.use(routes);

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