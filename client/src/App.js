import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import LikedMovies from "./Pages/LikedMovies";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/likedmovies" element={<LikedMovies />}></Route>
          <Route exact path="/player" element={<Player />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
