describe ("A Scene is a representation of the game on-screen and", function () {
    beforeEach(function () {
        mockLocale = {spriteConfig:[{},{},{}]};
        mockCharacters = [{spriteConfig:{}},{spriteConfig:{}}];
    });

    it("should supply sprite config on demand", function () {
        var scene = new Scene(mockLocale, mockCharacters, []);
        expect(scene.getSpriteConfig().length).toEqual(5);
    });
});