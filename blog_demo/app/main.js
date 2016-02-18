'use strict';

define(['react/react-dom', 'dojo/dom', './ReactEntryList', './dijit/EntryList'], function (ReactDOM, dom, ReactEntryList, dijitEntryList) {
  var entries = [1, 2, 3, 4, 5].map(function (i) {
    return {
      title: 'Title ' + i,
      onClick: function onClick() {
        return alert('Message ' + i);
      }
    };
  });

  ReactDOM.render(React.createElement(ReactEntryList, { entries: entries }), dom.byId('react'));

  new dijitEntryList({ item: entries }).placeAt(dom.byId('dijit'));
});

//# sourceMappingURL=main.js.map