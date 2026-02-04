import { useCart } from "../../context/cart-context"
export const CardHo=({product})=>{
  const {cartDispatch}=useCart();
  const onRemoveClick=()=>{
    cartDispatch({
      type:'REMOVE_FROM_CART',
      payload:{id:product.id}
    })
  }
    return(
        <div className="flex w-200 max-w-xl bg-white rounded-lg shadow-md overflow-hidden">

  {/* Image Section */}
  <div className="relative w-1/3 bg-gray-100 flex items-center justify-center">
    <img
      src={product.images[0]}
      alt="shoes"
      className="object-cover h-full w-full"
    />
    <span className="absolute top-3 left-3 bg-cyan-400 text-black text-sm font-medium px-3 py-1 rounded">
      Trending
    </span>
  </div>

  {/* Details Section */}
  <div className="flex flex-col justify-between p-6 w-2/3">

    {/* Title */}
    <div>
      <h2 className="text-2xl font-semibold">{product.title}</h2>
      

      {/* Price */}
      <div className="mt-3 text-lg font-semibold">
        {`Rs.${product.price}`}
      </div>
    </div>

    {/* Quantity */}
    <div className="flex items-center gap-4 mt-4">
      <span className="font-medium">Quantity:</span>

      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
          −
        </button>

        <span className="text-lg font-medium">1</span>

        <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
          +
        </button>
      </div>
    </div>

    {/* Buttons */}
    
<div className="flex gap-4 mt-6">
      <button className="flex items-center justify-center h-10 w-10 rounded-full 
                     bg-sky-900 hover:bg-red-600 text-white transition">
                        <span className="material-icons-outlined text-lg">
                            favorite
                        </span>
                    </button>
      
      <button onClick={()=>onRemoveClick()} className="flex items-center justify-center gap-2 h-10 px-4 
                     bg-sky-900 hover:bg-sky-600 text-white rounded-md 
                     font-medium transition">
        Remove From Cart
      </button>
    </div>
  </div>
</div>

    )
}