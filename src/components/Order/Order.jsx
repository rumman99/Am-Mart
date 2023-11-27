import { useLocation, useNavigate } from "react-router-dom";
import Product from "../Product/Product";

const Order = () => {
    const goHome = useNavigate();
    const location= useLocation();
    // console.log(location);
    // console.log(location.state.name);
    const item= location.state;
    const res= item.map(x => x);
    console.log(res)
    return (
        <div style={{textAlign:'center'}}>
            <h1>Your Order</h1>
            <div style={{pointerEvents: "none"}}>{res.map(x=> <Product  item={x}></Product>)}</div>
            <button style={{padding: "10px", color: "cyan" , fontSize: "15px"}} onClick={()=>goHome('/')}>Go Home</button>
        </div>
    );
};

export default Order;