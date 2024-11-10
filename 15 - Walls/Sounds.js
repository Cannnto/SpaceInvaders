class Sound {
    constructor() {
        this.fireSound = new Audio("fireSound.wav");
        this.hitSound = new Audio("hurt.wav");
        this.deathSound = new Audio("death.wav");
    }

    playFireSound() {
        this.fireSound.play();
    }

    playHitSound() {
        this.hitSound.play();
    }

    playDeathSound() {
        this.deathSound.play();
    }
}