require.config({
	baseUrl: 'source',
	shim: {
		easel: {
			exports: 'createjs'
		},
		preload: {
			exports: 'createjs'
		},
		underscore: {
			exports: '_'
		}
	},
	paths: {
		easel: 'libs/easeljs-0.6.0.min',
		preload: 'libs/preloadjs-0.3.0.min',
		underscore: 'libs/underscore-min'
	}
});

requirejs(['Game'],
	function (Game) {
	    game = new Game();
	    game.start();
	}
);