import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../style.css';
import BookingForm from './BookingForm'; // Correct import for the BookingForm

export function FemaleHairdresser() {
  const services = [
    { id: 1, name: 'Haircut', description: 'Perfect hairstyle according to your wishes.', price: '20 EUR' },
    { id: 2, name: 'Hair Coloring', description: 'Coloring with premium products.', price: '30 EUR' },
    { id: 3, name: 'Balayage', description: 'Modern coloring technique.', price: '50 EUR' }
  ];

  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to navigate to the booking page with the selected service
  const handleServiceClick = (service) => {
    setSelectedService(service);
    navigate('/booking', { state: { service } });  // Navigate to /booking with service details
  };

  return (
    <div className="naslov-zenski">
      <h2>Female Hairdresser</h2>
      <h3>Select a Service:</h3>
      <div className="female-hairdresser">
        <div className="hairdresser-image female"></div> {/* Image above the title */}
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

      {selectedService && <BookingForm service={selectedService} />}
    </div>
  );
}
