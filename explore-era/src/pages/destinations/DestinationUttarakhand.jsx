import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./destinationHimachal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/destination_card";

const DestinationUttarakhand = () => {
  const [items, setItems] = useState([]);

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
    fetchItems();
  }, []);

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
            return item.id === '1' || item.id === '2' || item.id === '3';
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
        <div className="container">
          <main>
            <div className="content-wrapper">
              <div className="hero">
                <img
                  className="himachal-img"
                  src="images/uttarakhand-banner.webp"
                  alt="Himachal Pradesh"
                />
              </div>
              <section className="intro">
                <h1>Uttarakhand Tourism</h1>
                <p>
                  The Himalayan Mountains, Crisp Air, Sacred Temples, and
                  Enthralling Adventure Call You to Uttarakhand
                </p>
                <div className="cards">
                  <div className="card">
                    <h2>Hill Stations</h2>
                    <p>
                      Escape the city life to be united with nature at surreal hill stations in Uttarakhand.
                    </p>
                  </div>
                  <div className="card">
                    <h2>Adventure</h2>
                    <p>
                    Uttarakhand has a bagful of adventure tourism activities to gift to its visitors.
                    </p>
                  </div>
                  <div className="card">
                    <h2>Pilgrimage</h2>
                    <p> destination 
                    Uttarakhand destination to find your spiritual self
                    </p>
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
                  <p>Round the year</p>
                </div>
                <div className="info-item">
                  <span>Ideal Duration</span>
                  <p>5-8 Days</p>
                </div>
                <div className="info-item">
                  <span>Visa</span>
                  <p>Not Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-info">
          <h2 className="main-info-heading">About Uttarakhand Tourism</h2>
          <p className="main-info-details">
            Devbhoomi Uttarakhand is the state in India one can easily fall in
            love with. The surreal landscape that comprises lofty Himalayas,
            glistening streams, eye-catching meadows, imposing glaciers and
            surreal lakes, all make Uttarakhand a coveted tourist destination in
            Indian Himalayas. The state is divided into two regions: Garhwal and
            Kumaon. Each of these offers plenty of opportunities for tourism,
            sightseeing, adventure and wildlife. Dotted with sacred Hindu
            temples and trekking trails, this North Indian state is a travel
            destination where along with seeking the blessing of the Almighty,
            one can indulge in adventure and recreational activities.
          </p>

          <h2 className="main-info-heading">Plenty of adventure to be had!</h2>
          <p className="main-info-details">
            For those who seek adventure tourism, Uttarakhand offers some
            incredible trekking, mountain climbing, and white-water rafting
            opportunities. Uttarakhand is one of the best trekking destinations
            in India, with the famous treks in Uttarakhand are Auden’s Col,
            Kalindi Khal, Nag Tibba, Bedni Bugyal, Valley of Flowers, Chopta
            Chandrashila and many more. <br /> <br />
            Skiing enthusiasts also have a lot to look forward to in
            Uttarakhand, with Auli being one of the top skiing destinations in
            India. Camping is another popular adventure activity, with the top
            camping destinations being Jharipani, Dhanaulti, Kanatal and Corbett
            National Park. <br />
            <br />
            Peak climbing enthusiasts can enjoy scaling the mountain peaks in
            the Garhwal Himalayas in both the Garhwal & Kumaon region, with the
            most climbed mountain peaks being Hathi Parbat, Nanda Devi,
            Chaukhamba, Kedar Dome and Bandarpoonch. <br />
            <br />
            Mukteshwar, Bhimtal, Mussoorie and Pithoragarh are the top places
            where you can enjoy paragliding. Mountain biking in Uttarakhand is
            enjoyed at destinations like Rishikesh, Chopta and Lansdowne.
          </p>

          <h2 className="main-info-heading">
            River Rafting Adventure in Uttarakhand
          </h2>
          <p className="main-info-details">
            When it comes to river rafting, Rishikesh is the most popular
            destination in Uttarakhand. It is a famous river rafting destination
            in Uttarakhand since it offers various stretches and grades on the
            River Ganga. Both amateur and advanced rafting enthusiasts can enjoy
            river rafting in Rishikesh. There are four river rafting grades in
            Rishikesh: Grade I, Grade II, Grade III and Grade IV. <br />
            <br />
            The main stretch of white water rafting starts from Kaudilaya and
            ends at Laxman Jhula, consisting of 13 major rapids and taking 8-9
            hours. The course is dotted with several whirlpools and crosses
            sandy beaches like Byasi, Marine Drive, Shivpuri, and Brahmpuri. The
            course consists of 13 major and challenging rapids that ranges from
            grade II and III to IV+, with the most famous ones being Denial Dip,
            The Wall, Black Money, Cross Fire, Three Blind Mice, Return to
            Sender, Roller Coaster, Golf Course, Club House, Double Trouble,
            Hilton and Terminator.
            <br />
            <br />
            The first stretch from Marine Drive to Kaudilaya is about 9-10
            kilometers, with rapids ranging from grade III to IV+. The second
            stretch of 11 kilometers takes approximately 2-3 hours and is from
            Marine Drive to Shivpuri. Some of the popular rapids that you will
            be tackling in this stretch include Black Money, Cross Fire and
            Three Blind Mice that ranges from grade II to III+. The third
            stretch from Shivpuri to Brahmpuri that covers a distance of another
            10-11 kilometers and takes approximately 2-3 hours combats rapids
            similar to rapids of the Marine Drive to Shivpuri stretch. The major
            rapids on this stretch are Return to Sender, Roller Coaster, Golf
            Course and Club House.
            <br />
            <br />
            The final stretch from Brahmpuri to Rishikesh, which is also the
            easiest, throws rapids like Double Trouble, Hilton and Terminator,
            which ranges from grade I to II+, at you.
            <br />
            <br />
            The peak season for river rafting in Rishikesh is March, but it can
            also be enjoyed from mid September to early December, as after that
            the water starts turning extremely cold.
            <br />
            <br />
            Battling the rapids with white water rafting in Uttarakhand can also
            be enjoyed in River Tons (Grade I to IV), Alaknanda and Bhagirathi
            (Grade IV to V rapids) and Damta to Yamuna Bridge.
          </p>

          <h2 className="main-info-heading">
            Uttarakhand, aptly called Devbhoomi, where spirituality abounds!{" "}
          </h2>
          <p className="main-info-details">
            Rightly called Devbhoomi, meaning, the land of the gods, Uttarakhand
            is where the spiritual aura is prominent. The state is home to a
            large number of Hindu temples that are situated in its remote
            corners. There are several holy rivers like the River Ganga which
            make it a sacred pilgrimage destination as well. Haridwar is one of
            the top pilgrimage destinations in Uttarakhand and serves as the
            Gateway to the Char Dhams of Uttarakhand. Har Ki Pauri is a major
            religious attraction in Uttarakhand. <br />
            <br />
            The Kumbh Mela is held in Haridwar in Uttarakhand once every 12
            years. The state is also home to the Panch Badri, Panch Kedar and
            Panch Prayag. All of these are important pilgrimage destinations for
            Hindus and attract a large number of devotees each year. Each of
            these places are also associated with the mythologies in Hinduism,
            and hence, are extremely significant spiritually for the Hindus.
            These religious places are also blessed with spectacular natural
            beauty, so you can also enjoy the surreal beauty of Uttarakhand
            along with a spiritual experience. <br />
            <br />
            Panch Badri is a total of 5 holy places where Lord Badri, a form of
            Lord Vishnu is worshipped under 5 different names, which are: Vishal
            Badri (Badrinath), Yogdhan Badri, Bhavishya Badri, Vridha Badri and
            Adi Badri. All of these religious destinations are visited by a
            large number of devotees of Lord Vishnu from all across the country.
            Badrinath Temple is the main temple of Lord Vishnu, and is one of
            the four Chota Char Dham pilgrimage sites in Uttarakhand. It is
            situated at an elevation of almost 10,279 feet. The presiding deity
            is Lord Vishnu, who has a black granite statue in the temple. The
            deity is believed by Hindus to be one of the eight self manifested
            deities of Lord Vishnu. <br />
            <br />
            Panch Kedar, which comprises five temples, are located in the
            Garhwal Himalayas in Uttarakhand, and all of them are major
            pilgrimage destinations. The five temples are Kedarnath, Tungnath,
            Rudranath, Madhyamaheshwar and Kalpeshwar. The Kedarnath Temple is
            also a Jyotirlingas and is the highest among the 12 Jyotirlingas in
            India. All of the religious places in Panch Kedar are dedicated to
            Lord Shiva, and attract devotees of Lord Shiva as well as other
            tourists from all over the country. There are also mentioned in
            several mythologies in Hinduism, one of which links their origins to
            the Pandavas, the heroes of the Indian epic, Mahabharata. <br />
            <br />
            Uttarakhand is also the holy land of Panch Prayag, which refers to
            the Five Confluences which occur at Vishnu Prayag, Nanda Prayag,
            Karn Prayag, Devprayag and Rudraprayag, to form the River Ganga. The
            Panch Prayag is respected by millions of Hindus because it is one of
            the holiest confluences in India, after Allahabad. It is believed
            that taking a dip in the confluences cleanses the body, mind and
            spirit, and takes an individual closer to mukti or liberation.{" "}
            <br />
            <br />
            The famous Char Dham Yatra is a major pilgrimage for Hindus in
            Uttarakhand. The Char Dham refers to the four pilgrimage
            destinations, which are Yamunotri, Gangotri, Kedarnath and
            Badrinath. It starts from Yamunotri, then proceeds to Gangotri and
            Kedarnath and finally ends at Badrinath. The state is also home to
            Sikh pilgrimage destinations like Hemkund Sahib, located in the
            Chamoli district of Uttarakhand and is the highest gurudwara in
            India.
          </p>

          <h2 className="main-info-heading">
            Spot rare & exotic Himalayan wildlife & other animals!{" "}
          </h2>
          <p className="main-info-details">
            Uttarakhand, located in the lap of the Himalayas, has some of the
            best high altitude wildlife parks and national sanctuaries in India.
            In these wildlife hotspots, you get to see rare and exotic Himalayan
            wildlife, which is not usually seen in other parts of the country.
            The state is also home to the third largest population of Royal
            Bengal Tigers in India. There are rare flora & fauna species like
            snow leopards and Brahma Kamal. <br />
            <br />
            The state’s Valley of Flowers National Park, which is a UNESCO World
            Heritage Site, is home to more than 500 species of flowering plants
            which come to life in the monsoon season (June-September). This
            treasure trove of fauna was unknown to the world before 1931, when
            the famous mountaineer, Frank S Smith, discovered it. The Brahma
            Kamal flower, which is found only in the Himalayas, Himachal Pradesh
            and Uttarakhand, can be seen in the Valley of Flowers National Park.
            It is a rare flower species which also finds a mention in several
            epics of Hinduism. The flower is considered to be a medicinal herb
            in Tibetan medicine. It is also the state flower of Uttarakhand.
            <br />
            <br />
            Jim Corbett National Park, India’s oldest national park and the
            largest tiger reserve in the country, is one of the best wildlife
            destinations to spot the Royal Bengal Tiger, besides other wildlife.
            It is one of the main attractions of a wildlife tiger safari in
            Uttarakhand, and venturing deep into the jungle is an unending
            adventure unto itself! Other things which make it a top wildlife
            holiday destination are bird watching, fishing and sightseeing.
            <br />
            <br />
            Rajaji National Park, with its Royal Bengal Tigers, striped hyenas,
            Asiatic Elephants, Sloth Bear and a large number of bird species, is
            another top wildlife destination in Uttarakhand.
            <br />
            <br />
            Naina Devi National Park is a UNESCO World Heritage Site where you
            can spot exotic Himalayan wildlife like snow leopard, Himalayan
            Tahr, musk deer and birds. However, the Valley of Flowers National
            Park deserves a special mention, as it is a UNESCO World Heritage
            Site and home to almost 350 species of flowers. Red fox and musk
            deer are two of the exotic animals found here.
          </p>

          <h2 className="main-info-heading">
            Uttarakhand boasts the most beautiful hill stations in India!
          </h2>
          <p className="main-info-details">
            Uttarakhand boasts a number of hill stations that are loved by
            tourists across the country. This makes it one of the best holiday
            destinations for families as well as for honeymoon couples. The Lake
            District, Nainital and the Queen of the Hills, Mussoorie, are the
            two popular hill station holiday places. <br />
            <br />
            Nainital draws tourists for its spectacular Naini Lake, Cable Car
            Ride, Mall Road & shopping opportunities. Mussoorie is hit among
            tourists for its tourist Kempty Falls, temples, go boating, take a
            Cable Car Ride & hangout at the Mall Road. Lansdowne is another top
            hill station in Uttarakhand that attracts tourists for a wide
            variety of activities like birdwatching, camping, boating, hiking
            and nature walking. <br />
            <br />
            Those who want to seek blessings at the highest temple in the world
            dedicated to Lord Shiva should visit the hill station of Chopta,
            which also offers other activities including sightseeing, camping
            and trekking. The picturesque Abbot Mount along with Kausani, the
            place with the 360 degree view of the Himalayas; Dhanaulti that
            looks heavenly when it snows; and the home of author Ruskin Bond,
            Landour are also the best places to visit in Uttarakhand. <br />
            <br />
            Besides the above-mentioned hill station, there are several offbeat
            and relatively unexplored hill stations in Uttarakhand which you
            should visit not just for their pristine beauty but because of their
            untouched landscape. Some of these are Naukuchiatal, Kausani,
            Lohaghat, Kakrighat, Chaukori, Shitlakhet, Mori, Munsiyari and
            Ramgarh.
          </p>

          <h2 className="main-info-heading">
            Waterfalls: Serene and great for a picnic!
          </h2>
          <p className="main-info-details">
            Waterfalls in Uttarakhand, are the beautiful places from where you
            can frame a perfect picture of water descending from a height with
            the gushing sound of water. And that's not all because the picture
            can never be complete without the mighty snow-capped peaks of
            Uttarakhand, painted in the background. Most of these charismatic
            waterfalls are perfect for a short trek, away from the busy tourist
            attractions in Uttarakhand, whereas there are few like the Kempty
            Falls in Mussoorie that remain unbelievably crowded throughout the
            year. Most of these falls have an average height of 126 m and are
            situated at an approximate elevation of 1400 m above the sea level.{" "}
            <br />
            <br />
            One of the best things about these waterfalls is that they add more
            charm to the nearby cities and towns like Mussoorie, Haridwar,
            Pithoragarh, Rishikesh giving visitors another reason to plan a
            holiday here. These small yet dreamy falls in Mussoorie are a
            delight if you are looking for a peaceful retreat away from the
            city.
            <br />
            <br />
            Another must visit waterfall is the Mossy Falls, which gets its name
            from the covering of mossy that envelopes the whole area making the
            place look even beautiful. Jimi Ghat Waterfalls in the Pithoragarh
            District is another popular waterfall which offers scintillating
            views of the Nanda Devi range, and is surrounded by the
            rhododendrons and birch.
          </p>

          <h2 className="main-info-heading">
          Fairs and festivals: local customs, folk dance, music & celebrations!
          </h2>
          <p className="main-info-details">
          The two regions of Uttarakhand, Garhwal and Kumaon host a number of fairs and festivals throughout the year. One of the grandest and renowned all over the country is the Kumbh Mela, which is held every 12 years in Haridwar. Another famous festival which is famous throughout the country and attracts people both from India and abroad is the International Yoga Festival. The festival is held over a week and is marked with over 70 hours of different styles of Yoga including Vinyasa, Bhakti, Iyengar and Kundalini. <br/> <br/>
          Other famous festivals held in Uttarakhand are Sharadotsav, Gindi Mela, Baikunth-Chaturdashi Mela, Gauchar Mela, Hariyali Devi Mela, Nanda Raj-Jat, Nanda Devi, Binsar Mela, Uttarayni. The much-celebrated festivals in the state include Auli Festival, Dikar Puja, Bhitauli, Harela, Olgia or Ghee Sankranti, Kandali, Hilljatra, Basant Panchami, Phool Dei, Vat Savitri, Ganga Dussehra, Ghughutia, Khatarua, Ghuian Ekadashi, Kumaoni Holi, and Janopunyu A trip to Uttarakhand during any of these fairs and festivals let the tourists witness the zeal of locals preparing for the festivities and greeting each other with pure hearts and love.
          </p>

          <h2 className="main-info-heading">
          Top 10 Most Visited Tourist Destinations of Uttarakhand
          </h2>
          <p className="main-info-details">
            <ul>
              <li>
                <div>
                  <span>Rishikesh  :</span> Internationally known as the Yoga capital, spiritual, religious and adventurous tourism hub, Rishikesh is one of the top visited places in Uttarakhand in the Himalayas and is visited by domestic and international tourists every year.
                </div>
              </li>
              <li>
                <div>
                  <span> Nainital  : </span>Nainital is one of the top 10 most visited tourist destinations of Uttarakhand not just for its charming Naini Lake, but other sightseeing opportunities & a rich colonial heritage.
                </div>
              </li>
              <li>
                <div>
                  <span>Mussoorie  :</span> What makes Mussoorie counted among the top 10 most visited tourist destinations of Uttarakhand is Kempty Falls, temples, boating,Cable Car Ride & Mall Road.
                </div>
              </li>
              <li>
                <div>
                  <span> Corbett National Park :</span> Visit Corbett National Park, the oldest national park in India as well as the largest tiger reserve. It’s one of the best places to spot the Royal Bengal Tiger in India.
                </div>
              </li>
              <li>
                <div>
                  <span> Valley of Flowers : </span> Valley of Flowers is a UNESCO World Heritage Site and is home to more than 350 species of flowers. Red fox and musk deer are some of the exotic animals found.
                </div>
              </li>
              <li>
                <div>
                  <span> Auli  : </span>Auli is one of the top skiing destinations in India & the world & most visited destinations in Uttarakhand by skiing enthusiasts. Tourists can also enjoy camping & sightseeing.
                </div>
              </li>
              <li>
                <div>
                  <span> Kedarnath Dham :</span> Kedarnath Dham is one of the most visited tourist pilgrimage destinations of Uttarakhand. Situated at 3,584 meters, it’s one of the 12 Jyotirlingas & most important among Panch Kedars.
                </div>
              </li>
              <li>
                <div>
                  <span> Haridwar  :</span> Har Ki Pauri is one of the most sacred ghats in Haridwar which is said to contain the foot imprints of Lord Vishnu. The evening Ganga Aarti is a major attraction.
                </div>
              </li>
              <li>
                <div>
                  <span>Chopta - Tungnath :</span>  Chopta is one of the most visited tourist attractions in Uttarakhand for its Tungnath Temple, the highest Shiva Temple in the world. Sightseeing, camping & trekking are also popular.
                </div>
              </li>
              <li>
                <div>
                  <span>Chakrata  : </span>Chakrata finds a place among the most visited tourist attractions of Uttarakhand because of its spectacular views, Tiger Falls, ambience and a picnic spot.
                </div>
              </li>
            </ul>
          </p>
        </div>

        <div className="container2">
          <section className="best-time">
            <h2>Best Time to Visit Uttarakhand </h2>
            <div className="seasons">
              <div className="season">
                <img src="images/summer-ico.png.png" alt="Summer Season" />
                <br />
                <br />
                <div>
                  <h3>Summer Season In Uttarakhand </h3>
                  <p>
                  The summer season between March and June in Uttarakhand is quite pleasant with temperature ranging from 20°C to 30°C.
                  </p>
                </div>
              </div>
              <div className="season">
                <img src="images/mansoon-ico.png.png" alt="Monsoon Season" />
                <br />
                <br />
                <div>
                  <h3>Monsoon Season In Uttarakhand </h3>
                  <p>
                  Monsoon begins from June and ends in September in Uttarakhand. The state experiences heavy rainfall during monsoons.
                  </p>
                </div>
              </div>
              <div className="season">
                <img src="images/winter-ico.png.png" alt="Winter Season" />
                <br />
                <br />
                <div>
                  <h3>Winter Season In Uttarakhand </h3>
                  <p>
                  Winter season in Uttarakhand is from November to February when the weather gets chilly and the temperature drops to sub-zero.
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
            <h2>Top Things to Do in Uttarakhand </h2>
            <div className="activities">
              <div className="activity">
                <img src="images/trekking-in-uttarakhand.webp" alt="Adventure" />
                <h3>Trekking and Hiking</h3>
                <p>
                Embark on adventurous journeys on a plethora of enthralling treks in Uttarakhand.
                </p>
                <button className="view-more">View more</button>
              </div>
              <div className="activity">
                <img src="images/rafting.webp" alt="Wildlife" />
                <h3>River Rafting Adventure</h3>
                <p>
                Enjoy the playful side of Ganges and Tons with river rafting adventure on them in Uttarakhand.
                </p>
                <button className="view-more">View more</button>
              </div>
              <div className="activity">
                <img src="images/wildlife.webp" alt="Lakes" />
                <h3>Wildlife Safari</h3>
                <p>
                Explore the rich flora & fauna of Uttarakhand and go on enthralling wildlife and tiger safaris.
                </p>
                <button className="view-more">View more</button>
              </div>
            </div>
          </section>

          <div className="container3">
            <div className="info-last">
              <h2>Uttarakhand  Essential Information</h2>
              <section>
                <h2>Where to stay in Uttarakhand</h2>
                <p>
                Uttarakhand with its impressive Himalayan mountains and stunning landscape is quite a popular tourist destination in India. As far as where to stay in Uttarakhand is concerned, there is a wide range of accommodations available at every tourist destination. The Himalayan state has a warm hospitality to offer. <br/> <br/>
                From budget to luxury to heritage hotels to camps and homestay, Uttarakhand leaves one spoilt for choice when it comes to staying options. <br/><br/>
                Tour My India has association with the top most hotels and resorts of Uttarakhand and offers best deals & discounts on every hotel booking made with us. Best prices and excellent services are always a guarantee with us!
                </p>
              </section>
              <section>
                <h2>Top Activities & Things to Do in Uttarakhand for Tourists</h2>
                <p>
                Uttarakhand as a tourist destination has so much to offer to its visitors. There are a plethora of activities for its visitors to choose from. The Himalayan state offers great opportunities for trekking for beginners and experienced alike. It gives the chance to enjoy the finest skiing adventure in Auli, river rafting and bungee jumping in Rishikesh, and wildlife safari in many national parks including Corbett and Rajaji.
                </p>
                <p>
                Uttarakhand also offers the best pilgrimage, mountain biking, and water sports like kayaking and jet skiing experiences. Boating and angling & fishing are activities that are also enjoyed in the state.
                </p>
              </section>
              <section>
                <h2>
                Travel Tips for Uttarakhand
                </h2>
                <ul>
                  <li>
                  Always carry an ID proof with you at all times, you never know when you might need it.
                  </li>
                  <li>
                  Choose the right time to visit Uttarakhand. The time between October and June is the best.
                  </li>
                  <li>
                  The accommodation options in Uttarakhand are many. In remote destinations, homestay options and camping are also available.
                  </li>
                  <li>
                  In monsoons, the rains can be heavy, therefore, it is advised to check the weather forecast before travelling.
                  </li>
                  <li>
                  Before planning a trip to Uttarakhand, read about the state’s policy about birds and animals, entering sacred places, eco-tourism, and interacting with tribals.

                  </li>
                  <li>
                  There are many high altitude destinations in Uttarakhand where breathing problems and altitude sickness are common. Make sure to take the necessary medicines when travelling.

                  </li>
                  <li>
                  If you are going trekking or peak climbing, make sure you carry a comfortable pair of shoes that have great friction.
                  </li>
                  <li>
                  Don’t forget to carry the emergency or first-aid kit with medication and other essentials.
                  </li>
                  <li>
                  The best time to enjoy peak climbing is during the summer season between March and June, post-monsoon and winter season between October and February.
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
  );
};

export default DestinationUttarakhand;
