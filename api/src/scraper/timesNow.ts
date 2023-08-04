import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { TIMES_NOW_URL } from '../constants/urls'

export async function scrapeTimesNow(): Promise<NewsItem[]> {

  const response = await axios.get(TIMES_NOW_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('div.xgYs-._280yP div._1W5s9').each((index, element) => {
    const newsTitle = $(element).find('a.undefined div._2fwwc > div').text().trim()
    const newsUrl = $(element).find('a.undefined').attr('href') || ''
    const newsImage = $(element).find('img').attr('data-src') || ''
    const newsTimestamp = '' // The timestamp is not available in the provided HTML
    const newsDescription = ''

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