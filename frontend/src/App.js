import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.scss"
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import MyLists from "./pages/myLists/MyLists";
import Player from "./pages/player/Player";
import Dashboard from "./pages/adminPanel/Dashboard";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Welcome />} />
        <Route path="/movies" element={<Home format="Movie" />} />
        <Route path="/series" element={<Home format="Series" />} />
        <Route path="/myLists" element={<MyLists />} />
        <Route path="/player" element={<Player />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
