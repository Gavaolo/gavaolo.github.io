function convertToRoman(num) {

  let result = ""

  while(num>=1000)result+="M",num-=1000
  while((num>=500)&&(num<900))result+="D",num-=500
  while((num>=900)&&(num<1000))result+="CM",num-=900
  while((num>=100)&&(num<400))result+="C",num-=100
  while((num>=400)&&(num<500))result+="CD",num-=400
  while((num>=50)&&(num<90))result+="L",num-=50
  while((num>=90)&&(num<100))result+="XC",num-=90
  while((num>=10)&&(num<40))result+="X",num-=10
  while((num>=40)&&(num<50))result+="XL",num-=40
  while((num>=5)&&(num<9))result+="V",num-=5
  while((num>=9)&&(num<10))result+="IX",num-=9
  while((num>=1)&&(num<4))result+="I",num-=1
  while((num>=4)&&(num<5))result+="IV",num-=5

 return result;
}

console.log(convertToRoman(4));
