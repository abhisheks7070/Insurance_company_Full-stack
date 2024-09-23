import React, { useState } from 'react'
import Footer from './Footer'
import header from '../../assets/header.jpeg'



const Header = () => {

  const [correct, setCorrect] = useState("")

  return (
  <>
  <div className='bg-slate-700 header h-[25vh] lg:h-[40vh] w-[100vw] flex justify-center items-center'>
    <img className=' object-fill h-[20vh] lg:h-[35vh] w-[99vw] rounded-2xl' src= {header} alt="" />
    {/* <div className='head text-white text-3xl md:text-5xl font-bold  '>Pankaj FinanceGaurd Solutions.</div> */}
    </div>
    <div>
      
    <div className='bg-slate-700 text-xs md:text-xl flex justify-center items-center'>
      <div className=' py-3'>
        <input type="text" value={correct} onChange={(e) => setCorrect(e.target.value)} className='placeholder-black py-1 px-3 rounded-xl text-black w-auto' placeholder='Enter Agent website code' />
      </div>
      <div className='text-black py-3'>
        {(correct.trim()) == "Pankaj_Singh" && (<a className=' border-3 border-solid border-black px-1.5 bg-green-500 rounded-xl' href="https://ps-agent.onrender.com/" target="_blank">Click</a>)}</div>
    </div>
  </div>
  </>

  )
}

export default Header
