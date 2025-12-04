//asynchronous concept

console.log("first");
console.log("second");
setTimeout(()=>{console.log("hello")}, 3000);
console.log("third");

//callback function

function sum(a, b){
    console.log(a+b);
}
function calculator(a, b , sum){
    sum(a, b);
}
calculator(1,3,sum);

//callback hell

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000)
}
getData(1, ()=>{
    console.log("getting data2...");
    getData(2, ()=>{
        console.log("getting data3...");
        getData(3, ()=>{
            console.log("getting data4...");
            getData(4);})
    });
})

promises

const getPromise = ()=>{
    return new Promise((reject, resolve )=>{
    console.log("I am a promise");
    reject("Some error occured");
})
}

let promise = getPromise();
promise.then((res)=>{
    console.log("success, ", res);
})

promise.catch((err)=>{
    console.log("error, ", err);
})

function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },5000)
    })
}
function asyncFunc2(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        }, 5000);
    })
}

// promise chain

console.log("fetching data1.....");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("fetching data2.....");
    asyncFunc2().then((res)=>{
        console.log(res);
    })
    
})

async function hello(){
    console.log("hell world");
}

// async await

function getData(dataID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataID);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}

// IIFE functions

(async function (){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
})();