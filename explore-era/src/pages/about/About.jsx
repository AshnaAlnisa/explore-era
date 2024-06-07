import MainLayout from "../../layout/MainLayout";
import "./about.css";


import React from "react";

const About = () => {
  return (
    <MainLayout>
      <img
        className="about-img"
        src="images/Section [outer-inner-banner].png"
        alt=""
      />

      <div className="about-page">
        <p className="about-company-heading">ABOUT COMPANY :</p>
        <p className="about-page-details">
          Founded in the year 2023 as ExploreEra.com, an online travel platform.
          the company boosted and has emerged as the “Best Upcoming Inbound Tour
          Operators in India”. It offers 24 X 7 hours services that include
          travel planning, and transport facilities. It also provides holiday
          packages, customized as per client’s need and budget.
          <br />
          Explore Era is an award winning travel organization and excels with
          quality services from its experienced staffs. Over the years the
          company has received positive feedbacks from its existing clients and
          hence one can expect a cordial reception.
        </p>
        <p className="out-motto-heading">OUR MOTTO :</p>
        <ul className="our-motto-details">
          <li>Customer satisfaction</li>
          <li>Quality services</li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default About;
