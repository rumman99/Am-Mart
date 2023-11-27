

const Revieworder = (props) => {
    const {name, quantity}= props.reviewpd;
    return (
        <div>
            <h4 style={{color:'blue'}}>{name}</h4>
            <h4>Quentity: {quantity}</h4>
            <div className="product_right">
            <button >Remove Product</button>
            </div>
        </div>
    );
};

export default Revieworder;