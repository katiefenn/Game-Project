define(
    'Game',
    ['EaselDisplay', 'DemoModule'],
    function (EaselDisplay, DemoModule) {

        function Game (options) {
            this.settings = jQuery.extend({}, defaults, options);
            this.display = new EaselDisplay();

            var defaults = {};

            if (_.isUndefined(this.settings.module)) {
                this.settings.module = new DemoModule(this.display);
            }

            this.started = false;
        }

        Game.prototype.start = function() {
            this.settings.module.run();
        };

        return Game;
    }
);