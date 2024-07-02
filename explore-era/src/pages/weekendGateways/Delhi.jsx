import React, { useEffect, useState } from "react";
import "./weekendGateways.css";
import MainLayout from "../../layout/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";

const API1 = "http://localhost:5164/viewWeekendGateways1";
const API2 = "http://localhost:5164/viewWeekendGateways2";
const API3 = "http://localhost:5164/viewWeekendGateways3";

const Delhi = () => {

  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);


  useEffect(() => {
    fetchItems1();
    fetchItems2();
    fetchItems3();
  }, []);



  const fetchItems1 = async () => {
    try {
      // Fetch all items from the API
      const response = await axios.post(API1, { eventID: "1002" });
      console.log("Response:", response.data); // Log the entire response data for debugging

      if (response.status === 200) {
        const responseData = response.data;
        console.log("Response Data:", responseData); // Log the response data object

        if (responseData.rData && responseData.rData.items) {
          // Filter items based on specific IDs
          const filteredItems1 = responseData.rData.items.filter(item => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return item.id === '1' || item.id==='2' || item.id === '3' || item.id==='4' || item.id==='5' ;
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

        if (responseData.rData && responseData.rData.items) {
          // Filter items based on specific IDs
          const filteredItems2 = responseData.rData.items.filter((item) => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return (
              item.id === "6" ||
              item.id === "7" ||
              item.id === "8" ||
              item.id === "9" ||
              item.id === "10"
            );
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


  const fetchItems3 = async () => {
    try {
      // Fetch all items from the API
      const response = await axios.post(API3, { eventID: "1002" });
      console.log("Response:", response.data); // Log the entire response data for debugging

      if (response.status === 200) {
        const responseData = response.data;
        console.log("Response Data:", responseData); // Log the response data object

        if (responseData.rData && responseData.rData.items) {
          // Filter items based on specific IDs
          const filteredItems3 = responseData.rData.items.filter((item) => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return (
              item.id === "11" ||
              item.id === "12" ||
              item.id === "13" ||
              item.id === "14" ||
              item.id === "15" 
                        );
          });
          setItems3(filteredItems3);
          console.log("Filtered Items3:", filteredItems3);
        } else {
          console.log(
            "No items3 data in response or invalid structure:",
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
    <MainLayout>
      <div className="main-himachal-tour-packages">
        <div className="himachal-tour-packages-content">
          <div className="himachal-tour-packages-details">
            <h1>
              Weekend Tours from <span>Delhi</span>
            </h1>
            <p>
              Finding a weekend getaway from Delhi of your choice can be easy
              with Tour My India’s wide range of weekend packages. Be it a
              relaxing trip in the hill stations or an adventure holiday or a
              wildlife sighting expedition or maybe a spiritual getaway,
              whatever your travel preference, Tour My India has many weekend
              tours coverning the best places to visit near Delhi within 100 km,
              200 km, 300 km & 400 km. We offer customization options and the
              best deals and discounts to make your weekend trip even more
              amazing.
            </p>
          </div>
          <div className="himachal-tour-packages-image">
            <img src="images/weekend-getaways-delhi-banner.webp.png" alt="" />
          </div>
        </div>

        <div className="himachal-tour-packages-cards-yellow">
          <h3>Best Selling Weekend Packages from Delhi</h3>

          <div className="himachal-tour-packages-cards">
            {items1.map((item) => (

            <div className="himachal-tour-packages-cards-all" key={item.id}>
              <img src={`data:image/jpeg;base64,${item.image}`} alt="" />
              <h6>{item.details}</h6>
              <Link to="/" className="link">
              <h4>{item.heading}</h4>
              </Link>
            </div>
            ))}
          </div>
        </div>

        <div className="all-cards">
          <h3>Popular Weekend Tour Packages from Delhi</h3>
          
          <div className="cards">
          {items2.map((item) => (
            <div className="himachal-tour-packages-cards-all" key={item.id}>
              <img src={`data:image/jpeg;base64,${item.image}`} alt="" />
              <h6>{item.details}</h6>              
              <Link to="/" className="link">
              <h4>{item.heading}</h4>
              </Link>
            </div>
          ))}
          </div>

          <div className="cards cards2">
          {items3.map((item) => (
            <div className="himachal-tour-packages-cards-all" key={item.id}>
              <img src={`data:image/jpeg;base64,${item.image}`} alt="" />
              <h6>{item.details}</h6>              
              <Link to="/" className="link">
              <h4>{item.heading}</h4>
              </Link>
            </div>
          ))}
          </div>
        </div>

        <div className="himachal-tour-packages-details2">
          <h5>About</h5>
          <h3>Weekend Getaways from Delhi</h3>
          <p>
            With its strategic location, Delhi finds no dearth of weekend
            getaway options. The national capital is neighbours with the
            Himalayan states of Uttarakhand and Himachal Pradesh, so even a
            holiday in a hill station is only a few hours drive away. Delhi is
            also flanked by Agra, which means, you only need a weekend trip to
            see Taj Mahal. The royal state of Rajasthan also shares a border
            with Delhi, opening the world full of opportunities to enjoy rich
            heritage, architecture, wildlife, and food that too on just a
            weekend tour. <br />
            <br />
            Whether you’re looking for a long or short family trip or a romantic
            getaway as a couple or an adventurous holiday, we have the best
            destinations to visit near Delhi within 100 km, 200 km, and 300 km.{" "}
            <br />
            <br />
            Plan your holiday with TMI at the lowest prices and utmost comfort.
          </p>
          <h3>Top 10 Weekend Destinations from Delhi</h3>
          <p>
            <ul>
              <li>
                <span>Nainital -</span> <div>296 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Rishikesh -</span>
                <div> 242 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Manali -</span> <div>546 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Mussoorie -</span> <div>262 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Lansdowne -</span>
                <div> 236 Km from Delhi (Approx.)</div>
              </li>
              <li>
                <span>Dharamshala -</span> <div>496 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Agra -</span>
                <div> 180 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Corbett National Park -</span>{" "}
                <div>260 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Ranthambore National Park -</span>{" "}
                <div>302 Km from Delhi (Approx)</div>
              </li>
              <li>
                <span>Shimla -</span> <div>350 Km from Delhi (Approx)</div>
              </li>
            </ul>
          </p>
          <h3>Best Hill Stations Near Delhi Worth Visiting Over Weekends</h3>
          <p>
            <ul>
              <li>
                <span>Shimla :</span>
                <div>
                  The most favourite weekend getaway from Delhi, Shimla in
                  Himachal Pradesh with its melange of nature, luxury, and
                  adventure makes for a holiday destination for all.
                </div>
              </li>
              <li>
                <span>Nainital :</span>
                <div>
                  The Lake District Nainital has its way of making a weekend
                  holiday from Delhi a memorable one. This pride of Uttarakhand
                  is perfect for a long weekend stay as well as short.
                </div>
              </li>
              <li>
                <span>Mussoorie :</span>
                <div>
                  The Queen of the Hills, Mussoorie in Uttarakhand needs no
                  introduction. A perfect holiday destination, Mussoorie and its
                  surrounding make for an ideal 2-3 days getaway from Delhi
                </div>
              </li>
              <li>
                <span> Kasauli :</span>
                <div>
                  A quaint little town in Himachal Pradesh, Kasauli is perfect
                  for a road trip from Delhi. Nestled amidst greenery and
                  offering many adventure activities, it is a nature and
                  adventure lover’s paradise.
                </div>
              </li>
              <li>
                <span>Lansdowne :</span>
                <div>
                  A peaceful and pristine cantonment town that is nestled amidst
                  the pine forests, Lansdowne is an ideal place for a relaxing
                  weekend holiday from Delhi within 300 km.
                </div>
              </li>
              <li>
                <span>Mukteshwar :</span>
                <div>
                  Boasting uninterrupted views of the Himalayas and peaceful
                  settings, Mukteshwar is a great weekend destination from Delhi
                  for family trips and couples.
                </div>
              </li>
              <li>
                <span>Ranikhet :</span>
                <div>
                  Blessed with picturesque nature, Ranikhet in Uttarakhand is a
                  place near Delhi for a long getaway with friends and family.
                </div>
              </li>
              <li>
                <span>Binsar :</span>
                <div>
                  A birder’s paradise, Binsar in Uttarakhand boasts over 200
                  bird species. This beautiful destination demands a minimum 2-3
                  days holiday plan from Delhi to be explored fully.
                </div>
              </li>
              <li>
                <span>Dharamshala :</span>
                <div>
                  The home of the honourable Dalai Lama, Dharamshala in Himachal
                  isn’t only an important Tibetan centre but a nature lover’s
                  and adventurer’s paradise. It is also the one of most visited
                  weekend getaways from Delhi.
                </div>
              </li>
              <li>
                <span>Chail :</span>
                <div>
                  Home to the world's highest cricket ground, Chail in Himachal
                  is surely a reflection of colonial-era hill station and is
                  thus an ideal weekend holiday destination from Delhi.
                </div>
              </li>
            </ul>
          </p>

          <h3>
            Top Adventure Destinations Near Delhi Worth Visiting On Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Shimla :</span>{" "}
                <div>
                  The most favourite weekend getaway from Delhi, Shimla in
                  Himachal Pradesh with its melange of nature, luxury, and
                  adventure makes for a holiday destination for all.
                </div>
              </li>
              <li>
                <span>Nainital : </span>{" "}
                <div>
                  The Lake District Nainital has its way of making a weekend
                  holiday from Delhi a memorable one. This pride of Uttarakhand
                  is perfect for a long weekend stay as well as short.
                </div>
              </li>
              <li>
                <span>Mussoorie :</span>{" "}
                <div>
                  The Queen of the Hills, Mussoorie in Uttarakhand needs no
                  introduction. A perfect holiday destination, Mussoorie and its
                  surrounding make for an ideal 2-3 days getaway from Delhi
                </div>
              </li>
              <li>
                <span>Kasauli :</span>{" "}
                <div>
                  {" "}
                  A quaint little town in Himachal Pradesh, Kasauli is perfect
                  for a road trip from Delhi. Nestled amidst greenery and
                  offering many adventure activities, it is a nature and
                  adventure lover’s paradise.
                </div>
              </li>
              <li>
                <span>Lansdowne :</span>{" "}
                <div>
                  {" "}
                  A peaceful and pristine cantonment town that is nestled amidst
                  the pine forests, Lansdowne is an ideal place for a relaxing
                  weekend holiday from Delhi within 300 km.
                </div>
              </li>
              <li>
                <span>Mukteshwar :</span>{" "}
                <div>
                  Boasting uninterrupted views of the Himalayas and peaceful
                  settings, Mukteshwar is a great weekend destination from Delhi
                  for family trips and couples.
                </div>
              </li>
              <li>
                <span>Ranikhet :</span>{" "}
                <div>
                  Blessed with picturesque nature, Ranikhet in Uttarakhand is a
                  place near Delhi for a long getaway with friends and family.
                </div>
              </li>
              <li>
                <span>Binsar :</span>{" "}
                <div>
                  {" "}
                  A birder’s paradise, Binsar in Uttarakhand boasts over 200
                  bird species. This beautiful destination demands a minimum 2-3
                  days holiday plan from Delhi to be explored fully.
                </div>
              </li>
              <li>
                <span>Dharamshala : </span>{" "}
                <div>
                  The home of the honourable Dalai Lama, Dharamshala in Himachal
                  isn’t only an important Tibetan centre but a nature lover’s
                  and adventurer’s paradise. It is also the one of most visited
                  weekend getaways from Delhi.
                </div>
              </li>
              <li>
                <span>Chail :</span>{" "}
                <div>
                  {" "}
                  Home to the world's highest cricket ground, Chail in Himachal
                  is surely a reflection of colonial-era hill station and is
                  thus an ideal weekend holiday destination from Delhi.
                </div>
              </li>
            </ul>
          </p>

          <h3>
            Top Adventure Destinations Near Delhi Worth Visiting On Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Rishikesh : </span>{" "}
                <div>
                  {" "}
                  Offering activities like river rafting, bungee jumping, cliff
                  jumping, flying fox and more, Rishikesh is the best adventure
                  destination near Delhi to plan a weekend holiday.
                </div>
              </li>
              <li>
                <span>Bir Billing :</span>{" "}
                <div>
                  {" "}
                  Boasting the best paragliding experience in India, Bir
                  Billing, the twin-villages in Himachal promise an adventurous
                  weekend near Delhi
                </div>
              </li>
              <li>
                <span>Neemrana :</span>{" "}
                <div>
                  {" "}
                  Ready to offer the best flying fox adventure that too within
                  200 km of Delhi, Neemrana Fort on Delhi-Jaipur Highway gives
                  yet another reason to plan a weekend trip.
                </div>
              </li>
              <li>
                <span>New Tehri :</span>{" "}
                <div>
                  {" "}
                  The hub of watersports activities like kayaking, jet skiing,
                  kitesurfing and many more, New Tehri is a perfect weekend
                  destination near Delhi to indulge in adrenaline rushing
                  adventures.
                </div>
              </li>
            </ul>
          </p>
          <h3>
            Best Pilgrimage Places Near Delhi Worth Visiting Over Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Haridwar & Rishikesh :</span>{" "}
                <div>
                  Settled by the holy River Ganges, Haridwar and Rishikesh in
                  Uttarakhand are the most popular pilgrimages near Delhi that
                  make for a short getaway from the city.
                </div>
              </li>
              <li>
                <span>Mathura & Vrindavan : </span>{" "}
                <div>
                  {" "}
                  The twin-cities of Mathura & Vrindavan personify the legend of
                  Lord Krishna. Dotted with many temples, the two cities make
                  for one of the best religious tour places near Delhi.
                </div>
              </li>
              <li>
                <span>Amritsar :</span>{" "}
                <div>
                  Home to the famed and magnificent Golden Temple, Amritsar is a
                  popular Sikh pilgrimage that can be easily visited on a
                  weekend holiday from Delhi.
                </div>
              </li>
              <li>
                <span>Ajmer & Pushkar : </span>{" "}
                <div>
                  The only Brahma Temple in India in Pushkar and
                  Dargah-e-Shareef in Ajmer make for the best pilgrimage near
                  Delhi if spirituality and the blessings of god is what you
                  seek over a weekend.
                </div>
              </li>
            </ul>
          </p>

          <h3>
            Popular Heritage Destinations Near Delhi Worth Visiting On Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Neemrana : </span>{" "}
                <div>
                  The imposing fort-palace Neemrana is the most popular weekend
                  getaway from Delhi that offers a glimpse of the royal Rajputs
                  and a plethora of entertaining activities.
                </div>
              </li>
              <li>
                <span>Jaipur : </span>{" "}
                <div>
                  The Pink City Jaipur is a perfect weekend destination from
                  Delhi. It offers a number of sightseeing places, excellent
                  staying places, food, and cultural performances to indulge in.
                </div>
              </li>
              <li>
                <span>Agra :</span>{" "}
                <div>
                  {" "}
                  Home to the iconic Taj Mahal, Agra makes for an ideal weekend
                  holiday plan from Delhi. With a number of Mughal era
                  monuments, Agra is a great historical place to visit within
                  250 km of Delhi.
                </div>
              </li>
              <li>
                <span>Jodhpur :</span>{" "}
                <div>
                  {" "}
                  Adorned with impressive forts, palaces, and lakes, Jodhpur,
                  the second-largest city in Rajasthan is the best weekend
                  destination for history lovers from Delhi.
                </div>
              </li>
              <li>
                <span>Bundi :</span>{" "}
                <div>
                  {" "}
                  An offbeat destination in Rajasthan yet an important reservoir
                  of Rajput history, Bundi boasts being a fine heritage
                  destination to visit near Delhi.
                </div>
              </li>
              <li>
                <span>Chittorgarh :</span>{" "}
                <div>
                  Home to an impressive fort which resonates the many tales of
                  Rajputs’ bravery, Chittorgarh is a place to make a weekend
                  holiday plan from Delhi if you are a history buff.
                </div>
              </li>
              <li>
                <span>Orchha : </span>{" "}
                <div>
                  {" "}
                  Set by the Betwa River and frozen in time, Orchha is a hidden
                  gem in Madhya Pradesh. Known for its distinct and impressive
                  architecture, it makes for an offbeat weekend getaway from
                  Delhi.
                </div>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Delhi;
