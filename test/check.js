var test  = require("tap").test;
var check = require("../").hasEntry;

test("Peter Young has an entry", function (t) {
    check({
        "wiki": "http://de.wikipedia.org/wiki/",
        "name": "Peter Young"
    }, function (error, entry) {
        t.ok(entry, "Peter Young");
    });
    check({
        "wiki": "http://de.wikipedia.org/wiki/",
        "name": "peter Young"
    }, function (error, entry) {
        t.ok(entry, "peter Young");
    });
    check({
        "wiki": "http://de.wikipedia.org/wiki/",
        "name": "peter young"
    }, function (error, entry) {
        t.ok(entry, "peter young");
        t.end();
    });
});

test("unknown foobar has no entry", function (t) {
    check({
        "wiki": "http://de.wikipedia.org/wiki/",
        "name": "unknown foobar"
    }, function (error, entry) {
        t.notOk(entry, "unknown foobar");
        t.end();
    });
});
