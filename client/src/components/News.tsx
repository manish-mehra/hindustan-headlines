import React from 'react'

const NewsCard: React.FC = () => {

  return(
    <a href="#" className="cursor-pointer p-4 gap-2 flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
      <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className='flex gap-1 text-xs'>
          <span className=''>ndtv</span> | <p className=''>21 March, 2023</p>
        </div>
      </div>
      <div className="w-full rounded-lg md:h-auto overflow-hidden">
        <img className="w-full h-full object-cover" src="https://c.ndtvimg.com/2023-07/67agsk1o_rahul-gandhi-reuters-240_240x180_07_July_23.jpg" alt=""/>
      </div>
    </a>
  )
}

function News() {
  return (
    <>
      <section className='flex flex-col mb-20'>
        <div className='flex flex-row flex-wrap gap-4'>
          <NewsCard/>
        </div>
      </section>
    </>
  )
}

export default News