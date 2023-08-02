import {
  AAJ_TAK_URL,
  INDIA_TODAY_URL,
  NDTV_URL,
  TIMES_OF_INDIA_URL,
  ZEE_NEWS_URL,
  NEWS_18_URL,
  INDIAN_EXPRESS_URL,
  TIMES_NOW_URL
} from '../constants/urls'

export const newsList = [
  {
    name: 'Aaj Tak',
    scrapedFrom: AAJ_TAK_URL,
    endpoint: 'aaj-tak-news'
  },
  {
    name: 'India Today',
    scrapedFrom: INDIA_TODAY_URL,
    endpoint: 'india-today-news'
  },
  {
    name: 'NDTV',
    scrapedFrom: NDTV_URL,
    endpoint: 'ndtv-news'
  },
  {
    name: 'Times of India',
    scrapedFrom: TIMES_OF_INDIA_URL,
    endpoint: 'toi-news'
  },
  {
    name: 'Zee News',
    scrapedFrom: ZEE_NEWS_URL,
    endpoint: 'zee-news'
  },
  {
    name: 'News18',
    scrapedFrom: NEWS_18_URL,
    endpoint: 'news-18-news'
  },
  {
    name: 'Indian Express',
    scrapedFrom: INDIAN_EXPRESS_URL,
    endpoint: 'indian-express-news'
  },
  {
    name: 'Times Now',
    scrapedFrom: TIMES_NOW_URL,
    endpoint: 'times-now-news'
  },
]