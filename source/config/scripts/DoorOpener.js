define(
	'config/scripts/DoorOpener',
	[],
	function () {
		function DoorOpener(setPieceName) {
			this.setPieceName = setPieceName;
			this.sleeping = false;
		}

		DoorOpener.prototype.listenTo = function(subject) {
			subject.on('change:character-state', this.toggleDoor, this);
		};

		DoorOpener.prototype.toggleDoor = function(event) {
			if(event.state == 'action' && !this.sleeping) {
				if(event.scene.getSetPiece(this.setPieceName).state != 'open') {
					event.scene.changeSetPieceState(this.setPieceName, 'open');
				} else {
					event.scene.changeSetPieceState(this.setPieceName, 'closed');
				}

				this.sleep();
			}
		};

		DoorOpener.prototype.sleep = function() {
			this.sleeping = true;

			setTimeout(function (sleeper) {
				sleeper.sleeping = false;
			}, 200, this);
		};

		return DoorOpener;
	}
);