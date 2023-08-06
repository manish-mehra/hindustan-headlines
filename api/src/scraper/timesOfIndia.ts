import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { TIMES_OF_INDIA_URL } from '../constants/urls'

export async function scrapeTimesOfIndia(): Promise<NewsItem[]> {

  const response = await axios.get(TIMES_OF_INDIA_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('.main-content .listing4.clearfix ul.cvs_wdt.clearfix').each((index, element) => {
    const newsTitle = $(element).find('li span.w_tle a').text().trim()
    const newsUrl = 'https://timesofindia.indiatimes.com' + $(element).find('li span.w_tle a').attr('href') || ''
    const newsImage = $(element).find('img').attr('src') || ''
    const newsTimestamp = $(element).find('li span.w_desc span').attr('data-time') || ''
    const newsDescription = $(element).find('li span.w_desc').text().trim()
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
  console.log('scraped again')
  return newsItems
}
