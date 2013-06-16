define(
	'Locale',
	[],
	function () {
		function Locale (config) {
		    this.spriteConfig = config;
		    this.scripts = config.scripts;
		    this.setPieces = config.setPieces;
		}

		Locale.prototype.getScripts = function() {
			return scripts;
		};

		return Locale;
	}
);