import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Calendar styling
const BookingForm = ({ service }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // State to control logo visibility

  // Function to handle date change
  const handleDateChange = (date) => {
    setDate(date);
    setShowCalendar(false); // Hide calendar after selection
    setShowLogo(true); // Show logo again after date is selected
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert('Please select a date!');
      return;
    }
    alert(`You have booked ${service?.name || 'service'} for ${name} on ${date.toLocaleDateString()}`);
  };

 
  return (
    
    <div className="booking-form">
      <h3>Book your service:</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Date:
          <input
            type="text"
            value={date ? date.toLocaleDateString() : ''}
            onClick={() => {
              setShowCalendar(!showCalendar); // Toggle calendar visibility
              setShowLogo(false); // Hide logo when calendar is opened
            }} 
            readOnly
            required
            className="form-input"
          />
        </label>
        <br />

        {/* Display calendar */}
        {showCalendar && (
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className={service?.name === 'Haircut' ? 'calendar-male' : 'calendar-female'} // Styling by service
            />
          </div>
        )}
        
        <button type="submit" className="form-submit">✦✦✦Book✦✦✦</button>
      </form>

      
        
      
    </div>
  );
};

export default BookingForm;