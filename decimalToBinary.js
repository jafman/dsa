function decimalToBinary(decimal,  result=""){
  if(decimal == 0){
    return result;
  }
  result = String(decimal % 2) + String(result);
  decimal = Math.floor(decimal / 2);
  return decimalToBinary(decimal,result);
}

console.log(decimalToBinary(233));