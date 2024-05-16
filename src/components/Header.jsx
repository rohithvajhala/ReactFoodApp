import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo}></img>
        <h1>Food order app</h1>
      </div>
      <nav>
        <Button textOnly={true}> cart(0) </Button>
      </nav>
    </header>
  );
}
