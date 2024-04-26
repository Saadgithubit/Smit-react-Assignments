import { useState, useEffect } from "react"
import Swal from 'sweetalert2'

function MyAdds() {
    const [products, setproducts] = useState([])

    useEffect(() => {
        getMyAdds()
    }, [])

    const getMyAdds = () => {
        fetch('https://repulsive-turtleneck-shirt-ant.cyclic.app/ads/')
            .then(res => res.json())
            .then(res => 
                {setproducts(res.data)
            console.log('MyAdds Products -->',products);
            })

    }

    const deleteAdd = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://repulsive-turtleneck-shirt-ant.cyclic.app/ads/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }   
                })
                .then(res => res.json())
                .then(res => {
                    Swal.fire({
                        title: "Deleted!",
                        text: res.message,
                        icon: "success"
                      });
                })
                .catch(err => console.error(err));
              
            }
          });

       
    }

    if (!products.length) {
        return <div>Loading ......</div>
    }
    return (
        <div>
            <p className="text-3xl border-b-2 mb-3 p-2 text-blue-500 font-bold">My Adds</p>
            {products.map((product) => {
                const { _id } = product
                return (
                    <div className="border-2 my-2 flex justify-around items-center">
                        <img className="w-32" src={product.images} />
                        <p>{product.title}</p>
                        <button className="w-24 h-15 rounded-md bg-gray-400 border-2 p-2">Edit</button>
                        <button onClick={() => deleteAdd(_id)} className="w-24 h-15 rounded-md bg-gray-400 border-2 p-2">Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default MyAdds