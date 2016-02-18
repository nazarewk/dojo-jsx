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
      ),
      React.createElement(
        "h2",
        null,
        "Files list:"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "app/main.jsx" },
            "app/main.jsx"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "app/ReactEntryList.jsx" },
            "app/ReactEntryList.jsx"
          )
        )
      )
    );
  };
});

//# sourceMappingURL=ReactEntryList.js.map