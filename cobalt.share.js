(function(cobalt) {
    var plugin = {
        name: "share",
        init: function(options) {
            //create shortcuts
            cobalt.share = this.shareItem.bind(this);
            if (options) {
                cobalt.log("share.js init called with option ", options);
                this.config(options);
            }
        },
        config: function(settings) {
            cobalt.log("share.js config called with settings ", settings);
        },
        shareItem: function(data, callback) {
            this.send("share", data, function(data) {
                cobalt.log('share.js: function callback called with data:', data, " callback:", callback);
                if (typeof callback == 'function') {
                    callback(data);
                } else {
                    cobalt.log('share.js: received callback,', callback);
                }
            })
        },
        handleEvent: function(json) {
            cobalt.log("share.js handleEvent called", this.name, ' plugin : unknown event received :', json);
        },
        send: function(action, data, callback) {
            cobalt.log("share.js send called with action :", action, " callback :", callback, " data:", data);
            cobalt.send({
                type: "plugin",
                name: this.name,
                action: action,
                data: data,
            }, callback);
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});

