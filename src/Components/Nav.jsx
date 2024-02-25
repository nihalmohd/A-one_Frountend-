import React, { useEffect, useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

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

    const scrollToTop = () => {
    setisMenu(false)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToService = () => {
      setisMenu(false)
      const maxScrollHeight = 450; // Set your desired maximum scroll height
       
      const targetScrollHeight = Math.min(document.body.scrollHeight, maxScrollHeight);
    
      window.scrollTo({ top: targetScrollHeight, behavior: 'smooth' });
    };
    const scrollToAbout = () => {
      setisMenu(false)
      const maxScrollHeight = 2020; // Set your desired maximum scroll height
       
      const targetScrollHeight = Math.min(document.body.scrollHeight, maxScrollHeight);
    
      window.scrollTo({ top: targetScrollHeight, behavior: 'smooth' });
    };
    const scrollToContact = () => {
      setisMenu(false)
      const maxScrollHeight = 2450; // Set your desired maximum scroll height
       
      const targetScrollHeight = Math.min(document.body.scrollHeight, maxScrollHeight);
    
      window.scrollTo({ top: targetScrollHeight, behavior: 'smooth' });
    };
    const scrollToAboutLG = () => {
      setisMenu(false)
      const maxScrollHeight = 1210; // Set your desired maximum scroll height
       
      const targetScrollHeight = Math.min(document.body.scrollHeight, maxScrollHeight);
    
      window.scrollTo({ top: targetScrollHeight, behavior: 'smooth' });
    };
    const scrollToContactLG = () => {
      setisMenu(false)
      const maxScrollHeight = 1680; // Set your desired maximum scroll height
       
      const targetScrollHeight = Math.min(document.body.scrollHeight, maxScrollHeight);
    
      window.scrollTo({ top: targetScrollHeight, behavior: 'smooth' });
    };

  return (
    <nav className=''>
      <div className={`w-full h-[70px] ${color ? "bg-yellow-400" : "bg-[#17181a]"} z-50  fixed flex items-center justify-between`}>
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
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`} onClick={scrollToTop}>HOME</h1>
            </div>
            <div className="w-24 h-10 font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}onClick={scrollToService}>SERVICE</h1>
            </div>
            <div className="w-24 h-10 font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}onClick={scrollToAboutLG}>ABOUT</h1>
            </div>
            <div className="w-24 h-10 font-Poppins flex justify-center items-center">
              <h1 className={`font-semibold text-base ${color ? "text-black" : "text-white"}`}onClick={scrollToContactLG}>CONTACT</h1>
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
          <div className="w-full h-fit bg-white absolute top-16 shadow-xl">
            <div className="w-full h-[50px] border border-black  "onClick={scrollToTop}>
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-2xl font-semibold'>HOME</h1>
              </div>
            </div>
            <div className="w-full h-[50px] border border-black  "onClick={scrollToService}>
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-2xl font-semibold' >SERVICE</h1>
              </div>
            </div>
            <div className="w-full h-[50px] border border-black  "onClick={scrollToAbout}>
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-2xl font-semibold'>ABOUT</h1>
              </div>
            </div>
            <div className="w-full h-[50px] border border-black  "onClick={scrollToContact}>
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-2xl font-semibold' >CONTACT</h1>
              </div>
            </div>
            <div className="w-full h-[50px] border border-black" onClick={()=>{setisMenu(false)}}>
              <div className="w-full h-full  flex justify-center items-center">
                <h1 className='flex justify-center items-center font-Poppins text-5xl font-bold'><IoIosArrowUp /></h1>
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