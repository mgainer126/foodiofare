import "../ListVendors/ListVendors.scss";
import { Link } from "react-router-dom";

function ListVendors({ vendors, handleClick }) {
  return vendors.map((vendor) => {
    console.log(vendor);
    return (
      <>
        <Link className="vendors" key={vendor.vendorid}>
          <div className="vendors__box">
            <div
              className="vendors__list"
              key={vendor.vendorid}
              onClick={() => handleClick(vendor)}
            >
              <h5 className="vendor__bussname" name="bussname">
                {vendor.bussname}
              </h5>
              <p name="foodcategory" className="vendor__cat">
                {vendor.foodcat}
              </p>
              <div className="address">
                <div className="address__street">
                  <p name="address__no" className="address__no">
                    {vendor.address}
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
