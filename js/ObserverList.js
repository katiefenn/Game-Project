function ObserverList () {
    this.observerList = [];
};

ObserverList.prototype.add = function (observer) {
    return this.observerList.push(observer);
};

ObserverList.prototype.empty = function () {
    this.observerList = [];
};

ObserverList.prototype.count = function () {
    return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function (observer, startIndex) {
    var index = startIndex,
        pointer = -1;

    while(index < this.observerList.length) {
        if(this.observerList[index] === observer) {
            pointer = index;
        }

        index++;
    }

    return pointer;
}

ObserverList.prototype.removeAtIndex = function (index) {
    if (index === 0) {
        this.observerList.shift();
    } else if (index === this.observerList.length -1) {
        this.observerList.pop();
    } else if (index > 0 && index < this.observerList.length -1) {
        this.observerList.splice(index, 1);
    }
}