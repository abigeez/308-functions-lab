//part 1 thinking functionally

let arrnum =[5,10,15,20]
function addArr(arrnum) {
    let sum = 0;
    for(let i=0; i<arrnum.length;i++){
        sum +=arrnum[i]
    }
    return sum;
}

console.log(addArr(arrnum))
//////