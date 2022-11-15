import RankingView from 'pages/RankingView';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ranking" element={<RankingView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
