import React from 'react'
import Chevron from './Chevron'
const Header = () => {
   return (
      <header className="header">
         <section className="header__content">
            <div className="header__text-box">
               <h1 className="heading-primary">
                  <span className="animated-pop heading-primary--main">solutions</span>
                  <span className="animated-pop heading-primary--sub">web Design</span>
               </h1>
               <a href="#" className="animated-pop btn">Learn more!</a>
            </div>
         </section>
         <Chevron />
      </header>
   )
}
export default Header