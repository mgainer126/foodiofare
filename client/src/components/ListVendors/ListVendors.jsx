import "../ListVendors/ListVendors.scss";
import { Link } from "react-router-dom";

function ListVendors({ vendors, category, area, handleClick }) {
  const categoryFilter = vendors.filter(
    (vendor) => vendor.foodcat === category
  );
  console.log(categoryFilter);

  const vendorArr = categoryFilter;

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
