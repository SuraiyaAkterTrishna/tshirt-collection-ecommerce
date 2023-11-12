/* eslint-disable react/jsx-key */


const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products..</p>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving you money</small></p>
        </div>
    }
    return (
        <div>
            <h1>Order Summery: {cart.length}</h1>
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} 
                    <button 
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
        </div>
    );
};

export default Cart;