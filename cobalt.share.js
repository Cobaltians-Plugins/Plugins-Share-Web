(function(cobalt) {
  var plugin = {
    name: 'CobaltSharePlugin',
    classes: {
      ios: 'CobaltSharePlugin',
      android: 'io.kristal.shareplugin.SharePlugin'
    },
    init: function() {
      cobalt.share = this.shareItem.bind(this);
    },
    shareItem: function(data) {
      cobalt.plugins.send(this, "share", data)
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});

