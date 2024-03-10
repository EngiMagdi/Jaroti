let form =document.querySelector(".div-form");
let userIcon=document.querySelector(".user");
userIcon.addEventListener('click',function(){
    form.classList.toggle('hide')
})
window.addEventListener('keydown',function(e){
    if(e.key==="Escape"){
    form.classList.add('hide')
    }
})