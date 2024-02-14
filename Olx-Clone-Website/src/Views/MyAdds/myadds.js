import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserAdds } from "../../Config/firebase";

function MyAdds(){
  const userId = useSelector(state => state.userReducer.user.id)

useEffect(() => {
    userAdds()

},[])

    async function userAdds(){
        const data = await getUserAdds(userId)
        console.log(data);
    }

    return(

        <div>
            <h1>My Adds</h1>
        </div>
    )
}

export default MyAdds