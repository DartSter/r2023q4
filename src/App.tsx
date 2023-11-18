import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SearchComponent } from './components/SearchComponent/SearchComponent';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <SearchComponent /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
