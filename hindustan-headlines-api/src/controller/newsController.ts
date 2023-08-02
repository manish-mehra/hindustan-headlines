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
import { newsList } from '../utils'


export async function NewsList(req: Request, res: Response) {
  try {
    res.json(newsList)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch news list.' })
  }
}

export async function AajTakNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeAajTak()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}

export async function IndiaTodayNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeIndiaToday()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}


export async function NdtvNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeNDTV()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}


export async function TimesOfIndiaNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeTimesOfIndia()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}

export async function ZeeNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeZeeNews()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}

export async function News18News(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeNews18()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}

export async function IndianExpressNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeIndianExpress()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}

export async function TimesNowNews(req: Request, res: Response) {
  try {
    const scrapedData = await scrapeTimesNow()
    res.json(scrapedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch scraped data.' })
  } 
}
