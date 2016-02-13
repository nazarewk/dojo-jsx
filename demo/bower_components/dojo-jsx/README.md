# dojo-jsx

Thin wrapper for loading Dojo + JSX modules.
# Development quick start

    bower install dojo-jsx

## `/index.html`
```html
<html>
<head></head>
<body>
<div id="app"></div>
<script>
    var dojoConfig = {
        async: true,
        baseUrl: '/bower_components/',
        packages: [{
            name: 'dojo',
            location: 'dojo'
        }, {
            name: 'react',
            location: 'react',
            main: 'react' /* this is crucial,
            otherwise dojo tries to load `react/main.js` and fails */
        }, {
            name: 'jsx',
            location: 'dojo-jsx/jsx' // Makes it easier to use
        }, {
            name: 'app',
            location: '/app'
        }],
        deps: [
            'app/app'
        ]
    };
</script>
<script src="bower_components/dojo/dojo.js"></script>
</body>
</html>
```

## `/app/Comment.jsx`
```javascript
define([
    'jsx/createComponent'
], function (createComponent) {
    return createComponent({
        render: function () {
            return (
                <div className="commentBox">
                    Hello, world! I am a CommentBox.
                </div>
            );
        }
    });
});
```

## `/app/app.js`
```javascript
require([
    'react/react-dom',
    'jsx/load!app/Comment'
], function (ReactDOM, Comment) {
    var container = document.getElementById('app');
    return ReactDOM.render(Comment(), container);
});
```