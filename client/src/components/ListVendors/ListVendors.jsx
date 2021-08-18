import "../ListVendors/ListVendors.scss";

function ListVendors({ vendors, category, area, handleClick }) {
  console.log(vendors, category, area);
  const categoryFilter = vendors.filter(
    (vendor) => vendor.foodcat === category
  );
  console.log(categoryFilter);

  const vendorArr = categoryFilter;
  return vendorArr.map((vendor) => {
    return (
      <div className="list-group">
        <a
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div onClick={handleClick}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1" name="bussname">
                {vendor.bussname}
              </h5>
            </div>
            <p className="mb-1">{vendor.foodcat}</p>
            <small className="vendor__address">
              <p className="vendor__addnum">{vendor.addnum} </p>
              <p className="vendor__streetname">{vendor.streetname} </p>
              <p className="vendor__streettype">{vendor.streettype} </p>
            </small>
          </div>
        </a>
      </div>
    );
  });
}

export default ListVendors;
