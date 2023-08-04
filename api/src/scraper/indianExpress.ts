import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { INDIAN_EXPRESS_URL } from '../constants/urls'

export async function scrapeIndianExpress(): Promise<NewsItem[]> {
  
  const response = await axios.get(INDIAN_EXPRESS_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('div.nation div.articles').each((index, element) => {
    const newsTitle = $(element).find('div.img-context h2 a').text().trim() || ''
    const newsUrl = $(element).find('div.img-context h2 a').attr('href') || ''
    const newsImage = $(element).find('div.snaps img').attr('data-src') || ''
    const newsTimestamp = $(element).find('div.img-context div.date').text().trim() || ''
    const newsDescription = $(element).find('div.img-context p').text().trim() || ''

    if (newsTitle) {
      newsItems.push({
        title: newsTitle,
        url: newsUrl,
        image: newsImage,
        timestamp: newsTimestamp,
        description: newsDescription,
      })
    }
  })

  return newsItems
}
