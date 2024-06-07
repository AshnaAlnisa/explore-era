import React from 'react';
import './popup.css';
import { X } from 'lucide-react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Added button for closing the popup */}
        <button className="close-button" onClick={onClose}>
          <X />
        </button>
        <div className="form-container">
          <div className="how-it-works">
            <h2>How It Works</h2>
            <ul>
              <li>Tell us details of your holiday plan.</li>
              <li>
                After you submit the form, one of our travel experts will get back
                to you with customised holiday package based on your requirement,
                within 24 hours.
              </li>
              <li>
                Grab the deal and start packing your bags for an indelible holiday
                with Tour My India.
              </li>
            </ul>
            <div className="social-media">
              <a href="#"><img src="images/f.png" alt="Facebook" /></a>
              <a href="#"><img src="images/t.png" alt="Twitter" /></a>
              <a href="#"><img src="images/i.png" alt="Instagram" /></a>
            </div>
            <div className="contact-number">
              Call Us for details <br />
              <span>+91-8287675984</span>
            </div>
          </div>
          <div className="request-quote">
            <h2>Request a <span>QUOTE</span></h2>
            <form>
              <label>Full Name*</label>
              <input type="text" name="fullName" placeholder="Your name.." required />

              <label>Country*</label>
              <select name="country" >
                <option value="">India</option>
                {/* Add more options here */}
              </select>

              <label>Email ID*</label>
              <input type="email" name="email" placeholder="Email" required />

              {/* Moved closing tag of the form element below the rest of the fields */}
              <label>Tour Descriptions*</label>
              <textarea name="tourDescription" placeholder="Enter Your Tour Description" required></textarea>

              <label>Travel Dates*</label>
              <input type="date" name="travelDates" required />

              <label>Duration of the Stay*</label>
              <input type="text" name="duration" placeholder="Duration of the Stay" required />

              <label>No of Person*</label>
              <input type="number" name="numberOfPersons" placeholder="No of Person" required />

              <label>Contact No*</label>
              <input type="text" name="contactNumber" placeholder="Contact No" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
