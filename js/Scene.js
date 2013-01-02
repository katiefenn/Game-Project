function Scene (locale, characters, scripts) {
    this.locale = locale;
    this.characters = characters;
    this.scripts = scripts;
}

Scene.prototype.getSpriteConfig = function () {
    var spriteConfig = [];
    if (this.locale.spriteConfig.length > 0) {
        spriteConfig = spriteConfig.concat(this.locale.spriteConfig);
    }
    if (this.characters.length > 0) {
        for (var index = 0, length = this.characters.length; index < length; index++) {
            spriteConfig = spriteConfig.concat(this.characters[index]['spriteConfig']);
        }
    }

    return spriteConfig;
}