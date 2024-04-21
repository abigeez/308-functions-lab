//part 1: thinking functionally///

///////take an array of numbers and return the sum //////////////


let arrnum =[5,10,15,20];
function addArr(arrnum) {
    let sum = 0;
    for(let i=0; i<arrnum.length;i++){
        sum +=arrnum[i]
    }
    return sum;
}
const addedUp= addArr(arrnum);
console.log(addedUp)


///// take an array of numbers and return the average//////

let meNum = [30,40,50,60,70];
indNum= meNum.length;
// let indNum = meNum.length;
// // let avgOf= 

function meanArr(meNum,indNum) {
    const meanArr = (meNum/indNum)
    let sum1= 0;
for (let j=0;j<meNum.length;j++){
    sum1 =+ meNum[j]
   
    
}
return (sum1/indNum)
}



console.log(meanArr(meNum,indNum))

