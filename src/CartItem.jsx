import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="page-container cart-page">
      <header className="section-heading">
        <p className="eyebrow">YOUR PLANTS, YOUR SPACE</p>
        <h1>Shopping Cart</h1>
        <p>
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </header>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon">🪴</div>
          <h2>Your cart is empty</h2>
          <p>Find a beautiful plant to brighten your home.</p>
          <Link className="primary-button" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <>
          <div className="cart-layout">
            <section className="cart-items">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img
                    className="cart-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-product-info">
                    <h3>{item.name}</h3>
                    <p>Unit price: ${item.price.toFixed(2)}</p>

                    <div className="quantity-controls">
                      <button
                        className="quantity-button"
                        aria-label={`Decrease ${item.name} quantity`}
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="quantity-button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      Remove item
                    </button>
                  </div>

                  <div className="cart-line-total">
                    <span>Item total</span>
                    <strong>
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </div>
                </article>
              ))}
            </section>

            <aside className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>Total items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-line">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>

              <button
                className="primary-button checkout-button"
                onClick={() => window.alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>

              <Link
                className="secondary-button continue-button"
                to="/plants"
              >
                Continue Shopping
              </Link>

              <button
                className="clear-cart-button"
                onClick={() => dispatch(clearCart())}
              >
                Clear entire cart
              </button>
            </aside>
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
