import axios from "axios";

function AutoFill() {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCj54VsnFk1OboSdjIlx_UQvHKw08_9RJ4&libraries=places`
    )
    .then(function (response) {
      console.log(response);
    });
  return;
}

export default AutoFill;
