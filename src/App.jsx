import React from "react";
import Banner from "./components/Banner";
import Row from "./components/Row";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Children from "./pages/Children";


function App() {
  return(
    <React.StrictMode>
      <Routes>
        <Route path="/" element={
          <>
          <Welcome/>
          </>
        }/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/shows" element={<Shows/>}></Route>
        <Route path="/children" element={<Children/>}></Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
