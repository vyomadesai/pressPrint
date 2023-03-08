import React, { useState } from 'react'
const FORM_ENDPOINT = ""; // TODO - fill on the later step

function Contact() {
const [submitted, setSubmitted] = useState(false);
const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };


  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }


  return ( <>
    <div className='p-10 justify-around'>
    <h1 className='text-center text-5xl uppercase text-[#00d1f4]'>Contact</h1>
    </div>
    <div className='max-w-full'>
    <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            className='bg-white bg-gradient-to-l from-[#00d1f4] px-8 pt-6 pb-8 mb-4'>
            <div class="mb-4">
                <label class="block text-black-200 uppercase text-sm mb-2" for="username">
                    Your Name
                </label>
                <input 
                className="shadow appearance-none border rounded border-[#00d1f4] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" 
                type="text" 
                name="name" 
                required/>
            </div>
            <div class="mb-6">
                <label class="block text-black-200 uppercase text-sm mb-2" for="email">
                    Email
                </label>
                <input 
                className="shadow appearance-none border rounded border-[#00d1f4] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                name="email"
                required
                />
            </div>
            <div class="mb-6">
                <label class="block text-black-200 uppercase text-sm mb-2" for="message">
                    Your Message
                </label>
                <textarea 
                className="shadow appearance-none border rounded border-[#00d1f4] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="message" 
                name="message"
                required
                />
            </div>
            <div className="mb-3 pt-0 text-center">
                <button
                className="bg-white hover:bg-[#00d1f4] hover:text-white text-cyan-800 font-bold uppercase text-sm px-6 py-3 border rounded border-[#00d1f4] hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                >
                Send a message
                </button>
            </div>
            <p class="text-right text-black-500 text-xs">
                &copy;2023 Thinkprint. All rights reserved.
            </p>
            </form>
    </div>
    </>
  );
};

export default Contact
