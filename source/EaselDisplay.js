define(
    'EaselDisplay',
    ['underscore', 'easel', 'preload'],
    function (_, createjs, preload) {
        function EaselDisplay () {
            this.stage = new createjs.Stage(document.getElementById('canvas'));
            this.sprites = {};
        }

        EaselDisplay.prototype.runScene = function (scene) {
            this.currentScene = scene;
            this.loadSprites(scene.getSpriteConfig(), this.startScene, this);
        };

        EaselDisplay.prototype.loadSprites = function (config, onComplete, context) {
            var manifest = [];

            _.each(config, function (configItem) {
                this.sprites[configItem.name] = createSprite(configItem);

                // Add image to loader manifiest - not expecting sprites with > 1 image
                manifest.push({src: configItem.spritesheet.images[0], id: configItem.name});
            }, this);

            // Load sprite images
            loader = new preload.LoadQueue(false);
            loader.onComplete = function() {
                onComplete.call(context);
            };
            loader.loadManifest(manifest);
        };

        EaselDisplay.prototype.getSprite = function(name) {
            return this.sprites[name];
        };

        EaselDisplay.prototype.startScene = function () {
            _.each(this.sprites, function (sprite) {
                sprite.gotoAndPlay('idle');
                this.stage.addChild(sprite);
            }, this);

            createjs.Ticker.setFPS(30);
            var This = this;
            createjs.Ticker.addEventListener("tick", function() {
                updateSprites(This.sprites, This.getCurrentScene());
                This.stage.update();
            });
        };

        EaselDisplay.prototype.getCurrentScene = function() {
            return this.currentScene;
        };

        function updateSprites(sprites, scene) {
            _.each(scene.getCharacters(), function(characterName) {
                updateCharacterSprite(sprites, scene.getCharacter(characterName));
            });

            _.each(scene.getSetPieces(), function(setPieceName) {
                updateSetPieceSprite(sprites, scene.getSetPiece(setPieceName));
            });
        };

        function updateCharacterSprite(sprites, character) {
            _.each(character.getSprites(), function (spriteName) {
                sprites[spriteName].x = character.x;
                sprites[spriteName].y = character.y;

                if(sprites[spriteName].currentAnimation != character.state) {
                    sprites[spriteName].gotoAndPlay(character.state);
                }
            });
        }

        function updateSetPieceSprite(sprites, setPiece) {
            _.each(setPiece.getSprites(), function (spriteName) {
                if(sprites[spriteName].currentAnimation != setPiece.state) {
                    sprites[spriteName].gotoAndPlay(setPiece.state);
                }
            });
        }

        function createSprite(config) {
            var spritesheet = new createjs.SpriteSheet(config.spritesheet),
                sprite = new createjs.BitmapAnimation(spritesheet);

            // Set sprite properties - x, y, scale etc
            _.each(config.properties, function (property, propertyName) {
                sprite[propertyName] = property;
            }, this);

            return sprite;
        }

        return EaselDisplay;
    }
);