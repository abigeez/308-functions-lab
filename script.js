//part 1: thinking functionally///

///////take an array of numbers and return the sum //////////////


let arrnum = [5, 10, 15, 20];
function addArr(arrnum) {
    let sum = 0;
    for (let i = 0; i < arrnum.length; i++) {
        sum += arrnum[i]
    }
    return sum;
}
const addedUp = addArr(arrnum);
console.log(addedUp)


///// take an array of numbers and return the average//////

let meNum = [30, 40, 50, 60, 70];


function meanArr(meNum) {

    let sum = 0;
    for (let i = 0; i < meNum.length; i++) {
        sum += meNum[i]


    }
    return (sum / meNum.length)
}

avg = meanArr(meNum);

console.log(avg)

////// take an array of strings and return the longest string///

const strdogArr = ['Great Dane', 'Labrador', 'Doberman', 'German Shephard', 'Irish Setter', 'Shiba Inu']

function lgStr (strdogArr) {
    let longest = '';
    for (let i=0; i<strdogArr.length; i++) {
        if(strdogArr[i].length > longest.length){
            longest = strdogArr[i];
        }
    }
    return (longest);
}

console.log(lgStr(strdogArr))


/////Take an array of strings, and a number//
//and return an array of the strings that are longer than the given number. ////

const arrCap = ['Raleigh', 'Albany','Richmond','Nashville','Frankfort'];
let minNum = 8;
            function capStr(arrCap){
                let longestNum = []
                for (let i=0;i<arrCap.length;i++) {
                    if (arrCap[i].length > minNum){
                        longestNum.push(arrCap[i])
                    }

                }
            return (longestNum)

            }
            console.log(capStr(arrCap))

/////////// take number n problem////


function recursiveFunc(n) {

console.log(n)
const decreNum = n - 1;

if (decreNum > 0 ) {
    recursiveFunc(decreNum)

    }
}

recursiveFunc(9);
////