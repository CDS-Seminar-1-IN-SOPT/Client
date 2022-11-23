// src/mocks/handlers.js
import { rest } from 'msw';

import { allShowDataByRanking } from './api/data/allShowDataByRanking';
import { homeShowDataByGenre } from './api/data/homeShowDataByGenre';
import { homeTicketData } from './api/data/homeTicketData';
import { showDetailData } from './api/data/showDetailData';
import { showScheduleData } from './api/data/showScheduleData';

export const handlers = [
  rest.get('/genre?genreId=3', (_, response, context) => {
    return response(context.status(200), context.json(homeShowDataByGenre));
  }),
  rest.get('/api/show/home', (_, response, context) => {
    return response(context.status(200), context.json(homeTicketData));
  }),
  rest.get('/show', (_, response, context) => {
    return response(context.status(200), context.json(allShowDataByRanking));
  }),
  rest.get('/show/:id', (_, response, context) => {
    return response(context.status(200), context.json(showDetailData));
  }),
  rest.get('/schedule/:showId', (_, response, context) => {
    return response(context.status(200), context.json(showScheduleData));
  }),
];
