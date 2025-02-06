import {Router} from "express";
import {listCategoryApi} from "./infras/list-api";
import {getCategoryApi} from "./infras/get-api";
import {createCategoryApi} from "./infras/create-api";
import {deleteCategoryApi} from "./infras/delete-api";
import {updateCategoryApi} from "./infras/update-api";
import {init} from './infras/repository/dto'
import {Sequelize} from "sequelize";

export const setupCategoryModule = (sequelize: Sequelize) => {
    init(sequelize)

    const router = Router()

    router.get('/categories', listCategoryApi)
    router.post('/categories', createCategoryApi)
    router.get('/categories/:id', getCategoryApi)
    router.patch('/categories/:id', updateCategoryApi)
    router.delete('/categories:id', deleteCategoryApi)

    return router
}