import React, { Component } from 'react';
import {BsCart,BsArrowCounterclockwise} from '../../Components/Icons/index'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header__wrapper'>
          <div className="header__firstchild">
              <div className="child__wrapper">
              <span className="women">
                  women
              </span>
              <span className="border"></span>
              </div>
              <div className="child__wrapper">
              <span className="men">
                  men
              </span>
              <span className="border"></span>
              </div>
              <div className="child__wrapper">
              <span className="children">
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
              <option value="USD">$</option>
            </select>
          <span className="cart">
            <BsCart/>
          </span>
          </div>
      </div>
    )
  }
}
