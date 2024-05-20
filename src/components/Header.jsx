import { useContext } from "react";

import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const total_items = cartCtx.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo}></img>
        <h1>Food order app</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly={true}>
          {" "}
          cart({total_items}){" "}
        </Button>
      </nav>
    </header>
  );
}
