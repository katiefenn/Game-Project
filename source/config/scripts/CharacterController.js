define(
    'config/scripts/CharacterController',
    ['Keyboard'],
    function (Keyboard) {
        function CharacterController (subject) {

        }

        CharacterController.prototype.listenTo = function(subject) {
            this.scene = subject;
            this.keyboard = new Keyboard();
            this.keyboard.listen();
            this.keyboard.addObserver(this);
        };

        CharacterController.prototype.update = function (keys) {
            _.each(keys, function(key) {
                if(_.has(handlers, key)) {
                    handlers[key](this.scene);
                }
            }, this);

            if(keys.length === 0) {
                this.scene.changeCharacterState('player-character', 'idle');
            }
        };

        var handlers = {};

        handlers.left = function(scene) {
            scene.changeCharacterState('player-character', 'walk-left');
            scene.changeCharacterPosition('player-character', -4, 0);
        };

        handlers.up = function(scene) {
            scene.changeCharacterState('player-character', 'walk-up');
            scene.changeCharacterPosition('player-character', 0, -4);
        };

        handlers.right = function(scene) {
            scene.changeCharacterState('player-character', 'walk-right');
            scene.changeCharacterPosition('player-character', 4, 0);
        };

        handlers.down = function(scene) {
            scene.changeCharacterState('player-character', 'walk-down');
            scene.changeCharacterPosition('player-character', 0, 4);
        };

        handlers.action = function(scene) {
            scene.changeCharacterState('player-character', 'action');
        };

        return CharacterController;
    }
);