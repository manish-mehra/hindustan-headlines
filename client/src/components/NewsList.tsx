import React from 'react'
import useApi from '../hooks/useApi'
import { API_URL } from '../config'
import { NewsSource } from '../types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type NewsListProps = {
  selectedNews: NewsSource | null
  setSelectedNews: React.Dispatch<React.SetStateAction<NewsSource | null>>
}

const API = `${API_URL}/news/news-list`


function NewsList({selectedNews, setSelectedNews}: NewsListProps) {

  const { status, data, error } = useApi(API)

  return (
    <>
      <section className='overflow-x-auto mb-7'>
      
        <div className='flex flex-row gap-3 mb-2'>
          {
            status === 'fetching' && (<Skeleton count={5} inline width = {120} height={55} borderRadius={'1.5rem'} className='mr-2' containerClassName='flex flex-row'/>)
          }
          {
              status === 'fetched' && data.length > 0 ? (
                data.map((news) => (
                  <div
                    key={news?.name}
                    onClick={() => {
                      if (selectedNews?.name === news?.name) {
                        setSelectedNews(null)
                        return
                      }
                      setSelectedNews(news)
                    }}
                    className={`${selectedNews?.name === news?.name ? 'bg-red-700 text-white' : 'hover:bg-gray-400'} transition duration-150 ease-in-out  hover:text-white text-black cursor-pointer flex-shrink-0 bg-gray-200 h-14 w-32 rounded-full flex items-center justify-center`}
                  >
                    <p className='font-semibold text-sm'>{news?.name}</p>
                  </div>
                ))
              ) : (<div>
                  <Skeleton count={5} enableAnimation = {false} inline width = {120} height={55} borderRadius={'1.5rem'} className='mr-2' containerClassName='flex flex-row mb-1'/>
                  <p className='font-medium text-xs text-cyan-600'>No news found!</p>
                </div>
              )
            }

          {
            status === 'error' && (<div>
              <Skeleton count={5} enableAnimation = {false} inline width = {120} height={55} borderRadius={'1.5rem'} className='mr-2' containerClassName='flex flex-row mb-1'/>
              <p className='font-medium text-xs text-red-600'>Error: {error}</p>
            </div>)
          }
        </div>
      </section>
    </>
  )
}

export default NewsList