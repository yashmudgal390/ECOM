import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInFav } from "../../utils/finsProductInFav";

export const ProductCard = ({ product }) => {
    const { cart, fav, cartDispatch } = useCart();

    const isProductInCart = findProductInCart(cart, product.id);
    const isProductInFav = findProductInFav(fav, product.id);
    const navigate = useNavigate();

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
        !isProductInCart ?

            cartDispatch({

                type: 'ADD_TO_CART',
                payload: { product }
            }) : navigate('/cart')
    }

    return (
        <div className=" w-72 bg-white roundedbg-sky-900 shadow- overflow-hidden border hover:shadow-2xl 
                transition-shadow duration-300 ease-in-out hover:-translate-y-1">

            {/* Image */}
            <div className="h-55 w-full overflow-hidden">
                <img
                    src={product.images[0]}
                    alt="shoes"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">

                <h2 className="text-lg font-semibold">
                    {product.title}
                </h2>



                {/* Price */}
                <div className="text-lg font-medium">
                    <span className="gfont-bold text-black">
                        {`Rs.${product.price}`}
                    </span>

                </div>

                {/* Button */}
                <div className="flex items-center justify-center gap-3 mt-3">

                    {/* Wishlist */}
                    <button
                        onClick={() => onFavClick(product)}
                        className={`flex items-center justify-center h-10 w-10 rounded-full transition
                        ${isProductInFav
                                ? "bg-red-500 text-white"
                                : "bg-sky-900 hover:bg-red-600 text-white"
                            }`}
                    >
                        <span className="material-icons-outlined text-lg">
                            favorite
                        </span>
                    </button>

                    {/* Add to Cart */}
                    <button onClick={() => onCartClick(product)} className="flex items-center justify-center gap-2 h-10 px-4 
                     bg-sky-900 hover:bg-sky-600 text-white rounded-md 
                     font-medium transition">

                        <span className="material-icons-outlined text-lg">
                            {
                                isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'
                            }
                        </span>
                        {isProductInCart ? 'Go To Cart' : 'Add to cart'}
                    </button>

                </div>

            </div>
        </div>
    );
};
