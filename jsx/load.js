/*
 This is Dojo loader which tries to load compiled `.js` files
 before attempting to compile `.jsx` using `babel-standalone`,
 unless the extension is explicitly specified.

 Throws 404s in development, but does not require code modifications for
 production.

 Sadly does not support relative paths.

 Example:
 'jsx/load!Component.js' -> loadJS() -> fail
 'jsx/load!Component.jsx' -> loadJSX() -> fail
 'jsx/load!Component' -> loadJS() -> loadJSX() -> fail


 Credits to Bonuspunkt for the general idea:
 https://gist.github.com/Bonuspunkt/1599ac960000a2dec56e
 */
//noinspection JSUnusedLocalSymbols
define([
    'dojo/_base/xhr',
    './babel',
    'react/react'
], function (xhr,
             Babel,
             React) {
    var cache = {};
    var jsRegex = /\.js$/;
    var jsxRegex = /\.jsx$/;

    return {
        dynamic: true,
        load: load
    };

    function normalize(url) {
        return url.replace(jsRegex, '').replace(jsxRegex, '');
    }

    function load(id, require, callback) {
        var url = require.toUrl(id);
        var js = jsRegex.test(url);
        var jsx = jsxRegex.test(url);

        url = normalize(url);

        if (url in cache) {
            callback(cache[url]);
        } else if (jsx) {
            loadJSX();
        } else {
            loadJS();
        }

        //noinspection JSUnusedLocalSymbols
        function define(moduleName, requiredModules, defineFn) {
            if (typeof moduleName !== 'string') {
                defineFn = requiredModules;
                requiredModules = moduleName;
            }
            if (typeof requiredModules === 'function') {
                defineFn = requiredModules;
                requiredModules = [];
            }

            require(requiredModules, function () {
                cache[url] = defineFn.apply(null, arguments);
                callback(cache[url]);
            });
        }

        function loadJS() {
            xhr.get({
                url: url + '.js',
                failOk: true,
                error: js ? null : loadJSX,
                load: eval
            });
        }

        function loadJSX() {
            xhr.get({
                url: url + '.jsx',
                load: transform
            });
        }

        function transform(text) {
            var transformed = Babel.transform(text, {
                presets: ['es2015', 'react']
            });

            // Passes `define` and `React` variables to the eval
            // React is required for compiled JSX to work
            eval(transformed.code);
        }

    }
});