import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./destinationHimachal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/destination_card";
const API1 = "http://localhost:5164/destination1View";
const API2 = "http://localhost:5164/best_view";


const DestinationGoa = () => {

    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState([]);
    const [items2, setItems2] = useState([]);



    const [formData, setFormData] = useState({
        name: '',
        description: '',
        departureDate: '',
        numberOfDays: '',
        email: '',
        contactNo: ''
      }); 
    
      const navigate = useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            eventID: "1002",
            addInfo: {
              FULLNAME: formData.name,
              TOURDESCRIPTION: formData.description,
              DEPARTUREDATE: formData.departureDate,
              NUMBEROFDAYS: formData.numberOfDays,
              EMAIL: formData.email,
              CONTACTNO: formData.contactNo
            }
        };
    
        try {
          const response = await axios.post('http://localhost:5164/destination_form', payload);
          let res = response.data.rData.rMessage;
          console.log(response.data, 'api response'); // handle response
          if (res === "Successful") {
              alert(res);
              navigate('/himachalPradesh');
              setFormData({
                name: '',
                description: '',
                departureDate: '',
                numberOfDays: '',
                email: '',
                contactNo: ''
              });
          } 
          else { 
              alert(res);
              navigate('/himachalPradesh');
          }
      } catch (error) {
          console.error('Error signing up:', error);
          alert('Error signing up. Please try again later.'); // Handle error
      }
    };
    

    useEffect(() => {
      fetchItems1();
      fetchItems2();
      fetchItems();
    }, []);
    
    const fetchItems1 = async () => {
      try {
        // Fetch all items from the API
        const response = await axios.post(API1, { eventID: "1002" });
        console.log("Response:", response.data); // Log the entire response data for debugging
    
        if (response.status === 200) {
          const responseData = response.data;
          console.log("Response Data:", responseData); // Log the response data object
    
          if (responseData.rData && responseData.rData.items1) {
            // Filter items based on specific IDs
            const filteredItems1 = responseData.rData.items1.filter(item1 => {
              // Replace '1', '2', '3' with your specific IDs or conditions
              return item1.id === '63' ;
            });
            setItems1(filteredItems1);
            console.log("Filtered Items1:", filteredItems1);
          } else {
            console.log(
              "No items1 data in response or invalid structure:",
              responseData
            );
          }
        } else {
          console.log("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };



    const fetchItems2 = async () => {
      try {
        // Fetch all items from the API
        const response = await axios.post(API2, { eventID: "1002" });
        console.log("Response:", response.data); // Log the entire response data for debugging
    
        if (response.status === 200) {
          const responseData = response.data;
          console.log("Response Data:", responseData); // Log the response data object
    
          if (responseData.rData && responseData.rData.items2) {
            // Filter items based on specific IDs
            const filteredItems2 = responseData.rData.items2.filter(item2 => {
              // Replace '1', '2', '3' with your specific IDs or conditions
              return item2.id === '17' || item2.id === '18' || item2.id === '19' ;
            });
            setItems2(filteredItems2);
            console.log("Filtered Items2:", filteredItems2);
          } else {
            console.log(
              "No items2 data in response or invalid structure:",
              responseData
            );
          }
        } else {
          console.log("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };



  const fetchItems = async () => {
    try {
      // Fetch all items from the API
      const response = await axios.post(API, { eventID: "1002" });
      console.log("Response:", response.data); // Log the entire response data for debugging

      if (response.status === 200) {
        const responseData = response.data;
        console.log("Response Data:", responseData); // Log the response data object

        if (responseData.rData && responseData.rData.items) {
          // Filter items based on specific IDs
          const filteredItems = responseData.rData.items.filter(item => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return item.id === '30' || item.id === '31' || item.id === '32';
          });
          setItems(filteredItems);
          console.log("Filtered Items:", filteredItems);
        } else {
          console.log(
            "No items data in response or invalid structure:",
            responseData
          );
        }
      } else {
        console.log("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <>
    <MainLayout>
    {items1.map((item1) => (
        <div className="container0" key={item1.id}>
          <main>
            <div className="content-wrapper">
              <div className="hero">
                <img
                  className="himachal-img"
                  src={`data:image/jpeg;base64,${item1.image}`}
                  alt="Himachal Pradesh"
                />
              </div>
              <section className="intro">
                <h1>{item1.main_heading}</h1>
                <p>{item1.sub_heading}</p>
                <div className="cards">
                  <div className="card">
                    <h2>{item1.box_heading1}</h2>
                    <p>{item1.box_details1}</p>
                  </div>
                  <div className="card">
                    <h2>{item1.box_heading2}</h2>
                    <p>{item1.box_details2}</p>
                  </div>
                  <div className="card">
                    <h2>{item1.box_heading3}</h2>
                    <p>{item1.box_details3}</p>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <div className="info-background">
            <div className="info-background-content">
              <button className="see-map">See Map</button>
              <div className="info">
                <div className="info-item">
                  <span>Best time to visit</span>
                  <p>{item1.best_time_to_visit}</p>
                </div>
                <div className="info-item">
                  <span>Ideal Duration</span>
                  <p>{item1.ideal_duration}</p>
                </div>
                <div className="info-item">
                  <span>Visa</span>
                  <p>{item1.visa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="main-info">
        <h2 className="main-info-heading">About Goa Tourism</h2>
        <p className="main-info-details">
        The coastal paradise, Goa is not unknown to anyone. This tiny state in West India is famous for its plethora of beautiful beaches, great seafood, amazing nightlife, and thrilling watersports. <br/><br/>
        Goa along with being a popular beach destination in India is a perfect honeymoon destination, a great getaway with friends, and an amazing family holiday place, which means, the place is filled with activities and attractions to keep all its visitors engaged.<br/><br/>
        The state is majorly divided into two districts - North Goa and South Goa. North Goa is famous for its lively beaches like Calangute, Baga, Candolim, Anjuna; beach shacks, Fort Aguada; Church of Mae De Dues; Boghdeshwara Temple; and Chorao, Divar Island. <br/><br/>
        South Goa, on the other hand is known for its quieter beaches like Butterfly, Palolem, Polem, and Agonda; luxury resorts; Se Cathedral and St Xavier’s Church; and many sightseeing places like Dudhsagar Waterfalls where one can enjoy trekking as well.<br/><br/>
        Goa also offers its visitors the chance to enjoy river carnivals; Rajbhavan Darshan; e-bikes tour; white water river rafting; hot air ballooning; birding tours at Dr Salim Ali Bird Sanctuary; Ayurveda massages; shopping; water activities like scuba diving and sea rafting; and other adventure activities like motorised paragliding, and bungee jumping.<br/><br/>
        In our Goa Travel Guide, we add the most authentic information ensuring you know everything about the state before planning a trip. Our authentic Goa travel guide includes information on places to visit, top things to do, and best hotels. With us, you also get the best Goa tour packages that ensure an amazing holiday experience at this top beach destination in India.<br/><br/>
        We, at Explore Era would be happy to help you explore the scenic destination of Goa , and therefore, offer to you the finest Goa  holiday packages and deals. With our best Goa  travel packages, you can rest assured for a hassle free and memorable holiday in Goa .

        </p>

       
        <h2 className="main-info-heading">
        A Quick Information About the State – Goa
        </h2>
        <p className="main-info-details">
          <ul>
            <li>
              <div>
                <span>Goa Region  :</span> West India
              </div>
            </li>
            <li>
              <div>
                <span> Goa Capital  : </span>Panaji
              </div>
            </li>
            <li>
              <div>
                <span>Geographical Area  :</span> 3702 km2
              </div>
            </li>
            <li>
              <div>
                <span>Total Population of Goa :</span>  1458545
              </div>
            </li>
            <li>
              <div>
                <span> Spoken Languages : </span> Konkani, Marathi, Hindi, English
              </div>
            </li>
            <li>
              <div>
                <span> Total Districts in Goa  : </span>2 (North Goa & South Goa)
              </div>
            </li>
            <li>
              <div>
                <span> State Animal of Goa :</span>Gaur (Bos Gaurus)
              </div>
            </li>
            <li>
              <div>
                <span> State Bird of Goa  :</span> Ruby Throated Yellow Bulbul
              </div>
            </li>
            <li>
              <div>
                <span>Major Tourism Destinations in Goa :</span>  Ashwem Beach, Calangute Beach, Baga Beach, Vagator Beach, Anjuna Beach, Candolim Beach, Aguada Beach, Morjim Beach, Arambol Beach, Miramar Beach, Palolem Beach, Agonda Beach..etc
              </div>
            </li>
            <li>
              <div>
                <span>Major Tourist Attractions in Goa  : </span>Beaches, Churches, Temples, Spice Plantations, Lakes, Waterfalls, Museums, Festivals, Adventure sports, Wildlife..etc
              </div>
            </li>
          </ul>
        </p>
      </div>

      <div className="container2">
        <section className="best-time">
          <h2>Best Time to Visit Goa  </h2>
          <div className="seasons">
            <div className="season">
              <img src="images/summer-ico.png.png" alt="Summer Season" />
              <br />
              <br />
              <div>
                <h3>Summer Season In Goa  </h3>
                <p>
                The summer season between March and June in Goa is quite hot with temperature ranging between 25°C and 40°C.
                </p>
              </div>
            </div>
            <div className="season">
              <img src="images/mansoon-ico.png.png" alt="Monsoon Season" />
              <br />
              <br />
              <div>
                <h3>Monsoon Season In Goa  </h3>
                <p>
                Monsoon in Goa is between July and August. Goa receives medium to high rainfall leaving beaches closed but the state greener.
                </p>
              </div>
            </div>
            <div className="season">
              <img src="images/winter-ico.png.png" alt="Winter Season" />
              <br />
              <br />
              <div>
                <h3>Winter Season In Goa  </h3>
                <p>
                Winter season is from November to February and is the best time to plan a visit to Goa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="best-places">
          <h2>Best Places to Visit in Goa  </h2>
          <div className="places">
            {items.map((item) => (
              <div className="place" key={item.id}>
                <img src={`data:image/jpeg;base64,${item.image}`}  alt={item.heading}/>
                <h3>{item.heading}</h3>
                <p>{item.details}</p>
                <div className="tags-button">
                  <div className="tags">
                    {/* <span>{item.block1}</span> */}
                    {/* <span>{item.block2}</span> */}
                  </div>
                  <button className="view-more">{item.view_more}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="top-things">
          <h2>Top Things to Do in Goa  </h2>
          <div className="activities">
            <div className="activity">
              <img src="images/scuba-diving.webp" alt="Adventure" />
              <h3>Scuba Diving</h3>
              <p>Enjoy exploring the exciting and colourful underwater world at the top beaches in Goa.</p>
              <button className="view-more">View more</button>
            </div>
            <div className="activity">
              <img src="images/water-sports.webp" alt="Wildlife" />
              <h3>Water Sports</h3>
              <p>From Banana boat ride to water skiing, the beaches in Goa offer thrilling water activities to enjoy</p>

              <button className="view-more">View more</button>
            </div>
            <div className="activity">
              <img src="images/bungee-jumping.webp" alt="Lakes" />
              <h3>Bungee Jumping</h3>
              <p>Jump from the height of 55m from Goa’s first permanent bungee-site to feel the adrenaline rush.</p>

              <button className="view-more">View more</button>
            </div>
          </div>
        </section>

        <div className="container3">
          <div className="info-last">
            <h2>Goa   Essential Information</h2>
            <section>
              <h2>Where to stay in Goa </h2>
              <p>
              Goa  invites tourists to savour a plethora of experiences and leaves no stone unturned in offering them the best places to stay. There is a wide range of accommodations available at every popular tourist destination in Goa . In fact, the lesser-known and offbeat places in the state too have a decent accommodation. <br/><br/>
              From budget to luxury to heritage hotels to houseboats, camps and homestay, Goa  leaves one spoilt for choices.
              </p>
            </section>
           
          </div>
          <div className="enquiry-form">
            <h2>Fill Enquiry Form Below</h2>
            <form onSubmit={handleSubmit}>
               <label>
                  Your Full Name
                  <input type="text" name="name" id="FULLNAME" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                </label>
                <label>
                  Tour Description
                  <textarea name="description" id="TOURDESCRIPTION" required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}/>
                </label>
                <label>
                  Departure Date
                  <input type="date" name="departureDate" required id="DEPARTUREDATE" value={formData.departureDate} onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}/>
                </label>
                <label>
                  Number of Days
                  <input type="number" name="numberOfDays" required id="NUMBEROFDAYS" value={formData.numberOfDays} onChange={(e) => setFormData({ ...formData, numberOfDays: e.target.value })}/>
                </label>
                <label>
                  Email
                  <input type="email" name="email" required id="EMAIL" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                </label>
                <label>
                  Contact No
                  <input type="tel" name="contactNo" required id="CONTACTNO" value={formData.contactNo} onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}/>
                </label>
                <button type="submit">Get A Custom Quote</button>
              </form>
          </div>
        </div>
      </div>
    </MainLayout>
  </>
  )
}

export default DestinationGoa