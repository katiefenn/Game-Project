function ImageLoader () {
    this.images = [];
}

ImageLoader.prototype.load = function (path, onLoad) {
    this.onLoad = onLoad;
    var This = this;
    if (typeof this.images[path] == 'undefined') {
        this.images[path] = new Image();
        this.images[path].onload = function () {
            This.onLoad(This.images[path]);
        };
        this.images[path].src = path;
    } else {
        This.onLoad(this.images[path]);
    }
};