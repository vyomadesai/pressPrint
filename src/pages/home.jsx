import React from 'react'
import Carousel from "../pages/carousel";
import Parallex from "../pages/homeparallex";
import slides from '../pages/resource.json';

function home() {
  return (
    <>
    <section>
        <Parallex/>
    </section>
    <section>
         <Carousel slides={slides}/>
    </section>
    <section>
        <footer>
            
        </footer>
    </section>
    </>
  )
}

export default home
