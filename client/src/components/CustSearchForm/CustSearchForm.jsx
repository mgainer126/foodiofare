import "bootstrap/dist/css/bootstrap.min.css";
import "../CustSearchForm/CustSearchForm.scss";

function CustSearchForm() {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category Search</label>
          <select className="form-control" id="exampleFormControlSelect1">
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
          <button type="button" className="btn btn-primary btn-lg">
            Lets Eat!
          </button>
        </div>
      </form>
    </>
  );
}

export default CustSearchForm;
