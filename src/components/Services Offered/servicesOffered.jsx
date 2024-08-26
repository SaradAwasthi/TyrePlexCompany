import React from 'react'
import Card from '../../re-usable-components/Cards'
import { Link } from 'react-router-dom'
import ServicesOfferedData from './servicesOfferedData'

function ServicesOffered() {
  return (
    <Card>
        <span className="font-bold text-xl mb-3">Services offered by this dealer</span>
        <div className="brands-container">
          <ul className="custom-carousel mb-0 flex gap-3 ">
            {ServicesOfferedData.slice(0, ServicesOfferedData.length).map((Services, index) => (
              <li className="item" key={index}>
                <Card height="200px" width="300px">
                  <Link
                    to={Services.href}
                    title=""
                    data-capture="event"
                    data-cat="dealer_deals_in"
                    data-act="Click"
                    data-lbl="Popular tyre brands widget"
                    className="custom-card no-underline"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="brand-img">
                        <img src={Services.image} alt={Services.name} className="h-15 mb-2" />
                      </div>
                      <div className="card-title text-muted my-3 font-bold">{Services.name}</div>
                      <button type="button" className="btn btn-danger">Book Now</button>
                    </div>
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Card>
  )
}

export default ServicesOffered