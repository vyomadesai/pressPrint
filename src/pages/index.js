import Head from 'next/head'
import { Inter } from 'next/font/google'
import Carousel from "../pages/carousel"
import slides from '../pages/mock.json';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Carousel slides={slides}/>
    </>
  )
}
