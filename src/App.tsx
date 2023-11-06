import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvestPage from './pages/Invest/InvestPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/invest" element={<InvestPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
