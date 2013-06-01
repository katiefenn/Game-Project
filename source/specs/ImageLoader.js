describe("An ImageLoader loads image files from the filesystem and", function () {
    it("should load images by path and return native Image objects when loaded", function () {
        var path = 'img/kakariko_village.png',
            callback = jasmine.createSpy('callback'),
            imageLoader = new ImageLoader();

        runs(function () {
            imageLoader.load(path, callback);
        });

        waitsFor(function () {
            return callback.calls.length > 0;
        }, "the image to load", 500);

        runs(function () {
            expect(callback).toHaveBeenCalled();
            expect(callback.calls[0].args[0].nodeName).toEqual('IMG');
            imageLoader.load(path, callback);
            expect(callback.calls[1].args[0].nodeName).toEqual('IMG');
        });
    });
});