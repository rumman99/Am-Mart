import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price, seller, stock}= props.item;
    console.log(props.item)
    return (
        <div className='product'>
            <div className='product_left'>
                <img src={img} alt="" />
            </div>
            <div className='product_right'>
                <h1>Name: {name}</h1>
                <p>Seller: {seller}</p>
                <h3>Price: ${price}</h3>
                <p>Only {stock} left in Stock -Order Soon</p>
                <button><FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;