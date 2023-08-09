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
import { NewsItem } from '../interfaces'

export const newsList = [
  {
    name: 'India Today',
    scrapedFrom: INDIA_TODAY_URL,
    endpoint: 'india-today-news'
  },
  {
    name: 'News18',
    scrapedFrom: NEWS_18_URL,
    endpoint: 'news-18-news'
  },
  {
    name: 'NDTV',
    scrapedFrom: NDTV_URL,
    endpoint: 'ndtv-news'
  },
  {
    name: 'Times Now',
    scrapedFrom: TIMES_NOW_URL,
    endpoint: 'times-now-news'
  },
  {
    name: 'Indian Express',
    scrapedFrom: INDIAN_EXPRESS_URL,
    endpoint: 'indian-express-news'
  },
  {
    name: 'Zee News',
    scrapedFrom: ZEE_NEWS_URL,
    endpoint: 'zee-news'
  },
  {
    name: 'Times of India',
    scrapedFrom: TIMES_OF_INDIA_URL,
    endpoint: 'toi-news'
  },
  {
    name: 'Aaj Tak',
    scrapedFrom: AAJ_TAK_URL,
    endpoint: 'aaj-tak-news'
  },
]

// Utility function to add common properties to scrapedData
export function addInfoNewsResponse(scrapedData: NewsItem[]){

  const timestamp = new Date().toISOString()
  return { 
    data: scrapedData, 
    timestamp, 
    totalCount: scrapedData.length 
  }
  
}

// Common function to fetch and process news data
export async function fetchAndProcessNewsData(scrapeFunction: ()=> Promise<NewsItem[]>) {
  try {
    const scrapedData = await scrapeFunction()
    const newsRes = addInfoNewsResponse(scrapedData)
    return newsRes
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch and process scraped data.')
  }
}