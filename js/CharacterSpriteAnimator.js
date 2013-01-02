function CharacterSpriteAnimator(spriteName, display) {
    this.spriteName = spriteName;
    this.display = display;
    this.frameKey = 0;
}

CharacterSpriteAnimator.prototype.walk = function (direction) {
    stats.begin();
        
    var sprite = this.display.getSprite(this.spriteName);
    switch(direction) {
        case 'left': this.walkLeft();
            break;
        case 'up': this.walkUp();
            break;
        case 'right': this.walkRight();
            break;
        case 'down': this.walkDown();
            break;
    }

    this.frameKey++;

    if(this.frameKey == 9) {
        this.frameKey = 0;
    }

    stats.end();
}

CharacterSpriteAnimator.prototype.walkLeft = function () {
    var sprite = this.display.getSprite(this.spriteName),
        point = {
            x: sprite.getX() - 10, 
            y: sprite.getY() + (sprite.getHeight() / 2)
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
        if(this.frameKey % 2 == 0) {
            sprite.move(-4, 0);
        } else {
            sprite.move(-2, 0);
        }
    }

    if (sprite.getAnimation() != 'left') {
        sprite.setAnimation('left');
    }
}

CharacterSpriteAnimator.prototype.walkUp = function () {
    var sprite = this.display.getSprite(this.spriteName),
        point = {
            x: sprite.getX() + (sprite.getWidth() / 2),
            y: sprite.getY() - 10
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
        if(this.frameKey % 2 == 0) {
            sprite.move(0, -4);
        } else {
            sprite.move(0, -2);
        }
    }

    if (sprite.getAnimation() != 'up') {
        sprite.setAnimation('up');
    }
}

CharacterSpriteAnimator.prototype.walkRight = function () {
    var sprite = this.display.getSprite(this.spriteName),
        transition = {x: sprite.getX() + 10, duration: 0.05},
        point = {
            x: sprite.getX() + sprite.getWidth() + 10, 
            y: sprite.getY() + (sprite.getHeight() / 2)
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
        if(this.frameKey % 2 == 0) {
            sprite.move(4, 0);
        } else {
            sprite.move(2, 0);
        }
    }

    if (sprite.getAnimation() != 'right') {
        sprite.setAnimation('right');
    }
}

CharacterSpriteAnimator.prototype.walkDown = function () {
    var sprite = this.display.getSprite(this.spriteName),
        transition = {y: sprite.getY() + 10, duration: 0.08},
        point = {
            x: sprite.getX() + (sprite.getWidth() / 2),
            y: sprite.getY() + sprite.getHeight() + 10
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {

        if(this.frameKey % 2 == 0) {
            sprite.move(0, 4);
        } else {
            sprite.move(0, 2);
        }
    }

    if (sprite.getAnimation() != 'down') {
        sprite.setAnimation('down');
    }
}

CharacterSpriteAnimator.prototype.idle = function (direction) {
    this.frameKey = 0;
    sprite.setAnimation(direction);
}