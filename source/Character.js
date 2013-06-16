define(
	'Character',
	[],
	function () {
		function Character (config) {
		    this.spriteConfig = config;
		    this.state = 'idle';
		    this.x = 0;
		    this.y = 0;
		    this.sprites = [];

		    _.each(this.spriteConfig.sprites, function (configItem) {
		    	this.sprites.push(configItem.name);
		    }, this);
		}

		Character.prototype.getSprites = function() {
			return this.sprites;
		};

		return Character;
	}
);