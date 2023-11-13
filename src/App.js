import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import MyZoomPat from "./components/ZoomPat/zoomPat";
import MyZoom from "./components/Zoom/Zoom";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "col"}}>
      <Navbar />
      <MyZoomPat/>
  
    </div>
  );
}

export default App;
