import React, { useState, useEffect } from "react";
import "./Hero.css";
import Card from "../../re-usable-components/Cards";
import Reviews from "./reviews";
import { FaStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className="dealer-info-container">
            <div className="dealer-info-header">
              <h1 className="dealer-name">
                SHREE HEMKUNT TYRES AND SERVICES
                <span className="verified-badge">Verified</span>
              </h1>
              <div className="dealer-rating">
                <span className="rating-stars">
                  <span className="rating-number">4.9</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fa fa-star"></i>
                  ))}
                </span>
                <span className="reviews-count">2278 Reviews</span>
                <button className="rate-button">Rate</button>
              </div>
            </div>

            <div className="dealer-details">
              <div className="dealer-location">
                <i className="fa fa-map-marker-alt"></i>
                <span>
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </span>
              </div>
              <div className="dealer-hours">
                <i className="fa fa-clock"></i>
                <span>Open - Monday to Sunday - 10:00AM to 8:00PM</span>
              </div>
              <button className="get-directions-button">Get Directions</button>
            </div>

            <div className="dealer-images">
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="Dealer shop view 1"
                className="dealer-image"
              />
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="Dealer shop view 2"
                className="dealer-image"
              />
            </div>
          </div>

          <Reviews />
        </>
      ) : (
        <Card height="auto" width="100%">
          <div className="hero-content">
            <div className="dealer-info flex">
              <div className="dealer-info-left w-1/2">
                <div className="flex">
                  <h1 className="dealer-name w-96">
                    SHREE HEMKUNT TYRES AND SERVICES
                  </h1>
                  <span className="verified ml-36 text-green-500 font-medium">
                    Verified
                  </span>
                </div>
                <div className="dealer-rating">
                  <div className="bg-green-500 rounded-md">
                    <span className="rating-number mb-3 ml-1">4.9</span>
                  </div>
                  <ul className="stars flex text-yellow-300 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <li key={star} className="star selected">
                        <FaStar key={star} className="star-icon" />
                      </li>
                    ))}
                  </ul>
                  <span className="reviews-count ">2278 Reviews </span>{" "}
                  <button
                    type="button"
                    className="rate-btn border rounded-md ml-3 w-14"
                  >
                    {" "}
                    Rate
                  </button>
                </div>
                <div className="dealer-location">
                  <div className="h-10 w-10 mr-10 my-2">
                    <MdOutlineLocationOn />
                  </div>
                  <span>
                    PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA
                    KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                  </span>
                </div>
                <div className="dealer-hours">
                  <div className="w-6 mr-10 my-2">
                    <TfiTimer />
                  </div>
                  <span>Open - Monday to Sunday - 10:00AM to 8:00PM</span>
                </div>
                <button type="button" className="btn btn-outline-danger">
                  Get Direction
                </button>
              </div>
              <div className="dealer-info-right">
                <ul className="gallery flex">
                  {[
                    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
                    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
                  ].map((url, index) => (
                    <li key={index} className="gallery-item">
                      <img
                        src={url}
                        alt={`Gallery view ${index + 1}`}
                        className="gallery-img"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Reviews />
        </Card>
      )}
    </>
  );
};

export default Hero;
