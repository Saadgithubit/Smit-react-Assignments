import Footer from "../../Components/Footer/footer"
import Categories from "../../Components/Categories/categories"
import Cards from "../../Components/Cards/cards"
import { useState } from "react"
function Dashboard() {

//  const [fetchData, setfetchData] = useState([])

//   async function cardData(products){
//        const data = await products
//         setfetchData(data)
//         console.log('products --->',fetchData);


//     }

    // if (!fetchData.length) {
    //     return <div className='w-3/6 m-auto'>
    //         <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
    //             width="50%" alt="" />
    //     </div>
    // }

    return (
        <div>
            <Categories/>
            <Cards/>
            <Footer/>

        </div>
    )
}

export default Dashboard