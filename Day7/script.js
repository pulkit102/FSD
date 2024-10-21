let num=[1,2,3,4,5,6,7,8,9];
/*let newnum=num.map(x=>x*2);
console.log(newnum);

let sum=num.reduce((x,y)=>x+y,0);  //can be use to find product or sum or any function use to do with the array and convert it into a single digit number
console.log(sum);*/

const std=[
    {name:"Alice",score:50},
    {name:"bob",score:65},
    {name:"charlie",score:80},
    {name:"david",score:45},
    {name:"rahul",score:50},
];
let scores=std.filter(x=>x.score>60).map(x=>x.score+10).reduce((x,y)=>x+y,0);
console.log(scores);
/*const sum1=scores.reduce((x,y)=>x+y,0);
console.log(sum1);*/

num.forEach((x)=>console.log(x*3));

let sayHello=()=>{
    console.log("im in hello fxn");
}
console.log("strt");
setTimeout(sayHello,1000);
console.log("end");

console.log("start");
setTimeout(()=>{
    console.log("First task completed");
        setTimeout(()=>{
            console.log("Second task completed");
                setTimeout(()=>{
                    console.log("Third task completed");
                },3000)
        },2000)
},1000);

