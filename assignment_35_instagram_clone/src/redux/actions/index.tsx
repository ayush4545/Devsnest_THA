
export interface User {

    username:string,
    profilePicture:string
}



const updateUser=()=>{
    
    return (dispatch:any) =>{
       fetch("/data/user.json")
       .then(data=> data.json())
       .then(response=> dispatch({
           type:"UPDATE_USER",
           payload:response,
        
       }))
    };

}

export {updateUser}