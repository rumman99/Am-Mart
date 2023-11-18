import { useState } from 'react'
import fakeData from '../../fakeData'
import './shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const first10= fakeData.slice(0,10);
    const [product, setProduct] = useState(first10)
    console.log(product);

    return (
        <div className='shop'>
            <div className='shop_left'>
            {product.map(allItem => <Product item={allItem}></Product>)}
            </div>
            <div className='shop_right'>
            <h2>Cart</h2>
            </div>
        </div>
    );
};

export default Shop;