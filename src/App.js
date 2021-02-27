import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTop from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Aboutme from "./pages/Aboutme/Aboutme";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavTop />
      <Route exact path="/" component={Aboutme} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Footer />
    </Router>
  );
}

export default App;
