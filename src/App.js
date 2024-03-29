import React from "react";
import Root from './components/root/Root';
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/searchPage';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <HomePage /> }></Route>
    <Route path="search" element={ <SearchPage /> } />
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
