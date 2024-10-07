import React from "react";
import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Syptom from "./components/Syptom";
import Prevention from "./components/Prevention";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden  ">
      <Nav/>
      <Hero/>
      <Stats/>
      <Syptom/>
      <Prevention/>
      <Footer/>
    </div>
  );
}

export default App;
