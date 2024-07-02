import React, { useEffect, useState } from "react";
import "./weekendGateways.css";
import MainLayout from "../../layout/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";

const API1 = "http://localhost:5164/viewWeekendGateways1";
const API2 = "http://localhost:5164/viewWeekendGateways2";
const API3 = "http://localhost:5164/viewWeekendGateways3";

const Mumbai = () => {
  
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
            return item.id === '27' || item.id==='28' || item.id === '29' || item.id==='30' || item.id==='31' ;
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
              item.id === "27" ||
              item.id === "31" ||
              item.id === "32" ||
              item.id === "33" ||
              item.id === "30"
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
              item.id === "28" ||
              item.id === "35" ||
              item.id === "36" ||
              item.id === "37" ||
              item.id === "38" 
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
            Weekend Tours from <span>Mumbai</span>
          </h1>
          <p>
          A weekend break from Mumbai means heading out to the hill stations in the Sahyadris or beach destinations like Goa or the sacred places like Shirdi. TMI offer a wide range of weekend packages for Mumbaikar and personalized services to make every short and long vacation from Mumbai hassle free and exciting. Our weekend tours cover the best places to visit nearby Mumbai for family vacation, romantic getaway, spiritual tour, wildlife sighting, beach vacation as well as a wellness holiday.
          </p>
        </div>
        <div className="himachal-tour-packages-image">
          <img src="images/weekend-mumbai-banner.webp" alt="" />
        </div>
      </div>

      <div className="himachal-tour-packages-cards-yellow">
        <h3>Best Selling Weekend Packages from Mumbai</h3>

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
        <h3>Popular Weekend Tour Packages from Mumbai</h3>
        
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
        <h3>Weekend Getaways from Mumbai</h3>
        <p>
        Mumbai enjoys close proximity to some of the must-visit places in India which indeed make for great weekend destinations from Mumbai. There are sacred places like Shirdi and Nashik near Mumbai, where a spiritual tour takes only a weekend’s time. <br />
          <br />
          For a relaxing beach holiday, the city finds no dearth of weekend getaways; there’s Alibaug, sitting within 100 km from Mumbai and then there is the much-coveted Goa only a 1 hour flight away!
          <br />
          <br />
          With the Western Ghats at a short distance, you are only a few hours drive away from a relaxing holiday in the hill stations like Lonavala and Khandala. For those in the mood of exploring the history and heritage, Aurangabad sits within 400 km of Mumbai and makes a great destination to plan a weekend trip. <br/><br/>
          The best destinations to visit nearby Mumbai are located within 100 km, 200 km, 300 km and 400 km. Tour My India personalizes each of your holidays, so that after a tiring week, you can enjoy a weekend of your choice at a place of your choice. With our lowest prices and quality services, we make every weekend a happy weekend for you.
        </p>
        <h3>Top 10 Weekend Holiday Destinations from Mumbai</h3>
        <p>
            <ul>
              <li>
                <div>Lonavala</div>
              </li>
              <li>
                <div>Khandala</div>
              </li>
              <li>
                <div>Mahabaleshwar</div> 
              </li>
              <li>
                <div>Panchgani</div> 
              </li>
              <li>
                <div>Goa</div> 
                
              </li>
              <li>
                <div>Shirdi</div> 
              </li>
              <li>
                <div>Alibaugh</div>
              </li>
              <li>
                <div>Ganpatipule</div> 
              </li>
              <li>
                <div>Matheran</div> 
              </li>
              <li>
                <div>Malvan</div> 
              </li>
            </ul>
          </p>
        <h3>Best Hill Stations Near Mumbai Worth Visiting Over Weekends</h3>
        <p>
          <ul>
            <li>
              <span>Lonavla  :</span>
              <div>
              The favourite getaway from Mumbai, Lonavla with its perfect mix of nature, adventure, and luxury makes for a holiday destination for all.
              </div>
            </li>
            <li>
              <span>Khandala  :</span>
              <div>
              A peaceful and picturesque hill station nestled in the Sahyadri Hills, Khandala is an ideal place for a relaxing holiday from Mumbai within 100 km.
              </div>
            </li>
            <li>
              <span>Matheran  :</span>
              <div>
              Spend your weekend in India’s only vehicle-free hill station, Matheran. This hill station away from the madding crowd is perfect for a long vacation as well.
              </div>
            </li>
            <li>
              <span> Panchgani  :</span>
              <div>
              Blessed with picturesque nature, Panchgani is a place near Mumbai for a relaxing and rejuvenating holiday with friends and family.
              </div>
            </li>
            <li>
              <span>Mahabaleshwar  :</span>
              <div>
              Beautiful and peaceful, Mahabaleshwar is a perfect holiday destination from Mumbai to enjoy a weekend amidst the quietude and lush greenery.
              </div>
            </li>
          </ul>
        </p>

        <h3>
        Top Adventure Places Near Mumbai Worth Visiting On Weekends
        </h3>
        <p>
          <ul>
            <li>
              <span>Malvan  :</span>{" "}
              <div>
                A weekend plan from Mumbai to snorkel in Malvan seems unmatched in every way. Situated on the Konkan strip, Malvan is a hotspot for watersports enthusiasts.
              </div>
            </li>
            <li>
              <span>Kolad  : </span>{" "}
              <div>
              Offering the best river rafting experience near Mumbai, Kolad is an unmissable weekend destination for water sports lovers.
              </div>
            </li>
            <li>
              <span>Bhira  :</span>{" "}
              <div>
              Enjoy the enthralling ziplining on the banks of the Kundalika River in Bhira, a weekend destination from Mumbai that you can’t just miss.
              </div>
            </li>
            <li>
              <span>Lonavla  :</span>{" "}
              <div>
              An ultimate adventure destination, Lonavla boasts enthralling camping, bungee jumping, and dirt biking opportunities making any weekend holiday from Mumbai an experience you’ll love.
              </div>
            </li>
            <li>
              <span>Lohagad  :</span>{" "}
              <div>
              Offering the best trekking experience, Lohagad makes for the best holiday destination within 100 km from Mumbai for adventure junkies.
              </div>
            </li>
            <li>
              <span>Panchgani  :</span>{" "}
              <div>
              Get to Panchgani for a short break and enjoy the best paragliding experience of soaring over the Western Ghats.
              </div>
            </li>
            <li>
              <span>Goa  :</span>{" "}
              <div>
              A paradise for adventure lovers, Goa offers a plethora of water activities like parasailing, jet skiing, snorkelling and more. It makes for a perfect destination near Mumbai for adventurers.
              </div>
            </li>
            <li>
              <span>Karjat  :</span>{" "}
              <div>
              Indulge in the unnerving waterfall rappelling activity in Karjat when you plan your weekend escape especially in the monsoon season.
              </div>
            </li>
           
          </ul>
        </p>

        <h3>
        Best Pilgrimage Places Near Mumbai Worth Visiting Over Weekends
        </h3>
        <p>
          <ul>
            <li>
              <span>Shirdi  : </span>{" "}
              <div>
              The Land of Sai, Shirdi is amongst the holiest places in India. Situated within 300 km of Mumbai, Shirdi makes a great spiritual weekend getaway.
              </div>
            </li>
            <li>
              <span>Bhimashankar :</span>{" "}
              <div>
              One of the 12 Jyotirlingas, Bhimashankar Temple is a must-visit religious site that can be visited over a weekend from Mumbai as it sits only 200 km away.
              </div>
            </li>
            <li>
              <span>Nashik  :</span>{" "}
              <div>
              Plan your weekend from Mumbai to the holy land of Nashik to perform a pilgrimage to the ancient Trimbakeshwar Temple and soak in the spirituality.
              </div>
            </li>
            <li>
              <span>Ganpatipule :</span>{" "}
              <div>
              A perfect pilgrimage and beach destination, Ganpatipule is an ideal weekend place from Mumbai. The small beach town is perfect for an extended weekend trip.
              </div>
            </li>
            <li>
              <span>Shani Shingnapur :</span>{" "}
              <div>
              Popular as a destination where locals do not lock their houses and shops because of their undying faith in Lord Shani, Shani Shingnapur with its close proximity to Mumbai makes for a weekend destination.
              </div>
            </li>
            <li>
              <span>Wai  :</span>{" "}
              <div>
              A pilgrim town with 100 temples and rich history of Peshwas, Wai is situated near Mumbai and is one of the best places for a spiritual tour over a weekend.
              </div>
            </li>
          </ul>
        </p>
        <h3>
        Popular Wildlife Destinations Near Mumbai Worth Visiting On Weekends
        </h3>
        <p>
          <ul>
            <li>
              <span>Tadoba National Park :</span>{" "}
              <div>
              Popular for its rich tiger population and high tiger sighting possibilities, Tadoba National Park is just perfect for a wildlife sighting tour and long getaway near Mumbai.
              </div>
            </li>
            <li>
              <span>Dajipur Wildlife Sanctuary : </span>{" "}
              <div>
              A paradise for nature lovers and wildlife enthusiasts, Dajipur Wildlife Sanctuary is an ideal getaway near Mumbai to enjoy wildlife sighting and a half day trek.
              </div>
            </li>
            <li>
              <span>Bhimashankar Wildlife Sanctuary  :</span>{" "}
              <div>
              Known for its rich biodiversity, abundant waterfalls and rich flora & fauna, Bhimashankar Wildlife Sanctuary is a recommended wildlife getaway from Mumbai.
              </div>
            </li>
            <li>
              <span>Rehekuri Blackbuck Wildlife Sanctuary  : </span>{" "}
              <div>
              Sight Blackbucks, the small Indian gazelles at Rehekuri Blackbuck Wildlife Sanctuary. Situated within 300 km of Mumbai, this wildlife reserve is ideal for a weekend trip.
              </div>
            </li>
          </ul>
        </p>

        <h3>
        Best Beach Destinations Near Mumbai Worth Visiting Over Weekends
        </h3>
        <p>
          <ul>
            <li>
              <span>Alibaug  : </span>{" "}
              <div>
              Popular as the best beach destination near Mumbai, Alibaug offers ample beaches, delectable Maharashtrian cuisine, a tryst with history that can all be experienced over a weekend.
              </div>
            </li>
            <li>
              <span>Goa  : </span>{" "}
              <div>
              Everyone’s favourite beach destination in India, Goa enjoys a close proximity to Mumbai that makes it the best weekend getaway from the city.
              </div>
            </li>
            <li>
              <span>Dahanu  :</span>{" "}
              <div>
              Home to Chikoo (Sapodilla) orchards, ancient history, idyllic beaches and Maharashtrian culture, Dahanu is an ideal weekend beach holiday destination within 150 km of Mumbai.
              </div>
            </li>
            <li>
              <span>Bordi  :</span>{" "}
              <div>
              Offering idyllic beaches, food stalls, clean water for swimming, Dahanu is one of the most beautiful beach destinations near Mumbai to plan a weekend trip.
              </div>
            </li>
            <li>
              <span>Ratnagiri  :</span>{" "}
              <div>
              Home to many historic monuments, ancient places of worship, Olive Ridley Turtles, and beautiful beaches, Ratnagiri is a perfect weekend escape from Mumbai’s fast lifestyle.
              </div>
            </li>
            <li>
              <span>Tarkarli  :</span>{" "}
              <div>
              Sit on the quiet sandy beach, gaze into the deep blue sea, indulge in some thrilling water sports, and spot dolphins in Tarkarli, a beautiful beach destination ideal for weekend plans from Mumbai.
              </div>
            </li>
            <li>
              <span>Malvan  : </span>{" "}
              <div>
              A fishing port town, Malvan is the right place to enjoy snorkelling on a weekend near Mumbai. It is a perfect beach destination to spend holiday amidst quietude.
              </div>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </MainLayout>
  )
}

export default Mumbai