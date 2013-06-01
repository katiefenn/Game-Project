define(
    'CharacterSpriteAnimator',
    [],
    function () {
        function CharacterSpriteAnimator(spriteName, display) {
            var This = this;
            this.spriteName = spriteName;
            this.display = display;
            this.frameKey = 0;
        }

        CharacterSpriteAnimator.prototype.getSprite = function () {
            if (this.display.isRunning()) {
                var sprite = this.display.getSprite(this.spriteName);
                this.x = sprite.x;
                this.y = sprite.y;
                return sprite;
            }

            return false;
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
            if(!this.getSprite())
                return;

            var point = {
                    x: this.x - 10, 
                    y: this.y + (this.getSprite().getHeight() / 2)
                };

            if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
                if(this.frameKey % 2 == 0) {
                    this.getSprite().move(-4, 0);
                } else {
                    this.getSprite().move(-2, 0);
                }
            }

            if (this.getSprite().getAnimation() != 'left') {
                this.getSprite().setAnimation('left');
            }
        }

        CharacterSpriteAnimator.prototype.walkUp = function () {
            if(!this.getSprite())
                return;

            var point = {
                    x: this.x + (this.getSprite().getWidth() / 2),
                    y: this.y - 10
                };

            if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
                if(this.frameKey % 2 == 0) {
                    this.getSprite().move(0, -4);
                } else {
                    this.getSprite().move(0, -2);
                }
            }

            if (this.getSprite().getAnimation() != 'up') {
                this.getSprite().setAnimation('up');
            }
        }

        CharacterSpriteAnimator.prototype.walkRight = function () {
            if(!this.getSprite())
                return;

            var point = {
                    x: this.x + this.getSprite().getWidth() + 10, 
                    y: this.y + (this.getSprite().getHeight() / 2)
                };

            if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {
                if(this.frameKey % 2 == 0) {
                    this.getSprite().move(4, 0);
                } else {
                    this.getSprite().move(2, 0);
                }
            }

            if (this.getSprite().getAnimation() != 'right') {
                this.getSprite().setAnimation('right');
            }
        }

        CharacterSpriteAnimator.prototype.walkDown = function () {
            if(!this.getSprite())
                return;

            var point = {
                    x: this.x + (this.getSprite().getWidth() / 2),
                    y: this.y + this.getSprite().getHeight() + 10
                };

            if (this.display.getIntersectionNames(point).indexOf('clip-map') == -1) {

                if(this.frameKey % 2 == 0) {
                    this.getSprite().move(0, 4);
                } else {
                    this.getSprite().move(0, 2);
                }
            }

            if (this.getSprite().getAnimation() != 'down') {
                this.getSprite().setAnimation('down');
            }
        }

        return CharacterSpriteAnimator;
    }
);