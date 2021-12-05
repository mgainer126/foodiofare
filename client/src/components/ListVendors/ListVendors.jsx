import "../ListVendors/ListVendors.scss";
import { Link } from "react-router-dom";
// import googleAPIKey from "../../data/APIKey";
// import axios from "axios";

function ListVendors({ vendors, category, handleClick }) {
  const categoryFilter = vendors.filter(
    (vendor) => vendor.foodcat === category
  );

  const vendorArr = categoryFilter;

  // const handleClick = (e) => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${e.addnum}+${e.streetname}+${e.streettype},
  //   +${e.city},+${e.province}&key=${googleAPIKey}`
  //     )
  //     .then((response) => {
  //       let vendorcords = response.data.results[0].geometry.location;
  //       this.setState({
  //         vendorcords: vendorcords,
  //       });
  //       return response.data;
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  return vendorArr.map((vendor) => {
    return (
      <>
        <Link className="vendors">
          <div className="vendors__box">
            <div className="vendors__list" onClick={() => handleClick(vendor)}>
              <h5 className="vendor__bussname" name="bussname">
                {vendor.bussname}
              </h5>
              <p name="foodcategory" className="vendor__cat">
                {vendor.foodcat}
              </p>
              <address className="address">
                <street className="address__street">
                  <p name="address__no" className="address__no">
                    {vendor.addnum}
                  </p>
                  <p name="address__streetname" className="address__streetname">
                    {vendor.streetname}
                  </p>
                  <p name="address__streettype" className="address__streettype">
                    {vendor.streettype}
                  </p>
                </street>
                <municipality className="address__municipality">
                  <p name="address__city" className="address__city">
                    {vendor.city}
                  </p>
                  <p name="address__province" className="address__province">
                    {vendor.province}
                  </p>
                </municipality>
              </address>
            </div>
          </div>
        </Link>
      </>
    );
  });
}

export default ListVendors;
