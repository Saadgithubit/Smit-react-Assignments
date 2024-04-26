import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Swal from 'sweetalert2'

import Navbar from "../../Components/Navbar/navbar";
import { setcart, removeAllCart, removeCartProducts } from "../../Store/cartSlice";

function Cart() {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cartReducer.cart)
    const [checkedItem, setcheckedItem] = useState([])
    const [isAllChecked, setisAllChecked] = useState(false)
    const [totalAmount, settotalAmount] = useState(0)
    const [deliveryCharges, setdeliveryCharges] = useState(0)
    const [isSingleChecked, setisSingleChecked] = useState()
    const [deleteIndex, setdeleteIndex] = useState(null)
    const [quantity, setquantity] = useState(0)
    console.log(cartProducts);
    const handleCheckAllBox = () => {
        setisAllChecked(!isAllChecked);
    }

    const handleCheckBox = (e, index) => {
        setisSingleChecked(e.target.checked)
        settotalAmount(totalAmount + cartProducts[index].amount)
        setdeliveryCharges(150)
        if (e.target.checked === false) {
            settotalAmount(totalAmount - cartProducts[index].amount)
            setdeliveryCharges(0)
        }
        console.log('totalAmount', totalAmount);
        const newCheckedItems = [...checkedItem];
        if (newCheckedItems.includes(index)) {
            newCheckedItems.splice(newCheckedItems.indexOf(index), 1);
        } else {
            newCheckedItems.push(index);
        }
        setcheckedItem(newCheckedItems);
    }

    const deleteProduct = () => {

        if (checkedItem.length > 0) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    dispatch(removeCartProducts(checkedItem))

                }
            });
        } else {
            Swal.fire("Empty Select");
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
            <div className="fixed bottom-2 right-2 bg-white border-2 flex flex-col w-1/3 justify-center items-center p-2">
                <h1 className="font-bold text-xl h-10 border-b-2 w-full flex items-center justify-center">Order Summary</h1>
                <span className="flex space-x-3 w-full p-2">
                    <p className="font-bold">Subtotal ({checkedItem.length} Items)</p>
                    <p>{totalAmount}</p>
                </span>
                <span className="flex space-x-3 w-full p-2">
                    <p className="font-bold">Delivery Charges</p>
                    <p>{deliveryCharges}</p>
                </span>
                <span className="flex space-x-3 w-full p-2">
                    <p className="font-bold">Total</p>
                    <p>{totalAmount + deliveryCharges}</p>
                </span>
                <span className="w-full">
                    <button className="w-full text-white rounded-md p-2 bg-orange-600">Proceed to check Out ({checkedItem.length})</button>
                </span>
            </div>
        </div>
    )
}

export default Cart