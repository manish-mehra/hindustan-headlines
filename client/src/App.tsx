import Header from './components/Header'
import News from './components/News'
import Footer from './components/Footer'
import NewsList from './components/NewsList'

function App() {

  return (
  <>
  <main className="flex flex-col items-center min-h-screen mx-4 overflow-hidden">
    <div className='max-w-xl w-full'>
      <Header/>
      <NewsList/>
      <News/>
    </div>
  </main>
  <Footer/>
  </>
  )
}

export default App
