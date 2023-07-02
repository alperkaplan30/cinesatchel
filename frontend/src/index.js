import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

app.use(express.static(dirname));

app.get("/*", function(req, res) {
  res.sendFile(path.join(dirname, "index.html"));
});

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
