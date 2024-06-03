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
        {!isAllChecked ? cartProducts.map((product) => {
            settotalAmount(totalAmount + product.amount)
            setdeliveryCharges(250)
            // console.log(amount);
        }): allamountZero()
        
    }
    }

    const allamountZero = () => {
        setdeliveryCharges(0)
        settotalAmount(0)
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
                    dispatch(removeCartProducts(cartProducts))
                    setisAllChecked(false)
                    settotalAmount(0)
                    setdeliveryCharges(0)
                }
            });
            
        } else {
            Swal.fire('No Select Product');
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
            <div className="my-2 flex flex-col md:flex-row justify-around">
            <div className="md:w-1/2 lg:w-[60%]">
                {cartProducts.map((products, index) => {
                    return (
                        <div key={index} className="w-full border-2 rounded-md my-2 border-gray-900 h-48 flex justify-between items-center p-2">
                            <input checked={isAllChecked? isAllChecked : checkedItem.includes(index)} onChange={(e) => handleCheckBox(e, index)} type="checkbox" />
                            <img className="w-28 sm:w-32 sm:h-32" src={products.images} />
                            <p className="font-bold text-xl text-blue-600">{products.title}</p>
                            <p className="font-bold text-xl text-orange-500">{products.amount}</p>
                            {!isAllChecked && <i onClick={deleteProduct} class="fa-solid fa-trash text-xl"></i>}
                        </div>
                    )
                })}
            </div>
                {cartProducts.length && <div className="bg-white my-2 h-max border-2 rounded-md border-gray-900 flex flex-col md:w-1/3 justify-center items-center p-2">
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
                    <button className="w-full text-white rounded-md p-2 bg-orange-600">Proceed to check Out ({isAllChecked? cartProducts.length : checkedItem.length})</button>
                </span>
            </div>}
            </div>
        </div>
    )
}

export default Cart