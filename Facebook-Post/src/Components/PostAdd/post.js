import { useEffect, useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import profileImage from '../../Images/profile.jpg'
import './post.css'


function PostAdd() {
    const [isHovered, setIsHovered] = useState(false);
    const [countperson , setcountperson] = useState(35)
    const [react , setreact] = useState(true)

    const handleHover = () => {
        setTimeout(()=>{
        setIsHovered(true);

        },1000)
    };
    const handleLeave = () => {
        setIsHovered(false);
        setreact(false)
        setcountperson(countperson + 1)
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

    if (!list.length) {
        return 
        <div>
            <img src='https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif'/>
        </div>
    }
    return (
        <div className='post'>
            {list.map(function (item) {
                return <div className="hero">

                    <span>
                        <img src={profileImage} alt='img' />
                        <h1>{item.title}</h1>
                    </span>
                    <div className='inner'>
                        <p className="desc">{item.description}</p>
                        <div className="gallery">{item.images && <FbImageLibrary images={item.images} />}</div>
                        <div className='reactIcons'>{!react && <i class="fa-solid fa-thumbs-up"></i>}<i class="fa-solid fa-heart"></i><p>{!react && 'You, '}Salman Ali and {countperson} others</p>35<i class="fa-regular fa-comment"></i>25<i class="fa-solid fa-share"></i></div>
                        
                        {isHovered && (<div className='emojis-container'>
                            <div className='emojis' onClick={handleLeave}>
                            <img src='https://media.tenor.com/_e4JAx0iHS0AAAAj/facebook-emoji.gif' style={{padding : "11px"}}/>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/65ea2034559659.56d57de06cea2.gif'/>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35c9bf34559659.56d57de0eb467.gif'/>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif'/>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eee1d34559659.56d59de621daa.gif'/>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e66e6e34559659.56d57de095aee.gif'/>
                            
                            </div>
                        </div>
                        )}
                        <div className="hero-main"><span onMouseEnter={handleHover}> <i class="fa-regular fa-thumbs-up"></i>Like</span><span> <i class="fa-regular fa-comment"></i>Comment</span><span> <i class="fa-solid fa-share"></i>Share</span></div>

                     

                    </div>
                </div>
            })}
        </div>
    )
}

export default PostAdd
