import React from "react";
import "../PopUp/PopUp.scss";
import { useHistory, userHistory } from "react-router-dom";

function PopUp(props) {
  let history = useHistory();
  const redirect = () => {
    history.push("/custVendorSearch");
  };
  console.log(props);
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button className="close-btn" onClick={redirect}>
          Continue To Proceed
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
