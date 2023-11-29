import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className="w-full h-[70px] bg-yellow-400 z-10 fixed flex items-center justify-between">
           <div className="w-52 h-12 ml-2">
            {/* <img className='w-full h-full object-cover' src="\Images\Layout.png" alt="No Image founded"  /> */}
            <img className='w-full h-full object-cover' src="\Images\Black.png" alt="No Image founded"  />
           </div>
           <div className="w-[450px]   h-12 mr-2 flex justify-end items-center p-1 ">
            <div className="w-fit h-10 flex gap-2">
              <div className="w-24 h-10  font-Poppins flex justify-center items-center">
                <h1 className='font-semibold text-base text-black'>HOME</h1>
              </div>
              <div className="w-24 h-10 font-Poppins flex justify-center items-center">
                <h1 className='font-semibold text-base text-black'>SERVICE</h1>
              </div>
              <div className="w-24 h-10 font-Poppins flex justify-center items-center">
                <h1 className='font-semibold text-base text-black'>ABOUT</h1>
              </div>
              <div className="w-24 h-10 font-Poppins flex justify-center items-center">
                <h1 className='font-semibold text-base text-black'>CONTACT</h1>
              </div>
            </div>

           </div>
        </div>
    </div>
  )
}

export default Nav