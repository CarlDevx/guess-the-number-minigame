class Game  {
    secretNumber = 0;
    tries = 0;
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
            else{
                if (userInput != this.secretNumber){
                    if (this.tries < this.maxTries){
                        this.tries++;
                    }
                    else {
                        this.gameOver();
                    }
                }
            }
        }
    }
    win(){
     alert("voce venceu.");   
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
game.start(3);
StartupAnim();