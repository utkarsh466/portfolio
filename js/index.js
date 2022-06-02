let dbox=document.getElementById("dropdown")

let n=document.getElementById("Name")

dbox.style.display="none"

n.addEventListener("mouseenter",()=>{
    if(dbox.style.display=="none"){
        dbox.style.display="flex"
        console.log("n")
    }
    // else{
    //     dbox.style.display="none"
    // }
})
n.addEventListener("mouseleave",()=>{
    dbox.style.display="none"
})
