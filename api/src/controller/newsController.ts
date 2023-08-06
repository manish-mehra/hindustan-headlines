import { Request, Response } from 'express'
import {
  scrapeAajTak,
  scrapeIndiaToday,
  scrapeNDTV,
  scrapeTimesOfIndia,
  scrapeZeeNews,
  scrapeNews18,
  scrapeIndianExpress,
  scrapeTimesNow
} from '../scraper'
import { newsList, fetchAndProcessNewsData } from '../utils'


export async function NewsList(req: Request, res: Response) {
  try {
    res.status(200).json(newsList)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch news list.' })
  }
}

export async function NewsBySource(req: Request, res: Response) {
  console.log('req.params', req.params)
  try {
    const source = req.params.source // Extract the news source from the request params
    console.log('source', source)
    let scrapeFunction

    // Determine the appropriate scrape function based on the source
    switch (source) {
      case 'aaj-tak-news': // return empty
        scrapeFunction = scrapeAajTak
        break
      case 'india-today-news':
        scrapeFunction = scrapeIndiaToday
        break
      case 'ndtv-news':
        scrapeFunction = scrapeNDTV
        break
      case 'toi-news': // lazy load issue
        scrapeFunction = scrapeTimesOfIndia
        break
      case 'zee-news':
        scrapeFunction = scrapeZeeNews
        break
      case 'news-18-news':
        scrapeFunction = scrapeNews18
        break
      case 'indian-express-news':
        scrapeFunction = scrapeIndianExpress
        break
      case 'times-now-news':
        scrapeFunction = scrapeTimesNow
        break
      default:
        throw new Error('Invalid news source')
    }

    const newsRes = await fetchAndProcessNewsData(scrapeFunction)
    res.status(200).json(newsRes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  }
}