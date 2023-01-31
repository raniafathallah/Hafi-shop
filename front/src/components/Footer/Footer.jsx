import { Divider } from 'primereact/divider'
import React from 'react'
import "./Footer.css";
export const Footer = () => {
  return (
    <>
    <div className='footer-block'>
    <div className='footer-container'>
    <div className='footer-links'>
      <strong className='footer-link'>About Us</strong>
      <a className='footer-link'>Careers</a>
      <a className='footer-link'> Privacy policy</a>
    </div>
    <div className='footer-links'>
      <strong className='footer-link'>Our service</strong>
      <a className='footer-link'>Payment methods</a>
      <a className='footer-link'> Delivery tracking</a>
    </div>





    <div className='footer-links'>
      <strong className='footer-link'>Help & advice</strong>
      <a className='footer-link'>Blog</a>
      <a className='footer-link'> Store Locator</a>
      <a className='footer-link'>  Terms & Conditions</a>
    </div>

    <div className='footer-links'>
      <strong className='footer-link'>Contacts</strong>
      <a className='footer-link'>  <i className='pi pi-phone'>  </i>15135</a>
      <a className='footer-link'> <i className='pi pi-envelope'> </i>info@hubfurniture.com.eg </a>

      <strong className='footer-link'>FOLLOW US</strong>
       <div className='social-links'>
        <a> <i className='pi pi-facebook'> </i></a>
        <a> <i className='pi pi-twitter'> </i></a>
        <a> <i className='pi pi-instagram'> </i></a>
        <a> <i className='pi pi-youtube'> </i></a>
       </div>
    </div>

  
    </div>
    <Divider/>
     <div className='copyright-container'>
         Copyright © 2023 Hafi Furniture, Inc. All rights reserved. 
     </div>
     </div>
    </>
  )
}

