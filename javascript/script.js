var deButton = document.querySelector("header button:first-of-type");
var closeButton = document.querySelector("nav button:nth-of-type(2)")
var imageMenu = document.querySelector("nav img");





deButton.addEventListener("click", open);

function open(){
    
    document.body.classList.toggle("latenzien");
   
    
}


closeButton.addEventListener("click", open);

function close(){
    
    document.body.classList.toggle("dicht");
   
    
}




