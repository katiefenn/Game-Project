function CharacterConfigLoader () {
    this.images = [];
}

CharacterConfigLoader.prototype.load = function (characterId, onLoad) {
    this.onLoad = onLoad;
    jQuery.ajax({
        url: 'json/characters/' + characterId + '.json',
        dataType: 'json',
        success: this.onLoad,
        error: function (error, textStatus, errorThrown) {
        	console.log(textStatus);
        	console.log(errorThrown);
        }
    });
}