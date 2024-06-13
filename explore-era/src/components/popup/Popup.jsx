// import React from 'react';
// import './popup.css';
// import { X } from 'lucide-react';
// import axios from 'axios'; // Import axios if not already imported
// import { useNavigate } from 'react-router-dom'; // Import useNavigate if not already imported


// const Popup = ({ onClose }) => {
//     const [name, setName] = useState('');
//     const [country, setCountry] = useState('');
//     const [emailid, setEmailid] = useState('');
//     const [tourDescriptions, setTourDescriptions] = useState('');
//     const [travelDates, setTravelDates] = useState('');
//     const [durationOfTheStay, setDurationOfTheStay] = useState('');
//     const [noOfPerson, setNoOfPerson] = useState('');
//     const [contactNo, setContactNo] = useState('');
  
//     const [formData, setFormData] = useState({
    
//       name: '',
//       country: '',
//       emailid: '',
//       tourDescriptions: '',
//       travelDates: '',
//       durationOfTheStay: '',
//       noOfPerson: '',
//       contactNo: ''
//   }); 

//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//         eventID: "1001",
//         addInfo: {
         
//             NAME: formData.name,
//             COUNTRY: formData.country,
//             EMAILID: formData.emailid,
//             TOURDESCRIPTIONS: formData.tourDescriptions,
//             TRAVELDATES: formData.travelDates,
//             DURATIONOFTHESTAY: formData.durationOfTheStay,
//             NOOFPERSON: formData.noOfPerson,
//             CONTACTNO: formData.contactNo
            
            
//         }
//     };


//     try {
//       const response = await axios.post('http://localhost:5164/register', payload);
//       let res = response.data.result.rData.rMessage;
//       console.log(response.data, 'api response'); // handle response
//       // setShowPopup(true);
//        // Show the popup after successful registration
//        if(res=="Registration Successful"){

//          alert(res);
//          navigate('/login');
//        }
//       else{ 
//         alert(res);
//         navigate('/register')

//       }
//   } catch (error) {
//       console.error('Error signing up:', error);
//       // Handle error
//   }
// };



//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         {/* Added button for closing the popup */}
//         <button className="close-button" onClick={onClose}>
//           <X />
//         </button>
//         <div className="form-container">
//           <div className="how-it-works">
//             <h2>How It Works</h2>
//             <ul>
//               <li>Tell us details of your holiday plan.</li>
//               <li>
//                 After you submit the form, one of our travel experts will get back
//                 to you with customised holiday package based on your requirement,
//                 within 24 hours.
//               </li>
//               <li>
//                 Grab the deal and start packing your bags for an indelible holiday
//                 with Tour My India.
//               </li>
//             </ul>
//             <div className="social-media">
//               <a href="#"><img src="images/f.png" alt="Facebook" /></a>
//               <a href="#"><img src="images/t.png" alt="Twitter" /></a>
//               <a href="#"><img src="images/i.png" alt="Instagram" /></a>
//             </div>
//             <div className="contact-number">
//               Call Us for details <br />
//               <span>+91-8287675984</span>
//             </div>
//           </div>
//           <div className="request-quote">
//             <h2>Request a <span>QUOTE</span></h2>
//             <form>
//               <label>Full Name*</label>
//               <input type="text" name="fullName" id='NAME' placeholder="Your name.."  value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} required />

//               <label>Country*</label>
//               <select name="country"  id='COUNTRY'  value={formData.country} onChange={(e)=>setFormData({...formData,country:e.target.value})}>
//                 <option value="Not Selected">Select</option>
//                 <option value="india">India</option>
//                 {/* Add more options here */}
//               </select>

//               <label>Email ID*</label>
//               <input type="email" name="email" id='EMAILID' placeholder="Email"  value={formData.emailid} onChange={(e)=>setFormData({...formData,emailid:e.target.value})}    required />

//               {/* Moved closing tag of the form element below the rest of the fields */}
//               <label>Tour Descriptions*</label>
//               <textarea name="tourDescription" id='TOURDESCRIPTIONS' placeholder="Enter Your Tour Description"  value={formData.tourDescriptions} onChange={(e)=>setFormData({...formData,tourDescriptions:e.target.value})} required></textarea>

//               <label>Travel Dates*</label>
//               <input type="date" name="travelDates" id='TRAVELDATES'  value={formData.travelDates} onChange={(e)=>setFormData({...formData,travelDates:e.target.value})} required />

