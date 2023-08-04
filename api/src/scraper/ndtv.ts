import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { NDTV_URL } from '../constants/urls'


export async function scrapeNDTV(): Promise<NewsItem[]> {

  const response = await axios.get(NDTV_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('.news_Itm').each((index, element) => {
    const newsTitle = $(element).find('.newsHdng a').text().trim()
    const newsUrl = $(element).find('.newsHdng a').attr('href') || ''
    const newsImage = $(element).find('.newsPic img').attr('src') || ''
    const newsTimestamp = $(element).find('.news_Itm-cont span').text().trim() || ''
    const newsDescription = $(element).find('.newsCont p').text().trim() || ''

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
