'use strict';

define(['dojo/dom', './ReactEntryList', './dijit/EntryList'], function (dom, ReactEntryList, dijitEntryList) {
  var entries = [1, 2, 3, 4, 5].map(function (i) {
    return {
      title: 'Title ' + i,
      onClick: function onClick() {
        return alert('Message ' + i);
      }
    };
  });

  ReactDOM.render(React.createElement(ReactEntryList, { entries: entries }), dom.byId('react'));

  var widget = new dijitEntryList({ item: entries });
  widget.placeAt(dom.byId('dijit'));
  widget.startup();
});

//# sourceMappingURL=main.js.map