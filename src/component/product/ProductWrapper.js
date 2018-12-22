import React from 'react';
import { Link } from 'react-router-dom';



const ProductWrapper = (props) => {
    return (
        <div className="productdesign">

            <img src={props.image} alt={props.title} />
            <p>{props.title}</p>
            <Link to={`/shop/${props.uniqueKey}`} className="btn btn-primary" >View</Link>

        </div>
    )
}
export default ProductWrapper;