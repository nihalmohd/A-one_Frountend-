import React, { useState } from 'react'

const Contact = () => {
  const [name,setname] =useState("")
  const [Email,setEmail] =useState("")
  const [Message,setMessage] =useState("")
  // console.log(name,Email,Message)
  return (
    <div>
        <div className="w-full h-[500px] ">
        <div className="w-full h-16 mt-5">
              <h1 className='font-Poppins font-semibold text-4xl  text-center'>CONTACT US</h1>
            </div>
        <div className="w-full h-full  flex justify-center items-start">
          <div className="w-8/12 h-80  ">
            <div className="sm:h-full md:w-full md:h-20 md:flex md:justify-between md:items-center md:gap-4 md:p-2 ">
              <input className='w-full mt-1  md:w-1/2 bg-[#f2f2f2] border-none shadow-sm text-black font-Poppins font-semibold ' type="text" placeholder='Your Name'  onChange={(e)=>{setname(e.target.value)}}/>
              <input className='w-full mt-1 md:w-1/2 bg-[#f2f2f2] border-none shadow-sm text-black font-Poppins font-semibold' type="text" placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="sm:w-full w-full h-fit mt-1 md:p-1">
              <textarea className='w-full bg-[#f2f2f2] border-none shadow-sm text-black font-Poppins font-semibold' name="" id="" cols="30" rows="10" placeholder='Your Message'  onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              <div className="w-full h-16 flex justify-center items-center">
                <div className="w-56 h-full  flex justify-center items-center">
                  <button className='w-full h-10  rounded-3xl font-Poppins font-semibold text-base bg-yellow-400 hover:font-Poppins hover:bg-transparent hover:border-2 hover:border-yellow-400 ' ><h1>SEND</h1></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact