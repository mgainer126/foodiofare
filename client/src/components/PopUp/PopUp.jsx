import React from "react";
import "../PopUp/PopUp.scss";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <button className="close-btn">Close</button>
      {props.children}
      <div className="popup-inner"></div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
