import React, {useState, useEffect} from 'react'
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

  const [apiResponseTimer, setApiResponseTimer] = useState(0)

  useEffect(() => {
    let interval:any = null
    if (status === 'fetching') {
      interval = setInterval(() => {
        setApiResponseTimer(prev => prev + 1)
      }, 1000)
    } else{
      setApiResponseTimer(0)
    }
    return () => clearInterval(interval)
  }, [status])


  return (
    <>
      <section className='overflow-x-auto mb-7'>
      
        <div className='flex flex-row gap-3 mb-2'>
          {
            status === 'fetching' && (<div className='flex flex-col'>
              <Skeleton count={5} inline width = {120} height={55} borderRadius={'1.5rem'} className='mr-2 mb-2' containerClassName='flex flex-row'/>
              <p className='text-cyan-600 font-medium text-xs'>{apiResponseTimer > 7 ? "Oops!😓 It's taking a bit longer than usual. Take a deep breath" : status}</p>
            </div>)
          }
          {
              status === 'fetched' && (
                data.map((news:NewsSource) => (
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
              )
          }
          {
            status === 'fetched' && data.length === 0 && (<div>
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
        {
            status === 'fetched' && data.length > 0 && selectedNews === null && (<div>
              <p className='font-medium text-xs text-orange-600'>Select a news source</p>
            </div>)
          }
      </section>
    </>
  )
}

export default NewsList