import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ErrorsHandler from './errors/ErrorsHandler';
import Home from './pages/Home/Home';
import { Employees } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<Home />}
        errorElement={<ErrorsHandler />}
      />

      <Route
        path='/employees'
        element={<Employees />}
      />
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
