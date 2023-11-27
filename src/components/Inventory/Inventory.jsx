import { useNavigate } from "react-router-dom";


const Inventory = () => {
    const goHome = useNavigate()
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:'red'}}>Developer is DEAD!!!</h1>
            <button style={{padding: "10px", color: "cyan" , fontSize: "15px"}} onClick={()=>goHome('/')}>Go Home</button>
        </div>
    );
};

export default Inventory;