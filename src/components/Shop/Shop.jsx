import { useState } from 'react'
import fakeData from '../../fakeData'
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
    }

    return (
        <div className='shop'>
            <div className='shop_left'>
            {product.map(allItem => <Product addCartButton={addCartButton} item={allItem}></Product>)}
            </div>
            <div className='shop_right'>
            <Cart cartState={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;