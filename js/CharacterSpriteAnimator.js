function CharacterSpriteAnimator(spriteName, display) {
    var This = this;
    this.spriteName = spriteName;
    this.display = display;
    this.frameKey = 0;
    this.display.onReady(function () {
        This.sprite = This.display.getSprite(This.spriteName);
        This.x = This.sprite.getX();
        This.y = This.sprite.getY();
    });
}

CharacterSpriteAnimator.prototype.getSprite = function () {
    return this.display.getSprite(this.spriteName);
}

CharacterSpriteAnimator.prototype.walk = function (direction) {
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
}

CharacterSpriteAnimator.prototype.walkLeft = function () {
    var point = {
            x: this.x - 10, 
            y: this.y + (this.sprite.getHeight() / 2)
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
        if(this.frameKey % 2 == 0) {
            this.sprite.move(-4, 0);
        } else {
            this.sprite.move(-2, 0);
        }
    }

    if (this.sprite.getAnimation() != 'left') {
        this.sprite.setAnimation('left');
    }
}

CharacterSpriteAnimator.prototype.walkUp = function () {
    var point = {
            x: this.x + (this.sprite.getWidth() / 2),
            y: this.y - 10
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
        if(this.frameKey % 2 == 0) {
            this.sprite.move(0, -4);
        } else {
            this.sprite.move(0, -2);
        }
    }

    if (this.sprite.getAnimation() != 'up') {
        this.sprite.setAnimation('up');
    }
}

CharacterSpriteAnimator.prototype.walkRight = function () {
    var point = {
            x: this.x + this.sprite.getWidth() + 10, 
            y: this.y + (this.sprite.getHeight() / 2)
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
        if(this.frameKey % 2 == 0) {
            this.sprite.move(4, 0);
        } else {
            this.sprite.move(2, 0);
        }
    }

    if (this.sprite.getAnimation() != 'right') {
        this.sprite.setAnimation('right');
    }
}

CharacterSpriteAnimator.prototype.walkDown = function () {
    var point = {
            x: this.x + (this.sprite.getWidth() / 2),
            y: this.y + this.sprite.getHeight() + 10
        };

    if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {

        if(this.frameKey % 2 == 0) {
            this.sprite.move(0, 4);
        } else {
            this.sprite.move(0, 2);
        }
    }

    if (this.sprite.getAnimation() != 'down') {
        this.sprite.setAnimation('down');
    }
}