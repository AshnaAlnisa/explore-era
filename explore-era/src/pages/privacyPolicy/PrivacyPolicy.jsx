import React from "react";
import "./privacyPolicy.css";
import MainLayout from "../../layout/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <img
        className="privacy-policy-img"
        src="images/Section [outer-inner-banner].png"
        alt=""
      />
      <div className="privacy-policy">
        <p className="privacy-policy-heading">Privacy Policy</p>
        <p className="privacy-policy-details">
          TourMyIndia.com respects your privacy and recognizes the need to
          protect the personally identifiable information (any information by
          which you can be identified, such as name, address and telephone
          number) you share with us. We would like to assure you that we follow
          appropriate standards when it comes to protecting your privacy on our
          web sites.
          <br /><br />
          Some of our web pages use "cookies" so that we can better serve you
          with customized information when you return to our site. Cookies are
          identifiers which a web site can send to your browser to keep on your
          computer to facilitate your next visit to our site. You can set your
          browser to notify you when you are sent a cookie, giving you the
          option to decide whether or not to accept it. The information we
          collect and analyze is used to improve our service to you.
          <br /><br />
          There are times when we may collect personal information from you such
          as name, physical address or telephone number. It is our intent to
          inform you before we do that and to tell you what we intend to do with
          the information. Generally, you will have the option not to provide
          the information, and in the future you will be able to "opt out" of
          certain uses of the information. If you choose not to provide the
          information we request, you can still visit our website
          https://www.tourmyindia.com, but you may be unable to access certain
          options, offers and services.
          <br /><br />
          TourMyIndia.com will not sell, trade or disclose to third parties any
          information derived from the registration for, or use of, any online
          service (including names and addresses) without the consent of the
          user or customer (except as required by subpoena, search warrant, or
          other legal process or in the case of imminent physical harm to the
          user or others). Tour MY India will allow suppliers to access the
          information for purposes of confirming your registration and providing
          you with benefits you are entitled to.
          <br /><br />
          TourMyIndia.com will take appropriate steps to protect the information
          you share with us. We have implemented technology and security
          features and strict policy guidelines to safeguard the privacy of your
          personally identifiable information from unauthorized access and
          improper use or disclosure. TourMyIndia.com will continue to enhance
          our security procedures as new technology becomes available.
          <br /><br />
          If our privacy policy changes in the future, it will be posted here
          and a new effective date will be shown. You should access our privacy
          policy regularly to ensure you understand our current policies. Please
          reference the privacy policy in your subject line. TourMyIndia.com
          will attempt to respond to all reasonable concerns or inquiries within
          five business days of receipt.
        </p>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
