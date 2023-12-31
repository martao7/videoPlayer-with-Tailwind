import { useState } from "react";
import React from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="h-full w-full bg-black">
        <Header />

        <VideoPlayer />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
