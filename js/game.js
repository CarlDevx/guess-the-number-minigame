class Game  {
    secretNumber = 0;
    contructor(maxTries){
        this.maxTries = maxTries;
        }
    start(maxRange){
        this.secretNumber = Math.floor(Math.random()*maxRange+1);
    }
    update(inputTarget){
        
    }
}

let game =  new Game();
game.start(10);