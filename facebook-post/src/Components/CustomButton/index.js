import './index.css'
import { useState } from 'react';
function Custombtn(){
    // return <button className="btn" onClick={()=>alert('Hi Muneeb')} style={{backgroundColor:props.bgcolor}}>
    //     {props.text}
    // </button>
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
    setIsHovered(true);
    };
    const handleLeave = () => {
    setIsHovered(false);
    };
    return (
    <div className="like-button" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <span role="img" aria-label="Like">
        👍
        </span>
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
    );
}
export default Custombtn