function Locale (config) {
    this.spriteConfig = [];
    for (var index = 0, length = config.spriteConfig.length; index < length; index++) {
        config.spriteConfig[index].animation = 'idle';
        config.spriteConfig[index].scale = [2, 2];
        config.spriteConfig[index].frameRate = 1;
        
        this.spriteConfig.push(config.spriteConfig[index]);
    }

    this.clipConfig = [];
    for (var index = 0, length = config.clipConfig.length; index < length; index++) {
        this.clipConfig.push(config.clipConfig[index]);
    }
}