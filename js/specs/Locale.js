describe("A Locale is one area in the game world and", function () {
    beforeEach(function () {
        localeConfigMock = '{"spriteConfig":[{"name":"world","imagePath":"img/'
                         + 'kakariko_village.png","x":0,"y":0,"animation":{"do'
                         + 'wn":[{"x":0,"y":0,"width":1024,"height":1024}]}},{'
                         + '"name":"worldy","imagePath":"img/kakariko_village.'
                         + 'png","x":0,"y":0,"animation":{"down":[{"x":0,"y":0'
                         + ',"width":1024,"height":1024}]}}],"clipConfig":[[89'
                         + '6,688,1024,688,1024,736,928,736,928,832,896,832]]}';
    });

    it("should set its sprite config when supplied with JSON config", function () {
        var locale = new Locale(jQuery.parseJSON(localeConfigMock));
        expect(locale.spriteConfig.length).toEqual(2);
    });

    it("should set its clip config when supplied with JSON config", function () {
        var locale = new Locale(jQuery.parseJSON(localeConfigMock));
        expect(locale.clipConfig.length).toEqual(1);
    });

});