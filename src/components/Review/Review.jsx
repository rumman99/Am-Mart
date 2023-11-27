import { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Revieworder from "../Revieworder/Revieworder";

const Review = () => {
    // get from Local Storage
    const [cartItem, setcartItem]= useState([]);

    useEffect(()=>{
        const saveOrder= getDatabaseCart();
        const productkey= Object.keys(saveOrder)

        const findProduct= productkey.map(keys => {
            const matchProduct= fakeData.find(pd => pd.key===keys);
            matchProduct.quantity= saveOrder[keys];
            return matchProduct;
        });
        setcartItem(findProduct);
    },[])
    console.log(cartItem);
    let counter=1;
    return (
        <div>
            <h3>Product on Cart: {cartItem.length}</h3>
            
            {cartItem.map(items=> <Revieworder reviewpd={items}></Revieworder>)}
        </div>
    );
};

export default Review;