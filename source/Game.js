define(
    'Game',
    ['EaselDisplay', 'DemoModule', 'underscore'],
    function (EaselDisplay, DemoModule, _) {

        function Game (options) {
            this.display = new EaselDisplay();
            var defaults = {
                module: new DemoModule()
            };
            this.settings = _.extend(defaults, options);
        }

        Game.prototype.start = function() {
            this.settings.module.run(this.display);
        };

        return Game;
    }
);