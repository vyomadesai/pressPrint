import React from 'react'
import CategoryCard from '../../components/category';
import styles from '../styles/Home.module.css';
import img2 from '../../public/productImages/productPage/dee.jpg'
import img3 from '../../public/productImages/productPage/mu.jpg'
import img4 from '../../public/productImages/productPage/Epson_Logo.png'
import img5 from '../../public/productImages/productPage/mae.jpg'
import img6 from '../../public/productImages/productPage/markus.jpg'


function products() {
  return ( <>
    <div className='p-10 justify-around'>
    <h1 className='text-center text-3xl uppercase text-[#00d1f4]'>Our Products</h1>
    <p className='p-3 flex sm:justify-between'>Think Print comprises of Venus Infotech and Basis Systems. We offer Products, Services and Solutions for the Print Industry.
      We cover many verticals including Newspapers, Packaging, Commercial Print, Photography, Textile & Gifting.
      For nearly 40 years we have been serving our customers, many of whom are repeat customers, with our diligence, sincerity and dedication.
    </p>
    </div>
    
    <div className={styles.small}>
    <CategoryCard image={img3} name="EPSON" />
    <CategoryCard image={img2} name="ENFOCUS" />
    <CategoryCard image={img6} name="CGS" />
    <CategoryCard image={img5} name="CADLink" /> 
  </div>
  </>
  )
}

export default products
