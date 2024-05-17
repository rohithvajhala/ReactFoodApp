import { useContext } from "react";

import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const total_items = cartCtx.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo}></img>
        <h1>Food order app</h1>
      </div>
      <nav>
        <Button textOnly={true}> cart({total_items}) </Button>
      </nav>
    </header>
  );
}
