import ListVendors from "../ListVendors/ListVendors";
import "../CustSearchForm/CustSearchForm.scss";

function CustSearchForm({ clickHandle, vendors, area, category, handleClick }) {
  return (
    <>
      <div className="layout">
        <div className="pagehead">
          <h1 className="display-4 fw-bold lh-1 mb-3">Search</h1>
          <p className="directions">
            Provide Your Address and Make a Food Category Selection Below, and
            We Will Show You Where They Are Today
          </p>
        </div>
      </div>
      <div className="formandlist">
        <form
          onSubmit={clickHandle}
          className="form"
          className="p-md-5 border rounded-3 bg-light"
        >
          {/* House Number */}
          {/* <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="house-number"
              name="house-number"
              placeholder="House Number"
            />
            <label htmlFor="floatingPassword">House Number</label>
          </div> */}
          {/* Street Name */}
          {/* <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="streetName"
              name="streetName"
              placeholder="Street Name"
            />
            <label htmlFor="floatingPassword">Street Name</label>
          </div> */}

          {/* <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="streetType"
              name="streetType"
              placeholder="Street Type"
            />
            <label htmlFor="floatingPassword">Street Type</label>
          </div> */}
          {/* City */}
          {/* <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="City"
            />
            <label htmlFor="floatingPassword">City</label>
          </div> */}
          {/* Province/State */}
          {/* <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="province-state"
              name="province-state"
              placeholder="province-state"
            />
            <label htmlFor="floatingPassword">Province/State</label>
          </div> */}
          <label htmlFor="category">Category Search</label>
          <select
            className="form-control"
            id="category"
            // value="category"
            name="category"
          >
            <option>Select a Food Category</option>
            <option>Barbecue</option>
            <option>Chineese</option>
            <option>Fries and Poutine</option>
            <option>Fusion</option>
            <option>Greek</option>
            <option>Halal</option>
            <option>Ice Cream</option>
            <option>Jamacian</option>
            <option>Mexican</option>
            <option>Thai</option>
            <option>Vegetarian</option>
          </select>
          <button type="submit" className="btn btn-primary btn-lg">
            Find By Category
          </button>
          <br></br>
          <br></br>
          <areafind className="areafind">
            <label htmlFor="areasearch">Area Search</label>

            <select
              className="form-control"
              id="area"
              // value="areasearch"
              name="area"
            >
              <option>Click Here to Select a Area</option>
              <option>5km</option>
              <option>10km</option>
              <option>15km</option>
              <option>20km</option>
            </select>
            <button type="submit" className="btn btn-primary btn-lg">
              Find By Area
            </button>
          </areafind>
        </form>
        <div className="vendors">
          <h3 className="vendors__list-head">
            1. Select Find By Category and We Show Your Results Below
          </h3>
          <h3 className="vendors__list-head">
            2. Click on the displayed vendor and we will map show it on the map
          </h3>
          <ListVendors
            vendors={vendors}
            category={category}
            area={area}
            handleClick={handleClick}
            className="vendors__list"
          />
        </div>
      </div>
    </>
  );
}

export default CustSearchForm;
