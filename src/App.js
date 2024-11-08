import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import pages from "./components/pages/pages";
import Home from './components/pages/Home';
import UnderConstruction from "./components/pages/UnderConstruction";
import Bookings from "./components/pages/Bookings"
import ConfirmedBooking from './components/pages/ConfirmedBooking';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={pages.get("home").path} element={<Home />} />
        <Route path={pages.get("about").path} element={<UnderConstruction />} />
        <Route path={pages.get("menu").path} element={<UnderConstruction />} />
        <Route path={pages.get("bookings").path} element={<Bookings />} />
        <Route
          path={pages.get("confirmedBooking").path}
          element={<ConfirmedBooking />}
        />
        <Route
          path={pages.get("orderOnline").path}
          element={<UnderConstruction />}
        />
        <Route path={pages.get("login").path} element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
