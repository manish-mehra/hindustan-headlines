import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { AAJ_TAK_URL } from '../constants/urls'

export async function scrapeAajTak(): Promise<NewsItem[]> {
  
    const response = await axios.get(AAJ_TAK_URL)
    const $ = cheerio.load(response.data)
    const newsItems: NewsItem[] = []

    $('.col-3 .secstory-box').each((index, element) => {
      const newsTitle = $(element).find('a').text().trim()
      const newsUrl = $(element).find('a').attr('href') || ''
      const newsImage = $(element).find('img').attr('src') || ''
      const newsTimestamp = $(element).find('.time').text().trim() || ''
      const newsDescription = $(element).find('.h3').text().trim() || ''

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
