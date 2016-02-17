# dojo-jsx

Thin wrapper for loading Dojo + JSX modules in development environment.

[live demo](https://nazarewk.github.io/dojo-jsx/demo)

## Development quick start

1. `bower install dojo-jsx`
2. (optionally) set up `JSX` -> `JS` compiler,
3. prepend absolute (relative is not supported) module path with `jsx!`


## In-browser (development) example

### `/index.html`
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
            location: 'dojo-jsx/jsx'
        }, {
            name: 'app',
            location: '/app'
        }],
        deps: [
            'jsx!app/app'
        ]
    };
</script>
<script src="bower_components/dojo/dojo.js"></script>
</body>
</html>
```

### `/app/Comment.jsx`
```javascript
define([
], function () {
  return () => (
    <div className="commentBox">
      Hello, world! I am a CommentBox.
    </div>
  );
});
```

### `/app/app.jsx`
```javascript
require([
  'react/react-dom',
  'jsx!app/Comment'
], function (ReactDOM, Comment) {
  return ReactDOM.render(
    <Comment />,
    document.getElementById('app')
  )
});
```
