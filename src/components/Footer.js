import React from "react";
import "../Footer.css";
import pay from "../pay_img/pay.png";
import play from "../pay_img/play.jpg";
import app from "../pay_img/app.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> 01 Adarsh Indra Nagar Indore
          </p>
          <p>
            <strong>Phone</strong>+91-9131215789
          </p>
          <p>
            <strong>Hours</strong>10:00-18:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f">
                <FaFacebookF />
              </i>
              <i className="fab fa-twitter">
                <BsTwitter />
              </i>
              <i className="fab fa-instagram">
                <BsInstagram />
              </i>

              <i className="fab fa-youtube">
                <BsYoutube />
              </i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/about">Delivery Information</NavLink>
          <NavLink to="/about">Privacy Policy</NavLink>
          <NavLink to="/about">Terms & Condition</NavLink>

          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="col">
          <h4>My Account</h4>
   
          <NavLink to="/">Sign In</NavLink>
          <NavLink to="/cart">View Cart</NavLink>
          <NavLink to="/cart">My Wishlist</NavLink>
          <NavLink to="/cart">Track My Order</NavLink>
          <NavLink to="/contact">Help</NavLink>

    
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={app} alt="" />
            <img src={play} alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay} alt="" />
        </div>
        <div className="Developer name">Abhishek Bhawsar</div>
      </footer>
    </>
  );
};
export default Footer;
