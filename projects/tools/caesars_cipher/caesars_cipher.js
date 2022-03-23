function singleRot13(letter){
  let number = letter.charCodeAt()

  if((number >= 65) && (number <= 90))
    number += 13
    if(number > 90) number -= 26

  return String.fromCharCode(number)
}

function rot13(str) {

  let splittedStr = str.split(" ")
  let splittedWords = []
  let newSplittedWords = []

  splittedStr.forEach(word=>splittedWords.push(word.split("")))

  splittedWords.forEach(word=>
    newSplittedWords.push(word.map(letter => singleRot13(letter)))
  )

  return newSplittedWords.join(" ").replace(/,/g, "")
}

console.log(rot13("SERR PBQR PNZC!"))
