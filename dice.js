var yn = document.getElementById("yn")
var d6 = document.getElementById("d6")
var d20 = document.getElementById("d20")
var d100 = document.getElementById("d100")

var dresult = document.getElementById("diceresult")

yn.onclick = function() {
 var selectrando = Math.floor(Math.random()*2)+1 
 switch(selectrando){
   case 1:
     dresult.textContent = "yes";
     break
   case 2:
     dresult.textContent = "no";
     break
 }
}

d6.onclick = function() {
  var selectrando = Math.floor(Math.random()*6)+1
  var randnum2 = Math.floor(Math.random()*4)+1
  switch(selectrando){
    case 1:
      switch(randnum2){
        case 1:
          dresult.textContent = "Take a wildddddddddddd guess......... [You rolled a ONE, Good luck (^_-)]"
          break
        case 2:
          dresult.textContent = "R.I.P. That_Guy [Rolled a ONE]"
          break
        case 3:
          dresult.textContent = "Congrats, you failed [Rolled a ONE]"
          break
        case 4:
         dresult.textContent = "You rolled a ONE."
         break
      }
      break
   case 2:
     dresult.textContent = "You rolled a TWO."
     break
   case 3:
     dresult.textContent = "You rolled a THREE."
     break
    case 4:
     dresult.textContent = "You rolled a FOUR."
     break
    case 5:
     dresult.textContent = "You rolled a FIVE."
     break
    case 6:
     dresult.textContent = "You rolled a SIX! Lucky!"
     break
  }
}

d20.onclick = function(){
 var randonumz = Math.floor(Math.random()*20)+1
 dresult.textContent = "You rolled a " + randonumz
}
d100.onclick = function(){
 var randonumz = Math.floor(Math.random()*100)+1
 dresult.textContent = "You rolled a " + randonumz
}

