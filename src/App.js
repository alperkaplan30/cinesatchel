import { Route, Routes } from "react-router-dom";
import "./index.scss"
import AdminPanel from "./pages/adminPanel/AdminPanel";
import Videos from "./pages/adminPanel/videos/Videos";
import AddVideo from "./pages/adminPanel/addVideo/AddVideo";
import MyLists from "./pages/myLists/MyLists";

export function App() {
  return (
    <Routes>
      <Route path="/browse/myLists" element={<MyLists />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
      <Route path="/adminPanel/videos" element={<Videos />} />
      <Route path="/adminPanel/addVideo" element={<AddVideo />} />
    </Routes>
  )
}

export default App;