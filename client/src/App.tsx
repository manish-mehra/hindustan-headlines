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
      <div className='max-w-2xl w-full'>
        <Header/>
        <NewsList selectedNews = {selectedNews} setSelectedNews = {setSelectedNews}/>
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
