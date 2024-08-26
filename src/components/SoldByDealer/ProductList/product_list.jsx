import React, { useState, useEffect } from "react";
import ProductData from "./productData";
import Card from "../../../re-usable-components/Cards";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = ({ selectedBrand }) => {
  const products = ProductData;
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter products based on selectedBrand
  const filteredProducts = selectedBrand
    ? products.filter(product => product?.BrandsData?.name === selectedBrand)
    : products;

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 8);
  };

  return (
    <div className={`product-list-container mx-5 relative ${isMobile ? 'mobile' : 'desktop'}`}>
      {filteredProducts.slice(0, visibleProducts).map((product) => (
        <Card key={product.id} width={isMobile ? "105%" : "23%"} height="auto" className="product-item-card">
          <Link to={product.link} title={product.name} className="product-item-link">
            <div className="d-flex ps-3">
              <div className="product-info col-8">
                <div className="product-description text-start px-0">
                  <div className="tyre_brand">
                    <span className="brand-img">
                      <img src={product.BrandsData.logoClass} className="w-24" alt="Brand Logo" />
                    </span>
                  </div>
                  <div className="m-name">{product.modelName}</div>
                  <div className="v-name">{product.size}</div>
                  <div className="d-flex align-items-center">
                    <div className="rt-bg">
                      <span
                        data-rating={product.rating}
                        data-value={product.rating}
                        className="fa fa-star fa-fw"
                        style={{ backgroundImage: `url(${product.ratingIconUrl})` }}
                      ></span>
                      <span className="rating-value">{product.rating}</span>
                    </div>
                    <span className="review-text">{product.reviews} Reviews</span>
                  </div>
                  <div className="product-price">₹ {product.price}</div>
                  <span className="text-green-400 text-sm">Offer available</span>
                  <div className="product-feature px-0">{product.feature}</div>
                </div>
              </div>
              <div className="product-image-section col-4">
                <span className="warranty-tag mb-5">{product.warranty}</span>
                <img src={product.imageUrl} alt={product.name} className="img-fluid product-image mt-5" />
              </div>
            </div>
          </Link>
        </Card>
      ))}
      {visibleProducts < filteredProducts.length && (
        <button type="button" className="btn btn-primary my-4 mx-auto" onClick={loadMoreProducts}>
          View More 
        </button>
      )}
    </div>
  );
};

export default ProductList;
