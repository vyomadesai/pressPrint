import React, { Fragment, useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { Menu } from '@headlessui/react'
import Link from "next/link"
import logo from '../public/thinkprint_logo.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

  
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNavbar = () => {
        setMenuOpen(!menuOpen);
    }

  return (
   <nav className="w-full h-24 shadow-xl bg-[#000000] p-2">
    <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
    <Link href="/">
        <Image
        src={logo}
        alt="Logo"
        width="70"
        height="70"
        className="ml-10 cursor-pointer"
        />
    </Link>
    <div className="hidden sm:flex">
        <ul className="hidden sm:flex">
            <Link href="/products">
                <Menu as="div" className="relative inline-block text-left z-50">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30">
                    <li className="ml-10 uppercase text-xl text-[#ffffff] hover:text-[#00d1f4]">
                    PRODUCTS
                    </li>
                    <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-[#00d1f4]"
                    aria-hidden="true"
                    />
                    </Menu.Button>
                    </div>
                    <Menu.Items className="absolute mt-3 w-48 rounded-md bg-white shadow-lg">
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center border-[#00d1f4] object-center rounded-md px-2 py-2 text-sm`}
                            >
                                EPSON
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                ENFOCUS
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                             CGS
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                            CADLINK
                            </button>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </Link>
            <Link href="/solution">
            <Menu as="div" className="relative inline-block text-left z-50">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <li className='ml-10 uppercase text-xl hover:text-[#00d1f4] text-[#ffffff]'>
                    SOLUTIONS
                    </li>
                    <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-[#00d1f4] hover:text-[#00d1f4]"
                    aria-hidden="true"
                    />
                    </Menu.Button>
                    </div>
                    <Menu.Items className="absolute mt-3 w-64 rounded-md bg-white shadow-lg">
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center border-[#00d1f4] object-center rounded-md px-2 py-2 text-sm`}
                            >
                                PRINT AND PUBLISHING INUSTRY
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                TEXTILE INDUSTRY
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-[#00d1f4] text-white' : 'text-black-300'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                            GIFTING INDUSTRY
                            </button>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </Link>
            <Link href="/about">
                <li className='ml-10 uppercase text-xl hover:text-[#00d1f4] text-[#ffffff]'>
                    ABOUT</li>
            </Link>
            <Link href="/news">
                <li className='ml-10 uppercase text-xl hover:text-[#00d1f4] text-[#ffffff]'>
                    NEWS</li>
            </Link>
            <Link href="/contactus">
                <li className='ml-10 uppercase text-xl hover:text-[#00d1f4] text-[#ffffff]'>
                    CONTACT US</li>
            </Link>
        </ul>
    </div>
    <div onClick={handleNavbar} className="sm:hidden cursor-pointer pl-24">
    <AiOutlineMenu size={25} className="text-[#ffffff]"/>
    </div>
    </div>
    <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[45%] sm:hidden z-50 h-screen bg-[#e5e7eb] p-10 ease-in duration-500" 
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
    }
    >
        <div className="flex w-full items-center justify-end">
            <div onClick={handleNavbar} className="sm:hidden cursor-pointer">
            <AiOutlineClose size={30} className="text-[#000000] hover:text-[#00d1f4]"/>
            </div>
        </div>
        <div className="flex-col py-4">
            <ul>
                <Link href="/products">
                <li onClick={() => setMenuOpen(false)} className="py-4 cusrsor-pointer hover:text-[#00d1f4]">
                    PRODUCTS
                </li>
                </Link>
                <Link href="/solutions">
                <li onClick={() => setMenuOpen(false)} className="py-4 cusrsor-pointer hover:text-[#00d1f4]">
                    SOLUTIONS
                </li>
                </Link>
                <Link href="/about">
                <li onClick={() => setMenuOpen(false)} className="py-4 cusrsor-pointer hover:text-[#00d1f4]">
                    ABOUT
                </li>
                </Link>
                <Link href="/news">
                <li onClick={() => setMenuOpen(false)} className="py-4 cusrsor-pointer hover:text-[#00d1f4]">
                    NEWS
                </li>
                </Link>
                <Link href="/contactus">
                <li onClick={() => setMenuOpen(false)} className="py-4 cusrsor-pointer hover:text-[#00d1f4]">
                    CONTACT
                </li>
                </Link>
            </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
        <AiOutlineInstagram size={30} className="cursor-pointer hover:text-[#00d1f4] text-[#000000]"/>
        <AiOutlineFacebook size={30} className="cursor-pointer hover:text-[#00d1f4] text-[#000000]"/>
        <AiOutlineTwitter size={30} className="cursor-pointer hover:text-[#00d1f4] text-[#000000]"/>
        </div>
    </div>
   </nav>
  );
};

export default Navbar;
