import axios from 'axios'
import cheerio from 'cheerio'
import { NewsItem } from '../interfaces'
import { NEWS_18_URL } from '../constants/urls'

export async function scrapeNews18(): Promise<NewsItem[]> {

  const response = await axios.get(NEWS_18_URL)
  const $ = cheerio.load(response.data)
  const newsItems: NewsItem[] = []

  $('div.jsx-1374841737.blog_list_row').each((index, element) => {
    const newsTitle = $(element).find('h4.jsx-1374841737').text().trim()
    const newsUrl = $(element).find('a.jsx-1374841737').attr('href') || ''
    const newsImage = $(element).find('img.jsx-1374841737').attr('data-src') || ''
    const newsTimestamp = $(element).find('sub.story_date').text().trim() || ''
    const newsDescription = ''

    if (newsTitle ) {
      newsItems.push({
        title: newsTitle,
        url: newsUrl,
        image: newsImage,
        timestamp: newsTimestamp,
        description: newsDescription
      })
    }
  })

  return newsItems
}