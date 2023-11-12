/* eslint-disable react/jsx-key */
import './Cart.css';

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
            <h1 className={cart.length === 1 ? 'blue' : 'red'}>Order Summery: {cart.length}</h1>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} 
                    <button 
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza</p>
            }
            {
                cart.length === 3 || <p>Tinta tow hoilo na</p>
            }
        </div>
    );
};

export default Cart;