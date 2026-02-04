import { useCart } from "../../context/cart-context"
export const PriceComp = () => {
    const { cart } = useCart();

    return (
        <div className="w-[350px] bg-white p-4 ">
            <p className="text-2xl txt-sky-900 border-b">Price Details</p>
            <div className="flex flex-col gap-5"><div className="flex ">
                <p>Price({cart.length}) items</p>
                <p className="ml-auto">Rs. 7</p>
            </div><div className="flex border-b">
                <p>Delivery Charge</p>
                <p className="ml-auto ">Rs. 7</p>
            </div>
            </div>
            <div className="flex border-b">
                <p>Total Amount</p>
                <p className="ml-auto">Rs. 407</p>
            </div>
            <div>
                <button className="flex items-center justify-center gap-2 h-10 px-4 
                     bg-sky-900 hover:bg-sky-600 text-white rounded-md 
                     font-medium transition">
        Place Order
      </button>
            </div>
        </div>
    )
}