import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import HomePage from "../pages/home"

export default function Main() {
  return (
    <>
    <HomePage/>
    </>
  )
}
