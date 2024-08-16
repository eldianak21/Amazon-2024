import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaFlag } from 'react-icons/fa';
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
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
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <div>
                <p>returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            <Link to="/cart" className="cart">
              <FaShoppingCart />
              <span>0</span>
            </Link>
            <Link to="" className="language">
              <FaFlag />
              <select>
                <option value="en">EN</option>
              </select>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;