require('dotenv').config();
require('express-async-errors');

const express = require('express');
const path = require("path");
const app = express();

const mainRoutes = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.use('/api/v1', mainRoutes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
