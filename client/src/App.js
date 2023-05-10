import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Player from "./components/Player";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import MyList from "./Pages/MyList";
import MovieInfo from "./components/MovieInfo";

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
          <Route exact path="/mylist" element={<MyList />}></Route>
          <Route exact path="/movieinfo" element={<MovieInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
