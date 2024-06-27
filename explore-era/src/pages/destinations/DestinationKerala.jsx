import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./destinationHimachal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/destination_card";
const API1 = "http://localhost:5164/destination1View";
const API2 = "http://localhost:5164/best_view";


const DestinationKerala = () => {

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
              return item1.id === '62' ;
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
              return item2.id === '14' || item2.id === '15' || item2.id === '16' ;
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
            return item.id === '27' || item.id === '28' || item.id === '29';
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
        <h2 className="main-info-heading">About Kerala  Tourism</h2>
        <p className="main-info-details">
        Encompassing serenity, Kerala is a charming South Indian destination that should be in every traveller’s bucket list. Adorned with the emerald backwaters, sprawling and lush tea estates, pristine hill stations, and azure Arabian Sea, Kerala tourism boasts numerous tourist places with which you will fall in love instantly. <br/><br/>
        In North Kerala, districts like Kasaragod, Kannur, Wayanad, Kozhikode, and Malappuram have many attractions for the tourists. Wayanad offers a lovely hill station holiday whereas Kozhikode offers a great beach holiday and an opportunity of bird watching. <br/><br/>
        In Central Kerala, Palakkad, Thrissur, Ernakulam, and Idukki have a number of experiences in store. Thrissur is a culture aficionado’s paradise while Idukki and Ernakulam are the hotspots for nature lovers.<br/><br/>
        In South Kerala Kottayam, Pathanamthitta, Alappuzha, Kollam, Thiruvananthapuram are ready with a variety of experiences like backwaters and houseboat in Alappuzha; beach vacations in Kollam, and a glance at rich history of Kerala at Pathanamthitta. <br/><br/>
        Kerala tourism isn’t only about imbibing natural beauty but its rich culture that is festooned with dances, festivals, delectable cuisine, literature, Ayurveda therapies, and art & craft. Kerala has it all, and you have to see it, to believe it.<br/><br/>
        The state opens its doors to beach holidays with picturesque beaches like Varkala, Kovalam and Marari. Giving a good run to pristine beaches are the backwaters of Kerala that can be best experienced in Alleppey and Kumarakom.<br/><br/>
        Kerala's beach and backwaters are accompanied by its lush and surreal hill stations, of which Munnar, Wayanad and Vagamon are the best places to visit in the summer season. With Western Ghats covering some of its area, Kerala is the best wildlife destination and is perfect for birdwatching.<br/><br/>
        We, at Tour My India would be happy to help you explore the scenic destination of Kerala, and therefore, offer to you the finest Kerala holiday packages and deals. With our best Kerala travel packages, you can rest assured for a hassle free and memorable holiday in Kerala.

        </p>

       
        <h2 className="main-info-heading">
        Top 10 Most Visited Tourist Destinations of Kerala
        </h2>
        <p className="main-info-details">
          <ul>
            <li>
              <div>
                <span>Alleppey  :</span>  Kerala’s favourite backwater tourist destination, Alleppey is famed for offering an incredible experience of staying and cruising in a traditional houseboat.
              </div>
            </li>
            <li>
              <div>
                <span> Munnar  : </span>Adorned with myriad tea estates and rolling hills, Munnar is without a doubt the best hill station in Kerala. It is a must visit tourist place in Kerala for a relaxing holiday as well as relishing adventure activities.
              </div>
            </li>
            <li>
              <div>
                <span>Kochi  :</span> A cosmopolitan city with a bustling port, Kochi is where the modern lifestyle meets the traditional one. The city is the perfect reflection of Kerala and has many experiences up its sleeves.
              </div>
            </li>
            <li>
              <div>
                <span>Thekkady :</span>  Fringing the popular Periyar National Park, Thekkady is a hill station in Kerala that attracts many nature and wildlife lovers. It is one of the best places to enjoy the scenic beauty of Kerala.
              </div>
            </li>
            <li>
              <div>
                <span> Thrissur : </span> The cultural capital, Thrissur does not need an introduction. From drawing a large crowd on its Temple Festival (Thrissur Pooram) to being an abode to several cultural centres, the city is a must-visit in Kerala.
              </div>
            </li>
            <li>
              <div>
                <span> Kovalam  : </span>A small coastal town with some of the best beaches of Kerala, Kovalam is a place where you get to enjoy sunbathing, swimming, herbal body toning massages, special cultural programmes and catamaran cruising.
              </div>
            </li>
            <li>
              <div>
                <span> Wayanad :</span>Dotted with camping sites, trekking trails and gorgeous waterfalls, Wayanad is a peaceful and picturesque hill station that is perfect for holiday in Kerala.
              </div>
            </li>
            <li>
              <div>
                <span> Kumarakom  :</span> The favourite place for luxury seekers desiring a holiday on the backwaters of Kerala, Kumarakom is replete with luxury houseboats and resorts promising an experience of a lifetime.
              </div>
            </li>
            <li>
              <div>
                <span>Kozhikode :</span>  Home to serene beaches and historic sites, Kozhikode is where Vasco Da Gama landed when he discovered India. The city is a perfect place to get an authentic experience of Kerala.
              </div>
            </li>
            <li>
              <div>
                <span>Thiruvananthapuram  : </span>The capital city, Thiruvananthapuram is where you can find authentic Kerala’s food, intriguing sights and a cluster of Victorian museums; it’s a place of many experiences.
              </div>
            </li>
          </ul>
        </p>
      </div>

      <div className="container2">
        <section className="best-time">
          <h2>Best Time to Visit Kerala </h2>
          <div className="seasons">
            <div className="season">
              <img src="images/summer-ico.png.png" alt="Summer Season" />
              <br />
              <br />
              <div>
                <h3>Summer Season In Kerala </h3>
                <p>
                The summer season between March and June in Kerala can be extremely hot with temperature going above 35°C.
                </p>
              </div>
            </div>
            <div className="season">
              <img src="images/mansoon-ico.png.png" alt="Monsoon Season" />
              <br />
              <br />
              <div>
                <h3>Monsoon Season In Kerala </h3>
                <p>
                Monsoon begins from June and ends in September in Kerala. The state experiences heavy rainfall and extreme humidity during monsoons.
                </p>
              </div>
            </div>
            <div className="season">
              <img src="images/winter-ico.png.png" alt="Winter Season" />
              <br />
              <br />
              <div>
                <h3>Winter Season In Kerala </h3>
                <p>
                Winter season in Kerala is from November to February when the weather is pleasant and the temperature remains under 30°C.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="best-places">
          <h2>Best Places to Visit in Kerala </h2>
          <div className="places">
            {items.map((item) => (
              <div className="place" key={item.id}>
                <img src={`data:image/jpeg;base64,${item.image}`}  alt={item.heading}/>
                <h3>{item.heading}</h3>
                <p>{item.details}</p>
                <div className="tags-button">
                  <div className="tags">
                    <span>{item.block1}</span>
                    <span>{item.block2}</span>
                  </div>
                  <button className="view-more">{item.view_more}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="top-things">
          <h2>Top Things to Do in Kerala </h2>
          <div className="activities">
            <div className="activity">
              <img src="images/kerala_ayurveda.webp" alt="Adventure" />
              <h3>Ayurveda Treatments & Therapies</h3>
              <p>Avail a wide range of Ayurveda treatments in Kerala that has many wellness resorts and centres. </p>

              <button className="view-more">View more</button>
            </div>
            <div className="activity">
              <img src="images/houseboats.webp" alt="Wildlife" />
              <h3>Houseboat Stay & Cruise</h3>
              <p>Relish one-of-its-kind experience of staying and cruising in a houseboat on the backwaters of Kerala.</p>

              <button className="view-more">View more</button>
            </div>
            <div className="activity">
              <img src="images/kerala_wildlife.webp" alt="Lakes" />
              <h3>Wildlife Safari & Birdwatching</h3>
              <p>Enjoy enthralling wildlife safari and sight the rich flora & fauna of Kerala at its various wildlife reserves.</p>

              <button className="view-more">View more</button>
            </div>
          </div>
        </section>

        <div className="container3">
          <div className="info-last">
            <h2>Kerala  Essential Information</h2>
            <section>
              <h2>Where to stay in Kerala</h2>
              <p>
              Kerala invites tourists to savour a plethora of experiences and leaves no stone unturned in offering them the best places to stay. There is a wide range of accommodations available at every popular tourist destination in Kerala. In fact, the lesser-known and offbeat places in the state too have a decent accommodation. <br/><br/>
              From budget to luxury to heritage hotels to houseboats, camps and homestay, Kerala leaves one spoilt for choices.
              </p>
            </section>
            <section>
              <h2>Major Activities for Tourists in Kerala</h2>
              <p>
              Kerala offers an opportunity to have varied experiences that are worth relishing. The state offers the chance to indulge in therapeutic ayurvedic massages; cruising in the houseboats on the pristine backwaters and thrilling watersports on the beaches. The must-have experiences in Kerala also include witnessing exhilarating snake boat races; relishing delectable food; enjoying watching classical dance performances like Kathakali and Mohiniattam or martial art performances like Kalaripayattu.
              </p>
              <p>
              The state also offers an opportunity to enjoy the tea and spice plantation tours; shopping for handicrafts; wildlife sighting and birdwatching tours.
              </p>
            </section>
            <section>
              <h2>
              Kerala Travel Tips
              </h2>
              <ul>
                <li>
                You can bring as much foreign currency as you want to Kerala and get it exchanged.
                </li>
                <li>
                Banks are open for transactions from 10:00 - 3:30 hrs on weekdays and on first and third Saturdays. Second and Fourth Saturdays are holidays.
                </li>
                <li>
                Several hotels, restaurants and shopping centres accept major credit cards - Mastercard and Visa.
                </li>
                <li>
                For the best Kerala holiday experience, visit between September and May.
                </li>
                <li>
                Carry cotton outfits; hats, sunglasses, sunscreen lotion etc.
                </li>
                <li>
                Book your Ayurveda therapies and treatments at centres that are classified/approved by the Department of Tourism.
                </li>
                <li>
                A variety of food apart from the cuisine of Kerala is available at major restaurants
                </li>
                <li>
                Some temples in Kerala do not permit entry to non-Hindus.
                </li>
                <li>
                Strict dress codes are followed in most of the temples. Footwear is banned inside the temple premises.
                </li>
                <li>
                Smoking is banned in public places.
                </li>
                <li>
                When visiting someone’s home in Kerala, make sure to leave the footwear outside.
                </li>
                <li>
                Demonstrating affection in public like hugging or kissing is not an accepted practice in Kerala.
                </li>
                <li>
                To visit a wildlife sanctuary or national park in Kerala, prior permission has to be taken from the concerned authority.
                </li>

              </ul>
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

export default DestinationKerala