import Ranking from 'pages/Ranking';
import DateOffView from 'pages/DateOffView';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/dateoff/:scheduleId" element={<DateOffView />}>
        <Route path=":date" element={<DateOffView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
