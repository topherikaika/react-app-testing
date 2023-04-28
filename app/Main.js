import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components imports:
import Header from "./components/Header.js";
import HomeGuest from "./components/HomeGuest.js";
import Footer from "./components/Footer.js";
import About from "./components/about";
import Terms from "./components/Terms.js";
import Home from "./components/Home.js";

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexAppToken")));
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.except();
}
