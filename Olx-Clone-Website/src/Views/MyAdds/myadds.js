import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserAdds } from "../../Config/firebase";
import GoogleMap from "../Addpost/mapLocation";

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
            <GoogleMap/>
        </div>
    )
}

export default MyAdds