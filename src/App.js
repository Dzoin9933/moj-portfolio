import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';  // Komponenta za početnu stranicu
import { MaleHairdresser } from './components/MaleHairdresser';  // Komponenta za muški frizer
import { FemaleHairdresser } from './components/FemaleHairdresser';  // Komponenta za ženski frizer
import BookingForm from './components/BookingForm';  // Komponenta za formu za rezervaciju

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/male-hairdresser" element={<MaleHairdresser />} />
        <Route path="/female-hairdresser" element={<FemaleHairdresser />} />
        <Route path="/booking" element={<BookingForm />} /> {/* Ruta za stranicu rezervacije */}
      </Routes>
    </div>
  );
}

export default App;
