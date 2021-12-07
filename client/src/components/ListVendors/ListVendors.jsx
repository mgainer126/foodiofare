import "../ListVendors/ListVendors.scss";
import { Link } from "react-router-dom";

function ListVendors({ vendors, handleClick }) {
  return vendors.map((vendor) => {
    return (
      <>
        <Link className="vendors" key={vendor.vendorid}>
          <div className="vendors__box">
            <div className="vendors__list" onClick={() => handleClick(vendor)}>
              <h5 className="vendor__bussname" name="bussname">
                {vendor.bussname}
              </h5>
              <p name="foodcategory" className="vendor__cat">
                {vendor.foodcat}
              </p>
              <div className="address">
                <div className="address__street">
                  <p name="address__no" className="address__no">
                    {vendor.addnum}
                  </p>
                  <p name="address__streetname" className="address__streetname">
                    {vendor.streetname}
                  </p>
                  <p name="address__streettype" className="address__streettype">
                    {vendor.streettype}
                  </p>
                </div>
                <div className="address__municipality">
                  <p name="address__city" className="address__city">
                    {vendor.city}
                  </p>
                  <p name="address__province" className="address__province">
                    {vendor.province}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  });
}

export default ListVendors;
