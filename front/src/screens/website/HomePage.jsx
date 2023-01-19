import { Divider } from 'primereact/divider'
import React from 'react'
import { CarouselD } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { Newproducts } from '../../components/Newproducts'
import { ShopByItem } from '../../components/ShopByItem'

const HomePage = () => {
  return (
     <>
      <div className='carousel-container'>
         <CarouselD/>
      </div>
      <div className='product-by-item'>
        <ShopByItem/>  
        <Divider />
        <Newproducts/>
      </div>
     </>
  )
}

export default HomePage