import DateOffView from 'pages/DateOffView';
import Homeview from 'pages/Homeview';
import Ranking from 'pages/Ranking';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Component />} /> */}
        <Route path="/home" element={<Homeview />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/dateoff/:scheduleId" element={<DateOffView />} />
        <Route path=":date" element={<DateOffView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
