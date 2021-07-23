const initialState={
    loginStatus:false
}

export const LoginReducers=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                loginStatus:action.payload
            }
        
        default: return state
    }
}