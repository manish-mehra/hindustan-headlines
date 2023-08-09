import {useState} from 'react'
import { NewsSource } from './types'

import Header from './components/Header'
import News from './components/News'
import Footer from './components/Footer'
import NewsList from './components/NewsList'


function App() {

  const [selectedNews, setSelectedNews] = useState<NewsSource | null>(null)

  return (
  <>
    <main className="flex flex-col items-center min-h-screen mx-4 overflow-hidden">
      <div className='max-w-xl w-full'>
        <Header/>
        <NewsList selectedNews = {selectedNews} setSelectedNews = {setSelectedNews}/>
        {
          selectedNews === null && <h3 className='font-medium text-cyan-500'>Select a news source to view news</h3>
        }
        {
          selectedNews !== null && <News selectedNews = {selectedNews}/>
        }
      </div>
    </main>
  <Footer/>
  </>
  )
}

export default App
