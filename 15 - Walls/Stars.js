class Star {
    constructor(x, y, size, speed) {
        this.x = x-size/2;
        this.y = y-size/2;
        this.size = size;
        this.speed = speed;
    }

    draw() {
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.y += this.speed;
        this.draw();
        if(this.y > canvas.height) {
            this.x = Math.floor(Math.random()*(canvas.width));
            this.y = 0;
        }    
    }
}

class Stars {
    constructor(maxStars, size, speed) {
        this.stars = [];
        this.maxStars = maxStars;
        for(var i=0; i<this.maxStars; i++) {
            this.stars.push(new Star(Math.floor(Math.random()*(canvas.width)), Math.floor(Math.random()*(canvas.height)), size, speed));
        }
    }

    update() {
        for(var i=0; i<this.stars.length; i++) {
            this.stars[i].update();
        }
    }    
}