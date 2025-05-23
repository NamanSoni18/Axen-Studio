// import React from 'react'

import { services_assets } from "@/assets/Services/services_assets"
import Hero from "../Hero"
import ServiceProvide from "./ServiceProvide"
import BookingSession from "./BookingSession"
import ContactUs from "../ContactUs"
import Footer from "../Footer/Footer"

const Services = () => {
  return (
    <div>
      <Hero
        title="Services"
        bottomTitle="Transforming Moments into"
        gradientText="Greatness"
        image1={services_assets.frame_2971}
        image2={services_assets.frame_2947}
      />
      <ServiceProvide/>
      <BookingSession/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Services
