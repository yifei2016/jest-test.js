function backwards(para) {
  let newPara;
  let newString = '';
  if(typeof(para) === 'number'){
    newPara=para.toString();
    for(let i = newPara.length-1;i>=0;i--){
      newString = newString.concat(newPara[i]);
    }
  }
  for(let i = para.length-1;i>=0;i--){
    newString = newString.concat(para[i]);
  }
  return newString;
}

function hypotenuse(a, b){
  if(a>0&&typeof(a)==='number'&&b>0&&typeof(b)==='number'){
   s= a*a+b*b;
  return Math.sqrt(s);
  }
  else{return 'ogiltig tal'}
}


module.exports = {
  backwards:backwards,
  hypotenuse:hypotenuse
}
