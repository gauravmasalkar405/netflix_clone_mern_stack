import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Player from "./components/Player";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/player" element={<Player />}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
          <Route exact path="/tv" element={<TvShows />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
