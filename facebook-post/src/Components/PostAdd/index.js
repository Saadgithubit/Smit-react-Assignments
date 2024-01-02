import { useEffect, useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import'./index.css'
import Custombtn from "../CustomButton";


function PostAdd() {
    const [list, setlist] = useState([])
    useEffect(function () {
        getDataFromApi()
    }, [])
    function getDataFromApi() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                setlist(res.products)
                console.log(list);
            })
    }
return (
    <div className='post'>
    {list.map(function(item){
      return <div className="hero">
      <h1>{item.title}</h1>
      <h4>{item.category}</h4>
      <p className="desc">{item.description}</p>
      <div className="gallery">{item.images && <FbImageLibrary images={item.images} />}</div>
      <div className="hero-main"><i class="fa-regular fa-thumbs-up"></i> <i class="fa-regular fa-comment"></i> <i class="fa-solid fa-share"></i></div>
      
      </div>
    })}
   </div>
)
}

export default PostAdd