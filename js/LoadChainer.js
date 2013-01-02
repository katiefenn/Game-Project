function LoadChainer () {
    this.itemIndex = 0;
    this.loadedItems = [];
}

LoadChainer.prototype.load = function (itemsToLoad, onLoad) {
    this.onLoad = onLoad;
    this.itemsToLoad = itemsToLoad;

    this.loadNext();
}

LoadChainer.prototype.loadNext = function () {
    var loader = new Loader(),
        This = this;

    if (typeof this.itemsToLoad[this.itemIndex] != 'undefined') {
        var item = this.itemsToLoad[this.itemIndex];
        loader.load(item.resources, item.loader, function (resource) {
            This.loadedItems[This.itemIndex] = resource;
            This.itemIndex++;
            This.loadNext();
        });
    } else {
        this.onLoad(this.loadedItems);
    }
}