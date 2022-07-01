/*function sumNumber(number, sum=0){
  if(number == 0){
    return sum;
  }
  sum += number;
  number --;
  return sumNumber(number, sum);
}
*/
function sumNumber2(number){
  if(number == 1){
    return  number;
  }
  return number + sumNumber(number-1);
}

console.log(sumNumber2(10));