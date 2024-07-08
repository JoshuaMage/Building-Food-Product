  import { useContext } from "react";
  import Logo from "../assets/logo.jpg";
  import Button from "./UI/Button.jsx";
  import CartContext from "./Store/CartContext.jsx";
  import UserProgressContext from "./Store/UserProgressContext.jsx";

  export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
      return totalNumberofItems + item.quantity;
    }, 0);

    function handleShowCart() {
      userProgressCtx.showCart();
    }

    return (
      <header id="main-header">
        <div id="title">
          <img src={Logo} alt="logo" />
          <h1>REACT FOOD</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </header>
    );
  }
