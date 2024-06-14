import React from "react";
import "./home.css";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";

const Home = () => {

  const backToTop = ()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }

  return (
    <>
      <MainLayout style={{ overflowX: "hidden" }}>
        <div className="india-holiday">
          <div className="india-holiday-img">
            <img src="/images/Container.png" alt="" />
          </div>
          <div className="india-holiday-para">
            <p className="india-holiday-para-1">
              Let us plan you a <br /> perfect <span>India Holiday</span>
            </p>
            <br />
            <br />
            <p className="india-holiday-para-2">
              Custom-Crafted Tour Packages for Unforgettable Holiday Experiences
              in India.
            </p>
          </div>
        </div>
        <br />
        <br />
        {/* <div className="region">
          <div className="region-heading">
            <p>Explore Top Destinations by Region</p>
          </div>

          <div className="region-nav"></div>

          <div className="region-photos">
            <div className="region-big-photo">
              <img src="images/Link → uttarakhand01-package.webp.png" alt="" />
            </div>
            <div className="region-small-photos">
              <img
                className="region-photo-1"
                src="images/Link → rajasthan-package.webp.png"
                alt=""
              />
              <img
                className="region-photo-2"
                src="images/Link → himachal-package.webp.png"
                alt=""
              />
              <img
                className="region-photo-3"
                src="images/Link → j&k-package.webp.png"
                alt=""
              />{" "}
              <br />
              <img
                className="region-photo-4"
                src="images/Link → up-package.webp.png"
                alt=""
              />
              <img
                className="region-photo-5"
                src="images/Link → delhi-package.webp.png"
                alt=""
              />
              <img
                className="region-photo-6"
                src="images/Link → ladakh-trend.webp.png"
                alt=""
              />
            </div>
          </div>
        </div> */}

        <div className="trending">
          <div className="trending-heading">
            <p>Top Trending Destinations</p>
          </div>
          {/* <div className="trending-main"></div> */}
          <div className="trending-photo-card">
            <div className="trending-card">
              <Link to='/'><img src="images/Link → uttarakhand02-package.webp.png" alt="" /></Link>
              <p className="trending-packages">50+ Packages</p>
              <p className="trending-state"><Link to='/' className="link">Uttarakhand </Link></p>
            </div>

            <div className="trending-card">
              <Link to=''><img src="images/Link → kerala02-package.webp.png" alt="" /></Link>
              <p className="trending-packages">50+ Packages</p>
              <p className="trending-state"><Link to='/' className="link">Kerala</Link></p>
            </div>

            <div className="trending-card">
              <Link to='/'><img src="images/Link → sikkim01-package.webp.png" alt="" /></Link>
              <p className="trending-packages">50+ Packages</p>
              <p className="trending-state"><Link to='/' className="link">Sikkim </Link></p>
            </div>

            <div className="trending-card">
            <Link to='/'><img src="images/Link → bhutan-package.webp.png" alt="" /></Link>
              <p className="trending-packages">50+ Packages</p>
              <p className="trending-state"><Link to='/' className="link">Bhutan</Link></p>
            </div>

            <div className="trending-card">
            <Link to='/'><img src="images/Link → thailand-package.webp.png" alt="" /></Link>
              <p className="trending-packages">50+ Packages</p>
              <p className="trending-state"><Link to='/' className="link">Thailand</Link></p>
            </div>
          </div>
        </div>

        <div className="weekend">
          <div className="weekend-heading">
            <p>Top Weekend Destinations</p>
          </div>

          <div className="weekend-photo-card">
            <div className="weekend-card">
              <Link to="/delhi" onClick={backToTop}>
                <img src="images/Link → delhi-tour.webp.png" alt="" />
              </Link>
              <p className="weekend-packages">50+ Packages</p>
              <p className="weekend-state">
                {" "}
                <Link to="/delhi" className="link" onClick={backToTop}>
                  Weekend Trips From Delhi
                </Link>
              </p>
            </div>

            <div className="weekend-card">
              <Link to="">
                {" "}
                <img src="images/Link → mumbai-tour.webp.png" alt="" />
              </Link>
              <p className="weekend-packages">50+ Packages</p>
              <p className="weekend-state">
                <Link to="/" className="link">
                  Weekend Trips From Mumbai
                </Link>
              </p>
            </div>

            <div className="weekend-card">
              <Link to="">
                {" "}
                <img src="images/Link → banglore-tour.webp.png" alt="" />
              </Link>
              <p className="weekend-packages">50+ Packages</p>
              <p className="weekend-state">
                <Link to="/" className="link">
                  Weekend Trips From Bangalore{" "}
                </Link>
              </p>
            </div>

            <div className="weekend-card">
              <Link to="/">
                {" "}
                <img src="images/Link → chennai-tour.webp.png" alt="" />
              </Link>
              <p className="weekend-packages">50+ Packages</p>
              <p className="weekend-state">
                <Link to="/" className="link">
                  Weekend Trips From Chennai
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="choose">
          <div className="choose-heading">
            <p>Why Choose Us?</p>
          </div>
          <div className="choose-cards">
            <div className="choose-card year">
              <img src="images/🦆 icon _thumb up_.png" alt="" />
              <p className="choose-card-heading">20+ Year Experience</p>
              <p className="choose-card-details">
                Boasting over two decades in the tourism and hospitality
                industry, Tour My India has amassed invaluable experience that
                sets us apart.
              </p>
            </div>
            <div className="choose-card team">
              <img src="images/🦆 icon _thumb up_.png" alt="" />
              <p className="choose-card-heading">A Team of Experts</p>
              <p className="choose-card-details">
                Our experienced team at Tour My India is more than just
                proficient; they are destination experts for every location
                within the mesmerizing landscape of India. Their knowledge is an
                invaluable asset for every traveler.
              </p>
            </div>
            <div className="choose-card verified">
              <img src="images/🦆 icon _thumb up_.png" alt="" />
              <p className="choose-card-heading">Verified Hotels</p>
              <p className="choose-card-details">
                We offer a meticulously selected and verified list of high-grade
                hotels. Our partners consistently deliver top-notch service,
                ensuring an exceptional experience for our guests.
              </p>
            </div>
            <div className="choose-card value">
              <img src="images/🦆 icon _thumb up_.png" alt="" />
              <p className="choose-card-heading">Value for Money Tours</p>
              <p className="choose-card-details">
                With Tour My India, your vacation is not just about sightseeing;
                it's about creating memories that last a lifetime. Our holiday
                packages are hassle-free and designed with a focus on value for
                money. Trust us to weave unforgettable experiences into your
                journey, ensuring every moment you spend with us is well worth
                it.
              </p>
            </div>
          </div>
        </div>

        <div className="incredible-india">
          <div className="incredible-india-heading">About Incredible India</div>
          <div className="incredible-india-details-pic">
            <div className="incredible-india-details">
              Interesting and Intriguing, India offers incredible holiday
              experiences through its cultural, topography, and wildlife
              diversity. With these amazing and unique experiences, this south
              Asian country conveniently finds its way into the world tourism
              map as one of the finest destinations for a holistic vacation.
              India establishes its identity as the country of architectural
              masterpieces, making it an ideal travel destination to plan a
              heritage tour in the world. While Taj Mahal makes for the major
              draw on an India tour, there are a plethora of monuments and
              edifices in every India travel guide displaying the fine
              architecture and grandiose of different eras in the country.
              <br />
              The diverse Indiantopography adorned with the impressive
              Himalayas; long stretches of coastline; expansive hot, cold and
              white salt deserts; dense forests; alpine meadows and lakes; and
              scenic waterfalls pique the tourists’ interest. Along with the
              best nature sightseeing tours, India offers an opportunity to
              visitors to have a little adventure of their own. The numerous
              spell-binding and less-trodden trails give trekking tour
              opportunities in South Asia unlike any other.
              <br />
              India Tours offers a chance to explore its biodiversity in the
              country's many national parks and wildlife reserves. An
              enthralling experience entails in the India wildlife tour packages
              that take tourists to the habitats of Royal Bengal Tigers,
              one-horned rhinos, and snow leopards amongst many rare,
              endangered, and unique species of flora and fauna.
            </div>
            <div className="incredibe-india-pic">
              <img src="images/varanasi-india.webp.png" alt="" />
            </div>
          </div>
        </div>

        <div className="climate-visa">
          <div className="climate">
            <p className="climate-heading">India Climate & Season</p>
            <p className="climate-details">
              India experiences a diverse climate and weather conditions due to
              its vast size and geographical features. The country is
              characterized by five main seasons: Spring, Summer, Monsoon,
              Autumn, and Winter. The Summer season, from April to mid-June,
              brings scorching temperatures, especially in the northern plains.
              The Monsoon, from mid-June to September, brings heavy rainfall,
              crucial for agriculture. Winter, from November to February, varies
              from mild to severe cold, with snowfall in some regions. Autumn
              and Spring provide pleasant weather with moderate temperatures.
              India's climate is influenced by the Himalayas, oceans, and
              geographical variations, resulting in a rich and varied weather
              pattern.
            </p>
          </div>
          <div className="visa">
            <p className="visa-heading">Visa Information</p>
            <p className="visa-details">
              Obtaining a visa for India is an essential step for foreign
              travelers planning to visit the country. India offers various visa
              categories, including tourist visas, business visas, and e-visas.
              The tourist visa allows visitors to explore India's rich cultural
              heritage, historical sites, and natural beauty. The e-visa is a
              convenient option that allows travelers to apply for their visa
              online, streamlining the process and reducing the wait time. To
              apply for an India visa, travelers need to submit necessary
              documents, such as a valid passport, travel itinerary, and recent
              photographs. Planning ahead and adhering to the application
              guidelines ensure a smooth visa process for a memorable trip to
              India. For the latest information about getting a visa for India,
              visit the official website at{" "}
              <a href="https://indianvisaonline.gov.in/">
                https://indianvisaonline.gov.in/.
              </a>
            </p>
          </div>
        </div>

        <div className="travel-info-heading">Travel Information</div>
        <div className="travel-info">
          <div className="best">
            <div className="best-img">
              <img src="images/Figure → visiting-india.webp.png" alt="" />
            </div>
            <div className="best-details">
              <p className="details-heading">Best Time To Visit In India</p>
              <p>
                The best time to visit India for holidays depends on the type of
                experience you seek. The tourism season in India varies across
                regions due to its diverse climate. The peak tourism season in
                India starts from September to June. For wildlife enthusiasts,
                winter is ideal as national parks are open, and wildlife
                sightings are abundant. Hill stations are most enjoyable during
                summer to escape the scorching heat of the plains. For trekking
                and hiking adventures, winter, monsoon, autumn, and spring offer
                pleasant weather. Plan your trip according to your preferences,
                and you'll discover India's incredible beauty and cultural
                richness, making it an unforgettable holiday destination.
                September to April can be considered an ideal time to explore
                India for tourism holidays.
              </p>
            </div>
          </div>
          <hr />
          <br />
          <br />
          <div className="best">
            <div className="how-img">
              <img src="images/Figure → travel-bus.webp.png" alt="" />
            </div>
            <div className="how-details">
              <p className="details-heading">How to get around in India?</p>
              <p>
                Traveling to India is a seamless experience, thanks to its
                well-developed transportation network. The country is easily
                accessible through various modes of transport, ensuring a smooth
                entry for tourists from around the world. India boasts an
                extensive road connectivity, making it convenient for travelers
                to explore different regions. The rail network, with an
                extensive network of trains, offers a scenic and comfortable
                journey to various destinations.
              </p>
            </div>
          </div>
          <hr />
          <br />
          <br />
          <div className="best">
            <div className="must-img">
              <img src="images/Figure → travel-tips.webp.png" alt="" />
            </div>
            <div className="must-details">
              <p className="details-heading">
                Must-Follow Travel Tips for Exploring India
              </p>
              <p>
                When visiting India, it's essential to check out important
                travel tips to ensure a smooth and enjoyable trip. Follow
                recommended guidelines for packing, cultural respect, local
                transportation, and staying safe. These tips will help you make
                the most of your India tour and have a memorable experience.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
