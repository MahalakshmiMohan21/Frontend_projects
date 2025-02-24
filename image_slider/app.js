const container=document.querySelector('.container');
const btns=document.querySelectorAll('.btn');
const imgs=["1","2","3","4"];
let i=0;
btns.forEach((btn)=>{
    btn.addEventListener('click' ,()=>{
        if(btn.classList.contains('btn-left')){
            i--;
            if(i<0){
                i=imgs.length-1;
            }
            container.style.background=`url("images/${imgs[i]}.jpg") center/cover fixed no-repeat`;

        }else{
            i++;
            if(i===imgs.length){
                i=0;
            }
            container.style.background=`url("images/${imgs[i]}.jpg") center/cover fixed no-repeat`;

        }
    })
})