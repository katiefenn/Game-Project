describe("A LoadChainer loads different resources that share a dependency and", function () {
    it("should load resources one-by-one and call a callback when all have loaded", function () {
        var mockTypeLoader = {
                load: function (resource, callback) {
                    callback(resource);
                }
            },
            loadChainer = new LoadChainer(),
            callback = jasmine.createSpy('callback'),
            items = [
                {resources: ['path1'], loader: mockTypeLoader},
                {resources: ['path2'], loader: mockTypeLoader}
            ];

        loadChainer.load(items, callback);

        expect(callback.calls.length).toEqual(1);
        //expect(callback).toHaveBeenCalledWith();
    });
});