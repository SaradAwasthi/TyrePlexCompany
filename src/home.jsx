import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Hero from './components/Hero/hero'
import Brands from './components/Brands/brands'
import ServicesOffered from './components/Services Offered/servicesOffered'
import SoldbyDealer from './components/SoldByDealer/soldbyDealer'
import Breadcrumb from './components/breadcrumb/breadcrumb'
import PaymentMode from './components/PaymentMode/paymentMode'

function Home() {
  return (
    <div className='overflow-x-hidden'>
        <Header />
        <Hero />
        <Brands />
        <ServicesOffered />
        <SoldbyDealer />
        <Breadcrumb />
        <PaymentMode />
        <Footer />
    </div>
  )
}

export default Home