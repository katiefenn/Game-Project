define(
    'Keyboard',
    [],
    function () {

        function Keyboard () {
            this.keys = [];

            this.keyMappings = [];
            this.keyMappings[37] = 'left';
            this.keyMappings[38] = 'up';
            this.keyMappings[39] = 'right';
            this.keyMappings[40] = 'down';
            this.keyMappings[32] = 'action';

            this.observers = [];
            this.keyBuffer = [];
            this.captureRate = 30;
        }

        Keyboard.prototype.listen = function () {
            var This = this;

            document.addEventListener('keydown', function(event) {
                event.preventDefault();
                This.handleKeydownEvent(event);
            });

            document.addEventListener('keyup', function(event) {
                event.preventDefault();
                This.handleKeyupEvent(event);
            });

            (function captureLoop(){
                setTimeout(function () {
                    requestAnimationFrame(captureLoop);
                    This.notify();
                }, 1000 / (This.captureRate));
            })();
        };

        Keyboard.prototype.handleKeydownEvent = function (event) {
            if (!_.isUndefined(this.keyMappings[event.which])) {
                if (!_.contains(this.keyBuffer, this.keyMappings[event.which])) {
                    this.keyBuffer.push(this.keyMappings[event.which]);
                }
            }
        };

        Keyboard.prototype.handleKeyupEvent = function(event) {
            if (!_.isUndefined(this.keyMappings[event.which])) {
                var keyMapping = this.keyMappings[event.which];
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