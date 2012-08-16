/**
 * makes a request to a wiki-entry.
 *
 */

var request = require("request");

/**
 * sanitizes an entry name.
 *
 * e. g. "Edgar Wasser" => "Edgar_Wasser"
 * e. g. "edgar wasser" => "Edgar_Wasser"
 *
 * makes the first char of a word upper case and substitutes all spaces with _
 *
 * @return string
 * @access public
 * @final
 */
function sanitizeEntry (entry) {

    var parts     = entry.split(" ");
    var sanitized = "";

    var length = parts.length;
    for (var i = 0; i <= length - 2; i += 1) {
        sanitized = parts[i][0].toUpperCase() + parts[i].substr(1) + "_";
    }
    sanitized += parts[length - 1][0].toUpperCase() + parts[length - 1].substr(1);

    return sanitized;
}

/**
 * checks if rapedia has an entry for <artist>.
 *
 * @param object entry {"wiki": <string>, "name": <string>}
 * @returns boolean
 * @access public
 * @final
 */
this.hasEntry = function (entry, callback) {

    request(entry.wiki + sanitizeEntry(entry.name), function (error, response, body) {

        if (   response.statusCode === 404
            || response.statusCode === 403) {

            callback(null, false);
            return;
        }

        callback(null, true);
    });
};
