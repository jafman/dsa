function d2b(decimal, result=''){
  /* example
      2  34
      2  17 R 0
      2  8  R 1
      2  4  R 0
      2  2  R 0
         1  R 0
         0  R 1
    example
    2   6
    2   3 R 0
    2   1 R 1
    2   0 R 1 
  */
  if(decimal == 0){
    return result;
  }
  return d2b(String(Math.floor(decimal/2)), String(decimal % 2)+ String(result)) ;
}

console.log(d2b(34))