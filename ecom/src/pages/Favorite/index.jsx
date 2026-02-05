
import { Navbar } from "../../components/Navbar"
import { useCart } from "../../context/cart-context"
import { useNavigate } from "react-router-dom";

import { FavCard } from "../../components/FavCard";
export const Favorite = () => {
    const navigate=useNavigate();
    const { fav } = useCart();
    console.log(fav)
    return (
        <>
            <Navbar></Navbar>
            <main className="flex flex-col gap-8 items-center pt-8 ">
                <h2 className="text-4xl font-bold text-sky-900">My Favorite</h2>
                <div className="flex gap-6">

                    <div>
                        {fav?.length > 0 ? <div className="pt-4 flex flex-col gap-4">
                            {
                                fav?.length > 0 && fav.map(fav => <FavCard key={fav.id} product={fav} />)
                            }
                        </div> : <div>
                            <h2 className="text-2xl">Favorite Empthy</h2>
                            <p className="text-green-800 hover:cursor underline " onClick={() => navigate('/')}>Click to add</p>
                        </div>}
                    </div>



                </div>

            </main>
        </>
    )
}