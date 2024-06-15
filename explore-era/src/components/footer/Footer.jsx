import React from "react";
import "./footer.css";
import { useState } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import Popup from "../popup/Popup";

const Footer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footer">
        <div className="contact-short">
          <div className="contact-short-left">
            <div className="logo footer-logo">
              <Link to="/home" onClick={backToTop}>
                <h2>
                  <span>E</span>xplore
                  <span>E</span>ra
                </h2>
              </Link>
            </div>
            <hr className="left-small-hr" />
            <p>It's time for new Experiences</p>
          </div>

          <div className="app-container">
            <div className="contact-short-right">
              <p>Find The Perfect Escape</p>
              <button
                className="book-button"
                onClick={() => setIsPopupVisible(true)}
              >
                Book Your Trip
              </button>
            </div>
            {isPopupVisible && (
              <Popup onClose={() => setIsPopupVisible(false)} />
            )}
          </div>
        </div>
        <hr className="second-hr" />

        <div className="contact">
          <div className="contact-left">
            <ul>
              <li>
                <h4>COMPANY</h4>
              </li>
              <li>
                <Link to="/about" className="link" onClick={backToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="link" onClick={backToTop}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/topDestinations"
                  className="link"
                  onClick={backToTop}
                >
                  Top Destinations
                </Link>
              </li>
            </ul>
          </div>

          <div className="contact-right">
            <ul>
              <li>
                <h4>LEGAL POLICY</h4>
              </li>
              <li>
                <Link
                  to="/termsAndConditions"
                  className="link"
                  onClick={backToTop}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" className="link" onClick={backToTop}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/login" className="link" onClick={backToTop}>
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <hr className="main-footer-hr-1" />
        <div className="main-footer-box">
          <ul className="mail-whatsapp">
            <li>
              <img className="g" src="/images/g.png" alt="" />
            </li>
            <li className="mail">info@exploreera.com</li>
            <li>
              <img className="w" src="/images/w.png" alt="" />
            </li>
            <li className="whatsapp">+91-8287675984</li>
          </ul>
          <div className="social-icons-wrapper">
            <ul className="social-app-link">
              <li>
                <a href="/">
                  <img className="t" src="/images/t.png" alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img className="f" src="/images/f.png" alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img className="i" src="/images/i.png" alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img className="y" src="/images/y.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="main-footer-hr-2" />

        <p className="copyright">CopyRight©2024, Tour India Pvt. Ltd</p>
      </div>
    </>
  );
};

export default Footer;
