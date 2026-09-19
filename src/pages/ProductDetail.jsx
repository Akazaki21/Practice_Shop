import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
    }
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `{${productInCart.quantity}}`
    : "";
  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <div className="product-detail-name">{product.name}</div>
            <div className="product-detail-price">{product.price}</div>
            <div className="product-detail-description">
              {product.description}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
