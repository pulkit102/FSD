/*let a=()=>{
    console.log("arrow function");
}
let b=()=>console.log("Arrow function");
let c=(x,y)=>{
    return x+y;
}
let res1=c("Pulkit"," Sharma");
let res2=c(7,3);

a();
b();
console.log(res1,res2);

function display1(){
    let d=document.querySelector("p");
    d.innerHTML="im 1st para";
    d.style.backgroundColor="red";
}
display=()=>{
    let p=document.querySelectorAll("p");
    p[0].textContent="im 1st para";
    p[0].style.backgroundColor="red";
    p[1].textContent="im 2nd para";
    p[1].style.backgroundColor="blue";
}
changeanchor=()=>{
    let a1=document.querySelector("a");
    a1.textContent="aktu website";
    a1.setAttribute("href","https://aktu.ac.in");
}*/

/*appending=()=>{
    const newDiv=document.createElement('div');
    newDiv.textContent="this is a new div";
    const body=document.querySelector('body');
    body.appendChild(newDiv);
}*/

/*const buttonn=document.querySelector('button');
buttonn.addEventListener('click',()=>{
    alert("hmmm");
});*/

const handleclick=()=>{
    document.getElementById('btn').style.translate='30rem 0';
}
