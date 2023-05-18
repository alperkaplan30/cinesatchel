import { Route, Routes } from "react-router-dom";
import "./index.scss"
import Home from "./pages/home/Home";
import Movies from "./pages/home/movies/Movies";
import Series from "./pages/home/series/Series";
import Player from "./pages/player/Player";

export function App() {
  return (
    <Routes>
      <Route path="/browse" element={<Home />} />
      <Route path="/browse/movies" element={<Movies />} />
      <Route path="/browse/series" element={<Series />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  )
}

export default App;