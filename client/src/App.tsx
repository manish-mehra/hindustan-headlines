import React from 'react'


function App() {

  return (
  <>
  <main className="flex flex-col items-center min-h-screen mx-4 overflow-hidden">
    <div className='max-w-xl w-full'>
      <section className='flex flex-row items-center justify-center mt-5 mb-2 cursor-pointer'>
        <h1 className="text-red-700 font-bold text-6xl">HH</h1>
        <h2 className='text-red-900 font-medium text-sm leading-4'>Hindustan <br/> Headlines</h2>
      </section>

      <section className='mb-10 flex flex-col'>
        <p className='text-center text-sm'>Curated Collection of Latest News Headlines</p>
        <a href='https://github.com/manish-mehra/hindustan-headlines' target='_blank' className='text-xs text-right underline pt-1'><span className='text-md'>&#9733;</span>github</a>
      </section>

      <section className='overflow-x-auto mb-7'>
        <div className='flex flex-row gap-3'>
          <div className='cursor-pointer flex-shrink-0 bg-gray-200 h-14 w-32 rounded-full flex items-center justify-center'>
            <p className='font-medium text-black'>NDTV News</p>
          </div>
          <div className='flex-shrink-0 bg-gray-200 h-14 w-32 rounded-full flex items-center justify-center'>
            <p className='font-medium text-black'>Times Now</p>
          </div>
          <div className='flex-shrink-0 bg-gray-200 h-14 w-32 rounded-full flex items-center justify-center'>
            <p className='font-medium text-black'>Times of India</p>
          </div>
        </div>
      </section>

      <section className='flex flex-col mb-20'>

        <div className='flex flex-row flex-wrap gap-4'>
          <a href="#" className="cursor-pointer p-4 gap-2 flex flex-col flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
            <div className="flex flex-col justify-between leading-normal">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className='flex gap-1 text-xs'>
                <span className=''>NDTV News</span> | <p>21 March, 2023</p>
              </div>
            </div>
            <div className="w-full rounded-lg md:h-auto overflow-hidden">
              <img className="w-full h-full object-cover" src="https://c.ndtvimg.com/2023-07/67agsk1o_rahul-gandhi-reuters-240_240x180_07_July_23.jpg" alt=""/>
            </div>
          </a>

          <a href="#" className="p-4 gap-2 flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
            <div className="flex flex-col justify-between leading-normal">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className='flex gap-1 text-xs'>
                <span className=''>NDTV News</span> | <p>21 March, 2023</p>
              </div>
            </div>
          </a>

        </div>
      </section>
    </div>
  </main>
  <footer className='bg-gray-100 py-2'>
    <p className='text-center text-xs'>Disclaimer: This project is intended for personal use only.</p>
  </footer>
  </>
  )
}

export default App
