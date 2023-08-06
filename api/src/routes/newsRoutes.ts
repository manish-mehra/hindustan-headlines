import {Router} from "express"
import { 
  NewsList,
  NewsBySource
} from "../controller/newsController"

const newsRoutes = Router()

newsRoutes.get("/news-list", NewsList)

newsRoutes.get("/:source", NewsBySource)


export {newsRoutes}