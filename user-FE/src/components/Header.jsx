import React, { useState } from 'react'
import Footer from './Footer'



const Header = () => {

  const [correct, setCorrect] = useState("")

  return (<div className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center bg-slate-800 p-5 md:py-10 md:px-6'>
    <div className='head text-white text-3xl md:text-5xl font-bold  '>Pankaj FinanceGaurd Solutions.</div>
    <div className='hidden md:block md:text-xl'>
      <div className='mb-2'>
        <input type="text" value={correct} onChange={(e) => setCorrect(e.target.value)} className='py-1 px-3 rounded-xl text-black  w-[15vw]' placeholder='Enter Agent website code' />
      </div>
      <div className='text-black'>
        {(correct.trim()) == "Abhishek" && (<a className=' border-3 border-solid border-black px-1.5 bg-green-500 rounded-xl' href="https://ps-agent.onrender.com/" target="_blank">Click</a>)}</div>
    </div>
    <div className='text-xs md:hidden'>
      <span className='mr-2'>
        <input type="text" value={correct} onChange={(e) => setCorrect(e.target.value)} className='py-1 px-3 rounded-xl text-black  w-[50vw]' placeholder='Enter Agent website code' />
      </span>
      <span className='text-black'>
        {(correct.trim()) == "Abhishek" && (<a className=' border-3 border-solid border-black px-1.5 bg-green-500 rounded-xl' href="https://ps-agent.onrender.com/" target="_blank">Click</a>)}</span>
    </div>
  </div>

  )
}

export default Header
