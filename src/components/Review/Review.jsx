import { useEffect, useState } from "react";
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import Revieworder from "../Revieworder/Revieworder";

const Review = () => {
    // get from Local Storage
    const [cartItem, setcartItem]= useState([]);

    useEffect(()=>{
        const saveOrder= getDatabaseCart();
        const productkey= Object.keys(saveOrder)

        const findProduct= productkey.map(keys => {
            const matchProduct= fakeData.find(pd => pd.key===keys);
            matchProduct.quantity= saveOrder[keys]; //Added Value by asking key of an array
            return matchProduct;
        });
        setcartItem(findProduct);
    },[])

    const removeProduct= (pdkey)=>{
        const removeFromCart= cartItem.filter(pd=> pd.key !== pdkey);
        setcartItem(removeFromCart);
        removeFromDatabaseCart(pdkey);
    }

    return (
        <div>
            <h3>Product on Cart: {cartItem.length}</h3>
            
            {cartItem.map(items=> <Revieworder removeProduct={removeProduct} reviewpd={items}></Revieworder>)}
        </div>
    );
};

export default Review;