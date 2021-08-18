import "../ListVendors/ListVendors.scss";

function ListVendors() {
  return (
    <>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Vendor Name</h5>
          </div>
          <p className="mb-1">Type</p>
          <small>
            <p className="vendor__addnum">12341</p>
            <p className="vendor__streetname">Liverpool</p>
            <p className="vendor__streettype">Road</p>
          </small>
        </a>
      </div>
    </>
  );
}

export default ListVendors;
