import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import MyZoomPat from "./components/ZoomPat/zoomPat";
import MyZoom from "./components/Zoom/Zoom";
import Scheduler from "./components/AgendarCitas/agendarCitas";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "col"}}>
      <Navbar />
      <MyZoomPat/>
      {/*<MyZoomPat/>
      /*<Scheduler/>*/}
    </div>
  );
}

export default App;
