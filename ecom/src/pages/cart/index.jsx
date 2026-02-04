import { Navbar } from "../../components/Navbar";
import { CardHo } from "../../components/CardHo";
import { useCart } from "../../context/cart-context"
import { PriceComp } from "../../components/PriceComp/indexx";
export const Cart = () => {
    const { cart } = useCart();
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-8 items-center pt-8 ">
                <h2 className="text-3xl">My Cart</h2>
                <div className="flex gap-6">
                    <div className="'pt-4 flex flex-col gap-4">
                        {
                            cart?.length > 0 && cart.map(cart => <CardHo key={cart.id} product={cart} />)
                        }
                    </div>
                    <div>
                        <PriceComp></PriceComp>
                    </div>

                </div>

            </main>

        </>
    )
}