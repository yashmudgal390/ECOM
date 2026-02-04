import { Navbar } from "../../components/Navbar";
import { CardHo } from "../../components/CardHo";
import { useCart } from "../../context/cart-context"
import { PriceComp } from "../../components/PriceComp/indexx";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
    const { cart } = useCart();
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-8 items-center pt-8 ">
                <h2 className="text-4xl font-bold text-sky-900">My Cart</h2>
                <div className="flex gap-6">
                    <div className="'pt-4 flex flex-col gap-4">
                        {
                            cart?.length > 0 && cart.map(cart => <CardHo key={cart.id} product={cart} />)
                        }
                    </div>
                   
                    <div>
                    {cart?.length >0 ?   <PriceComp></PriceComp>:<div>
                        <h2 className="text-2xl">Cart Empthy</h2>
                        <p className="text-green-800 hover:cursor underline "  onClick={()=>navigate('/')}>Click to add to cart </p>
                        </div>}
                    </div>

                </div>

            </main>

        </>
    )
}