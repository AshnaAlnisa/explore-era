import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./destinationHimachal.css";
import axios from "axios";

const API = "http://localhost:5164/destination_card";

const DestinationUttarakhand = () => {
  const [items, setItems] = useState([]);

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
                  src="images/uttarakhand-banner.webp.png"
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
                      Himachal Pradesh tourism opens its doors to nature lovers,
                      offering solace to the mind and soul.
                    </p>
                  </div>
                  <div className="card">
                    <h2>Trekking</h2>
                    <p>
                      A thrilling & scenic trekking experience awaits you warmly
                      in Himachal Pradesh.
                    </p>
                  </div>
                  <div className="card">
                    <h2>Paragliding</h2>
                    <p>
                      Head to Bir Billing which claims to be the second-highest
                      paragliding spot in the world.
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
              <div className="season">
                <img src="images/summer-ico.png.png" alt="Summer Season" />
                <br />
                <br />
                <div>
                  <h3>Summer Season In Himachal Pradesh</h3>
                  <p>
                    Summers in Sikkim last from April to June. Temperature
                    ranges between 5°C to 24°C.
                  </p>
                </div>
              </div>
              <div className="season">
                <img src="images/mansoon-ico.png.png" alt="Monsoon Season" />
                <br />
                <br />
                <div>
                  <h3>Monsoon Season In Himachal Pradesh</h3>
                  <p>
                    Monsoon arrives in mid June and lasts till September.
                    Temperature ranges between 15°C to 21°C.
                  </p>
                </div>
              </div>
              <div className="season">
                <img src="images/winter-ico.png.png" alt="Winter Season" />
                <br />
                <br />
                <div>
                  <h3>Winter Season In Himachal Pradesh</h3>
                  <p>
                    Winters start from November and last till March. It can be
                    extremely cold. The temperature ranges between 14°C to 21°C.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="best-places">
            <h2>Best Places to Visit in Himachal Pradesh</h2>
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
            <h2>Top Things to Do in Himachal Pradesh</h2>
            <div className="activities">
              <div className="activity">
                <img src="images/himachal3.webp.png" alt="Adventure" />
                <h3>Adventure</h3>
                <p>
                  Himachal Pradesh offers opportunities for a wide variety of
                  adventure sports like river rafting, mountain cycling, skiing,
                  rock climbing & mountaineering.
                </p>
                <button className="view-more">View more</button>
              </div>
              <div className="activity">
                <img src="images/himachal2.webp.png" alt="Wildlife" />
                <h3>Wildlife</h3>
                <p>
                  You can spot a wide variety of exotic Himalayan wildlife in
                  Himachal. Two famous ones are Great Himalayan National Park &
                  Pin Valley National Park.
                </p>
                <button className="view-more">View more</button>
              </div>
              <div className="activity">
                <img src="images/himachal1.webp.png" alt="Lakes" />
                <h3>Lakes</h3>
                <p>
                  There are more than 25 lakes in Himachal. Many of them play a
                  part in Hindu mythology. Others are biking, angling, kayaking
                  & water rafting.
                </p>
                <button className="view-more">View more</button>
              </div>
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
              <form>
                <label>
                  Your Full Name
                  <input type="text" name="name" />
                </label>
                <label>
                  Tour Description
                  <textarea name="description" />
                </label>
                <label>
                  Departure Date
                  <input type="date" name="departureDate" />
                </label>
                <label>
                  Number of Days
                  <input type="number" name="numberOfDays" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" />
                </label>
                <label>
                  Contact No
                  <input type="tel" name="contactNo" />
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
