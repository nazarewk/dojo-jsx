'use strict';

define(['dojo/dom', './ReactEntryList', './dijit/EntryList'], function (dom, ReactEntryList, dijitEntryList) {
  // Generate 5 entries
  var entries = [1, 2, 3, 4, 5].map(function (i) {
    return {
      title: 'Title ' + i,
      onClick: function onClick() {
        return alert('Message ' + i);
      }
    };
  });

  // Render them with React
  ReactDOM.render(React.createElement(ReactEntryList, { entries: entries }), dom.byId('react'));

  // Render them as custom Dijit widget
  // basically the first argument to _WidgetBase constructor gets mixed into
  // the widget object inside _WidgetBase.postMixInProperties()
  new dijitEntryList({
    item: entries
  }).placeAt(dom.byId('dijit'));
});

//# sourceMappingURL=main.js.map