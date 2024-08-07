import 'bootstrap/dist/css/bootstrap.min.css';
import './Navhome.css';
import image1 from '../images/Paste_image__1_-removebg-preview.png'; // تأكد من صحة المسار

function Navhome() {
    return (
        <section className="bg-dark text-white py-5 vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                        <h1 className="display-3">More than <br/> just a game <br/> It’s a lifestyle</h1>
                        <p className="lead">
                            Whether you’re just starting out, have played <br/> your whole life or you're <br/> a Tour pro, your swing is like a fingerprint.
                        </p>
                        <a href="#" className="btn btn-success btn-lg">Shopping Now</a>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={image1} alt="Golf Image" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navhome;
