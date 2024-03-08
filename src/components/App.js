import React from 'react';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import PublishRide from './publish_Ride/PublishRide';
import RideServices from './Ride_service/RideServices';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <RideServices />
      <PublishRide />
      <Footer />
    </>
  );
}

export default App;
