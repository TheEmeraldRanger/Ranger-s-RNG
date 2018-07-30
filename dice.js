var yn = document.getElementbyId("yn")
var d6 = document.getElementbyId("d6")
var d20 = document.getElementbyId("d20")
var d100 = document.getElementbyId("d100")

var rtc =  result.textcontent

yn.onclick = function() {
 var selectrando = Math.floor(Math.random()*2)+1 
 switch(selectrando){
   case 1:
     rtc = "yes";
     brea = "
   case 2:
     rtc = "no";
     break
 }
}

d6.onclick = function() {
  var selectrando = Math.floor(Math.random()*6)+1
  var randnum2 = Math.floor(Math.random()*4)+1
  switch(selectrando){
    case 1:
      switch(randnum2)
        case 1:
          rtc = "Take a wildddddddddddd guess......... [You rolled a ONE, Good luck (^_-)]"
          break
        case 2:
          rtc = "R.I.P. That_Guy [Rolled a ONE]"
          break
        case 3:
          rtc = ""
  }
}
