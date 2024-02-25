import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import copy from 'clipboard-copy';




const Footer = () => {

  
  const handleCopyClick =  () => {
    const phoneNumber = '8111933398'; 
    try {
       copy(phoneNumber);
      console.log('Phone number copied to clipboard:', phoneNumber);
    } catch (error) {
      console.error('Failed to copy phone number:', error);
    }
  };


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
                <div className="w-10 h-10 bg-gray-200 text-[#676767] hover:text-white rounded-full flex justify-center items-center hover:bg-[#333333] cursor-pointer" onClick={()=>{window.location.href = 'https://www.facebook.com/mubashir.nk?mibextid=JRoKGi'}}>
                   <h1 className='font-Poppins  text-lg font-semibold'><FaFacebookSquare /></h1>
                </div>
                  <div className="w-10 h-10 bg-gray-200 text-[#676767] hover:text-white rounded-full flex justify-center items-center hover:bg-[#333333] cursor-pointer"onClick={()=>{window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvbMfXlMrjdZTHgKMSBFvFVcNQNNFPLLxmZhpcZMnxLQrKvQfMHBVrXqsTVtCNWZwRhZsr'}}>
                     <h1 className='font-Poppins  text-lg font-semibold'><MdOutlineAlternateEmail /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 text-[#676767] hover:text-white rounded-full flex justify-center items-center hover:bg-[#333333] cursor-pointer"onClick={handleCopyClick}>
                     <h1 className='font-Poppins  text-base font-semibold'><FaPhoneAlt /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 text-[#676767] hover:text-white rounded-full flex justify-center items-center hover:bg-[#333333] cursor-pointer"onClick={()=>{window.location.href = 'https://www.instagram.com/moidu_mubashir/'}}>
                     <h1 className='font-Poppins  text-lg font-semibold '><FaInstagram /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 text-[#676767] hover:text-white rounded-full flex justify-center items-center hover:bg-[#333333] cursor-pointer"onClick={()=>{window.location.href = 'https://wa.me/message/ZPMXCBTD3DZZG1'}}>
                     <h1 className='font-Poppins  text-xl font-semibold'><FaWhatsapp /></h1>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 text-[#676767] hover:text-white rounded-full flex justify-center items-center hover:bg-[#333333] cursor-pointer"onClick={()=>{window.location.href = 'https://www.google.com/maps/place/A.one+tools+%26+tiller+spares/@10.946684,76.0499058,20.88z/data=!4m15!1m8!3m7!1s0x3ba7b5cd74d00c4d:0x4fa7f6834d8934f7!2sKadampuzha,+Kerala+676553!3b1!8m2!3d10.9417627!4d76.0362897!16s%2Fm%2F043l_ny!3m5!1s0x3ba7b5dce867ec05:0xa4025b7b66fd1882!8m2!3d10.9466628!4d76.0499878!16s%2Fg%2F11vcxgzwyh?hl=en&entry=ttu'}}>
                     <h1 className='font-Poppins text-lg font-semibold'><FaLocationDot /></h1>
                  </div>
                </div>
                 
                </div>
              </div>
              <div className="w-full h-2  flex justify-center items-center mt-2">
                <div className="md:w-10/12 h-8 flex justify-end items-center">
                  <h1 className='font-Poppins text-[#676767] text-sm text-start '>Provided by <span className='underline hover:cursor-pointer hover:text-gray-200a'onClick={()=>{window.location.href = 'https://github.com/nihalmohd'}}>Mohd Nihal</span></h1>
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