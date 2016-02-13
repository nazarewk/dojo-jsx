define([
    'react/react'
], function (React) {
    return createComponent;

    function createComponent(kwargs) {
        var cls = React.createClass(kwargs);
        var factory = React.createFactory(cls);
        factory.__class__ = cls;
        return factory;
    }
});