define(
    'Keyboard',
    [],
    function () {

        function Keyboard () {
            this.keys = [];
            this.keyMappings = {
                left: [37],
                up: [38],
                right: [39],
                down: [40],
                action: [32]
            };

            this.keyMappings = [];
            this.keyMappings[37] = 'left';
            this.keyMappings[38] = 'up';
            this.keyMappings[39] = 'right';
            this.keyMappings[40] = 'down';
            this.keyMappings[32] = 'action';

            this.observers = [];
            this.keyBuffer = [];
        }

        Keyboard.prototype.listen = function (keys) {
            this.keys = keys;
            var This = this;

            jQuery(document).bind('keydown', function (event) {
                event.preventDefault();
                This.handleKeydownEvent(event);
            });

            jQuery(document).bind('keyup', function (event) {
                event.preventDefault();
                This.handleKeyupEvent(event);
            });

            (function animloop(){
                setTimeout(function () {
                    requestAnimationFrame(animloop);
                    This.notify();
                    //This.keyBuffer.length = 0;
                }, 1000 / 30);
            })();
        };

        Keyboard.prototype.handleKeydownEvent = function (event) {
            if (!_.isUndefined(this.keyMappings[event.keyCode])) {
                if (!_.contains(this.keyBuffer, this.keyMappings[event.keyCode])) {
                    this.keyBuffer.push(this.keyMappings[event.keyCode]);
                }
            }
        };

        Keyboard.prototype.handleKeyupEvent = function(event) {
            if (!_.isUndefined(this.keyMappings[event.keyCode])) {
                var keyMapping = this.keyMappings[event.keyCode];
                if (_.contains(this.keyBuffer, keyMapping)) {
                    this.keyBuffer.splice(this.keyBuffer.indexOf(keyMapping));
                }
            }
        };

        Keyboard.prototype.addObserver = function (observer) {
            this.observers.push(observer);
        };

        Keyboard.prototype.notify = function () {
            _.each(this.observers, function (observer) {
                observer.update(this.keyBuffer);
            }, this);
        };

        return Keyboard;
    }
);