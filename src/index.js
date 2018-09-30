module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  let open = [];
  let close = [];
  let balance = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
    
  }
  //console.log(open)
  //console.log(close);
  let isOpenOrClose = "open";
  for(let i=0; i<arr.length; i++){
    //console.log(arr[i]+" "+open.includes(arr[i]));
    if(open.includes(arr[i]) && !close.includes(arr[i])) {
      balance.push(arr[i]);
      //console.log(balance);
    }else if(open.includes(arr[i]) && close.includes(arr[i])){
      if(isOpenOrClose == "open"){ 
        balance.push(arr[i]); 
        isOpenOrClose = "close";
      }else{
        if(balance.slice(-1) == arr[i]){
          balance.pop();
          isOpenOrClose = "open";
        }else return false;
      }
    }
    else{
      
      if(balance.slice(-1) == open[close.indexOf(arr[i])]) balance.pop();
    }
    
  }
  return balance.length == 0 ? true : false;
}/*
const check = require('./index.js');

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
console.log(check('((()))()', config1));*/