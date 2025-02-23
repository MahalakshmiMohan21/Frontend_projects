const btn = document.getElementById("btn")
const col=document.getElementById("col")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',function(){
    let hash='#'
    for(let i=1;i<=6;i++){
        
        hash+=met()

    } 
    wrap.style.backgroundColor=hash
    col.innerHTML=hash
})

function met(){
    let ran=Math.floor(Math.random()*16)
    return hex[ran]
} 