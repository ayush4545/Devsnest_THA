console.log("this is my js file")


const addBtn=document.getElementById("adding")

var dataList=[]

let count=0
showList();
addBtn.addEventListener("click",()=>{
    const input=document.getElementById("input")
    if(input.value==""){
        alert("please add the task")
        return
    }
    let list=localStorage.getItem('notes');
    if(list==null){
        dataList=[]
    }else{
        dataList=JSON.parse(list)
    }
    dataList.push(input.value)
    localStorage.setItem("notes",JSON.stringify(dataList))
    input.value=""
    // console.log(list)
    showList()
})



function showList(){
    let list=localStorage.getItem('notes')
    console.log(list,"inside show list")
    if(list==null){
        var dataList=[]
    }else{
        var dataList=JSON.parse(list)
    }
    let str=""
    dataList.forEach((item,index)=>{
         str+=`<li> <i class="fas fa-trash-alt delete" id=${index}  onclick="deleteItem(this.id)"></i> <span class="data">${item}</span></li>`
    })
    const dataDiv=document.querySelector(".dataDiv")
    if(dataList.length!=0){
        dataDiv.innerHTML=str
    }
    else{
        dataDiv.innerHTML=`<p>Nothing to show! click on + button to add Your daily tasks</p>`
    }
}


function deleteItem(index1){

    let list=localStorage.getItem('notes')
    console.log(list,"inside show list")
    if(list==null){
        var dataList=[]
    }else{
        var dataList=JSON.parse(list)
    }
    //this is also one way to remove data from list
    // dataList.splice(index,1);
    
    dataList=dataList.filter((item,index)=>{
        if(index!=index1){
            return item
        }
    })

    localStorage.setItem("notes",JSON.stringify(dataList))
    showList()

}

