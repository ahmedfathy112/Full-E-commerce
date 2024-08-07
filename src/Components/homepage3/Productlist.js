import './Productlist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagehome1 from '../images/img (1).png';
import imagehome2 from '../images/img (2).png';
import imagehome3 from '../images/img (3).png';
import imagehome4 from '../images/img (4).png';
import imagehome5 from '../images/img (5).png';
import imagehome6 from '../images/img (6).png';

function ProductList() {
  return (
    <>
      <div className="container">
        <h2 className="text-center my-5">Shop by Categories</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-6 category">
            <img src={imagehome1} alt="Golf Clubs" style={{ width: '100%', height: 'auto' }} />
            <p className="category-title">Golf Clubs</p>
          </div>
          <div className="col-lg-4 col-md-6 col-6 category">
            <img src={imagehome2} alt="Golf Balls" style={{ width: '100%', height: 'auto' }} />
            <p className="category-title">Golf Balls</p>
          </div>
          <div className="col-lg-4 col-md-6 col-6 category">
            <img src={imagehome3} alt="Golf Bags" style={{ width: '100%', height: 'auto' }} />
            <p className="category-title">Golf Bags</p>
          </div>
          <div className="col-lg-4 col-md-6 col-6 category">
            <img src={imagehome4} alt="Clothing & Rainwear" style={{ width: '100%', height: 'auto' }} />
            <p className="category-title">Clothing & Rainwear</p>
          </div>
          <div className="col-lg-4 col-md-6 col-6 category">
            <img src={imagehome5} alt="Footwear" style={{ width: '100%', height: 'auto' }} />
            <p className="category-title">Footwear</p>
          </div>
          <div className="col-lg-4 col-md-6 col-6 category">
            <img src={imagehome6} alt="Accessories" style={{ width: '100%', height: 'auto' }} />
            <p className="category-title">Accessories</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
