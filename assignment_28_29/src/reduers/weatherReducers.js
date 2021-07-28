const initialState={
    city:"",
    data:{},
    theme:false
}
export const weatherReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case "UPDATED_CITY":
            return {
                ...state,
                city:action.payload
            }
        case 'LOAD_DATA':
            return { ...state,
                data:action.payload
            }
        case 'TOGGLE_THEME':
            return { ...state,
                theme:!state.theme
            }
        default : return state   
    }
}