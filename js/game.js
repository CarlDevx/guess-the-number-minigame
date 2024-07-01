class Game  {
    secretNumber = 0;
    tries = 1;
    maxTries = 3;
    start(maxRange){
        this.secretNumber = Math.floor(Math.random()*maxRange+1);
    }
    checkNumber(inputTarget){
            let userInput = parseInt(inputTarget.value);
            switch(userInput){
                case this.secretNumber: 
                    this.win();
                break;
                default:
                    if (userInput > 10 || userInput < 0){
                        alert("insira um numero valido entre 0 e 10");
                        break;
                    }
                    else{
                        if (this.tries < this.maxTries){
                            alert("voce errou, restão apenas " + (this.maxTries-this.tries) + " tente novamente!");
                            this.tries = this.tries + 1;
                            break;
                        }
                        else{
                            this.gameOver();
                        }
                    }
                break;
                }
            }
    win(){
        alert("voce venceu.");
        this.restartGame();
    }
    gameOver(){
        window.alert("você perdeu.");
        this.restartGame();
    }
    restartGame(){
        window.location.reload();
    }
}
function StartupAnim(){
    let circle = document.querySelector(".CircleAnim");
    circle.classList.add("animStart");
    setTimeout(()=>{
        circle.remove()
    },1000)
    
}
let game =  new Game();
game.start(10);
StartupAnim();