import React from 'react'

function NewsList() {
  return (
    <>
      <section className='overflow-x-auto mb-7'>
        <div className='flex flex-row gap-3'>
          <div className='hover:bg-red-700 hover:text-white text-black cursor-pointer flex-shrink-0 bg-gray-200 h-14 w-32 rounded-full flex items-center justify-center'>
            <p className='font-semibold text-sm'>NDTV News</p>
          </div>
          <div className='flex-shrink-0 bg-gray-200 h-14 w-36 rounded-full flex items-center justify-center'>
            <p className='font-semibold text-black text-sm'>Times Now</p>
          </div>
          <div className='flex-shrink-0 bg-gray-200 h-14 w-32 rounded-full flex items-center justify-center'>
            <p className='font-semibold text-black text-sm'>Times of India</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsList