import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./destinationHimachal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/destination_card";
const API1 = "http://localhost:5164/destination1View";
const API2 = "http://localhost:5164/best_view";
const API3 = "http://localhost:5164/destination_card1";

const DestinationHimachal = () => {
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    departureDate: "",
    numberOfDays: "",
    email: "",
    contactNo: "",
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
        CONTACTNO: formData.contactNo,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5164/destination_form",
        payload
      );
      let res = response.data.rData.rMessage;
      console.log(response.data, "api response"); // handle response
      if (res === "Successful") {
        alert(res);
        navigate("/himachalPradesh");
        setFormData({
          name: "",
          description: "",
          departureDate: "",
          numberOfDays: "",
          email: "",
          contactNo: "",
        });
      } else {
        alert(res);
        navigate("/himachalPradesh");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again later."); // Handle error
    }
  };

  useEffect(() => {
    fetchItems1();
    fetchItems2();
    fetchItems();
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

        if (responseData.rData && responseData.rData.items1) {
          // Filter items based on specific IDs
          const filteredItems1 = responseData.rData.items1.filter((item1) => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return item1.id === "60";
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
          const filteredItems2 = responseData.rData.items2.filter((item2) => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return item2.id === "8" || item2.id === "9" || item2.id === "10";
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
          const filteredItems = responseData.rData.items.filter((item) => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return item.id === "21" || item.id === "22" || item.id === "23";
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
          const filteredItems3 = responseData.rData.items.filter(item => {
            // Replace '1', '2', '3' with your specific IDs or conditions
            return item.id === '37' || item.id === '38' || item.id === '39';
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
          <h2 className="main-info-heading">About Himachal Pradesh Tourism</h2>
          <p className="main-info-details">
            Himachal Pradesh is among the most visited top mountain tourist
            places in North India, Himalayas region. It gifts you with memories
            that last for a lifetime. Valleys, mountains, ancient monasteries,
            historical sites, lakes, mountain passes! - The list never ends. The
            wanderlust in you will be compelled to stay here forever. Pick up
            any Himachal travel guide, chances are, you will be hooked on to its
            beauty within a few minutes. This state has so much to offer.
            Indeed, it’s a top tourist attraction in North India!
          </p>

          <h2 className="main-info-heading">
            Let’s Blend with the Soothing Rhythm of Nature
          </h2>
          <p className="main-info-details">
            Himachal Pradesh tourism has something in store for nature lovers.
            Its beauty lies in its diversity. You have lush valleys like
            Kinnaur, Kullu and Kangra & barren terrains of Lahaul & Spiti. Tales
            of Malana fascinate tourists as much as the Buddhist culture in
            Mcleodganj. Exploring Dalhousie, with its rich colonial past, is
            sheer delight. The famous Hill stations like Shimla, Kullu & Manali
            are dotted with meadows, orchards, quaint villages & rich colonial
            past. Any sightseeing tour of Himachal should include its wonderful
            lakes. Quiet and still, they reflect the surroundings, both
            literally and symbolically. A few of the famous lakes are Renuka,
            Rewalsar, Prashar, Suraj Tal & Chandratal. The views of the
            Himalayan Ranges fill you with excitement, from head to toe.
          </p>

          <h2 className="main-info-heading">Say Yes to New Adventures</h2>
          <p className="main-info-details">
            The varied landscape of Himachal also lends itself to various
            adventure activities. The thrill of river rafting can be enjoyed at
            River Sutlej at Tattapani near Shimla, River Beas near Kullu, River
            Ravi near Chamba, River Chenab and Spiti in Lahaul and Spiti
            district. There are also a lot of opportunities for trekking, for
            both amateur & advanced trekkers. Some of the famous treks are Pin
            Parvati Pass, Hampta Pass, Kinnaur Kailash & Chandratal. Soar high
            with paragliding at Bir Billing, the second highest paragliding spot
            in the world. Skiing, angling, rock climbing, camping &
            mountaineering are other top adventure sports you can enjoy.
          </p>

          <h2 className="main-info-heading">
            Heritage of the Glorious Past of Himachal Pradesh
          </h2>
          <p className="main-info-details">
            History buffs travelling to Himachal also have something to look
            forward to. There are several heritage sites which are top tourist
            attractions, for both their architecture & historical magnificence.
            From ancient forts, colonial mansions, lush country sides of ancient
            traditions, magnificent havelis to elegant British colonial
            architecture, you will be mesmerized to see its breathtaking
            heritage charm. A few of these are Jandrighat Palace in Dalhousie,
            Rang Mahal in Chamba, Bahadurpur Fort in Bilaspur, Padam Palace in
            Rampur, and Kangra Fort in Kangra.
          </p>

          <h2 className="main-info-heading">
            Pristine Wilderness and Exotic Wildlife of Himachal Pradesh
          </h2>
          <p className="main-info-details">
            Himachal is very popular for its national parks. These are home to
            rare and endangered animals. The most famous of these is Great
            Himalayan National Park, a UNESCO World Heritage Site. You can spot
            high altitude Himalayan animals like Himalayan Tahr, Himalayan Brown
            Bear, blue sheep and snow leopard. The vast floral and faunal you
            can spot the exotic Himalayan wildlife are Pin Valley & Inderkilla.
          </p>

          <h2 className="main-info-heading">
            Voice of Cultures in Himachal Pradesh
          </h2>
          <p className="main-info-details">
            To gain an insight into the culture of Himachal Pradesh, you must
            attend its festivals. The famous among these are Chrewal, Lavi,
            Minjar Mela and Kullu Dussehra. Several traditional dances like
            Cham, Rakshasa, Chihara, Bakayang, Shand & Shabu are performed here.
            You should also check out the traditional art forms including
            Kangra, Thangka and Mural. The rich craft tradition in the state is
            influenced by the myths and local folk tales of Himachal Pradesh.
            Crafts like wood carving, embroidery, jewellery & stonework have
            flourished since a long time.
          </p>

          <h2 className="main-info-heading">
            Tickle Your Taste Buds in Himachal Pradesh
          </h2>
          <p className="main-info-details">
            Just like any other state, Himachal has its own cuisine, which has a
            strong Tibetan influence on it. The Tibetan influence is more
            strongly seen in the highlands of Kinnaur, Lahaul & Spiti, Patande
            of Sirmaur, Sepu Vadi or Mandi & Khatta Karai of Kangra. These
            delicious cuisines have a rich history. Good taste and simplicity in
            presentation makes it more authentic and worth it to have.
          </p>

          <h2 className="main-info-heading">
            Spiritual & Religious Heritage of Himachal Tourism
          </h2>
          <p className="main-info-details">
            People from all walks of life visit Himachal Pradesh to fulfill
            their transcendent quest. The state is dotted with temples, ancient
            monasteries, churches and gurudwaras. The most beautiful monasteries
            are found in Kangra, Dharamshala, Lahaul & Spiti. There are some
            British era churches like St. John in the Wilderness and St. John’s
            Church. While visiting Himachal, don’t miss out on shopping. From
            Tibetan carpets, shawls & semi-precious Jewellery to Himachali caps,
            there’s a lot to look out for.
          </p>

          <h2 className="main-info-heading">
            Top 10 Most Visited Tourist Destinations of Himachal Pradesh
          </h2>
          <p className="main-info-details">
            <ul>
              <li>
                <div>
                  <span>Shimla :</span> Visit the neo gothic Christ Church,
                  Viceregal Lodge & other colonial architecture. Hang out at The
                  Mall & attend the Ice Skating Carnival from November.
                </div>
              </li>
              <li>
                <div>
                  <span> Manali : </span>Famous for its rich cultural heritage &
                  age old traditions. Visit its tourist sites like Hidimba Devi
                  & Manu Temple. Visit the bazaar & explore Old Manali.
                </div>
              </li>
              <li>
                <div>
                  <span>Kullu :</span> It’s blessed by nature’s bounty. The
                  Kullu Dusshera in October is celebrated with great vigour.
                  Adventure activities like rafting, camping & hiking are
                  popular.
                </div>
              </li>
              <li>
                <div>
                  <span> Dharamshala :</span> Visit Mcleodganj & find out why
                  it’s called Little Lhasa. A few tourist places are Bhagsunag
                  Falls, Kangra Art Museum & War Memorial.
                </div>
              </li>
              <li>
                <div>
                  <span> Paonta Sahib : </span>Guru Gobind Singh, the 10th Guru,
                  lived here for 10 years. Seek blessings. Enjoy the views of
                  Doon Valley. Go for a picnic at Khodri Dakpathar, about 25
                  kilometres from here.
                </div>
              </li>
              <li>
                <div>
                  <span> Kangra : </span>Its history dates back to more than
                  3,500 years. Its top tourist attractions are Kangra Fort,
                  Shree Bajreshwari Devi Temple and Baijnath Shiv Temple.
                </div>
              </li>
              <li>
                <div>
                  <span> Dalhousie :</span> This hill station will win you over
                  with its rich colonial architecture, including churches. The
                  Mall Road, Subhash Baoli & spectacular beauty are its prime
                  attractions.
                </div>
              </li>
              <li>
                <div>
                  <span> Kinnaur :</span> India’s last village, views of Mt.
                  Kinner Kailash & apple orchards, it’s all here in Kinnaur. A
                  few tourist sites are Nichar, Moorang and Kothi.
                </div>
              </li>
              <li>
                <div>
                  <span>Chamba :</span> Its landscape is dotted with lakes,
                  streams, rich wildlife & fertile valleys. It is also dotted
                  with significant historical and architectural landmarks.
                </div>
              </li>
              <li>
                <div>
                  <span>Hamirpur : </span>Dense pine forests and fertile valleys
                  form a major part of its landscape. Two of its major tourist
                  attractions are the historic fort at Sujanpur Tihra & Baba
                  Balak Nath Temple.
                </div>
              </li>
            </ul>
          </p>
        </div>

        <div className="container2">
          <section className="best-time">
            <h2>Best Time to Visit Himachal Pradesh</h2>
            <div className="seasons">
              {items2.map((item2) => (
                <div className="season" key={item2.id}>
                  <img src={`data:image/jpeg;base64,${item2.image}`} />
                  <br />
                  <br />
                  <div>
                    <h3>{item2.sub_heading}</h3>
                    <p>{item2.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="best-places">
            <h2>Best Places to Visit in Himachal Pradesh</h2>
            <div className="places">
              {items.map((item) => (
                <div className="place" key={item.id}>
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.heading}
                  />
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
          <h2>Top Things to Do in Himachal Pradesh </h2>
          <div className="activities">
          {items3.map((item) => (
            <div className="activity" key={item.id}>
              <img src={`data:image/jpeg;base64,${item.image}`} alt="Adventure" />
              <h3>{item.heading}</h3>
              <p>{item.details}</p>
              <button className="view-more">{item.view_more}</button>
            </div>
          ))}
          </div>
        </section>

          <div className="container3">
            <div className="info-last">
              <h2>Himachal Pradesh Essential Information</h2>
              <section>
                <h2>Where to stay in Himachal Pradesh</h2>
                <p>
                  There are a wide variety of accommodation facilities available
                  in Himachal Pradesh. You can choose from budget to luxury
                  hotels, from 4 star to 5 star ones. Guest houses and lodges
                  are available in all the popular locations of Himachal Pradesh
                  including Shimla, Manali, Dharamshala and Kullu. TMI also
                  offers best deals on{" "}
                  <a href="#">hotel bookings in Himachal Pradesh</a>.
                </p>
              </section>
              <section>
                <h2>Major activities for tourists in Himachal Pradesh</h2>
                <p>
                  There are a wide range of activities that you can try out in
                  Himachal Pradesh. You can explore its rich colonial past in
                  hill stations like Shimla, Manali and Kasuali. If adventure
                  and thrill is what you are after, there's plenty of options.
                  You can try river rafting, mountaineering, skiing, trekking
                  and rock climbing, to name a few.
                </p>
                <p>
                  At wildlife parks like Great Himalayan National Parks, you can
                  spot rare and exotic Himalayan wildlife. Having a spiritual
                  bent of mind & looking for spiritual places to visit? There
                  are plenty of churches, monasteries, temples and gurudwaras.
                </p>
                <p>
                  You can also shop for authentic handicrafts, shawls, Tibetan
                  jewellery & Kanga paintings from its lively bazaars. Visiting
                  the serene lakes, trying out the cuisine, attending festivals
                  & visiting the museums are other activities on offer.
                </p>
              </section>
              <section>
                <h2>
                  Official Guidelines and Travel Tips by Himachal Pradesh
                  Tourism
                </h2>
                <ul>
                  <li>
                    Always carry your identity card/passport while travelling.
                  </li>
                  <li>
                    You require permission for photography & filming at some
                    monuments. Contact the Tourism Office to know which ones
                    require permission.
                  </li>
                  <li>
                    Ensure that your vehicle is locked before you leave it.
                    Don't leave cash or jewellery behind in your vehicle.
                  </li>
                  <li>
                    Do not encourage beggars by offering them money or other
                    stuff.
                  </li>
                  <li>
                    Always shop at Government Emporiums, where prices are
                    reasonable & quality is assured.
                  </li>
                  <li>
                    Cover yourself with travel insurance for theft, loss and
                    mediclaim.
                  </li>
                  <li>
                    Keep your cash divided in separate pockets. Do not leave
                    your cash and valuables in your hotel rooms.
                  </li>
                  <li>
                    Be careful while driving in Himachal Pradesh during the
                    monsoons. The road is slippery and landslides/rockfalls are
                    common.
                  </li>
                  <li>
                    The normal banking hours are 10:00 AM to 4:00 PM. Banks
                    remain closed on Sundays and gazetted holidays.
                  </li>
                  <li>Always be patient, respectful and friendly.</li>
                  <li>
                    STD/ISD/FAX facilities are available throughout the state.
                  </li>
                </ul>
              </section>
            </div>
            <div className="enquiry-form">
              <h2>Fill Enquiry Form Below</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Your Full Name
                  <input
                    type="text"
                    name="name"
                    id="FULLNAME"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Tour Description
                  <textarea
                    name="description"
                    id="TOURDESCRIPTION"
                    required
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </label>
                <label>
                  Departure Date
                  <input
                    type="date"
                    name="departureDate"
                    required
                    id="DEPARTUREDATE"
                    value={formData.departureDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureDate: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Number of Days
                  <input
                    type="number"
                    name="numberOfDays"
                    required
                    id="NUMBEROFDAYS"
                    value={formData.numberOfDays}
                    onChange={(e) =>
                      setFormData({ ...formData, numberOfDays: e.target.value })
                    }
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    id="EMAIL"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  Contact No
                  <input
                    type="tel"
                    name="contactNo"
                    required
                    id="CONTACTNO"
                    value={formData.contactNo}
                    onChange={(e) =>
                      setFormData({ ...formData, contactNo: e.target.value })
                    }
                  />
                </label>
                <button type="submit">Get A Custom Quote</button>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default DestinationHimachal;
