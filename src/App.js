import React from "react";
import Root from './components/root/Root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }></Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
