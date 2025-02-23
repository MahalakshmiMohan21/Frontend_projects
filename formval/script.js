 const form=document.querySelector('#form');
 const user=document.querySelector('#username');
 const email=document.querySelector('#email');
 const pass=document.querySelector('#password');
 const cpass=document.querySelector('#con-password');
 const regmsg=document.createElement('p');
 regmsg.style.color="green";
 regmsg.style.textAlign="center";
 regmsg.style.fontSize="18px";

 form.addEventListener('submit',(e)=>{
    if(!valinput()){
         e.preventDefault();
        
    }else{
        e.preventDefault();
        regmsg.innerText='Successfully Registered'
        form.appendChild(regmsg)
        form.reset()
    }
    setTimeout(()=>{
        regmsg.innerText=""
    },3000)
 })

 function valinput(){
    const userval=user.value.trim();
    const emailval=email.value.trim();
    const passval=pass.value.trim();
    const cpassval=cpass.value.trim();

    let success=true;
    if(userval===''){
        success=false;
        setError(user,'username is required')
    }else{
        setSuccess(user);
    }

    if(emailval===''){
        success=false;
        setError(email,'email is required')
    }else if(!valemail(emailval)){
        success=false;
        setError(email,'please enter a valid email')

    }
    else{
        setSuccess(email);
    }

    if(passval===''){
        success=false;
        setError(pass,'password is required')
    }else if(passval.length<8){
        success=false;
        setError(pass,'password must be atleast 8 characters')
    }
    else{
        setSuccess(pass);
    }

    if(cpassval===''){
        success=false;
        setError(cpass,'confirm password is required')
    }else if(cpassval!=passval){
        success=false;
        setError(cpass,'password does not match')
    }
    else{
        setSuccess(cpass);
    }
    return success;
 }

 function setError(el,msg){
    const par=el.parentElement;
    const errel=par.querySelector('.error')

    errel.innerText=msg;
    par.classList.add('error');
    par.classList.remove('success');

 }

 function setSuccess(el){
    const par=el.parentElement;
    const errel=par.querySelector('.error')

    errel.innerText='';
    par.classList.add('success');
    par.classList.remove('error');

 }


 const valemail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Use test() instead of match()
};
 