function Game (options) {
    this.settings = jQuery.extend({}, defaults, options);
    this.display = new EaselDisplay();
    this.controllers = [];

    var keyboard = new Keyboard;
    keyboard.listen([37, 38, 39, 40]);
    this.controllers.push(keyboard);

    var defaults = {};

    if (typeof this.settings.module == 'undefined') {
        this.settings.module = new DemoModule(this.display, this.controllers);
    }

    this.started = false;
}

Game.prototype.start = function() {
    this.settings.module.run();
};