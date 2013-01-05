function Display () {
    this.stage = new Kinetic.Stage({
        container: "container",
        width: 1425,
        height: 807 
    });
    this.sprites = {};
    this.foreGround = new Kinetic.Layer();
    this.backGround = new Kinetic.Layer();
    this.clipLayer = new Kinetic.Layer();
}

Display.prototype.displayScene = function (scene) {
    var This = this;
    this.currentScene = scene;

    this.loadSprites(scene.getSpriteConfig(), function () {
        This.startScene();
        This.addClipMap(This.currentScene.locale.clipConfig);
    });
};

Display.prototype.loadSprites = function (spriteConfig, onComplete) {
    var This = this,
        loader = new Loader(),
        images = [],
        imagePaths = [];

    for (var index = 0, length = spriteConfig.length; index < length; index++) {
        imagePaths.push(spriteConfig[index].imagePath);
    }

    loader.load(imagePaths, new ImageLoader(), function (loadedImages) {
        for (var index = 0, length = loadedImages.length; index < length; index++) {
            var loadedImage = loadedImages[index];
            images[loadedImage.getAttribute('src')] = loadedImage;
        }

        for (var index = 0, length = spriteConfig.length; index < length; index++) {
            var item = spriteConfig[index];
            item.image = images[item.imagePath];
            This.addSprite(item);
        }

        onComplete();
    });
};

Display.prototype.getSprite = function (spriteName) {
    return this.sprites[spriteName];
}

Display.prototype.addSprite = function (spriteConfig) {
    var sprite = new Kinetic.Sprite(spriteConfig);    

    if (spriteConfig.layer == 'foreground') {
        this.foreGround.add(sprite);        
    } else if (spriteConfig.layer == 'background') {
        this.backGround.add(sprite);
    }
    
    sprite.start();
    this.sprites[spriteConfig.name] = sprite;
}

Display.prototype.startScene = function () {
    this.stage.add(this.backGround);
    this.stage.add(this.foreGround);
    this.stage.add(this.clipLayer);
    this.onReady();
};

Display.prototype.addClipMap = function (clipConfig) {
    for(var index = 0, length = clipConfig.length; index < length; index++) {
        var polygon = new Kinetic.Polygon({
            points: clipConfig[index],
            name: 'clip-map',
            //fill: 'red',
            alpha: 0.5
        });
        this.clipLayer.add(polygon);
    }
}

Display.prototype.getIntersectionNames = function (point) {
    var intersectionNames = [],
        intersections = this.clipLayer.getIntersections(point);

    for (var index = 0, length = intersections.length; index < length; index++) {
        var intersectionName = intersections[index].getName();
        if (intersectionNames.indexOf(intersectionName) == -1) {
            intersectionNames.push(intersectionName);
        }
    }

    return intersectionNames;
}

Display.prototype.onReady = function (callback) {
    this.onReady = callback;
}