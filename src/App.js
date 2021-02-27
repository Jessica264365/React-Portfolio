import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTop from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Aboutme from "./pages/Aboutme/Aboutme";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
function App() {
  return (
    <Router basename="/React-Portfolio" >
      <NavTop />

      <Route exact path={process.env.PUBLIC_URL + "/"} component={Aboutme} />
      <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
      <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />

      <Footer />
    </Router>
  );
}

export default App;
