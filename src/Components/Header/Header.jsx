import React, { Component } from 'react';
import {BsCart} from '../../Components/Icons/index'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header__wrapper'>
          <div className="header__firstchild">
              <div className="women__wrapper">
              <span className="women">
                  women
              </span>
              <span className="border"></span>
              </div>
              <span className="men">
                  men
              </span>
              <span className="children">
                  kids
              </span>
          </div>
          <div className="header__logo__wrapper">
   <div className="logo__container">
   <span className="line"></span>
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
