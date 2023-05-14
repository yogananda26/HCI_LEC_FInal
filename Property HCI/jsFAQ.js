const cek = document.getElementById("plus")
const box2 = document.getElementById("ndbox")
const teks = document.getElementById("text")
box2.style.display = "none";
var statusbox = false;
cek.addEventListener("click", (event) =>{
    event.preventDefault();
    if(statusbox == false){
        statusbox = true;
    
        box2.style.marginTop = "20px";
        box2.style.display = "flex";
        box2.style.maxHeight = "153px"
        cek.style.transform = "rotate(45deg)"
        teks.style.display = "flex";
        console.log(statusbox);


    }
    else{
        // box2.style.display = "none";
        statusbox = false;
        box2.style.maxHeight = "0px"
        teks.style.display = "none";
        box2.style.marginTop = "0px";
        cek.style.transform = "rotate(0deg)"
        console.log(statusbox);
    }
})
