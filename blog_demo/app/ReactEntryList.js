"use strict";

define([], function () {
  var Entry = function Entry(_ref) {
    var entry = _ref.entry;
    return React.createElement(
      "li",
      { onClick: entry.onClick },
      entry.title
    );
  };

  return function (props) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Dojo + React version"
      ),
      React.createElement(
        "p",
        null,
        "Click to display alert"
      ),
      React.createElement(
        "ul",
        null,
        props.entries.map(function (entry, i) {
          return React.createElement(Entry, { entry: entry, key: i });
        })
      )
    );
  };
});

//# sourceMappingURL=ReactEntryList.js.map