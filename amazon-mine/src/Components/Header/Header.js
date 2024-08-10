import React from 'react';
import './Header.css';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaFlag } from 'react-icons/fa';
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
    <section>
    <div className="header">
      <div className="logo">
        <a href="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </a>
      </div>
      <div className="delivery">
        <FaMapMarkerAlt className="location-icon" />
        <div>
          <p>Delivered to</p>
          <span>Ethiopia</span>
        </div>
      </div>
      <div className="search">
        <select>
          <option value="">All</option>
        </select>
        <input type="text" placeholder="Search Amazon" />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="order">
        <a href="/signin">
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
        </a>
        <a href="/returns">
          <div>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
        </a>
        <a href="" className="cart">
          <FaShoppingCart />
          <span>0</span>
        </a>
        <a href="" className="language">
          <FaFlag />
          <select>
            <option value="en">EN</option>
          </select>
        </a>
      </div>
    </div>
    </section>
    <LowerHeader/>
    </>
  );
};

export default Header;