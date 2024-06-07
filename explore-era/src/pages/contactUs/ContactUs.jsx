import React from "react";
import './contactUs.css'
import MainLayout from "../../layout/MainLayout";

const ContactUs = () => {
  return (
    <MainLayout>
      <img
        className="contact-img"
        src="images/Section [outer-inner-banner].png"
        alt=""
      />

      <div className="contact-page">
        <p className="contact-heading">CONTACT US :</p>
        <div className="contact-details">
          <p className="name">Ashna Alnisa</p>
          <p className="website">Explore Era</p>
          <p className="mob">
            <span>Mob : </span>8287675984
          </p>
          <p className="email">
            <span>Email : </span>info@exploreera.com
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
