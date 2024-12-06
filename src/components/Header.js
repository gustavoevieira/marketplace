import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Marketplace</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/dashboard">Seller Dashboard</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </header>
  );
}

export default Header;
