import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceComp = () => {
    const { cart } = useCart();
    const totalCartAmount=getTotalCartAmount(cart);

    return (
        <div className="w-[350px] bg-white rounded-lg shadow-lg p-5 sticky top-24">

            {/* Header */}
            <h2 className="text-2xl font-semibold text-sky-900 border-b pb-3">
                Price Details
            </h2>

            {/* Price breakdown */}
            <div className="flex flex-col gap-4 mt-4 text-gray-700">

                <div className="flex items-center">
                    <p>Price ({cart.length} items)</p>
                    <p className="ml-auto font-medium">Rs. {totalCartAmount}</p>
                </div>

                <div className="flex items-center">
                    <p>Delivery Charges</p>
                    <p className="ml-auto text-green-600 font-medium">
                        FREE
                    </p>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t my-4"></div>

            {/* Total */}
            <div className="flex items-center text-lg font-semibold text-gray-900">
                <p>Total Amount</p>
                <p className="ml-auto">Rs. {totalCartAmount}</p>
            </div>

            {/* Savings */}
            <p className="text-sm text-green-600 mt-1">
                You will save Rs. 99 on this order 🎉
            </p>

            {/* CTA */}
            <button
                className="w-full mt-5 flex items-center justify-center gap-2 h-11 
                bg-sky-900 hover:bg-sky-700 text-white rounded-md 
                font-semibold tracking-wide transition"
            >
                Place Order
            </button>
        </div>
    );
};
