import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate
import '../style.css';

export function MaleHairdresser() {
  const services = [
    { id: 1, name: 'Haircut', description: 'Modern haircut with style.', price: '15 EUR' },
    { id: 2, name: 'Shaving', description: 'Perfect shave for a fresh look.', price: '10 EUR' },
    { id: 3, name: 'Beard Styling', description: 'Care and shaping of the beard.', price: '12 EUR' }
  ];

  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();  // Initializing useNavigate

  // Function to navigate to the booking page
  const handleServiceClick = (service) => {
    setSelectedService(service);
    navigate('/booking', { state: { service } });  // Navigating to /booking with service data
  };

  return (
    <div className="naslovi-h">
      <h2>Male Hairdresser</h2>
      <h3>Select a Service:</h3>
      <div className="male-hairdresser">
       
        <div className="services">
          {services.map(service => (
            <div key={service.id} className="service" onClick={() => handleServiceClick(service)}>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <p><strong>{service.price}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
