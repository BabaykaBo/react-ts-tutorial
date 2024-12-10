import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartCSS from "./Cart.module.css";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const pizzaCount = state.cart.items.reduce<number>((acc, item) => {
            return acc + item.quantity;
          }, 0);
          return (
            <div className={CartCSS.cartContainer}>
              <button
                className={CartCSS.button}
                type="button"
                onClick={() => {
                  this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
                }}
              >
                <FiShoppingCart />
                <span>
                  {pizzaCount} pizza{pizzaCount > 1 ? "s" : ""}
                </span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{
                  display: this.state.isOpen ? "block" : "none",
                }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;