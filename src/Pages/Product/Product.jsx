import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../Components/Chart/Chart";
import { productsData } from "../../Datas";
import PublishIcon from "@mui/icons-material/Publish";

const Product = () => {
  return (
    <div className="product">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="productTitle">Product</h1>
        <Link to={"/newProduct"}>
          <button className="productAddBtn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title={"Sale In Month"}
            data={productsData}
            dataKey={"sales"}
          />
        </div>

        <div className="productTopRight">
          <div className="d-flex align-items-center">
            <img
              className="productInfoImg"
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LyDZ?ver=a1ca&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true"
            />
            <span className="fw-semibold">Asus Laptop</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="fw-semibold">ID: </div>
              <div className="fw-light">236</div>
            </div>

            <div className="productInfoItem">
              <div className="fw-semibold">Name: </div>
              <div className="fw-light">Asus Laptop</div>
            </div>

            <div className="productInfoItem">
              <div className="fw-semibold">Sales: </div>
              <div className="fw-light">$89470</div>
            </div>

            <div className="productInfoItem">
              <div className="fw-semibold">Active: </div>
              <div className="fw-light">Yes</div>
            </div>

            <div className="productInfoItem">
              <div className="fw-semibold">In Stock: </div>
              <div className="fw-light">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="d-flex justify-content-between">
          <div className="productFormLeft d-flex flex-column">
            <label>Product Name</label>
            <input type="text" placeholder="Asus Laptop" />

            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight d-flex flex-column justify-content-around">
            <div className="d-flex align-items-center">
              <img
                className="productUploderImg"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LyDZ?ver=a1ca&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" className="d-none" />
            </div>

            <button className="productButton">Upload (Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
