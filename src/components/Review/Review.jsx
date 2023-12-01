import { useEffect, useState } from "react";
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import Revieworder from "../Revieworder/Revieworder";
import Cart from "../Cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import giffy from '../../images/giphy.gif';

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

    const goHome= useNavigate();
//Product Quantity on Cart Show
        const getFromDB= getDatabaseCart();
        const productValues= Object.values(getFromDB);
        const totalQuantaty= productValues.reduce((initialpd, addedpd)=>initialpd+addedpd,0);
        // console.log(totalQuantaty);

//For Gif show in Place Order//
const [orderPlaced, setOrderPlaced]= useState(false);
let seeGiffy;
if(orderPlaced){
    seeGiffy= <img style={{width:'50%', margin:'auto', display:'block'}} src={giffy} alt="" />
}
    const handlePlaceOrder=()=>{
        setcartItem([]);
        clearLocalShoppingCart();
        setOrderPlaced(true);
    }
    

    return (
        <>
        { (orderPlaced && seeGiffy) ||
        <div className="shop">
            <div className="shop_left">
                <h3>Product on Cart: {totalQuantaty}</h3>
                {cartItem.map(items=> <Revieworder key={items.key} removeProduct={removeProduct} reviewpd={items}></Revieworder>)}
            </div>
            <div className="shop_right">
                <Cart cartState={cartItem}>
                    <div className='product_right' style={{marginTop:'20px'}}>
                    <Link to=''><button onClick={handlePlaceOrder} style={{padding:'20px'}}>Place Order</button></Link>
                    </div>
                </Cart>
            </div>
        </div>
        }
        <div style={{textAlign:'center'}}>
        <button style={{padding: "10px", marginTop:'30px', color: "cyan" , fontSize: "15px"}} onClick={()=>goHome('/')}>Go Home</button>
        </div>
        
        </>
    );
};

export default Review;