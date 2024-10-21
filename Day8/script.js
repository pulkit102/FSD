/*const myPromise=new Promise((resolve,reject)=>{
    let success=false;
    setTimeout(()=>{
        if(success){
            resolve("data received");
        }
        else{
            reject("Data not sent");
        }
    },5000);
});
myPromise.then((message)=>{
    console.log("Data:" +message);
})
.catch((error)=>{
    console.log(error);
})*/


/*function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay)
    });
}

task("frst task completed",1000)
.then(()=>{
    task("second task completed",2000);
})
.then(()=>{
    task("third task completed",3000);
})*/

/*function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let data={id:1,name:"yaya",description:"yayayayayayayayayaa"};
            resolve(data);
        },4000);

    }) 
}
fetchData()
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})
*/
/*
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data=[
                {name:"Alice",score:50},
                {name:"bob",score:65},
                {name:"charlie",score:80},
                {name:"david",score:45},
                {name:"rahul",score:50},
            ];
            resolve(data);
        },1000);
    })
}
fetchData()
.then((data)=>{
    let sum=0;
    data.forEach(element => {
        sum +=element.score;
    });
    console.log(sum);
})
.catch((err)=>{console.log(err)})
*/

async function fetchData(){
    try{
        let response=await fetch("https://api.github.com/users?per_page=10");
        let data=await response.json();
        data.forEach((element) => {
            console.log(`login: ${element.login} ,node_id: ${element.node_id},avatar_url: ${element.avatar_url}`);
        });
    }
    catch(error){
        console.log("Error fetching data")
    }
}
 fetchData();