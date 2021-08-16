function CustSignUpForm({ clickHandle }) {
  return (
    <>
      <div className="col-md-10 mx-auto col-lg-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Search</h1>
          <p className="col-lg-10 fs-4">
            Provide Your Address and Make a Food Category Selection Below, and
            We Will Show You Where They Are Today
          </p>
        </div>

        <form
          onSubmit={clickHandle}
          className="form"
          className="p-4 p-md-5 border rounded-3 bg-light"
        >
          <div className="form-floating mb-3">
            <label htmlFor="floatingPassword">House Number</label>
            <input
              type="text"
              // value="housenumber"
              name="househumber"
              className="form-control"
              id="housenumber"
              // placeholder="House Number"
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="streetname">Street Name</label>
            <input
              type="text"
              // value="streetname"
              name="streetname"
              className="form-control"
              id="streetname"
              placeholder="Street Name"
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="streettype">Street Type</label>
            <input
              type="text"
              // value="streettype"
              name="streettype"
              className="form-control"
              id="streettype"
              placeholder="Street Type"
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="city">City</label>
            <input
              type="text"
              // value="city"
              name="city"
              className="form-control"
              id="city"
              placeholder="City"
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="ProviceState">Province/State</label>
            <input
              type="text"
              // value="ProvinceState"
              name="ProvinceState"
              className="form-control"
              id="ProviceState"
              placeholder="Provice/State"
            />
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
      </div>
    </>
  );
}

export default CustSignUpForm;
