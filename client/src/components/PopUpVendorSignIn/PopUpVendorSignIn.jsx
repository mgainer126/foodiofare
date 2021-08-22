import React from "react";
import { useHistory, userHistory } from "react-router-dom";

function PopUpVendorSignIn(props) {
  let history = useHistory();
  const redirect = () => {
    history.push("/vendorMain");
  };
  console.log(props);
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button className="close-btn" onClick={redirect}>
          Continue To Vendor Menu
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUpVendorSignIn;
