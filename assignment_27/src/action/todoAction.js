export const addTodo=(data) => async(dispatch)=>{
    dispatch({
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    })
}

export const deleteTodo=(id) =>async(dispatch)=>{
    dispatch({
        type:"DELETE_TODO",
        payload:id
    })
}

export const removeTodo=()=>async(dispatch)=>{
    dispatch({
        type:"REMOVE_TODO"
    })
}