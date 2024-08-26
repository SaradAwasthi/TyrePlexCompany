import React from 'react';
import FilterDropdown from './filterDropDown';

const TyreList = ({ products , onFilterChange }) => {
  return (
    <div className="col-12">
      
      <div className="row align-items-center mx-0 mb-2">
      <span className="font-bold text-xl mb-3">Tyres sold by this Dealer</span>
        <div className="col-12 col-sm-6 total-product-result px-0 mb-2 mb-sm-0 d-none">
          <p className="fw-bold mb-0 fs-5" style={{ display: 'none' }}>
            <span className="filter_total_count">8809</span> Tyre(s) found for
          </p>
        </div>
        <div className="col-12 col-sm-6 sortBy-filter ms-auto px-0 bottom-filter" id="filter_wrapper">
          <div className="backdrop"></div>
          <div className="row d-flex justify-content-between">
            <div className="col col-sm-4 sortBy ms-sm-auto">
              <div className="mr-8 ">
                <button type="button" className="btn col-12 px-0">
                <FilterDropdown products={products} onFilterChange={onFilterChange} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TyreList;
