import Homeview from 'pages/Homeview';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Component />} /> */}
        <Route path="/home" element={<Homeview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
