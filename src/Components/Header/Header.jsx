import React, { Component } from 'react';
import { BsCart, BsArrowCounterclockwise } from '../../Components/Icons/index'
import prodctData from '../dummyData/dummyData';
import CartItemCard from '../../Cards/CartItemCard/CartItemCard'
import './header.css'

export default class Header extends Component {

  render() {
    return (
      <div className='header__wrapper'>
        <div className="header__firstchild">
          {
            prodctData.map((data, index) => (
              <div className="child__wrapper" key={index}>

                <button className="gender">
                  {data.gender}
                </button>
                <span className="border"></span>
              </div>
            ))
            }
        </div>
        <div className="header__logo__wrapper">
          <div className="logo__container">
            <span className="">
              <BsArrowCounterclockwise className='logo' />
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
            <BsCart />
          </span>
        </div>
        <CartItemCard className='cart__overlay'/>
      </div>
    )
  }
}
