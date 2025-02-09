import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "ahjahss",
    photo:
      "https://m.media-amazon.com/images/I/31ilq3hPhEL._SY445_SX342_QL70_FMwebp_.jpg",
    name: "macbook",
    price: 3000,
    quantity: 2,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isValidCoupon, setisValidCoupon] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCoupon(true);
      else setisValidCoupon(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setisValidCoupon(false);
    };
  }, [coupon]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? cartItems.map((i, idx) => (
          <CartItem key={idx} cartItem={i}/>
        )): <h1>No Items Added</h1>}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon"
        />

        {coupon &&
          (isValidCoupon ? (
            <span className="green">
              ₹{discount} off using the <code>{coupon}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}


          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  );
};

export default Cart;
