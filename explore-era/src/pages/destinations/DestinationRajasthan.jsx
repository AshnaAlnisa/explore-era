import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./destinationHimachal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/destination_card";
const API1 = "http://localhost:5164/destination1View";
const API2 = "http://localhost:5164/best_view";


const DestinationRajasthan = () => {

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
          return item1.id === '64' ;
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
          return item2.id === '20' || item2.id === '21' || item2.id === '22' ;
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
            return item.id === '33' || item.id === '34' || item.id === '35';
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
        <h2 className="main-info-heading">About Rajasthan  Tourism</h2>
        <p className="main-info-details">
        Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, spicy food, colourful and large turbans, extensive golden sand desert, camels and rich handicraft. It is therefore, an incredible place to visit in India for enjoying unforgettable holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and more.
        </p>

        <h2 className="main-info-heading">Architectural Splendour: Forts, Palaces & Havelis!</h2>
        <p className="main-info-details">
        The major tourist attraction of Rajasthan are its havelis, palaces and forts that add to the experience of exploring one of the historically wealthy states in India. Some of the most famous and most visited forts in Rajasthan are Chittorgarh, Mehrangarh, Jaisalmer, Jaigarh and Junagadh Forts. Of these, the Mehrangarh Fort in Jodhpur is spread over 5 kilometers and stands on a hill almost 125 kilometers high. Chittorgarh Fort is also a must visited tourist attraction, as it’s the largest fort in Asia. It is spread over an area of 700 acres, extending to 3 km in length and 13 km in peripheral length. The exquisite architecture isn’t only confined to the palaces and forts as Rajasthan also boasts impressive Hindu & Jain temples like Dilwara Jain Temples and Eklingji Temple.<br />
        </p>

        <h2 className="main-info-heading">
        A Rich Melange of Dances, Songs, Rides & Colors!
        </h2>
        <p className="main-info-details">
        For culture aficionados, there are a number of fairs and festivals in Rajasthan to witness. The flamboyant manner in which even the cattle fairs take place in Pushkar and Nagaur is truly something to behold. Some of the most famous tourism festivals that showcase the rich traditions, customs, folk dance and music of the state are the Desert Festival, Bikaner Camel Festival, Nagaur Fair, Pushkar Fair, Elephant Festival, Mewar Festival, Mount Abu Winter Festival, Gangaur Festival and Teej.
        </p>

        <h2 className="main-info-heading">
        Rajasthan Also Boasts a Rich Wildlife!
        </h2>
        <p className="main-info-details">
        Rajasthan, even though the hot and arid place, is rich in wildlife tourism. It offers several opportunities for tiger sighting and birdwatching. Some of the famous wildlife sanctuaries and national parks of the state are Ranthambore National Park, Sariska National Park, Keoladeo and Mukundra Hills National Park. It is blessed with a rich variety of vegetation and animal & birds species. To spot the Royal Bengal Tigers, Ranthambore National Park and Sariska National Park are the most famous wildlife destinations in Rajasthan. <br />
          <br />
          Those who love birdwatching should visit Keoladeo National Park (Bharatpur Bird Sanctuary), a UNESCO World Heritage Site, as it is home to at least 230 species of birds. Home to indigenous water birds and migratory water birds, specifically the Siberian Crane, the Bharatpur Sanctuary also boasts many species of mammals like Sambar, Chital, Nilgai and Boar. It is the major tourist spot for most of the ornithologists today during hibernal season. Apart from these, Rajasthan is home to a large number of leopards, blackbuck, great Indian spotted eagle, and marsh crocodiles.
        </p>

        <h2 className="main-info-heading">
        Go Shopping : From Jewellery to Paintings!
        </h2>
        <p className="main-info-details">
        An indispensable part of the culture of Rajasthan is the handicraft skills, shopping for which is an experience to have. The state is famous for its jewellery pieces, and is one of the largest centers for hand cut gems in the world. Gold and silver jewellery is extremely famous, along with Kundan and Meenakari styles of ornaments. The gold work on glass, called Thewa is also quite a popular thing to buy in Rajasthan. <br />
          <br />
          Another shopping worthy article in Rajasthan are its miniature paintings that have a Mughal influence to it. These paintings have intricate detailing and come in different styles like Mewar, Bundi, Kota, Marwar, Bikaner, Jaipur and Kishangarh. An ancient art of scroll painting called Phad also makes for one of the best things to take back home from Rajasthan. Pichwais are another form of paintings, a little different from Phad; but equally attractive.
          <br />
          <br />
          Apart from the home decor in the form of paintings, Rajasthan offers an opportunity to buy some authentic and exquisite leather items, amongst which Mojari/Jutti/Shoes are the most popular things to buy. One can get the best Mojari from Jaipur, Jodhpur, Barmer and Jaisalmer along with musical instruments made out of leather. From Bikaner one can purchase lamp shades, shields, vases made out of camel hide.
        </p>

        <h2 className="main-info-heading">
        Daal Baati Churma to Laal Maas : Savour the Rich Cuisine of Rajasthan!
        </h2>
        <p className="main-info-details">
        Influenced with the parched region of Rajasthan, extreme climatic condition and limited availability of water and vegetation, the Rajasthani Cuisine has evolved out of the unique cooking style and pugnacious lifestyle of its natives. From the signature dish of the state; Dal Bati Churma to the popular street snack; mirchi ke pakore, from the generous use of spice and ghee to the prominent use of the variety of lentils and legumes, Rajasthani food is a fine treat for which the tourists travel even thousand miles. <br />
          <br />
          Starting from different kinds of breads like Batis, Missi roti, and Jowar, Bajra and Makke ki roti, to go with exceptionally tasty curries like Gatte ki Sabzi, Papad ki Sabzi and Kadhi Pakora. The pungent tidbits and accompaniments like Moong Dal and Pyaaz ki Kachori, Bikaneri Bhujia, Bajre ka khichda, Kher Sangri, and Lehsun ki Chutney, and the wind-up digestive Butter Milk elaborates the menu even more. And not to forget the sweet wonders like Churma, Lapsi, Malpua, Ghewar, Alwar ka Mawa and the long lasting Gond ke Laddoo. Though the region is predominantly vegetarian, the influence of Rajputs non-vegetarian food habit can be seen in the cuisine with the presence of delicacies such as Laal Maas, Jungle Maas, Khad Khargosh and Safed Maas, that in a way completes the menu.
        </p>

        <h2 className="main-info-heading">
        Luxury Holidays and Royal Hospitality!
        </h2>
        <p className="main-info-details">
        For luxury holidays, Rajasthan tourism has a decent number of heritage hotels that along with offering incredible hospitality to all its guests also cater to the fantasies of honeymoon couples. There are several ways that you can experience both luxury and royal hospitality in Rajasthan. One of these is taking a ride on the Royal Rajasthan on Wheels Train where you can sink into relaxing massage session; sample spicy Rajasthani cuisine in restaurant and bar-cum-lounge; relaxing stay in twin-bedded chambers with attached bathrooms and pampering session in the well-furnished salon, while enjoying the pretty view of the desert rolling by.
          <br />
          <br />
          You can also stay at the heritage hotels, which were once palaces of the princes and maharajas but were later on converted into heritage hotels. The major percentage of hotels are adorned with exotic murals; original artifacts; king sized beds, manicured gardens; mirrored bar; sunlit corridors and most modern style with the convenience that were once the properties of the reigning monarchs. Some of the most famous heritage hotels in Rajasthan are Leela Palace, Taj Lake Palace, Umaid Bhawan and Jal Mahal Palace. The fabulous exteriors, spectacular interiors and hospitality normally reserved for royalty are some of the experiences in store for you at these heritage hotels. A stay in any of these hotels would transfer one to the world where everything is lavish, luxurious and larger than life.
        </p>

        <h2 className="main-info-heading">
        From Zip Lining to Zorbing, there are Several Options for Adventure Tourism Sports!
        </h2>
        <p className="main-info-details">
        Rajasthan also offers numerous opportunities for enjoying several adventure tourism sports activities. Some of the adventure hotspots in the state are Jaipur, Pushkar, Bharatpur and Jaisalmer. In Bharatpur, you can enjoy different types of adventure activities like zip lining, quake walk and rope course. <br/><br/>
        Jaipur attracts adventure enthusiasts with a number of adventure activities like zorbing, cycling and ATV bike ride. In Pushkar, you can enjoy hot air balloon rides, quad biking and camel safari. And of course, with Rajasthan being home to the great sand dunes of the Thar desert, you can enjoy camel rides, feel the thrill of sand dune bashing and biking. You can also enjoy parasailing and enjoy the views of the forts and desert from above.
        </p>

        <h2 className="main-info-heading">
        Top 10 Most Visited Destinations of Rajasthan
        </h2>
        <p className="main-info-details">
          <ul>
            <li>
              <div>
                <span>Jaipur   :</span> The capital city Jaipur has been recognized as a UNESCO World Heritage Site. Dotted with numerous heritage sites, the Pink City is an unmissable destination.
              </div>
            </li>
            <li>
              <div>
                <span> Udaipur   : </span>Dubbed the City of Lakes, Udaipur is adorned with many man-made lakes, palaces, and the Aravalli Hills which make it a popular tourist destination in Rajasthan.
              </div>
            </li>
            <li>
              <div>
                <span>Jodhpur   :</span> Home to the impressive Mehrangarh Fort and Umaid Bhavan, Jodhpur, the second-largest city in Rajasthan is a history lover’s paradise.
              </div>
            </li>
            <li>
              <div>
                <span>Jaisalmer  :</span>The Golden City, Jaisalmer is flanked by the Thar Desert and adorned with a living fort. Reflecting the rich history of Rajasthan, Jaisalmer is a land of experiences you cannot forget.
              </div>
            </li>
            <li>
              <div>
                <span> Ranthambore National Park  : </span>  One of the major tiger reserves in India, Ranthambore National Park boasts rich wildlife, historical monuments, and an enthralling wildlife safari experience.
              </div>
            </li>
            <li>
              <div>
                <span> Pushkar   : </span> One of the oldest cities in India, Pushkar is a religious destination which also has a hippie vibe. Its 52 ghats and one-of-its-kind Brahma Temple attract many from across the world.
              </div>
            </li>
            <li>
              <div>
                <span> Bikaner :</span> Displaying the opulence of Rajasthan’s culture and history, Bikaner is popular as a world’s largest camel research and breeding farms and is home to the unique rat temple, Karni Mata.
              </div>
            </li>
            <li>
              <div>
                <span> Ajmer   :</span> Famed as an important Muslim pilgrimage, Ajmer is a sacred destination in Rajasthan that is also known for historical opulence.
              </div>
            </li>
            <li>
              <div>
                <span>Chittorgarh :</span> The largest fort not only in Rajasthan but in India, Chittorgarh is known for its architectural brilliance and different periods of history that it has been the witness of.
              </div>
            </li>
            <li>
              <div>
                <span>Kumbhalgarh   : </span>Boasting one of the longest walls in the world, Kumbhalgarh is the second-largest fort in India. This impressive fort is not to be missed witnessing in Rajasthan.
              </div>
            </li>
          </ul>
        </p>
      </div>

      <div className="container2">
        <section className="best-time">
          <h2>Best Time to Visit Rajasthan </h2>
          <div className="seasons">
            <div className="season">
              <img src="images/summer-ico.png.png" alt="Summer Season" />
              <br />
              <br />
              <div>
                <h3>Summer Season In Rajasthan </h3>
                <p>
                Summer in Rajasthan starts from April and lasts till June. The temperature ranges from 24°C to 48°C. Heat can be very uncomfortable for tourists. This season is not favourable for trave.
                </p>
              </div>
            </div>
            <div className="season">
              <img src="images/mansoon-ico.png.png" alt="Monsoon Season" />
              <br />
              <br />
              <div>
                <h3>Monsoon Season In Rajasthan </h3>
                <p>
                Monsoon in Rajasthan begins in July and ends in September. The temperature ranges from 21°C to 35°C. During Monsoon thunderclap paves the way for heavy rainfall. This season is also favourable for travel.
                </p>
              </div>
            </div>
            <div className="season">
              <img src="images/winter-ico.png.png" alt="Winter Season" />
              <br />
              <br />
              <div>
                <h3>Winter Season In Rajasthan </h3>
                <p>
                Winter in Rajasthan begins in October and ends in March. The temperature ranges from 13°C to 30°C. The weather is favourable for travel due to pleasant daytime temperatures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="best-places">
          <h2>Best Places to Visit in Uttarakhand </h2>
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
          <h2>Top Things to Do in Rajasthan </h2>
          <div className="activities">
            <div className="activity">
              <img src="images/wildlife-safari.webp" alt="Adventure" />
              <h3>Wildlife Safari</h3>
              <p>Enjoy sighting tigers and other animals on an enthralling wildlife safari in Rajasthan’s best wildlife reserves.</p>
              <button className="view-more">View more</button>
            </div>
            <div className="activity">
              <img src="images/hot-air-ballooning.webp" alt="Wildlife" />
              <h3>Hot-Air Ballooning</h3>
              <p>Soar high in the sky and experience the best hot-air ballooning in Jaipur, Pushkar, and Ranthambore.</p>
              <button className="view-more">View more</button>
            </div>
            <div className="activity">
              <img src="images/desert-camping.webp" alt="Lakes" />
              <h3>Desert Camping</h3>
              <p>Relish the experience of camping in the vast Thar Desert under the starlit sky for the best Rajasthan memories.</p>
              <button className="view-more">View more</button>
            </div>
          </div>
        </section>

        <div className="container3">
          <div className="info-last">
            <h2>Rajasthan Essential Information</h2>
            <section>
              <h2>Where to stay in Rajasthan </h2>
              <p>
              Rajasthan offers its warm hospitality to its visitors and ensures the best places to stay. There is a wide range of accommodations available at every popular tourist destination in Rajasthan. In fact, even the lesser-known and offbeat places in the state have at least basic accommodation at disposal. From budget to luxury to heritage hotels to luxury camps to homestay to backpacker hostels, Rajasthan has a lot to offer.
              </p>
            </section>
            <section>
              <h2>Major Activities for Tourist in Rajasthan</h2>
              <p>
              Rajasthan offers an opportunity to have several experiences. The state offers the chance to indulge in enthralling wildlife safaris, hot-air balloon rides, and dune bashing along with authentic experience of camel safari and desert camping.
              </p>
              <p>
              The must-have experiences in Rajasthan also include relishing delectable food; enjoying folk dance & music performances like Ghoomar. The state also offers an opportunity to enjoy shopping for handicrafts and visiting temples with exquisite architecture.
              </p>
            </section>
            <section>
              <h2>
              A few Tips Before Visiting Rajasthan
              </h2>
              <ul>
                <li>
                Rajasthan is the biggest state in India, so plan your itinerary accordingly.
                </li>
                <li>
                Wear cotton clothes, hat and carry sunscreen lotion if you are visiting it during summers.
                </li>
                <li>
                Respect the rules and customs if you are visiting a heritage site or temples.
                </li>
                <li>
                Remember to enjoy a camel ride during your visit to Rajasthan.
                </li>
                <li>
                Stay hydrated and drink plenty of water at all times.

                </li>
                <li>
                There are plenty of options when it comes to public transport, from tuk tuks to battery operated autos.
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

export default DestinationRajasthan