function CharacterController (scene, characterSpriteAnimator) {
    this.scene = scene;
    this.characterSpriteAnimator = characterSpriteAnimator;
}

CharacterController.prototype.update = function (keys) {
    if(keys.indexOf('left') != -1 || keys.indexOf('up') != -1
       || keys.indexOf('right') != -1 || keys.indexOf('down') != -1
    ) {
        this.moveCharacterWithKeys(keys);
    }

    if(keys.length == 0) {
        this.characterSpriteAnimator.idle('left');
    }
}

CharacterController.prototype.moveCharacterWithKeys = function (keys) {
    if(keys.indexOf('left') != -1) {
        this.characterSpriteAnimator.walk('left');
    }
    else if(keys.indexOf('up') != -1) {
        this.characterSpriteAnimator.walk('up');
    }
    else if(keys.indexOf('right') != -1) {
        this.characterSpriteAnimator.walk('right');
    }
    else if(keys.indexOf('down') != -1) {
        this.characterSpriteAnimator.walk('down');
    }
}