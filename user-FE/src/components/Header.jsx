import React, { useState } from 'react'
import Footer from './Footer'



const Header = () => {

const [correct, setCorrect] = useState("")

  return (<div className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center bg-slate-800 p-5 md:py-10 md:px-6'>
    <div className='head text-white text-3xl md:text-5xl font-bold  '>Pankaj FinanceGaurd Solutions.</div>
    <div className='text-xs md:text-xl'>
      <span className='mr-2'>
        <input type="text" value={correct} onChange={(e)=>setCorrect(e.target.value)} className='py-1 px-3 rounded-xl text-black ]' placeholder='Enter Agent website code' />
      </span>
      <span className='p-1 text-black'>
        {correct=="Abhishek"? (<a className='px-1.5 bg-green-500 rounded-xl' href="https://ps-agent.onrender.com/" target="_blank">Click</a>) : (<span className='bg-red-600 px-1.5 rounded-xl'>Incorrect</span>)}</span>
    </div>
  </div>
    
  )
}
    
export default Header
