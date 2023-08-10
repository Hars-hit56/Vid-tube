let move = document.querySelector(".menu")
let sidebar= document.querySelector(".section-left")
let container=document.querySelector(".section-main")


 move.onclick = function(){
     sidebar.classList.toggle("small-sidebar") 
     container.classList.toggle("large-section-main")

}

