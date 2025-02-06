import express, {Request, Response} from 'express';
import {setupCategoryModule} from "./modules/category";
import {config} from "dotenv";
import {sequelize} from "./share/component/sequelize";

config();

(async () => {
    await sequelize.authenticate();
    console.log('connected to database!');

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));
    // app.use(express.static('public'));

    app.get('/', function (req: Request, res: Response) {
        res.send('Hello');
    })

    app.use('/v1', setupCategoryModule(sequelize))

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
})()
