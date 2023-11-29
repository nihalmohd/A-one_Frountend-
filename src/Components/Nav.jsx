import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [color, setColor] = useState(false)

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
  return (
    <nav>
      <div className={`w-full h-[70px] ${color ? "bg-yellow-400" : "bg-transparent"} z-10 fixed flex items-center justify-between`}>
        <div className="w-52 h-12 ml-2">
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
        <div className="w-[450px]   h-12 mr-2 flex justify-end items-center p-1 ">
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
      </div>
    </nav>
  )
}

export default Nav