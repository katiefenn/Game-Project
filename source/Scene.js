define(
    'Scene',
    ['underscore'],
    function (_) {
        function Scene (locale, characters, scripts) {
            this.locale = locale;
            this.characters = characters;
            this.scripts = scripts;
        }

        Scene.prototype.getSpriteConfig = function () {
            var spriteConfig = [];
            if(this.locale.spriteConfig.sprites.length > 0) {
                spriteConfig = spriteConfig.concat(this.locale.spriteConfig.sprites);
            }

            _.each(this.characters, function (character) {
                spriteConfig = spriteConfig.concat(character['spriteConfig']['sprites']);
            }, this);

            return spriteConfig;
        }

        Scene.prototype.getCharacter = function(name) {
            if(!_.isUndefined(this.characters['name'])) {
                return this.characters[name];
            }
        };

        Scene.prototype.getPlayerCharacter = function() {
            if(!_.isUndefined(this.characters['player-character'])) {
                return this.characters['player-character'];
            }
        }

        return Scene;
    }
);