/**
 * rapedia-check checks if an artist has a wiki entry on rapedia.de
 *
 */
var check = require("./lib/check.js");

this.hasEntry = function hasEntry (entry, callback) {

    if (   typeof entry.wiki == "undefined"
        || entry.wiki.length === 0) {

        callback({
            "msg": "No wiki given."
        });

        return;
    }

    if (   typeof entry.name == "undefined"
        || entry.name.length === 0) {

        callback({
            "msg": "No entry name given."
        });

        return;
    }

    check.hasEntry(entry, callback);
};
