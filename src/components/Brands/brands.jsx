import React, { useRef } from "react";
import "./Brands.css";
import Card from "../../re-usable-components/Cards";
import { Link } from "react-router-dom";
import BrandsData from "./brandsData";



function Brands() {
    const scrollContainerRef = useRef(null);
  const brands = BrandsData
    const handleKeyDown = (event) => {
      if (scrollContainerRef.current) {
        if (event.key === 'ArrowRight') {
          scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        } else if (event.key === 'ArrowLeft') {
          scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
      }
    };
  
    React.useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return (
      <Card>
        <span className="font-bold text-xl mb-3">Deals in</span>
        <div className="brands-container">
          <ul className="custom-carousel mb-0 flex gap-3 " ref={scrollContainerRef}>
            {brands.slice(0, brands.length).map((brand, index) => (
              <li className="item" key={index}>
                <Card height="100px" width="200px">
                  <Link
                    to={brand.href}
                    title=""
                    data-capture="event"
                    data-cat="dealer_deals_in"
                    data-act="Click"
                    data-lbl="Popular tyre brands widget"
                    className="custom-card no-underline"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="brand-img">
                        <img src={brand.logoClass} alt={brand.name} className="h-10 mb-2" />
                      </div>
                      <div className="card-title text-muted">{brand.name}</div>
                    </div>
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    );
  }
  

export default Brands;
