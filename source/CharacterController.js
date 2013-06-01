define(
    'CharacterController',
    [],
    function () {
        function CharacterController (scene) {
            this.scene = scene;
        }

        CharacterController.prototype.update = function (keys) {
            if(keys.indexOf('left') != -1 || keys.indexOf('up') != -1
               || keys.indexOf('right') != -1 || keys.indexOf('down') != -1
            ) {
                this.moveCharacterWithKeys(keys);
            }

            if(keys.length == 0) {
                this.scene.getPlayerCharacter().setState('idle');
            }
        }

        CharacterController.prototype.moveCharacterWithKeys = function (keys) {
            if(keys.indexOf('left') != -1) {
                this.scene.getPlayerCharacter().setState('walk-left');
            }
            else if(keys.indexOf('up') != -1) {
                this.scene.getPlayerCharacter().setState('walk-up');
            }
            else if(keys.indexOf('right') != -1) {
                this.scene.getPlayerCharacter().setState('walk-right');
            }
            else if(keys.indexOf('down') != -1) {
                this.scene.getPlayerCharacter().setState('walk-down');
            }
        }

        return CharacterController;
    }
);