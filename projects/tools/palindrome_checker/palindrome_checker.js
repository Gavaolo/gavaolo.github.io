function arrAreEqual(arr1,arr2){
  for(let i = 0; i < arr1.length; i++) if(arr1[i] != arr2[i]) return false
  return arr1.length == arr2.length  
}

function palindrome(str) {

  let regExp1 = /([a-z]|[0-9])/gi
  
  let myStrArr = str.toLowerCase().match(regExp1)
  let myInvertedStrArr = str.toLowerCase().match(regExp1).reverse()

  return arrAreEqual(myStrArr, myInvertedStrArr)
}

console.log(palindrome("eyes"))
