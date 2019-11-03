import React from 'react'
import headerLogo from '../assets/images/logo-green-2x.png'

const Header = () => {
   return (
      <header className="header">
         <div className="header__logo-box">
            <img className="header__logo" src={headerLogo} alt="Logo" />
         </div>
         <div className="header__text-box">
            <h1 className="heading-primary">
               <span className="heading-primary--main">solutions</span>
               <span className="heading-primary--sub">web Design</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">Learn more!</a>
         </div>
      </header>
   )
}
export default Header