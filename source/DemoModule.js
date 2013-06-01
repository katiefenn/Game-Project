define(
    'DemoModule',
    [
        'Character', 'Scene', 'Locale', 'CharacterController',
        'CharacterSpriteAnimator', 'config/locales/churchyard',
        'config/characters/player-character'
    ],
    function (
        Character, Scene, Locale, CharacterController,
        CharacterSpriteAnimator, localeConfig, characterConfig
    ) {
        function DemoModule (display, controllers) {
            this.display = display;
            this.controllers = controllers;
        }

        DemoModule.prototype.run = function () {
            var playerCharacter = new Character(characterConfig),
                scene = new Scene(
                    new Locale(localeConfig), 
                    {
                        'player-character': playerCharacter
                    }
                );

            var characterController = new CharacterController(scene, new CharacterSpriteAnimator('player-character', this.display));
            this.controllers[0].addObserver(characterController);

            this.display.runScene(scene);
        }

        return DemoModule;
    }
);