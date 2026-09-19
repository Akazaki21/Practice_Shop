import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";


function Home() {
    const products = getProducts();
  return (
    <div className="page">
      <section className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover amazing products here at great prices
        </p>
      </section>
      <section className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
            {products.map((product) => (
               <ProductCard product={product} key={product.id}/>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
