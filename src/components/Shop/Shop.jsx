import { useState } from 'react'
import fakeData from '../../fakeData'
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
// Product State
    const first10= fakeData.slice(0,10);
    const [product, setProduct] = useState(first10)

// Cart State
    const [cart, setCart] =useState([]);

    const addCartButton= (pd)=>{
        let addedProduct = [...cart, pd]
        setCart(addedProduct);
        document.getElementById('added').style.color='green';
        document.getElementById('total').style.color='red';

        // Local Storage:
        const sameProductCount= addedProduct.filter(addpd=> addpd.key === pd.key);
        const counter= sameProductCount.length; 
        addToDatabaseCart(pd.key, counter);
    }

    return (
        <div className='shop'>
            <div className='shop_left'>
            {product.map(allItem => <Product key={allItem.key} addCartButton={addCartButton} item={allItem} showCartButton={true}></Product>)}
            </div>
            <div className='shop_right'>
            <Cart cartState={cart}></Cart>
            <Link to='/order' state={cart}><button>Order</button></Link>
            </div>
        </div>
    );
};

export default Shop;