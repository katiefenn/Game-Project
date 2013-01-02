function LocaleConfigLoader () {
    this.images = [];
}

LocaleConfigLoader.prototype.load = function (localeId, onLoad) {
    this.onLoad = onLoad;
    jQuery.ajax({
        url: 'json/locales/' + localeId + '.json',
        dataType: 'json',
        success: this.onLoad
    });
}