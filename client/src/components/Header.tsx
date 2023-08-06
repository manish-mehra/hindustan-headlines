import React from 'react'

function Header() {
  return (
    <>
    <section className='flex flex-row items-center justify-center mt-5 mb-2 cursor-pointer'>
        <h1 className="text-red-700 font-bold text-6xl">HH</h1>
        <h2 className='text-red-900 font-semibold text-sm leading-4'>Hindustan <br/> Headlines</h2>
      </section>

      <section className='mb-10 flex flex-col'>
        <p className='text-center font-medium text-sm'>Curated Collection of Latest News Headlines</p>
        <a href='https://github.com/manish-mehra/hindustan-headlines' target='_blank' className='text-xs text-right underline pt-1'><span className='text-md'>&#9733;</span>github</a>
      </section>
    </>
  )
}

export default Header