"use strict";

 /*let a='a';
 let b='b';
 let _=22/7;
 let d=[1,2,2,3];
 let e={
    name:'pulkit bdmass',
    id:21,
 }
 let f=true;
let x="12"/"6";
let bol=1234;
let str=String(bol);
console.log(str.charAt(1));
*/

/*function display(){
    //alert("ram ram bhai sareyane")
    console.log(a);
    console.log(b);  
    console.log(_);
    console.log(typeof e);
    console.log(typeof f);
    console.log(x);
    let p=confirm("are you sure");
    alert("user selected");
    let t=prompt("badmass","hhahaha");
    alert(t);
}*/

//let a="12";
//let b=12.0;
//console.log(a===b);
const validate = (event)=>{
    let Uvalue=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById('result');
    event.preventDefault;
    if(Uvalue=="admin" && pass=='admin'){
        p1.innerText="success";
    }
    else{
        p1.innerText="nooooo"
    }

}
