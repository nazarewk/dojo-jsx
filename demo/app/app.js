require([
    'react/react-dom',
    'jsx/load!app/Comment'
], function (ReactDOM, Comment) {
    var container = document.getElementById('app');
    return ReactDOM.render(Comment(), container);
});