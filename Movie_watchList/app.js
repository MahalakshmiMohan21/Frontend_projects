
var addbtn=document.getElementById("add-popup");
var overlay=document.querySelector(".pop-overlay");
var popbox=document.querySelector(".popup-box");
var cancel=document.getElementById("cancel-pop");



addbtn.addEventListener("click",()=>{
     overlay.style.display="block"
     popbox.style.display="block"
});
cancel.addEventListener("click",(event)=>{
     event.preventDefault()
       overlay.style.display="none"
     popbox.style.display="none"
});

var container=document.querySelector(".container")
var addmov=document.getElementById("add-mov");
var mtitle=document.getElementById("mov-tit");
var hero=document.getElementById("hero");
var mdir=document.getElementById("mov-dir");
var genre=document.getElementById("genre");
var stat=document.getElementById("status");

addmov.addEventListener("click",(event)=>{
     event.preventDefault();
     var div=document.createElement("div");
     div.setAttribute("class","cont");
     div.innerHTML=`
            <h2>${mtitle.value}</h2>
             <h4>${hero.value}</h4>
            <h4>${mdir.value}</h4>
            <h4>${genre.value}</h4>
            <h4>${stat.value}</h4>
            <button onclick="del(event)">delete</button>
        `;

     container.append(div)
     overlay.style.display="none"
     popbox.style.display="none"

        mtitle.value = "";
        hero.value="";
        mdir.value = "";
        genre.value = "";
        stat.value = "";
});
 
function del(event){
     event.target.parentElement.remove();

}