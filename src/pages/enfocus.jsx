import React from 'react'
import Image from "next/image"
import Link from "next/link"
import PF_1 from '../../public/productImages/enfocus/PitStop_Pro.jpg'
import PF_2 from '../../public/productImages/enfocus/PitStop_Server.jpg'
import A_1 from '../../public/productImages/enfocus/Switch.jpg'
import A_2 from '../../public/productImages/enfocus/Connect_ALL.jpg'

// className="p-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"

function enfocus() {
  return ( <>
   <div className='p-10 flex flex-wrap mb-4'>
      <h1 className='lg:w-1/2 text-center text-3xl uppercase text-[#00d1f4]'>Pre-Flights & Editing PDF</h1>
      <h1 className='lg:w-1/2 text-center text-3xl uppercase text-[#00d1f4]'>Automation</h1>
    </div>
    <div className="p-4 flex flex-wrap justify-between">
        <div className="flex flex-col w-full m-6 overflow-hidden sm:w-1/5">
            <Link href="/">
            <Image
            src={PF_1}
            alt="EnfocusProduct1"
            className="pl-5 pr-5 mx-auto h-40 m-6"
            // width="200"
            // height="200"
            />
            </Link>
            <a href="#">
                <h5 className="pb-5 px-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">PitStop Pro</h5>
            </a>
            <p className="p-3 text-center font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="p-3 text-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
            </a>
        </div>
        <div className="flex flex-col w-full m-6 overflow-hidden sm:w-1/5">
            <Link href="/">
            <Image
            src={PF_2}
            alt="EnfocusProduct2"
            className="pl-5 pr-5 mx-auto h-40 m-6"
            // width="200"
            // height="200"
            />
            </Link>
            <a href="#">
                <h5 className="pb-5 px-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">PitStop Server</h5>
            </a>
            <p className="p-3 text-center font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="p-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
            </a>
        </div>
        <div className="flex flex-col w-full m-6 overflow-hidden sm:w-1/5">
            <Link href="/">
            <Image
            src={A_1}
            alt="EnfocusProduct1"
            className="pl-5 pr-5 mx-auto h-40 m-6"
            // width="300"
            // height="300"
            />
            </Link>
            <a href="#">
                <h5 className="pb-5 px-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Switch</h5>
            </a>
            <p className="p-3 text-center font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="p-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
            </a>            
        </div>
        <div className="flex flex-col w-full m-6 overflow-hidden sm:w-1/5">
            <Link href="/">
            <Image
            src={A_2}
            alt="EnfocusProduct2"
            className="pl-5 pr-5 mx-auto h-40 m-6"
            // width="200"
            // height="200"
            />
            </Link>
            <a href="#">
                <h5 className="pb-5 px-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Connect All</h5>
            </a>
            <p className="p-3 text-center font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="p-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
            </a>
        </div>
    </div> 
  </>
  )
}
export default enfocus
