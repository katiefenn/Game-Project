function LocaleConfigLoader () {
    this.images = [];
}

LocaleConfigLoader.prototype.load = function (localeId, callback) {
    jQuery.ajax({
        url: 'json/locales/' + localeId + '.json',
        dataType: 'json',
        success: callback,
        error: function (a, b, c) {
        	console.log(a);
        	console.log(b);
        }
    });
}