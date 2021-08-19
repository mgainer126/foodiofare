import "../ListVendors/ListVendors.scss";
import { Link } from "react-router-dom";

function ListVendors({ vendors, category, area, handleClick }) {
  console.log(vendors, category, area);
  const categoryFilter = vendors.filter(
    (vendor) => vendor.foodcat === category
  );
  console.log(categoryFilter);

  const vendorArr = categoryFilter;
  return vendorArr.map((vendor) => {
    return (
      <form onSubmit={handleClick} className="list-group">
        <button type="submit">
          <h5 className="vendor__bussname" name="bussname">
            {vendor.bussname}
          </h5>
          <p name="foodcategory" className="vendor__cat">
            {vendor.foodcat}
          </p>
          <p name="addno" className="vendor__addnum">
            {vendor.addnum}
          </p>
          <p name="streetname" className="vendor__streetname">
            {vendor.streetname}
          </p>
          <p name="streettype" className="vendor__streettype">
            {vendor.streettype}
          </p>
          <p name="streettype" className="vendor__streettype">
            {vendor.city}
          </p>
          <p name="province" className="vendor__province">
            {vendor.province}
          </p>
        </button>
      </form>
    );
  });
}

export default ListVendors;