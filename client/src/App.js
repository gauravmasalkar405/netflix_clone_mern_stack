import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import LikedMovies from "./Pages/LikedMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/likedmovies" element={<LikedMovies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
