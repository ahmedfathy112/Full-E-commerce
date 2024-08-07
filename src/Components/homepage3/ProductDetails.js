
// import './ProductDetails.css'

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function ProductDetails() {
//   const { productId } = useParams();  
//   const [details, setDetails] = useState(null);  
//   const navigate = useNavigate(); 

//   const goBack = () => {
//     navigate(-1);
//   };

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${productId}`)
//       .then(response => response.json())
//       .then(data => setDetails(data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [productId]);

//   if (!details) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container my-5 ProductDetails">
//       <div className="card">
//         <img 
//           src={details.image} 
//           className="card-img-top" 
//           alt={details.title} 
//         />
//         <div className="card-body">
//           <h5 className="card-title">{details.title}</h5>
//           <p className="card-text">{details.description.slice(0, 20)}</p>
//           <p className="card-text"><strong>Price:</strong> ${details.price}</p>
//           <button className="btn btn-primary" onClick={goBack}>Go Back</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
