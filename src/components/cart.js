import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";
import pict from "./mtcart.png";
import Navbar from "./Navbar"
import { Link } from "react-router-dom";
const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }
    useEffect(()=>{
        handlePrice();
    })
  return (
    <>
    <div className='bg'> 
      <div className='overlay'>
         <div className="yourcart">
             Your cart ({cart.length} items)
         </div>
         {cart.length>0?
         (
           <>
            <article>
              { 
                cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                   <div className="cart_img">
                      <img src={item.img} />
                      <p>{item.title}</p>
                   </div>
                   <div >
                       <button onClick={()=>handleChange(item, +1)}> + </button>
                       <button> {item.amount}</button>
                       <button onClick={()=>handleChange(item, -1)}> - </button>
                   </div>
                   <div>
                       <span> Rs {item.price}</span>
                       <button onClick={()=>handleRemove(item.id)} >Remove</button>
                   </div>
                </div>
                ))
              }
              <div className='total'>
                 <span><br></br> Total Price of your Cart</span>
                 <span><br></br>Rs. {price}</span>
              </div>
              <Link to="pay"><button className='payment'> Proceed to payment  </button></Link>
            </article>
          </>
         ):
         (
           <> 
              <div>
                <img src={pict} className="mtcartimg"></img>
                <br></br>
                <br></br>
                <h2 className="emptycart">
                   Your cart is Empty
                </h2>
                <h6 className="emptycart2">
                    Looks like you haven't added anything to your cart yet
                </h6>
                <Link to="back"><button className="continueshopping">Continue shopping</button></Link>
              </div>
           </>
          )}
       </div>
    </div>
    </>
  )
}
export default Cart