# Changelog

# 2.0.0

* hasEntry executes the callback now with an object:

        {
            // boolean value of an entry exists.
            "status": <boolean>,
            // HTTP status code of the request.
            "code":   <number>,
            // URI to the entry.
            "uri":    <string>
        }
