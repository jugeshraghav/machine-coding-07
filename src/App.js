import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { DestinationDetail } from "./pages/DestinationDetail";
import { Destination } from "./pages/Destination";
import { Country } from "./pages/Country";
import { Continent } from "./pages/Continent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent" element={<Continent />} />
        <Route path="/country/:continentId" element={<Country />} />
        <Route
          path="/destination/:continentId/:countryId"
          element={<Destination />}
        />
        <Route
          path="/destinationDet/:continentId/:countryId/:desId"
          element={<DestinationDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
