import React, { useState } from "react";
import TyreList from "./tyreList";
import ProductList from "./ProductList/product_list";
import ProductData from "./ProductList/productData";
import FilterDropdown from "./filterDropDown";

function SoldbyDealer() {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleFilterChange = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <>
      <div className="mt-4 ml-10">
        <TyreList products={ProductData} onFilterChange={handleFilterChange} />
      </div>
      <div>
        <ProductList selectedBrand={selectedBrand} />
      </div>
    </>
  );
}

export default SoldbyDealer;
