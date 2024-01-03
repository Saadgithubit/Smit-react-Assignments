import { useEffect, useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import './post.css'


function PostAdd() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
    setIsHovered(true);
    };
    const handleLeave = () => {
    setIsHovered(false);
    };
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

    if (!list) {
        return <div>Loading.....</div>
    }
    return (
        <div className='post'>
            {list.map(function (item) {
                return <div className="hero">

                    <span>
                        <img src='https://scontent.fkhi26-1.fna.fbcdn.net/v/t39.30808-6/350122727_651795906811177_8261425612303589357_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFCAfKtWf_okSf9b_TyVUTxg9RPnp4t1DWD1E-eni3UNZw5KugdxNVVtApcn0pRD7HYH6p1puWjN4bM2bapPDXo&_nc_ohc=YhggrS9XmJ4AX8v64N_&_nc_ht=scontent.fkhi26-1.fna&oh=00_AfCKm0UCfxnwF0YRp9RyQgA_bjSaV9EBL0W-lcelH3ZDMg&oe=659AC1F6' />
                        <h1>{item.title}</h1>
                    </span>
                    <div className='inner'>
                        <p className="desc">{item.description}</p>
                        <div className="gallery">{item.images && <FbImageLibrary images={item.images} />}</div>
                        <div className='reactIcons'><i class="fa-solid fa-thumbs-up"></i><i class="fa-solid fa-heart"></i><p>1.5k</p>35<i class="fa-regular fa-comment"></i>25<i class="fa-solid fa-share"></i></div>
                        <div className="hero-main"> <i class="fa-regular fa-thumbs-up" onMouseEnter={handleHover} onMouseLeave={handleLeave}> </i> <i class="fa-regular fa-comment"></i> <i class="fa-solid fa-share"></i></div>
                        {isHovered && (
                            <div className="emoji-container">
                                <span role="img" aria-label="Love">
                                    ❤️
                                </span>
                                <span role="img" aria-label="Haha">
                                    😄
                                </span>
                                <span role="img" aria-label="Wow">
                                    😮
                                </span>
                                <span role="img" aria-label="Sad">
                                    😢
                                </span>
                                <span role="img" aria-label="Angry">
                                    😡
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            })}
        </div>
    )
}

export default PostAdd
