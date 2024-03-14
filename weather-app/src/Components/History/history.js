import { useEffect, useState } from "react";

function History(props) {
    const { history } = props
    const [searchHistory,setsearchHistory] = useState([])

    useEffect(()=>{
      setsearchHistory(history)
    },[])
    console.log('history --> ', history);
    return (
        <div style ={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
            {searchHistory.map((item) =>{
                return(
                    <div style={{display:'flex',}}>
                        <h3>{item.Name}</h3>
                        <h3>{item.Temp}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default History