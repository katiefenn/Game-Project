define(
    'EaselDisplay',
    ['underscore', 'easel', 'preload'],
    function (_, createjs, preload) {
        function EaselDisplay () {
            this.stage = new createjs.Stage(document.getElementById('canvas'));
            this.state = 'stopped';
            this.sprites = {};
        }

        EaselDisplay.prototype.runScene = function (scene) {
            this.currentScene = scene;
            var This = this;
            this.loadSprites(scene.getSpriteConfig(), function () {
                This.startScene();
            });
        };

        EaselDisplay.prototype.loadSprites = function (config, onComplete) {
            var manifest = [],
                assets = [];

            _.each(config, function (configItem) {
                var spritesheet = new createjs.SpriteSheet(configItem.spritesheet),
                    sprite = new createjs.BitmapAnimation(spritesheet);

                // Set sprite properties - x, y, scale etc
                _.each(configItem.properties, function (property, propertyName) {
                    sprite[propertyName] = property;
                }, this);

                this.sprites[configItem.name] = sprite;

                // Add image to loader manifiest - not expecting sprites with > 1 image
                manifest.push({src: configItem.spritesheet.images[0], id: configItem.name});
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