let arr = [];
while (arr.length < 5){
    let r = Math.floor(Math.random()*10) ;
    arr.push(r);

}
console.log(arr);
let newArr = [];
for (let i = 0; i <= arr.length-1; i++){
    if (arr[i] % 2 != 0){
        newArr[i] = 0;
    }
    if (arr[i] % 2 == 0){
        newArr[i] = 1;
    } 
}  

console.log(newArr);
const a = [1, 1, 1, 1, 1];
const b = [0, 0, 0, 0, 0];

if (newArr === a){
    
    alert("Congrats! you won a jackpot.")
}
else if (newArr === b){
    alert("Congrats but you didnot win anything")
}
else 
alert(`the chances of wining jackpot is ${(1/2**5)}`)

