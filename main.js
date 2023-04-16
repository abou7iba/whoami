var openpopupbtn = document.querySelector(".showmore");
var closepopupbtn = document.querySelector("#closepopup");

openpopupbtn.addEventListener("click",function(){
    document.body.classList.add("active");  
});

closepopupbtn.addEventListener("click",function(){
    document.body.classList.remove("active");  
})