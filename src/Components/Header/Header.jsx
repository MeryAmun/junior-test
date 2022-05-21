import React, { Component } from 'react';
import {BsCart,BsArrowCounterclockwise} from '../../Components/Icons/index'
import prodctData from '../dummyData/dummyData'
import './header.css'

export default class Header extends Component {
 
  render() {
    return (
      <div className='header__wrapper'>
          <div className="header__firstchild">
              <div className="child__wrapper">
              <span className="gender">
                  women
              </span>
              <span className="border"></span>
              </div>
              <div className="child__wrapper">
              <span className="gender">
                  men
              </span>
              <span className="border"></span>
              </div>
              <div className="child__wrapper">
              <span className="gender">
                  kids
              </span>
              <span className="border"></span>
              </div>
          </div>
          <div className="header__logo__wrapper">
   <div className="logo__container">
   <span className="">
     <BsArrowCounterclockwise className='logo'/>
   </span>
   <span className="arrow"></span>
   </div>
          </div>
          <div className="header__currency">
            <select>
            <option value="">currency</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
              <option value="JPN">¥ JPN</option>
            </select>
          <span className="cart">
            <BsCart/>
          </span>
          </div>
      </div>
    )
  }
}
