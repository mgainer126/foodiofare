import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Header from "./components/Header/Header";

import VendorSignUp from "./pages/VendorSignUp/VendorSignUp";
import CustVendorSearch from "./pages/CustVendorSearch/CustVendorSearch";
import VendorEdit from "./pages/VendorEdit/VendorEdit";
import VendorMain from "../src/pages/VendorMain/VendorMain";
import About from "../src/pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/vendorSignUp" component={VendorSignUp} />
          <Route exact path="/custVendorSearch" component={CustVendorSearch} />
          <Route exact path="/vendorEdit" component={VendorEdit} />
          <Route exact path="/vendorMain" component={VendorMain} />
          <Route exat path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
