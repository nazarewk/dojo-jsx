require([
  'react/react-dom',
  'jsx!app/Comment'
], function (ReactDOM, Comment) {
  return ReactDOM.render(
    <Comment />,
    document.getElementById('app')
  )
});