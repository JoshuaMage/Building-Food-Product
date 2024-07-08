import Header from "./components/Header.jsx";
import Meals from "./components/UI/Meals.jsx";
import { CartContextProvider } from "./components/Store/CartContext.jsx";
import { UserProgressContextProvider } from "./components/Store/UserProgressContext.jsx";
import Cart from "./components/UI/Cart.jsx";
import Checkout from "./components/UI/CheckOut.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
