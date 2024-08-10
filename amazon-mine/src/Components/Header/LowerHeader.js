import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

function LowerHeader() {
  return (
    <div className="lower">
        <ul>
            <li>
            <CiMenuBurger />
              <p>All</p>  
            </li>
            <li> Todays Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader