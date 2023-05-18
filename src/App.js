import { Route, Routes } from "react-router-dom";
import "./index.scss"
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import Videos from "./pages/adminPanel/videos/Videos";
import AddVideo from "./pages/adminPanel/addVideo/AddVideo";
import Movies from "./pages/home/movies/Movies";
import Series from "./pages/home/series/Series";
import MyLists from "./pages/myLists/MyLists";
import Player from "./pages/player/Player";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/browse" element={<Home />} />
      <Route path="/browse/movies" element={<Movies />} />
      <Route path="/browse/series" element={<Series />} />
      <Route path="/browse/myLists" element={<MyLists />} />
      <Route path="/browse/myLists/listName" element={<Home />} />
      <Route path="/player" element={<Player />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
      <Route path="/adminPanel/videos" element={<Videos />} />
      <Route path="/adminPanel/addVideo" element={<AddVideo />} />
    </Routes>
  )
}

export default App;
