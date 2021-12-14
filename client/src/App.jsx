import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import CustomerSignUp from "./pages/CustomerSignUp/CustomerSignUp";
import VendorSignUp from "./pages/VendorSignUp/VendorSignUp";
import CustVendorSearch from "./pages/CustVendorSearch/CustVendorSearch";
// import VendorEdit from "./pages/VendorEdit/VendorEdit";
import VendorEditForm from "../src/components/VendorEditForm/VendorEditForm";
import VendorMain from "../src/pages/VendorMain/VendorMain";
import About from "../src/pages/About/About";
import CustomerUpdate from "./components/CustomerUpdate/CustomerUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Hero} />
        <Route exact path="/vendorSignUp" component={VendorSignUp} />
        <Route exact path="/custSignUp" component={CustomerSignUp} />
        <Route exact path="/custUpdate" component={CustomerUpdate} />
        <Route exact path="/custVendorSearch" component={CustVendorSearch} />
        <Route exact path="/vendorEdit" component={VendorEditForm} />
        <Route exact path="/vendorMain" component={VendorMain} />
        <Route exact path="/about" component={About} />
      </BrowserRouter>
    </>
  );
}

export default App;
