import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { INDIA_TODAY_URL } from '../constants/urls'

export async function scrapeIndiaToday(): Promise<NewsItem[]> {

  const response = await axios.get(INDIA_TODAY_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('div.story__grid article').each((index, element) => {
    const newsTitle = $(element).find('h2 a').text().trim() || ''
    const newsUrl = 'https://www.indiatoday.in' + $(element).find('h2 a').attr('href') || ''
    const newsImage = $(element).find('img').attr('src') || ''
    const newsTimestamp = '' // no timestamp available for this website
    const newsDescription = $(element).find('div.B1S3_story__shortcont__inicf p').text().trim() || ''

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
