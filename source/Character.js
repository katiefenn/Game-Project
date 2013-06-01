define(
	'Character',
	[],
	function () {
		function Character (config) {
		    this.spriteConfig = config;
		    this.state = 'idle';
		    this.x = 0;
		    this.y = 0;
		}

		Character.prototype.setState = function(state) {
			this.state = 'state';
		};

		return Character;
	}
);