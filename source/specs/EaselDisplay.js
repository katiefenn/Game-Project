describe("EaselDisplay", function () {
    var display = new EaselDisplay(),
        sprite = {"name": "player-character", "spriteConfig": {"animations": {
            "up": {"frames": [0]}}, "images":
            ["img/player-character.png"], "frames": [[122, 122, 16, 22, 0, 0, 0]]}},
        scene = new Scene({}, [sprite], {}};

    it("should run a scene", function () {

        runs(function () {
            display.runScene(scene);
        });

        waitsFor(function () {
            return display.isRunning.toEqual(true);
        }, "the scene to load and run", 1000);

        runs(function () {
            expect(display.getCurrentScene()).toEqual(scene);
        });
    });

    it("should load a sprite", function () {
        var config,
            callback = jasmine.createSpy('callback');

        runs(function () {
            display.loadSprites([sprite], callback);
        });

        waitsFor(function () {
            return callback.calls.length > 0;
        }, "the sprites to be loaded", 1000);

        runs(function () {
            expect(callback).toHaveBeenCalled();
        });        
    });
});