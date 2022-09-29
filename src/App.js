import { Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Trending from "./pages/Trending/Trending";
import Recommended from "./pages/Recommended/Recommended";
import Movies from "./pages/Movies/Movies";
import Tv from "./pages/TV/Tv";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={[
              <Trending key={"trend"} />,
              <Recommended key={"recommend"} />,
            ]}
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
