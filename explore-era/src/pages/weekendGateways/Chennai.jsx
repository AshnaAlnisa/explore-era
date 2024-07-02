import React, { useEffect, useState } from "react";
import "./weekendGateways.css";
import MainLayout from "../../layout/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";

const API1 = "http://localhost:5164/viewWeekendGateways1";
const API2 = "http://localhost:5164/viewWeekendGateways2";
const API3 = "http://localhost:5164/viewWeekendGateways3";

const Chennai = () => {

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
            return item.id === '16' || item.id==='17' || item.id === '18' || item.id==='19' || item.id==='20' ;
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
              item.id === "17" ||
              item.id === "21" ||
              item.id === "22" ||
              item.id === "16" ||
              item.id === "20"
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
              item.id === "23" ||
              item.id === "24" ||
              item.id === "25" ||
              item.id === "26" ||
              item.id === "18" 
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
              Weekend Tours from <span>Chennai</span>
            </h1>
            <p>
            Chennaiites or those in Chennai either for a business trip or a holiday and looking forward to an exciting weekend trip should check out the weekend packages offered by Tour My India. Chennai has a lot of weekend holiday options around it. Explore the hill stations, experience adrenaline rushing adventure, spiritual awakening at a pilgrimage site, heritage of a place or the excitement of jungle wildlife safari with our all-inclusive weekend holiday packages. Our weekend tours from Chennai cover places short & long destinations within 100, 200, 300, 400 & above 500 kilometers. You can also customize a particular weekend package as per your requirements while getting the benefits of best deals and discounts!
            </p>
          </div>
          <div className="himachal-tour-packages-image">
            <img src="images/weekend-chennai-banner.webp" alt="" />
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
          <h3>Popular Weekend Tour Packages from Bangalore</h3>
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
          <h3>Weekend Getaways from Chennai</h3>
          <p>
          There are so many options to choose from when it comes to planning a weekend getaway from Chennai with Tour My India. You can plan a visit to the best places near Chennai with your family and friends or as a couple on a romantic getaway. Experience a spiritual revelation by planning a pilgrimage getaway near Chennai to places like Mahabaleshwar & Tirupati, famous for its splendid temples. If the hills call you, then plan a weekend at hill stations like Yercaud & Yelagiri with their fresh mountain air, pleasant weather & plenty of activities that are suitable for both families & couples. <br/><br/>
          Our Chennai weekend holiday packages have been designed to offer you the choices of both a long and short weekend getaway, from 100 kilometers to 300 kilometers, at unbeatable prices and complete satisfaction. We have also selected the best weekend destinations near Chennai which include hill stations, pilgrimage sites, heritage spots, wildlife sanctuaries, beaches and adventure places.
          </p>
          <h3>List of Top 10 Weekend Destinations from Chennai</h3>
          <p>
            <ul>
              <li>
                <div>Ooty</div>
              </li>
              <li>
                <div>Mahabalipuram</div>
              </li>
              <li>
                <div>Pulicat</div> 
              </li>
              <li>
                <div>Kanchipuram</div> 
              </li>
              <li>
                <div>Yelagiri</div> 
                
              </li>
              <li>
                <div>Kodaikanal</div> 
              </li>
              <li>
                <div>Maidkeri</div>
              </li>
              <li>
                <div>Tirupati</div> 
              </li>
              <li>
                <div>Coonoor</div> 
              </li>
              <li>
                <div>Yercaud</div> 
              </li>
            </ul>
          </p>
          <h3>Best Hill Stations Near Chennai Worth Visiting Over Weekends</h3>
          <p>
            <ul>
              <li>
                <span>Yelagiri   :</span>
                <div>
                Yelagiri makes for an exciting short weekend trip for its verdant landscape, lovely rose gardens, orchards and opportunities for adventure activities like trekking & rock climbing.
                </div>
              </li>
              <li>
                <span>Ooty  :</span>
                <div>
                You can't miss out on Ooty while planning any hill station weekend getaway. It wins your heart with its tea gardens, Ooty Lake and activities like fishing, horse riding & golfing.
                </div>
              </li>
              <li>
                <span>Yercaud  :</span>
                <div>
                Heart winning vantage points, Deer Park, Bear’s Cave, Killiyur Waterfalls & other such attractions makes Yercaud one of the best places to visit from Chennai.
                </div>
              </li>
              <li>
                <span> Kodaikanal   :</span>
                <div>
                Kodaikanal is an ideal choice for a long vacation for its exquisite landscape, charming flora & fauna & sightseeing places like Kodai Lake & Dolphin Nose.
                </div>
              </li>
              <li>
                <span>Madikeri  :</span>
                <div>
                Raw beauty, serenity, beautiful Madiker Fort, waterfalls & an ambiance that steals your heart, Madkeri is great for a 2-3 days tour from Chennai.
                </div>
              </li>
              <li>
                <span>Coonoor :</span>
                <div>
                Select Coonoor for your weekend holiday plan because it is the second biggest hill station after Ooty in the Nilgiri Hills & for its Nilgiri tea plantations, lushness, spectacular Law’s Falls & trekking routes.
                </div>
              </li>
            </ul>
          </p>

          <h3>
          Top Adventure Places Near Chennai Worth Visiting On Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Kodaikanal   :</span>{" "}
                <div>
                Plan a road trip from Chennai to Kodaikanal if you are an ardent trekking enthusiast and love camping in the midst of jungle, with the beauty of nature surrounding you.
                </div>
              </li>
              <li>
                <span>Yelagiri   : </span>{" "}
                <div>
                Yelagiri, at an altitude of 3,600 feet, is a haven for trekkers with its valleys, hills & vderant vistas, is ideal for trekking, either to Peerumedu Waterfalls or Swami Malai Hills.
                </div>
              </li>
              <li>
                <span>Ubbalamandagu/Tada Falls :</span>{" "}
                <div>
                Ubbalamandagu or Tada Falls is located within 100 kilometers from Chennai & involves trekking almost 10 kilometers to the spectacular waterfalls through the rocky mountains.
                </div>
              </li>
              <li>
                <span>Kolli  Hills :</span>{" "}
                <div>
                  {" "}
                  Kolli Hills, elevated at 4,000 feet, is an offbeat trekking option near Chennai which takes about 2 days & includes the incredible Agaya Gangai Waterfalls.
                </div>
              </li>
              <li>
                <span>Meghamail   :</span>{" "}
                <div>
                Trekking in Meghamail is located close to Periyar Tiger Reserve, where trekking throughout the rainforest takes you through some amazing sights & is a top thing to do here.
                </div>
              </li>
            </ul>
          </p>

          <h3>
          Popular Religious Places Near Chennai Worth Visiting Over Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Mahabalipuram   : </span>{" "}
                <div>
                No other spiritual destination than Mahabalipuram is better within 100 kilometers from Chennai with its Shore Temple (UNESCO Site), Five Rathas and Sculpture Museum.
                </div>
              </li>
              <li>
                <span>Tirupati  :</span>{" "}
                <div>
                Tirupati is a major pilgrimage destination in India famous for its temples that dominate its skyline, with the most visited of them being Tirupati Balaji & Sri Venkateshwara Swamy.
                </div>
              </li>
              <li>
                <span>Kanchipuram  :</span>{" "}
                <div>
                Kanchipuram’s skyline is dotted with artistic gopurams & an ideal pilgrimage getaway from Chennai as it’s one of seven sacred cities and the second holiest place in India.
                </div>
              </li>
              <li>
                <span>Puttaparthi   :</span>{" "}
                <div>
                Once a residence of the spiritual leader Satya Sai Baba, Puttaparthi makes for an interesting short getaway whose main attraction is Satya Sai Ashram & numerous other temples.
                </div>
              </li>
              <li>
                <span>Thanjavur   :</span>{" "}
                <div>
                The most convincing reason to visit Thanjavur is the Great Living Chola Temples which are UNESCO World Heritage Site. Other attractions are cotton & handloom silk sarees & Tanjore paintings.
                </div>
              </li>
              <li>
                <span>Thiruvarur   :</span>{" "}
                <div>
                Experience spiritual satisfaction at Thiruvarur, a major pilgrimage destination, whose most famous temple is Shri Thyagaraja Temple. The landscape too is dotted with paddy fields.
                </div>
              </li>
            </ul>
          </p>
          <h3>
          Best Heritage Destinations Near Chennai Worth Visiting On Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Mysuru  :</span>{" "}
                <div>
                Mysuru is a top sightseeing destination for families as well as couples. While the Mysuru Palace is splendour unparalleled, other attractions are Mysore Zoo, temples and gardens.
                </div>
              </li>
              <li>
                <span>Madurai  : </span>{" "}
                <div>
                Madurai is one of the best heritage places near Chennai for weekend as it’s the cultural capital of Tamil Nadu, oldest inhabited city & home to Meenakshi Amman Temple, the largest temple in India.
                </div>
              </li>
              <li>
                <span>Tiruchirapalli   :</span>{" "}
                <div>
                Visit Tiruchirapalli for its historical monuments, temples, Government Museum, St. John’s Church & other attractions that offer wonderful opportunities for sightseeing.
                </div>
              </li>
              <li>
                <span>Chidambaram   : </span>{" "}
                <div>
                Chidambaram is located within 200 kilometers from Chennai famous for its Chidambaram Temple & several temple festivals like Brahmotsavan, Thai Poosam and Arudra Dharshan.
                </div>
              </li>
              <li>
                <span>Mahabalipuram    : </span>{" "}
                <div>
                Mahabalipuram is located within 100 kilometers from Chennai & showcases the glory of Pallava Dynasty in the Group of Monuments including Shore Temple & Panch Rathas which are a UNESCO World Heritage Site.
                </div>
              </li>
            </ul>
          </p>

          <h3>
          Best Wildlife Getaways Near Chennai Worth Visiting Over Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Annamalai Tiger Reserve : </span>{" "}
                <div>
                Visiting Annamalai Tiger Reserve is among the top things to do as it offers excitement & adventure. Some of the animals found are leopard, elephant, Royal Bengal Tiger, Nilgiri Tahr & over 250 species of birds.
                </div>
              </li>
              <li>
                <span>Parambikulam Wildlife Sanctuary  : </span>{" "}
                <div>
                Plan a weekend getaway to Parambikulam Wildlife Sanctuary to spot the wild boar, sambar, gaur, crocodiles, panthers, Royal Bengal Tigers. Climb a tree house for sweeping views.
                </div>
              </li>
              <li>
                <span>Mudumalai Wildlife Sanctuary   :</span>{" "}
                <div>
                Bird lovers & ornithologists should visit Mudumalai Wildlife Sanctuary as it’s home to several species of birds, including peacock, grey jungle fowl, whistling thrush and large racket tailed dronge.
                </div>
              </li>
            </ul>
          </p>


          <h3>
          Top Beach Destinations Near Chennai Worth Visiting On Weekends
          </h3>
          <p>
            <ul>
              <li>
                <span>Tranquebar   : </span>{" "}
                <div>
                You can explore this tiny quiet beach side town on foot or on a bicycle. Some of its attractions are The Town Gate, Fort Dansborh and The Zion Church.
                </div>
              </li>
              <li>
                <span>Mahabalipuram   : </span>{" "}
                <div>
                Mahabalipuram, with its UNESCO Group of Monuments, is an ideal beach getaway from Chennai for families & those who enjoy watching the sunset, doing beach side shopping enjoying the delicious seafood.
                </div>
              </li>
              <li>
                <span>Pondicherry    : </span>{" "}
                <div>
                Pondicherry has 6 beaches in total, all of which are suitable for families. The most famous beach for swimming is Auroville Beach, while Mahe & Rock Beach are perfect for enjoying the sunrise.
                </div>
              </li>
              <li>
                <span>Rameswaram    : </span>{" "}
                <div>
                Rameswarm is a beach getaway along with one of the sacred 4 dhams in Hindusim. The most famous beaches are Olaikunda, Sangumal, Pamban and Kunthukal.
                </div>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default Chennai