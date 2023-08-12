import React, {} from 'react'
import useApi from '../hooks/useApi'
import { API_URL } from '../config'
import { NewsSource, NewsItemProps } from '../types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const NewsCard: React.FunctionComponent<NewsItemProps> = ({title, description, url, image, timestamp}) => {

  return(
    <a href={url} className="min-w-full cursor-pointer p-4 gap-2 flex flex-col-reverse items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
      <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">{title.length > 100 ? `${title.substring(0, 100)}...` : title}</h5>
        <p className="mb-3 font-normal text-sm text-gray-700">{description && description.length > 150 ? `${description.substring(0, 150)}...` : description}</p>
        <div className='flex gap-1 text-xs'>
          <p className=''>{timestamp}</p>
        </div>
      </div>
      {
        image && (<div className="rounded-lg overflow-hidden w-full h-[200px] md:min-w-[150px] md:max-w-[150px] md:h-[100px]">
        <img className="w-full h-full object-cover" src={image} alt={`${title} image`}/>
      </div>)
      }
    </a>
  )
}

function News({selectedNews}: {selectedNews: NewsSource | null}) {

  const apiEndpoint = selectedNews?.endpoint ? `${API_URL}/news/${selectedNews.endpoint}` : null
  const {status, data, error}  = apiEndpoint? useApi(`${API_URL}/news/${selectedNews?.endpoint}`) : {status: 'idle', data: null, error: null}
  
  const timestamp = status === 'fetched' && data !== null ? new Date(data?.timestamp || '').toLocaleString() : '';
  const count = status === 'fetched' && data !== null ? data?.totalCount : 0;

  return (
    <>
    <section className='flex flex-col mb-20 min-w-full'>
      <div className='mb-3'>
        <p className='text-xs mb-1'>Fetched At: {timestamp}</p>
        <p className='text-xs'>News Count: {count}</p>
      </div>
      <div className='flex flex-row flex-wrap gap-4 w-full'>
        {
          status === 'fetching' && (<Skeleton count={3} width = {"100%"} height={130} borderRadius={'0.5rem'} className='' containerClassName='flex flex-col mb-1 w-full'/>)
        }
        {
          status === 'fetched' && data !== null && (
            Array.isArray(data.data) && data.data.length > 0 && (
              data.data.map((news: NewsItemProps) => (
                <NewsCard key={news.url} {...news} />
              ))
            )
          )
        }

        {
          status === 'fetched' && data !== null && Array.isArray(data.data) && data.data.length === 0 && (
            <div className='w-full'>
              <p className='font-medium text-xs mb-2 text-red-600'>No news found!</p>
              <Skeleton count={3} enableAnimation = {false} width = {"100%"} height={130} borderRadius={'0.5rem'} className='' containerClassName='flex flex-col mb-1 w-full'/>
            </div>
          )
        }

        {
          status === 'error' && (<div className='w-full'>
            <p className='font-medium text-xs text-red-600'>Error: {error}</p>
            <Skeleton count={3} enableAnimation = {false} width = {"100%"} height={130} borderRadius={'0.5rem'} className='' containerClassName='flex flex-col mb-1 w-full'/>
          </div>)
        }

      </div>
    </section>
    </>
  )
}

export default News