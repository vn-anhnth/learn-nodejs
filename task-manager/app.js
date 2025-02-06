const express = require('express');
const {join} = require("node:path");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const {errorHandlerMiddleware} = require("./middleware/error-handler");
const app = express();
require('dotenv').config();

app.use(express.static(join(__dirname, './public')));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    } catch (error) {
        console.error(error)
    }
}

start();
