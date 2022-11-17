import Ranking from 'pages/Ranking';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
