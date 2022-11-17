import DateOffView from 'pages/DateOffView';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dateoff" element={<DateOffView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
