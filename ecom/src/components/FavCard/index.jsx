import { useNavigate } from "react-router-dom";
import { findProductInFav } from "../../utils/finsProductInFav";
import { findProductInCart } from "../../utils/findProductInCart";
import { useCart } from "../../context/cart-context";

export const FavCard = ({ product }) => {
  const { cart, fav, cartDispatch } = useCart();
  const navigate = useNavigate();

  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInFav = findProductInFav(fav, product.id);

  const onFavClick = (product) => {
    isProductInFav
      ? cartDispatch({
          type: "REMOVE_FROM_FAV",
          payload: { id: product.id },
        })
      : cartDispatch({
          type: "ADD_TO_FAV",
          payload: { product },
        });
  };

  const onCartClick = (product) => {
    !isProductInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : navigate("/cart");
  };

  return (
    <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden 
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-3">

        <h2 className="text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="text-lg font-bold text-black">
          Rs. {product.price}
        </div>

        <div className="flex items-center gap-3">

          {/* Fav */}
          <button
            onClick={() => onFavClick(product)}
            className={`flex items-center justify-center h-10 w-10 rounded-full transition
              ${isProductInFav
                ? "bg-red-500 text-white"
                : "bg-sky-900 hover:bg-red-600 text-white"
              }`}
          >
            <span className="material-icons-outlined text-lg">favorite</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => onCartClick(product)}
            className="flex items-center justify-center gap-2 h-10 px-4 
              bg-sky-900 hover:bg-sky-600 text-white rounded-md font-medium transition"
          >
            <span className="material-icons-outlined text-lg">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go To Cart" : "Add to cart"}
          </button>

        </div>
      </div>
    </div>
  );
};
