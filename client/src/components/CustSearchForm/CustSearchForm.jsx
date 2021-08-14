import "bootstrap/dist/css/bootstrap.min.css";
import "../CustSearchForm/CustSearchForm.scss";

function CustSearchForm() {
  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Category Search</label>
          <select class="form-control" id="exampleFormControlSelect1">
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
          <button type="button" class="btn btn-primary btn-lg">
            Lets Eat!
          </button>
        </div>
      </form>
      <iframe
        width={600}
        height={450}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/search?q=...key=..."
      />
    </>
  );
}

export default CustSearchForm;
