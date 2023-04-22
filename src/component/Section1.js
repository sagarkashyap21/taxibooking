import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'

export default function Section1() {
    return (
        <div className="section1">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1566319280755-c66cbcf93061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>AIRPORT TRANSFERS</h5>
        <p>TAXI TO/FROM PERTH AIRPORT-NO</p>
        <p>SURCHARGE.NO CALL OUT FEE</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1648032634537-5e6c0a618ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHRyYW5zcG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>WEDDING TRANSPORT</h5>
        <p>COMFORTABLE TRANSFERS FOR ALL YOUR</p>
        <p>WEDDING GUESTS</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1661964128252-6c9fad646b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwaW4lMjBidXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>MAXI TAXI</h5>
        <p>7/10/13 SEATERS FO GROUP TRANSFERS,</p>
        <p>BIKES, WHEELCHAIRS</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="sec12">
  {/* <hr /> */}
  <h1>RELIABLE, FLEXIBLE TAXI SERVICES</h1>
  <p>Maxi Taxi Perth is a professional group of individual taxi drivers in Greater Perth. We provide premium taxi charter services, taking pride in treating our customers with great care and respect. We are not a dispatch company, we provide personalized taxi charter passenger pick up and drop off service. We charge the official metered tariffs if you travelling little far distance but if you are going to need a taxi service for a short distance than we charge little extra because we will be providing you a guaranteed pick up service. We will give you full peace of mind that your taxi driver will definitely arrive. We try our 100 percent best to arrive on time but sometimes delay can happen it could be because of a road closure, tunnel closure, accidents etc. Therefore, please allow yourself little extra time and if incase your driver is even one minute late than please give us a call back and we can provide you the live update of your taxi. Our taxi fleet is large and diverse, ranging from normal cabs such as sedans and station wagons to 7 seater Taragos, 8 seater, 9 seater taxi van and 10 seater bus taxi or 13-seater maxi taxis. Efficient group transfers, Perth airport transfers and wheelchair taxis are some of our specialties. All our taxis are fully insured and meet all government regulations. Maxi Taxi Perth’s drivers are all police cleared, courteous and highly experienced, safe drivers. You can book a taxi in Perth 24/7 via our website and we will send you an email with a price mentioned. Perth airport taxi pick up and drop off service and wedding transport is one of our favorite activity which keeps us very busy throughout the year. We are very famous because of our excellent airport taxi service.</p>
</div>
{/* <hr /> */}
<Section2 />
<Section3 />
        </div>
    )
}
