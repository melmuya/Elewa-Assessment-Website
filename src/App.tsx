// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Body from "./components/Body";
import IntroInvest from "./pages/Invest/IntroInvest";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar, Nav, Container} from 'react-bootstrap'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroInvest />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
