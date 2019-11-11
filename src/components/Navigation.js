import React from 'react';

const Navigation = () => {
   return (
      <div className="navigation">
         <nav className="navigation__nav">
            <ul className="navigation__list">
               <li className="navigation__item"><a className="navigation__link" href="#">Home</a></li>
               <li className="navigation__item"><a className="navigation__link" href="#">Articles</a></li>
               <li className="navigation__item"><a className="navigation__link" href="#">Projects</a></li>
               <li className="navigation__item"><a className="navigation__link" href="#">Contact</a></li>
            </ul>
         </nav>
      </div>
   )
}
export default Navigation