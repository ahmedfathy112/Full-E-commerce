import './Shop.css';
import imagehome1 from '../images/istockphoto-1293366109-612x612.jpg';
import imagehome2 from '../images/istockphoto-1293366109-612x612.jpg';
import imagehome3 from '../images/istockphoto-1293366109-612x612.jpg';
import imagehome10 from '../images/img (10).png';
import imagehome5 from '../images/img (8).png';
import imagehome6 from '../images/img (9).png';

function Shop() {
    return (
        <>
            <div className="container my-5 Shop">
                <h2 className="text-center mb-4">Shop Collection</h2>
                <div className="row shop-collection">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <img src={imagehome1} className="card-img-top img1" alt="Juniors Set" />
                            <div className="card-body">
                                <h5 className="card-title">Juniors Set</h5>
                                <a href="#" className="card-text">Collections &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="card">
                                    <img src={imagehome1} className="card-img-top img2" alt="Men's Set" />
                                    <div className="card-body">
                                        <h5 className="card-title">Men's Set</h5>
                                        <a href="#" className="card-text">Collections &rarr;</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <img src={imagehome1} className="card-img-top img2" alt="Women's Set" />
                                    <div className="card-body">
                                        <h5 className="card-title">Women's Set</h5>
                                        <a href="#" className="card-text">Collections &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-center my-4 Latest ">Latest Articles</h2>
                <div className="row latest-articles">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={imagehome10} className="card-img-top" alt="Article 1" />
                            <div className="card-body">
                                <h5 className="card-title">Air Jordan x Travis Scott Event</h5>
                                <a href="#" className="card-text">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={imagehome5} className="card-img-top" alt="Article 2" />
                            <div className="card-body">
                                <h5 className="card-title">The timeless classics on the green</h5>
                                <a href="#" className="card-text">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={imagehome6} className="card-img-top" alt="Article 3" />
                            <div className="card-body">
                                <h5 className="card-title">The 2023 Ryder Cup</h5>
                                <a href="#" className="card-text">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