//               <label>Duration of the Stay*</label>
//               <input type="text" name="duration" id='DURATIONOFTHESTAY' placeholder="Duration of the Stay"  value={formData.durationOfTheStay} onChange={(e)=>setFormData({...formData,durationOfTheStay:e.target.value})} required />

//               <label>No of Person*</label>
//               <input type="number" name="numberOfPersons" id='NOOFPERSON' placeholder="No of Person"  value={formData.noOfPerson} onChange={(e)=>setFormData({...formData,noOfPerson:e.target.value})} required />

//               <label>Contact No*</label>
//               <input type="text" name="contactNumber" id='CONTACTNO' placeholder="Contact No"  value={formData.contactNo} onChange={(e)=>setFormData({...formData,contactNo:e.target.value})} required />

//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;
          


import React, { useState } from 'react'; // Import useState from React
import './popup.css';
import { X } from 'lucide-react';
import axios from 'axios'; // Import axios if not already imported
import { useNavigate } from 'react-router-dom'; // Import useNavigate if not already imported

const Popup = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      country: '',
      emailid: '',
      tourDescriptions: '',
      travelDates: '',
      durationOfTheStay: '',
      noOfPerson: '',
      contactNo: ''
    }); 

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            eventID: "1002",
            addInfo: {
                NAME: formData.name,
                COUNTRY: formData.country,
                EMAILID: formData.emailid,
                TOURDESCRIPTIONS: formData.tourDescriptions,
                TRAVELDATES: formData.travelDates,
                DURATIONOFTHESTAY: formData.durationOfTheStay,
                NOOFPERSON: formData.noOfPerson,
                CONTACTNO: formData.contactNo
            }
        };

        try {
            const response = await axios.post('http://localhost:5164/register', payload);
            let res = response.data.rData.rMessage;
            console.log(response.data, 'api response'); // handle response
            if (res === "Successful") {
                alert(res);
                navigate('/himachalPradesh');
            } else { 
                alert(res);
                navigate('/himachalPradesh');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Error signing up. Please try again later.'); // Handle error
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    <X />
                </button>
                <div className="form-container">
                    <div className="how-it-works">
                        <h2>How It Works</h2>
                        <ul>
                            <li>Tell us details of your holiday plan.</li>
                            <li>After you submit the form, one of our travel experts will get back to you with a customized holiday package based on your requirement, within 24 hours.</li>
                            <li>Grab the deal and start packing your bags for an indelible holiday with Explore.</li>
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
                        <form onSubmit={handleSubmit}>
                            <label>Full Name*</label>
                            <input type="text" name="fullName" id='NAME' placeholder="Your name.." value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

                            <label>Country*</label>
                            <select name="country" id='COUNTRY' value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
                                <option value="Not Selected">Select</option>
                                <option value="india">India</option>
                                {/* Add more options here */}
                            </select>

                            <label>Email ID*</label>
                            <input type="email" name="email" id='EMAILID' placeholder="Email" value={formData.emailid} onChange={(e) => setFormData({ ...formData, emailid: e.target.value })} required />

                            <label>Tour Descriptions*</label>
                            <textarea name="tourDescription" id='TOURDESCRIPTIONS' placeholder="Enter Your Tour Description" value={formData.tourDescriptions} onChange={(e) => setFormData({ ...formData, tourDescriptions: e.target.value })} required></textarea>

                            <label>Travel Dates*</label>
                            <input type="date" name="travelDates" id='TRAVELDATES' value={formData.travelDates} onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })} required />

                            <label>Duration of the Stay*</label>
                            <input type="text" name="duration" id='DURATIONOFTHESTAY' placeholder="Duration of the Stay" value={formData.durationOfTheStay} onChange={(e) => setFormData({ ...formData, durationOfTheStay: e.target.value })} required />

                            <label>No of Person*</label>
                            <input type="number" name="numberOfPersons" id='NOOFPERSON' placeholder="No of Person" value={formData.noOfPerson} onChange={(e) => setFormData({ ...formData, noOfPerson: e.target.value })} required />

                            <label>Contact No*</label>
                            <input type="text" name="contactNumber" id='CONTACTNO' placeholder="Contact No" value={formData.contactNo} onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })} required />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
