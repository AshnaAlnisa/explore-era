import React, { useState } from "react";
import "./packages.css";
import MainLayout from "../../../layout/MainLayout";
import { Link } from "react-router-dom";

const HimacharTourPackages = () => {
  return (
    <MainLayout>
      <div className="main-himachal-tour-packages">
        <div className="himachal-tour-packages-content">
          <div className="himachal-tour-packages-details">
            <h1>
              <span>Himachal</span> Tour Packages
            </h1>
            <p>
              With snow-capped mountains to plunging river valley, age-old
              monasteries to quaint churches, Himachal Pradesh makes for a
              holiday destination for all. If you have been planning to visit
              Himachal Pradesh, find out how we can make your Himachal Pradesh
              tour worth remembering for a lifetime. We at Tour My India offer
              the best Himachal Pradesh tour packages with attractive deals that
              are perfect for a family vacation, holiday with friends,
              adventure, and honeymoon. Unwind amidst the serene beauty of
              Himachal Pradesh with the best affordable tour packages offered by
              Tour My India.
            </p>
          </div>
          <div className="himachal-tour-packages-image">
            <img
              src="images/weekend-getaways-himachal-banner.webp.png"
              alt=""
            />
          </div>
        </div>

        <div className="himachal-tour-packages-cards-yellow">
          <h3>Best Selling Himachal Tour Packages</h3>

          <div className="himachal-tour-packages-cards">
            <div className="himachal-tour-packages-cards-all">
              <img src="images/kullu-manali-tour.png" alt="" />
              <h6>4 Nights - 5 Days</h6>
              <Link to="#" className="link">
              <h4>Kullu Manali Tour</h4>
              </Link>
            </div>

            <div className="himachal-tour-packages-cards-all">
              <img src="images/exotic-himachal.png" alt="" />
              <h6>6 Nights - 7 Days</h6>
              <Link to="#" className="link">
              <h4>Exotic Himachal Tour</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/himachal-honeymoon-package.png" alt="" />
              <h6>6 Nights - 7 Days</h6>
              <Link to="#" className="link">
              <h4>Himachal Honeymoon Tour</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/shimla-manali-by-volvo.png" alt="" />
              <h6>8 Nights - 9 Days</h6>
              <Link to="#" className="link">
              <h4>Shimla Manali Volvo Tour</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/dharamshala-hill-station.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Dharamshala Hill Station Tour</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="all-cards">
          <h3>Popular Himachal Tour Packages</h3>
          <div className="cards">
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-1.png" alt="" />
              <h6>4 Nights - 5 Days</h6>
              <Link to="#" className="link">
              <h4>Beauty of Himachal</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-2.png" alt="" />
              <h6>4 Nights - 5 Days</h6>
              <Link to="#" className="link">
              <h4>Best of Himachal with Amritsar</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-3.png" alt="" />
              <h6>6 Nights - 7 Days</h6>
              <Link to="#" className="link">
              <h4>Manali Tour Package</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-4.png" alt="" />
              <h6>8 Nights - 9 Days</h6>
              <Link to="#" className="link">
              <h4>Shimla and Around Tour</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-5.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Himachal Hill Station Tour</h4>
              </Link>
            </div>
          </div>

          <div className="cards cards2">
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-6.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Shimla Hill Station Tour</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-7.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Shimla Manali Tour Package</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-8.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Manali Volvo Package from Delhi</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-9.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Shimla - Manali Amritsar Tour</h4>
              </Link>
            </div>
            <div className="himachal-tour-packages-cards-all">
              <img src="images/f-10.png" alt="" />
              <h6>3 Nights - 4 Days</h6>
              <Link to="#" className="link">
              <h4>Shimla Toy Train Weekend Package</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="himachal-tour-packages-details2">
          <h5>About</h5>
          <h3>Himachal Pradesh Tour Packages</h3>
          <p>
            Seated right in the lap of the mighty Himalayas, Himachal Pradesh is
            a tourist paradise where you come across the most beautiful and
            diverse faces of nature. Hill stations, valleys, high altitude
            passes, lakes, temples, wildlife sanctuaries, waterfalls, gorgeous
            peaks and a rich colonial legacy, it has everything that a tourist
            needs for a holiday packed with excitement, thrill, adventure and
            sightseeing. <br />
            <br />
            We at Tour My India offer the best Himachal Pradesh tour packages
            with attractive deals that are perfect for a family vacation,
            holiday with friends, adventure, and honeymoon tour. With our
            meticulously created Himachal Pradesh vacation packages you can be
            rest assured of a hassle-free and memorable trip. <br />
            <br />
            Our expertly crafted Himachal Pradesh tour packages guarantee you
            the best of sightseeing tour, adventure & exploration at attractive
            deals and prices. Our extensive knowledge of the regions and
            destinations of Himachal Pradesh have earned us an expertise in
            designing the best holiday packages. <br />
            <br />
            Select from our wide range of Himachal holiday package which
            includes a spiritual tour to famous religious sites, adventure
            activities like trekking, paragliding & river rafting, hill station
            tours to explore nature's beauty & travelling to offbeat
            destinations. <br />
            <br />
            Those travelling to Himachal Pradesh easily fall in love with its
            charming landscape and gorgeous vistas. The beauty of its landscape
            is complemented by the presence of ancient temples, colonial era
            churches, forts and palaces, all of which are a reminder of its rich
            cultural heritage. <br />
            <br />
            Taking a ride on Kalka Shimla Heritage Railway and exploring the
            Great Himalayan Nature Park (both UNESCO World Heritage Sites) gift
            you with memories that you will treasure for a lifetime. From Shimla
            to Chamba, each of the scenic hill stations in Himachal have a new
            experience waiting in store for you. <br />
            <br />
            Himachal Pradesh is a haven for adventure lovers, and offers the
            ultimate thrill and adrenaline rush with various adventure
            activities like camping, trekking, paragliding, skiing, ice skating,
            mountain cycling, river rafting and rock climbing. <br />
            <br />
            Some of the top treks of Himachal Pradesh are Kugti Pass and
            Manimahesh Lake treks, while paragliding is best enjoyed in Bir
            Billing in Kangra. Go white water rafting on Beas & Sutlej rivers,
            or mountain biking on trans-Himalayan tracks in Kinnaur and
            Lahaul-Spiti. <br />
            <br />
            Tourist can also enjoy the beauty of Himachal Pradesh by catching a
            ride on the Him Darshan Express Tourist Special Train which runs on
            the Kalka-Shimla route and consists of vistadome coaches.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default HimacharTourPackages;
