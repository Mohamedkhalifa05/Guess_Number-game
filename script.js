
'use strick';

let Secretnumber = Math.trunc(Math.random() * 20 ) + 1 ;
let highscore = 0 ;
const displayMessage = (message) =>{
    document.querySelector('.message').textContent = message
}

let score = 20 ;
document.querySelector('.check').addEventListener("click",function() {
    let guess = Number(document.querySelector('.guess').value);
      // when there is not number
   if(!guess){
    displayMessage("⛔ No Number ");
   
   }else if (guess > 21) {

    displayMessage("⛔ Number greater than 20");
    document.querySelector('.between').style.color = "red";
    
   
   }else if (guess === Secretnumber){
    document.querySelector('.number').textContent = Secretnumber;
     displayMessage("🎉 Correct Number")
   
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";
    if (score > highscore) {
         highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
   
   }else if (guess !== Secretnumber) {

   
    
    if (score > 1) {
        displayMessage(guess > Secretnumber ?  "Too high" : "Too low");
    document.querySelector('.between').style.color = "#EEEEEE";

        

        score-- ;
        document.querySelector('.score').textContent = score;
    }else {
        displayMessage("💥 You lost the game !");
        
   }
}

});
document.querySelector('.again').addEventListener('click',function() {
    let score = 20 ;
   let Secretnumber = Math.trunc(Math.random() * 20 ) + 1 ;
     
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    displayMessage('Start guessing...');
  
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});


