import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// This is the newer way of routing -- better for server-side routing
// Allows one to fetch the component before it's rendered -- can make a fetch request before the page has loaded.


// Convert an array of objects into a <Routes> component containing <Route> component
const someFancyRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={someFancyRouter} />
    </div>
  );
}

export default App;
