import { Link } from "react-router-dom";
import ItemDetails from './ItemDetails'
function ShopList(props) {
    const { _id, carName, model, year, price, img1} = props.obj;
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={img1} alt={carName} />
              <div className="card-body">
                <h5 className="card-title">{carName}</h5>
                <p className="card-text">Carname:{model}</p>
                <p className="card-text">Year:{year}</p>
                <p className="card-text">Price:{price}</p>
                <Link className="btn btn-primary" to={"/itemdetails/"+_id} element={<ItemDetails />}>View</Link>
              </div>
            </div>
          </div>
    )
}
export default ShopList;
