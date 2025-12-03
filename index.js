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

