import express from 'express';
import dbConfig from './config/dbConfig';
import middleWareConfig from './config/middleware';
import { CoffeeRoutes } from './modules/coffees';

const PORT = process.env.PORT || 5000;

const app = express();

dbConfig();

middleWareConfig(app);

app.use('/api', CoffeeRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});
