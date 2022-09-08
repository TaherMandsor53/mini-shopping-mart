import React from 'react';
import shoppingIcon from '../../assets/shoppingMartIcon.png';
import userIcon from '../../assets/userIcon.png';
import shoppingCartIcon from '../../assets/shoppingCartIcon.png';

export default function Header() {
  return (
    <header className="header-details">
      <div className="header-left-part">
        <img src={shoppingIcon} alt="shoppingImg" className="shopping-icon" />
        <h1 className="header-text">Mini Mart</h1>
      </div>
      <div className="header-right-part">
        <img src={shoppingCartIcon} alt="shoppingCartIcon" className="shopping-cart-icon" />
        <img src={userIcon} alt="userIconImg" className="user-icon" />
      </div>
    </header>
  );
}
