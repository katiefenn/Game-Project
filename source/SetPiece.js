define(
	'SetPiece',
	['underscore'],
	function (_) {
		function SetPiece (config) {
		    this.state = 'idle';
		    this.x = 0;
		    this.y = 0;
		    this.sprites = config.sprites;
		}

		SetPiece.prototype.getSprites = function() {
			return this.sprites;
		};

		return SetPiece;
	}
);