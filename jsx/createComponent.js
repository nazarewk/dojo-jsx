define([
  'react/react',
  'react/react-dom'
], function (React, ReactDOM) {
  return createComponent;

  function createComponent(kwargs) {
    var type = React.createClass(kwargs);
    var factory = React.createFactory(type);
    // factory.type === type
    factory.render = render;
    return factory;

    function render(kwargs, node) {
      return ReactDOM.render(factory(kwargs), node);
    }
  }
});