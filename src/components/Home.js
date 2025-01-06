import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Logo Section */}
      <header className="logo-header">
        
      </header>

      <div className="home">
        <h1>Welcome to the Hair Salon!</h1>
        <p>Select a hairdresser:</p>
        <ul>
          <li><Link to="/male-hairdresser">Male Hairdresser</Link></li>
          <li><Link to="/female-hairdresser">Female Hairdresser</Link></li>
        </ul>
      </div>

      <div className="salon-description">
        <h2>About Our Salon</h2>
        <p>
          At our salon, we pride ourselves on offering top-notch hairdressing services. Whether you're 
          looking for a trendy new cut, a relaxing styling session, or a complete makeover, our professional 
          team is here to make you feel your best. We use only the highest quality products to ensure you leave 
          with fabulous hair every time.
        </p>
        <p>
          Our friendly and welcoming atmosphere will make you feel right at home. Come and experience the ultimate 
          hair care service that will leave you looking fabulous and feeling confident.
        </p>
      </div>
    </>
  );
}

export default Home;
