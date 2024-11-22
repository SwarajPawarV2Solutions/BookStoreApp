import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Abouts from "././/About/Abouts";


function App() {
  return (
    <>
      <div>
      <Routes className="dark:bg-slate-900 dark:text-white">
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/abouts" element={<Abouts/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
