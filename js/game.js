class Game  {
    secretNumber = 0;
    contructor(maxTries){
        this.maxTries = maxTries;
        }
    start(maxRange){
        this.secretNumber = Math.floor(Math.random()*maxRange+1);
        console.log(this.secretNumber)
    }
    checkNumber(inputTarget){
        if (inputTarget.value == ""){
            alert("insira um numero valido antes de continuar")
        }
        else{
            let userInput = parseInt(inputTarget.value);
            if (userInput < 0 || userInput > 10){
                alert("insira um numero entre 0 e 10")
            }
            if(userInput == this.secretNumber){
                this.win(); 
            }
        }
    }
    win(){
     alert("voce venceu.");   
    }
    gameOver(){
        window.alert("você perdeu.");
    }
    restartGame(){
        window.location.reload();
    }
}

let game =  new Game();
game.start(10);