define(
    'Keyboard',
    ['ObserverList'],
    function (ObserverList) {

        function Keyboard () {
            this.keys = [];
            this.keyMappings = {
                left: [37],
                up: [38],
                right: [39],
                down: [40]
            };
            this.observers = [];
            this.keyBuffer = [];
        };

        Keyboard.prototype.listen = function (keys) {
            this.keys = keys;
            var This = this;

            jQuery(document).bind('keydown', function (event) {
                if (This.keys.indexOf(event.keyCode) != -1) {
                    event.preventDefault();
                    This.handleKeyEvent(event);
                }
            });

            (function animloop(){
                requestAnimationFrame(animloop);
                if (This.keyBuffer.length > 0) {
                    This.notify();
                    This.keyBuffer.length = 0;
                }
            })();
        };

        Keyboard.prototype.handleKeyEvent = function (event) {
            var keyMapping = {};

            for (keyMapping in this.keyMappings) {
                if (this.keyMappings[keyMapping].indexOf(event.keyCode) != -1) {
                    if (this.keyBuffer.indexOf(keyMapping) == -1) {
                        this.keyBuffer.push(keyMapping);
                    }
                }
            }
        };

        Keyboard.prototype.addObserver = function (observer) {
            this.observers.push(observer);
        };

        Keyboard.prototype.notify = function () {
            if (this.keyBuffer.length > 0) {
                _.each(this.observers, function (observer) {
                    observer.update(this.keyBuffer);
                }, this);
            }
        };

        return Keyboard;
    }
);