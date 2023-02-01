import React from 'react';
import pic from "./logopic.png";
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
          <img  src={pic} className="picture"></img>
            <span className="my_shop" onClick={()=>setShow(true)}>
               Lunchmate
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fa fa-shopping-cart" ></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar