(function(cobalt) {
  var plugin = {
    classes: {
      ios: 'CobaltSharePlugin',
      android: 'io.kristal.shareplugin.SharePlugin'
    },
    init: function() {
      cobalt.share = this.shareItem.bind(this);
    },
    shareItem: function(data, callback) {
      this.onShareResult = callback;
      cobalt.plugins.send(this, "share", data)
    },
    handleEvent: function(json) {
      if (typeof this.onShareResult === 'function') {
        this.onShareResult(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});

