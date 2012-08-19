var test  = require("tap").test;
var check = require("../").hasEntry;

test("Peter Young has an entry", function (t) {

    var wiki = "http://de.wikipedia.org/wiki/";

    check({
        "wiki": wiki,
        "name": "Peter Young"
    }, function (error, entry) {
        t.ok(entry.status, "Peter Young" + entry.code);
        t.same(entry.uri, wiki + "Peter_Young");
    });
    check({
        "wiki": wiki,
        "name": "peter Young"
    }, function (error, entry) {
        t.ok(entry.status, "peter Young");
        t.same(entry.uri, wiki + "Peter_Young");
    });
    check({
        "wiki": wiki,
        "name": "peter young"
    }, function (error, entry) {
        t.ok(entry.status, "peter young");
        t.same(entry.uri, wiki + "Peter_Young");
    });
    check({
        "wiki": wiki,
        "name": "unknown foobar"
    }, function (error, entry) {
        t.ok(!entry.status, "unknown foobar");
        t.same(entry.uri, null);
        t.end();
    });
});
