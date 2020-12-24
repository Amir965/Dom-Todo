let root=document.getElementById("root")
let todo=document.getElementById("todo")

function add(){
    let para=document.createElement("h2")
    para.style.cssText="margin-left:45px;"
    if(todo.value){
        para.innerHTML=todo.value;
        root.appendChild(para);
    // alert('Item added')
    }
   
    todo.value="";
    para.setAttribute("onclick","data(this)")
    
}

function data(e){
    e.remove();
    // alert('Item removed')

}
