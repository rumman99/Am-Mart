import { useLocation, useNavigate, useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import { useState } from "react";
import Product from "../Product/Product";


const Productinfo = () => {
    const {productkey}= useParams();
    const [productDetails, setProductDetails]= useState(fakeData);
    
    const matchingProduct= productDetails.find(dataProduct => dataProduct.key === productkey);
    
    const goHome= useNavigate();

    return (
        <div style={{textAlign:'center'}}>
            {/* <h1>{productkey} Info</h1> */}
            <h1 style={{color:'green'}}>Your Product Details:</h1>
            <Product showCartButton={false} item={matchingProduct}></Product>
            <button style={{padding: "10px", color: "cyan" , fontSize: "15px"}} onClick={()=>goHome(-1)}>Get Back</button>
        </div>    
    );
};

export default Productinfo;