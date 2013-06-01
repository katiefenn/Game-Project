describe("The Loader is an object that loads collections of resources and", function () {

    beforeEach(function () {
        loader = new Loader();
    });

    it("should load a single resource on its own", function () {
        var mockTypeLoader = {
            load: jasmine.createSpy('load')
        };

        loader.load('path/resource.extension', mockTypeLoader);
        expect(mockTypeLoader.load.calls.length).toEqual(1);

    });

    it("should load a collection of resources one-by-one", function () {
        var mockTypeLoader = {
            load: jasmine.createSpy('load')
        };

        loader.load(['path/resource.extension','path/resource2.extension'], mockTypeLoader);
        expect(mockTypeLoader.load.calls.length).toEqual(2);
    });

    it("should invoke a supplied callback when all resources have been loaded", function () {
        var mockTypeLoader = {
            load: function (resource, callback) {
                callback(resource);
            }},
            callback = jasmine.createSpy('callback'),
            resources = ['path/resource.extension','path/resource2.extension'];

        loader.load(resources, mockTypeLoader, callback);
        expect(callback).toHaveBeenCalled();
        expect(callback.calls.length).toEqual(1);
        expect(callback).toHaveBeenCalledWith(resources);
    });
});
