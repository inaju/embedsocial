import React from 'react'
import './Footer.css'

import embed_white from '../assets/embed_white.png'
function Footer() {
    return (
       <div className="footer__container padding-left padding-right">
           <div className="footer__container-info footer__item">

           <span className="footer__container-info__logo">
           <img src={embed_white} alt="" srcset="" />
            <h3>embedsocial</h3>

           </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae labore aspernatur ullam necessitatibus minima, temporibus alias iste corrupti quia voluptas ab tempore enim unde?</p>
           </div>

           <div className="footer__item footer__item-links">
               <h3>Product</h3>
               <a href=""> Reviews Management</a>
               <a href=""> Embed Instagram stories</a>
               <a href=""> Display Instagram feeds</a>
               <a href=""> Send email requests</a>

           </div>



           <div className="footer__item footer__item-links">
               <h3>Product</h3>
               <a href=""> About EmbedSocial</a>
               <a href=""> Brand Guidelines</a>
               <a href=""> Press Kit</a>
               <a href=""> Support</a>

           </div>


           <div className="footer__item footer__item-links">
               <h3>Product</h3>
               <a href=""> Shopify</a>
               <a href=""> Magento</a>
               <a href=""> Squarespace</a>
               <a href=""> Intercom</a>
               <a href=""> Slack</a>



           </div>

           <div className="footer__item footer__item-links">
               <h3>integrations</h3>
               <a href=""> Shopify</a>
               <a href=""> Magento</a>
               <a href=""> Squarespace</a>
               <a href=""> Intercom</a>
               <a href=""> Slack</a>







           </div>


       </div>
    )
}

export default Footer
