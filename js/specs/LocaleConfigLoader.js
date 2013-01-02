describe("A LocaleConfigLoader loads JSON Locale config files and", function () {
    it("should supply JSON config on demand", function () {
        var config,
            callback = jasmine.createSpy('callback'),
            localeConfigLoader = new LocaleConfigLoader();

        runs(function () {
            localeConfigLoader.load('kakariko-village', callback);
        });

        waitsFor(function () {
            return callback.calls.length > 0;
        }, "the loaded config to be returned", 1000);

        runs(function () {
            expect(callback).toHaveBeenCalled();
            expect(Object.prototype.toString.call(callback.calls[0].args[0].spriteConfig)).toEqual('[object Array]');
        });
    });
});