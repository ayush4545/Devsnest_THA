// const item=JSON.parse(localStorage.getItem("wishlist"))
const inititalState={
    wishlist:[],
    heartStatus:false
}

export const wishListReducer=(state=inititalState,action)=>{
    switch(action.type){
        case "LOAD_WISH_DATA":
            const item=JSON.parse(localStorage.getItem("wishlist"))
            return {
                ...state,
                wishlist:item
            }
        case "ADD_WISH_ITEM":
            console.log("wishlist -- ",action.payload)
            localStorage.setItem("wishlist",JSON.stringify([...state.wishlist,action.payload]))
            return {
                ...state,
                wishlist:[...state.wishlist,action.payload]
            }
        case "DELETE_ITEM":
            const list = state.wishlist.filter((item) => item.id !== action.payload)
            localStorage.setItem("wishlist", JSON.stringify(list))
            console.log("wishlist remove -- ",list)
            return {
                ...state, wishlist:list
            }
        case "TOGGLE_HEART":
            return{
               ...state,
               heartStatus:!state.heartStatus
            }
        default : return state
    }
}