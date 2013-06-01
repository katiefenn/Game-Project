define(
    'Scene',
    [],
    function () {
        function Scene (locale, characters, scripts) {
            this.locale = locale;
            this.characters = characters;
            this.scripts = scripts;
        }

        Scene.prototype.getSpriteConfig = function () {
            var spriteConfig = [];
            if (this.locale.spriteConfig.sprites.length > 0) {
                spriteConfig = spriteConfig.concat(this.locale.spriteConfig.sprites);
            }

            for(character in this.characters) {
                if(this.characters.hasOwnProperty(character)) {
                    spriteConfig = spriteConfig.concat(this.characters[character]['spriteConfig']['sprites']);
                }
            }

            return spriteConfig;
        }

        Scene.prototype.getCharacter = function(name) {
            if(typeof this.characters['name'] != 'undefined') {
                return this.characters[name];
            }
        };

        Scene.prototype.getPlayerCharacter = function() {
            if(typeof this.characters['player-character'] != 'undefined') {
                return this.characters['player-character'];
            }
        }

        return Scene;
    }
);