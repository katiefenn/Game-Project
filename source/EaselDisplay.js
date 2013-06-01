define(
    'EaselDisplay',
    ['easel', 'preload'],
    function (createjs, preload) {
        function EaselDisplay () {
            this.stage = new createjs.Stage(document.getElementById('canvas'));
            this.state = 'stopped';
            this.sprites = {};
        }

        EaselDisplay.prototype.runScene = function (scene) {
            this.currentScene = scene;
            var This = this;
            this.loadSprites(scene.getSpritesheetConfig(), scene.getSpriteConfig(), function () {
                This.startScene();
            });
        };

        EaselDisplay.prototype.loadSprites = function (spritesheetConfig, spriteConfig, onComplete) {
            var manifest = [],
                assets = [];

            spriteConfig.forEach(function(spriteConfigItem) {
                var spriteSheet = new createjs.SpriteSheet(spritesheetConfig[spriteConfigItem.spritesheet]),
                    sprite = new createjs.BitmapAnimation(spriteSheet);

                // Set sprite properties - x, y, scale etc
                for(propertyName in spriteConfigItem.properties) {
                    if(spriteConfigItem.properties.hasOwnProperty(propertyName)) {
                        sprite[propertyName] = spriteConfigItem.properties[propertyName];
                    }
                }

                this.sprites[spriteConfigItem.name] = sprite;

                // Add image to loader manifiest - not expecting sprites with > 1 image
                manifest.push({src: spritesheetConfig[spriteConfigItem.spritesheet].images[0], id: spriteConfigItem.name});
            }, this);

            // Load sprite images
            loader = new preload.LoadQueue(false);
            loader.onFileLoad = function(event) {
                assets.push(event.item);
            };
            loader.onComplete = function() {
                onComplete();
            };
            loader.loadManifest(manifest);
        };

        EaselDisplay.prototype.startScene = function () {
            for(sprite in this.sprites) {
                if(this.sprites.hasOwnProperty(sprite)) {
                    this.sprites[sprite].gotoAndPlay('idle');
                    this.stage.addChild(this.sprites[sprite]);            
                }
            }

            createjs.Ticker.setFPS(40);
            var This = this;
            createjs.Ticker.addEventListener("tick", function() {
                This.stage.update();
            });
            
            this.state = "running";
        };

        EaselDisplay.prototype.getCurrentScene = function() {
            return this.currentScene;
        };

        EaselDisplay.prototype.isRunning = function() {
            return this.state == 'running';
        };

        return EaselDisplay;
    }
);