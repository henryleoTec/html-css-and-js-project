const mainContainer = document.querySelector("main");
const signUpInput=document.querySelector(".input");
const signInInput=document.querySelector(".input2");
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const img=document.querySelector(".img");
const subContainerImg2=document.querySelector(".sub-container-img2");
function isFunction(e){
if(e.target.classList.contains("btn1")){
subContainerImg2.classList.remove("show");
signUpInput.classList.remove("show");
signInInput.classList.remove("show");
btn1.style.backgroundColor="#424283";
btn2.style.backgroundColor="#4d4d99";
subContainerImg2.style.backgroundColor="#424283";
img.src="image/signUp.svg";
}
if(e.target.classList.contains("btn2")){
    subContainerImg2.classList.add("show");
    signUpInput.classList.add("show");
    signInInput.classList.add("show");
    btn2.style.backgroundColor="#424283";
    btn1.style.backgroundColor="#4d4d99";
subContainerImg2.style.backgroundColor="#424283";
img.src="image/signIn.svg";
    }
}

mainContainer.addEventListener("click",isFunction);