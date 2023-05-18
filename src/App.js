import { Route, Routes } from "react-router-dom";
import "./index.scss"
import Welcome from "./pages/welcome/Welcome";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  )
}

export default App;
