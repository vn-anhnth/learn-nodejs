require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/Product');

const jsonProducts = require('./products.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success!!!');
        process.exit(0);
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}

start()
