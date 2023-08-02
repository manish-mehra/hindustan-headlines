import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { ZEE_NEWS_URL } from '../constants/urls'

export async function scrapeZeeNews(): Promise<NewsItem[]> {

  const response = await axios.get(ZEE_NEWS_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('.col-lg-7 .newsHdng a, .col-lg-5 .news_description a').each((index, element) => {
    const newsTitle = $(element).text().trim()
    const newsUrl = 'https://zeenews.india.com' + $(element).attr('href') || ''
    const newsImage = $(element).closest('.section-tumbnail-container').prev('.section-tumbnail-top-post').find('img').attr('src') || ''
    const newsTimestamp = $(element).closest('.section-tumbnail-container').prev('.section-tumbnail-top-post').find('.news_description span').text().trim() || ''
    const newsDescription = $(element).closest('.section-tumbnail-container').prev('.section-tumbnail-top-post').find('.news_description h2').text().trim() || ''

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