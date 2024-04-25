import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Components/Navbar/navbar";
import { useState } from "react";
import { setcart, removeAllCart, removeCartProducts } from "../../Store/cartSlice";

function Cart() {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cartReducer.cart)
    const [checkedItem, setcheckedItem] = useState([])
    const [isAllChecked, setisAllChecked] = useState(false)
    const [isSingleChecked, setisSingleChecked] = useState()
    const [deleteIndex, setdeleteIndex] = useState(null)
    const [quantity, setquantity] = useState(0)
    console.log('cartProducts',cartProducts);

    const handleCheckAllBox = () => {
        setisAllChecked(!isAllChecked);
    }

    const handleCheckBox = (e, index) => {
        setisSingleChecked(e.target.checked)
        const newCheckedItems = [...checkedItem];
        if (newCheckedItems.includes(index)) {
            newCheckedItems.splice(newCheckedItems.indexOf(index), 1);
        } else {
            newCheckedItems.push(index);
        }
        setcheckedItem(newCheckedItems);
        console.log('checkedItem', checkedItem);
    }

    const deleteProduct = () => {
        if (checkedItem.length > 0) {
            dispatch(removeCartProducts(checkedItem))
        } else {
            alert('Empty select')
        }

    }

    const deleteAll = () => {
        if (isAllChecked) {
            dispatch(removeAllCart())
            setisAllChecked(false)
        } else {
            alert('Empty Select')
        }
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-blue-500 font-bold text-2xl my-4">Cart Items</h1>
            {cartProducts.length >= 1 ? <div className="border-2 md:w-2/3 lg:w-2/3 m-auto flex justify-between p-2">
                <span className="flex space-x-4">
                    <input onChange={handleCheckAllBox} checked={isAllChecked} type="checkbox" />
                    <p>Select all</p>
                </span>
                <i onClick={deleteAll} class="fa-solid fa-trash text-xl"></i>
            </div> : <div> <p>No Cart Products</p></div>}
            <div>
                {cartProducts.map((products, index) => {
                    return (
                        <div key={index} className="lg:w-2/3 md:w-2/3 border-2 h-48 flex justify-between items-center p-2 my-2 m-auto">
                            <input checked={checkedItem.includes(index)} onChange={(e) => handleCheckBox(e, index)} type="checkbox" />
                            <img className="w-32 h-32" src={products.images} />
                            <p className="font-bold text-xl text-blue-600">{products.title}</p>
                            <p className="font-bold text-xl text-orange-500">{products.amount}</p>
                            <i onClick={deleteProduct} class="fa-solid fa-trash text-xl"></i>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart