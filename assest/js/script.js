let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            sum += arr[i] * arr[i]     
        }   
    }
    console.log(sum);
}
even(arr);

//devide 3 and 7
let n =25;
 function devided(n) {
if (n%3==0 && n%7==0) {
    console.log("number devided 3and7");
    
} else {
    console.log("number not devided 3and7");  
}}
 devided(n);
