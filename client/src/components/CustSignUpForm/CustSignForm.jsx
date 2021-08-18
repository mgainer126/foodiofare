import ListVendors from "../../components/ListVendors/ListVendors";
import "../CustSignUpForm/CustSignForm.scss";

function CustSignUpForm({ clickHandle, vendors }) {
  return (
    <>
      <div className="col-md-10 col-lg-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Search</h1>
          <p className="col-lg-10 fs-4">
            Provide Your Address and Make a Food Category Selection Below, and
            We Will Show You Where They Are Today
          </p>
        </div>
        <div className="formandlist">
          <form
            onSubmit={clickHandle}
            className="form"
            className="p-4 p-md-5 border rounded-3 bg-light"
          >
            {/* House Number */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="house-number"
                name="house-number"
                placeholder="House Number"
              />
              <label htmlFor="floatingPassword">House Number</label>
            </div>
            {/* Street Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="streetName"
                name="streetName"
                placeholder="Street Name"
              />
              <label htmlFor="floatingPassword">Street Name</label>
            </div>

            {/* Steet Type */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="streetType"
                name="streetType"
                placeholder="Street Type"
              />
              <label htmlFor="floatingPassword">Street Type</label>
            </div>
            {/* City */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="City"
              />
              <label htmlFor="floatingPassword">City</label>
            </div>
            {/* Province/State */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="province-state"
                name="province-state"
                placeholder="province-state"
              />
              <label htmlFor="floatingPassword">Province/State</label>
            </div>
            <label htmlFor="category">Category Search</label>
            <select
              className="form-control"
              id="category"
              // value="category"
              name="category"
            >
              <option>Click Here to Select a Category</option>
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
            <label htmlFor="areasearch">Area Search</label>
            <select
              className="form-control"
              id="areasearch"
              // value="areasearch"
              name="areasearch"
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
          </form>
          <div className="vendors__list">
            <ListVendors vendors={vendors} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustSignUpForm;
