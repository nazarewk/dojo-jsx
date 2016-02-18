define([
  'react/react-dom',
  'dojo/dom',
  './ReactEntryList',
  './dijit/EntryList'
], (ReactDOM, dom, ReactEntryList, dijitEntryList) => {
  let entries = [1, 2, 3, 4, 5].map((i) => ({
    title: `Title ${i}`,
    onClick: () => alert(`Message ${i}`)
  }));

  ReactDOM.render(
    <ReactEntryList entries={entries}/>,
    dom.byId('react')
  );

  new dijitEntryList({item: entries}).placeAt(dom.byId('dijit'));
});