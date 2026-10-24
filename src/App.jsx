import { Link, NavLink, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart">
          🛒 Cart ({cartCount})
        </NavLink>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-content">
        <p className="eyebrow">GROW SOMETHING BEAUTIFUL</p>
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Into Your Home</h2>

        <p>
          Discover beautiful houseplants to brighten your
          space and bring a little more green into your life.
        </p>

        <div className="landing-actions">
          <Link className="primary-button" to="/plants">
            Get Started
          </Link>

          <Link className="secondary-button" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Paradise Nursery. Grow happy, live green.</p>
      </footer>
    </>
  );
}

export default App;
