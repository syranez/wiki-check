# wiki-check

A node module which checks if a wiki has an entry.

[![build status](https://secure.travis-ci.org/syranez/wiki-check.png)](http://travis-ci.org/syranez/wiki-check)

## Installation

`npm install wiki-check`

... or to install the package globally:

`npm install -g wiki-check`

## Usage

    var wikiCheck = request("wiki-check");

    wikiCheck.hasEntry({
        "wiki": "http://de.wikipedia.org/wiki/",
        "name": "some entry"
    }, function (error, entry) {

        if (error) {
            console.error("Upps: " + error.msg);
            return;
        }

        if (entry.status) {
            console.info("There is this entry: " + entry.uri);
        } else {
            console.info("There is NO entry. /o\ (HTTP status code: " + entry.code);
        }
    });

### API

#### __hasEntry__(entry, callback)

Checks if `entry.name` has an entry on Wiki `entry.wiki`. `entry.name` will be sanitized in Wiki-Notation, e. g. "some entry" becomes "Some_Entry". `entry.wiki`has to be an URL to a Wiki, e. g. "http://en.wikipedia.org/wiki/", watch the trailing slash.  
`callback` is a function with an error object as first parameter. That object has only one property: `error.msg`. The second parameter is this:

        {
            // boolean value of an entry exists.
            "status": <boolean>,
            // HTTP status code of the request.
            "code":   <number>,
            // URI to the entry.
            "uri":    <string>
        }

## Version scheme

The version scheme is this:

    {major-release}.{feature-release}.{bugfixes/maintaining}

 - Major release part

Changes that make your app crash if you update without modifying your code. The major release version is usally bumped if code structure changes happened, or something really exciting has happened. It breaks your stuff.

If you are using this module as dependency in live production apps, DO NOT wildcard this.

 - Feature release part

Introduces new features, that may work or not. You usually WANT this on development systems, but you DO NOT want this wildcarded in live production environments.

 - Bugfixes / maintaining part

Will be bumped everytime a bug is fixed or maintaining stuff (=all that does not break code, e. g. cosmetic code changes, comment stuff) has happend. You usually DO WANT bugs fixed on all your systems. Nothing is intended to break.

----------

If  you are unsure what to use:

 - Use __fixed__ version, e. g. 1.2.3, if you do not want any changes (fixes, features)
 - Use __bugfix channel__, e. g. ~1.2.3, if you just want bugfixes.
 - Use __feature channel__, e. g. 1. ** . **, if you want new features and can tolerate bugs.
 - Use __bleeding edge channel__ if you do not care about downtimes, breaks and bugs. You, Sir, are My best friend. Issue Tracker is open and I will answer your mails for sure.

If you are still not sure, use a fixed version.

## License

(The MIT License)

Copyright (c) 2012 Michael Nowack &lt;syranez@minaga-church.de&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
