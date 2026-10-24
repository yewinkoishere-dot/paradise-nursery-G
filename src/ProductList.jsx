import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=600&q=80",
    description: "A hardy plant with upright leaves, ideal for beginners.",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "Elegant green leaves with beautiful white flowers.",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 18,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
    description: "An easy-care plant with graceful arching leaves.",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 35,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1597055181300-e3633a917d5b?auto=format&fit=crop&w=600&q=80",
    description: "A tropical palm that adds a fresh, airy feel.",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 32,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "Glossy leaves make this a striking indoor plant.",
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 22,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80",
    description: "A lush fern with soft, cascading fronds.",
  },
  {
    id: 7,
    name: "Monstera",
    price: 40,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "Distinctive split leaves create a tropical statement.",
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    price: 55,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    description: "Large sculptural leaves suit modern interiors.",
  },
  {
    id: 9,
    name: "Calathea",
    price: 28,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1597055181300-e3633a917d5b?auto=format&fit=crop&w=600&q=80",
    description: "Patterned foliage adds color and texture.",
  },
  {
    id: 10,
    name: "Chinese Money Plant",
    price: 24,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description: "Round leaves give this plant a distinctive look.",
  },
  {
    id: 11,
    name: "Bird of Paradise",
    price: 60,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A bold tropical plant for spacious rooms.",
  },
  {
    id: 12,
    name: "Dracaena",
    price: 34,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "Upright foliage brings structure to a room.",
  },
  {
    id: 13,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A sun-loving succulent with fleshy green leaves.",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 12,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A compact rosette succulent for sunny windowsills.",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 20,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description: "A popular succulent with thick, rounded leaves.",
  },
  {
    id: 16,
    name: "Golden Barrel Cactus",
    price: 19,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A sculptural cactus that prefers bright light.",
  },
  {
    id: 17,
    name: "Haworthia",
    price: 14,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A small succulent suited to desks and shelves.",
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 26,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "Trailing bead-like leaves create a unique display.",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    "Air-Purifying Plants",
    "Decorative Plants",
    "Succulents and Cacti",
  ];

  return (
    <main className="page-container">
      <header className="section-heading">
        <p className="eyebrow">FIND YOUR PERFECT PLANT</p>
        <h1>Our Houseplants</h1>
        <p>
          Discover the perfect green companion for every corner
          of your home.
        </p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      className="plant-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <div className="plant-details">
                      <h3>{plant.name}</h3>
                      <p className="plant-description">
                        {plant.description}
                      </p>
                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="primary-button add-button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded ? "Added to Cart ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
