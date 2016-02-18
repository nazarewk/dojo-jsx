define([
  'dojo/dom',
  './ReactEntryList',
  './dijit/EntryList'
], (dom, ReactEntryList, dijitEntryList) => {
  // Generate 5 entries
  let entries = [1, 2, 3, 4, 5].map((i) => ({
    title: `Title ${i}`,
    onClick: () => alert(`Message ${i}`)
  }));

  // Render them with React
  ReactDOM.render(
    <ReactEntryList entries={entries}/>,
    dom.byId('react')
  );

  // Render them as custom Dijit widget
  // basically the first argument to _WidgetBase constructor gets mixed into
  // the widget object inside _WidgetBase.postMixInProperties()
  new dijitEntryList({
    item: entries
  }).placeAt(dom.byId('dijit'));
});