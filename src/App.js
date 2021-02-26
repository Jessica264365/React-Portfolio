import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Aboutme} />
      <Route exact path ="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
