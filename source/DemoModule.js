define(
    'DemoModule',
    [
        'Loader', 'LoadChainer', 'LocaleConfigLoader', 'CharacterConfigLoader',
        'Character', 'Scene', 'Locale', 'CharacterController',
        'CharacterSpriteAnimator'
    ],
    function (
        Loader, LoadChainer, LocaleConfigLoader, CharacterConfigLoader,
        Character, Scene, Locale, CharacterController,
        CharacterSpriteAnimator
    ) {
        function DemoModule (display, controllers) {
            this.display = display;
            this.controllers = controllers;
        }

        DemoModule.prototype.run = function () {
            var loader = new Loader(),
                This = this,
                loadChainer = new LoadChainer(),
                resourcesToLoad = [
                    {resources: ['churchyard'], loader: new LocaleConfigLoader()},
                    {resources: ['player-character'], loader: new CharacterConfigLoader()}
                ];

            loadChainer.load(resourcesToLoad, function (resources) {
                var localeConfig = resources[0],
                    characterConfig = resources[1],
                    playerCharacter = new Character(characterConfig[0]),
                    scene = new Scene(
                        new Locale(localeConfig[0]), 
                        {
                            'player-character': playerCharacter
                        }
                    );

                var characterController = new CharacterController(scene, new CharacterSpriteAnimator('player-character', This.display));
                This.controllers[0].addObserver(characterController);

                This.display.runScene(scene);
            });
        }

        return DemoModule;
    }
);