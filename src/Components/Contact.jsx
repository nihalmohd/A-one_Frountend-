import React, { useState,useEffect } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

  const [name,setname] =useState("")
  const [Email,setEmail] =useState("")
  const [Message,setMessage] =useState("")
  const [status, setStatus] = useState('');

  // console.log(name,Email,Message)
  const sendEmail =async (e) => {
    await alert("Press ok to continue")
    e.preventDefault();

    const templateParams = {
      to_email: Email,
      from_name: name,
      message: Message,
    };

    console.log(templateParams);
    

    emailjs.send(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, templateParams, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus('Email sent successfully!');

        setname("")
        setEmail("")
        setMessage("")
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send email');

        setname("")
        setEmail("")
        setMessage("")
      });
  };



  return (
    <div>
        <div className="w-full h-[500px] ">
        <div className="w-full h-16 mt-5">
              <h1 className='font-Poppins font-semibold text-4xl  text-center'>CONTACT US</h1>
            </div>
        <div className="w-full h-full  flex justify-center items-start">
          <div className="w-8/12 h-80  ">
            <div className="sm:h-full md:w-full md:h-20 md:flex md:justify-between md:items-center md:gap-4 md:p-2 ">
              <input className='w-full mt-1  md:w-1/2 bg-[#f2f2f2] border-none shadow-sm text-black font-Poppins font-semibold ' required type="text" placeholder='Your Name' value={name}  onChange={(e)=>{setname(e.target.value)}}/>
              <input className='w-full mt-1 md:w-1/2 bg-[#f2f2f2] border-none shadow-sm text-black font-Poppins font-semibold' required type="text"  placeholder='Your Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="sm:w-full w-full h-fit mt-1 md:p-1">
              <textarea className='w-full bg-[#f2f2f2] border-none shadow-sm text-black font-Poppins font-semibold' required name="" id="" cols="30" rows="10" placeholder='Your Message' value={Message}  onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              <div className="w-full h-16 flex justify-center items-center">
                <div className="w-56 h-full  flex justify-center items-center">
                  <button className='w-full h-10  rounded-3xl font-Poppins font-semibold text-base bg-yellow-400 hover:font-Poppins hover:bg-transparent hover:border-2 hover:border-yellow-400 'onClick={sendEmail} ><h1>SEND</h1></button>
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