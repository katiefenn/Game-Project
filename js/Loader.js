function Loader() {
    this.totalToLoad = 0;
    this.resources = [];
}

Loader.prototype.load = function (resource, typeLoader, onAllLoaded) {
    this.typeLoader = typeLoader;
    this.onAllLoaded = onAllLoaded;

    if (Object.prototype.toString.call(resource) == '[object Array]') {
        this.loadMany(resource);
    }
    else if (typeof resource == "string") {
        this.loadOne(resource);
    }
    else {
        throw {
            name: 'Type error',
            level: 'Blocker',
            message: 'Resource provided to loader should be of type string or array'
        };
    }
};

Loader.prototype.loadOne = function (path) {
    this.loadMany([path]);
};

Loader.prototype.loadMany = function (paths) {
    var This = this;
    this.totalToLoad = paths.length;
    for (var index = 0, totalToLoad = paths.length; index < totalToLoad; index++) {
        this.typeLoader.load(paths[index], function (resource) {
            This.resources.push(resource);
            This.advanceProgress();
        });
    }
};

Loader.prototype.advanceProgress = function () {
    this.totalToLoad--;

    if (this.totalToLoad == 0) {
        this.onAllLoaded(this.resources);
    }
};