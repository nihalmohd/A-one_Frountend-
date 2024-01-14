import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <div >
      <div className="w-full md:h-[225px] bg-[#333333] p-2">
        <div className="w-full h-full md:flex">
          <div className=" md:w-8/12 h-full  flex ">
            <div className="w-1/2 h-full flex justify-center items-center ">
              <div className="w-10/12 h-full  ">
                <div className="w-full h-16  flex justify-center items-end ">
                  <div className="w-11/12 h-10 flex  items-end  ">
                    <h1 className='font-Poppins text-[#676767] text-lg font-semibold'>CONTACT</h1>
                  </div>
                </div>
                <div className="w-full h-fit  border-r border-[#353535] flex justify-center items-center ">
                  <div className="w-11/12 h-full ">
                    <h1 className='font-Poppins text-[#676767] text-sm text-start'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full  ">
            <div className="w-10/12 h-full flex justify-center items-start  pt-6">
                <div className="w-full h-fit flex justify-start items-center mt-10 ">
                  <div className="w-11/12 h-5/6  ">
                    <h1 className='font-Poppins text-[#676767] text-sm text-start'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-16 md:w-5/12 md:h-full p-1">
            <div className="w-full h-full ">
              <div className="hidden md:w-full h-16  md:flex md:justify-center md:items-center">
                <div className="w-96 h-10  flex justify-end items-end">
                <h1 className='font-Poppins text-[#676767] text-lg font-semibold'>FOLLOW US</h1>
                </div>
              </div>
              <div className="w-full h-10  flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center">
                <div className="w-96 h-10  flex justify-center md:justify-end items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                   <h1 className='font-Poppins text-[#676767] text-lg font-semibold'><FaFacebookSquare /></h1>
                </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                     <h1 className='font-Poppins text-[#676767] text-lg font-semibold'><MdOutlineAlternateEmail /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                     <h1 className='font-Poppins text-[#676767] text-base font-semibold'><FaPhoneAlt /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                     <h1 className='font-Poppins text-[#676767] text-lg font-semibold'><FaInstagram /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                     <h1 className='font-Poppins text-[#676767] text-xl font-semibold'><FaWhatsapp /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                     <h1 className='font-Poppins text-[#676767] text-lg font-semibold'><FaLocationDot /></h1>
                  </div>
                </div>
                 
                </div>
              </div>
              <div className="w-full h-2  flex justify-center items-center mt-2">
                <div className="md:w-10/12 h-8 flex justify-end items-center">
                  <h1 className='font-Poppins text-[#676767] text-sm text-start '>Provided by <span>Mohd Nihal</span></h1>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer