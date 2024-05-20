import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <div>
      <Modal
        open={userProgressCtx.progress === "cart"}
        className="cart"
        onClose={
          userProgressCtx.progress === "cart" ? userProgressCtx.hideCart : null
        }
      >
        <h2>Your cart</h2>
        <ul>
          {cartCtx.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                onIncrease={() => cartCtx.addItem(item)}
                onDecrease={() => cartCtx.removeItem(item.id)}
              ></CartItem>
            );
          })}
        </ul>
        <p className="cart-total"> {currencyFormatter.format(cartTotal)} </p>
        <p className="modal-actions">
          <Button onClick={userProgressCtx.hideCart} textOnly>
            Close
          </Button>
          {cartCtx.items.length > 0 && (
            <Button onClick={userProgressCtx.showCheckout}>
              Go to Checkout
            </Button>
          )}
        </p>
      </Modal>
    </div>
  );
}
