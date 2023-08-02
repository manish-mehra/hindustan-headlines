import {Router} from "express"
import { 
  NewsList,
  AajTakNews, 
  IndiaTodayNews, 
  NdtvNews, 
  TimesOfIndiaNews, 
  ZeeNews,
  News18News,
  IndianExpressNews,
  TimesNowNews
} from "../controller/newsController"

const newsRoutes = Router()

newsRoutes.get("/news-list", NewsList)

newsRoutes.get("/zee-news", ZeeNews)
newsRoutes.get("/aaj-tak-news", AajTakNews) // [X] html structure issue
newsRoutes.get("/ndtv-news", NdtvNews)
newsRoutes.get("/toi-news", TimesOfIndiaNews)
newsRoutes.get("/india-today-news", IndiaTodayNews)
newsRoutes.get("/news-18-news", News18News)
newsRoutes.get("/indian-express-news", IndianExpressNews)
newsRoutes.get("/times-now-news", TimesNowNews)


export {newsRoutes}