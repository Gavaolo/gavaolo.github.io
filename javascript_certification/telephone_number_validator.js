function telephoneCheck(str) {

  // Country code check
  let regExp = /(^1 \d{3} \d{3} \d{4}|^1\(\d{3}\)\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}|^\d{3}-\d{3}-\d{4}|^\d{10,10}$|^1 \(\d{3}\) \d{3}-\d{4}|^1 \d{3}-\d{3}-\d{4})/

  if(regExp.test(str))return true
  else return false

}

console.log(telephoneCheck("2(757)622-7382"));
