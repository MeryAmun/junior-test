import React, { Component } from 'react';
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
                  children
              </span>
          </div>
          <div className="header__logo">

          </div>
      </div>
    )
  }
}
