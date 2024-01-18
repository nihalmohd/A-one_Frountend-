import React, { useEffect, useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [color, setColor] = useState(false)
  const [isMenu,setisMenu] = useState(false)

  const changColor = () => {
    if (window.scrollY >= 430) {
      setColor(true)
    } else {
      setColor(false)
    }
    window.addEventListener("scroll", changColor)
  }

  useEffect(() => {
    window.addEventListener("scroll", changColor);
    return () => {
      window.removeEventListener("scroll", changColor);
    };
  }, []);

  const clickFuction = ()=>{
    setisMenu(!isMenu)
  }

  return (
    <nav>
      <div className={`w-full h-[70px] ${color ? "bg-yellow-400" : "bg-transparent"} z-10 fixed flex items-center justify-between`}>
        <div className="w-72 h-10 md:w-52 md:h-12 md:ml-2  ">
          {
            color ? (
              <>
                <img className='w-full h-full object-cover' src="\Images\Black.png" alt="No Image founded" />

              </>
            ) : (
              <>
                <img className='w-full h-full object-cover' src="\Images\Layout.png" alt="No Image founded" />
              </>
            )
          }
        </div>
        <div className="hidden md:w-[450px]   md:h-12 md:mr-2 md:flex md:justify-end md:items-center md:p-1 ">
          <div className="w-fit h-10 flex gap-2">
            <div className="w-24 h-10  font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}>HOME</h1>
            </div>
            <div className="w-24 h-10 font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}>SERVICE</h1>
            </div>
            <div className="w-24 h-10 font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}>ABOUT</h1>
            </div>
            <div className="w-24 h-10 font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}>CONTACT</h1>
            </div>
          </div>

        </div>
        <div className="w-full h-12  flex justify-end items-center p-1 md:hidden ">
          <div className="w-20 h-full  flex justify-center items-center p-1 "onClick={clickFuction}>  
            <h1 className={`w-full h-full ${color?"text-black":"text-white"} text-4xl flex justify-center items-center`}>{
              isMenu?(<><IoClose /></>):(<><AiOutlineMenuFold /></>)
            }</h1>
          </div>
        </div>
        {
          isMenu?(<>
          <div className="w-full h-96 bg-white absolute top-16 shadow-xl">
            <div className="w-full h-[77px] border border-black  ">
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-3xl font-semibold'>HOME</h1>
              </div>
            </div>
            <div className="w-full h-[77px] border border-black  ">
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-3xl font-semibold'>SERVICE</h1>
              </div>
            </div>
            <div className="w-full h-[77px] border border-black  ">
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-3xl font-semibold'>ABOUT</h1>
              </div>
            </div>
            <div className="w-full h-[77px] border border-black  ">
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-3xl font-semibold'>CONTACT</h1>
              </div>
            </div>
            <div className="w-full h-[77px] border border-black  ">
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-5xl font-bold'><IoClose /></h1>
              </div>
            </div>
          </div>
          </>):(<></>)
        }
      </div>
    </nav>
  )
}

export default Nav