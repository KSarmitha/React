import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const selector = useSelector((state) => state.cartState.cardItems);
    const dispatch = useDispatch();
    
    const clearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="flex items-center justify-center flex-col mb-3">
            <div className="text-xl font-bld my-3"> Selected Countries to vist </div>
            <button onClick={ () => { clearCart() }}>Clear</button>
           { selector.map((item, index) => (
                <div key={index} className="border-b-2 border-blue-50 border-dotted p-4">
                <div className='flex justify-between cursor-pointer'>
                    <div className='font-bold'> {item?.name?.common} </div>
                </div>

                <div className="border-t-2 border-gray-800 mt-1">
                    <span className='flex text-sm py-1'>
                        <img src={item?.flags?.png}></img>
                    </span> 
                </div>
                </div>
            )
            )}
        </div>
    )
}

export default Cart;