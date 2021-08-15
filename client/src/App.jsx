import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Header from "./components/Header/Header";
import CustSignUp from "./pages/CustSignUp/CustSignUp";
import VendorSignUp from "./pages/VendorSignUp/VendorSignUp";
import CustVendorSearch from "./pages/CustVendorSearch/CustVendorSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/custSignUp" component={CustSignUp} />
          <Route exact path="/vendorSignUp" component={VendorSignUp} />
          <Route exact path="/custVendorSearch" component={CustVendorSearch} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
