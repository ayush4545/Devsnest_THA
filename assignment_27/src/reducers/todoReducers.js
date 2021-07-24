const initialData={
    list:[]
}

//const [list,setList]=useState()
const todoReducers=(state=initialData,action)=>{
   
    switch(action.type){
         case "ADD_TODO":
             const {id,data}=action.payload;
             return{
                 ...state,
                 list:[
                     ...state.list,
                    {
                     id:id,
                     data:data
                 }
                ]
             }
             break;
        case "DELETE_TODO":
            const newid=action.payload;
            const list=state.list.filter((item)=>{
                if(item.id!=newid){
                    return item
                }
            })
            return {
                ...state,
                list:list
            }
            break;
        case "REMOVE_TODO":
            return {
                ...state,
                list:[]
            }
            break;
        default:return state;
    }
}

export default todoReducers