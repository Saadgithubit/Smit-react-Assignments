import { useEffect } from "react";
import { getUserAdds } from "../../Config/firebase";
import { useSelector } from "react-redux";

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

        <div>My adds</div>
    )
}

export default MyAdds