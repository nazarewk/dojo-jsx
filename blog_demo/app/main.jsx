define([
  'dojo/dom',
  './ReactEntryList',
  './dijit/EntryList'
], (dom, ReactEntryList, dijitEntryList) => {
  let entries = [1, 2, 3, 4, 5].map((i) => ({
    title: `Title ${i}`,
    onClick: () => alert(`Message ${i}`)
  }));

  ReactDOM.render(
    <ReactEntryList entries={entries}/>,
    dom.byId('react')
  );

  var widget = new dijitEntryList({item: entries});
  widget.placeAt(dom.byId('dijit'));
  widget.startup();
});