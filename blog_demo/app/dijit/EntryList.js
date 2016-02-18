define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dojo/dom-construct',
  'dojo/on',
  './Entry'
], function (declare, _WidgetBase, domConstruct, on, Entry) {
  return declare([_WidgetBase], {
    constructor: function constructor() {
      this.inherited(arguments);
      // Instantiate the variable inside constructor, because it is
      // object-specific, not class-specific
      this.entries = [];
    },

    buildRendering: function buildRendering() {
      // This is where the DOM tree is built in dijit

      // this.domNode is a <div> created higher in inheritance hierarchy
      this.inherited(arguments);

      // Build the preface the proper dojo's domConstruct way
      domConstruct.create('h1', {
        innerHTML: 'Dojo + Dijit version'
      }, this.domNode);
      domConstruct.create('p', {
        innerHTML: 'Click to display alert'
      }, this.domNode);

      this.listNode = domConstruct.create('ul', {}, this.domNode);

      // Build the files list from HTML text
      var files = '\
        <h2>Files list:</h2>\
        <ul> \
          <li><a href="app/main.jsx" target="_blank">app/main.jsx</a></li> \
          <li><a href="app/dijit/Entry.js" target="_blank">app/dijit/Entry.js</a></li> \
          <li><a href="app/dijit/EntryList.js" target="_blank">app/dijit/EntryList.js</a></li> \
        </ul>';
      domConstruct.place(
        domConstruct.toDom(files), // contruct DOM from text
        this.domNode
      );
    },

    postCreate: function postCreate() {
      // We have to manually create child widgets, then destroy them later

      // It could be located at buildRendering(), but i prefer to build widgets
      // in postCreate()
      this.inherited(arguments);
      var that = this;
      that.entries = that.item.map(function (entry) {
        return new Entry({item: entry}).placeAt(that.listNode);
      });
    },

    destroy: function destroy() {
      // We have to manually destroy child widgets to avoid memory leaks
      this.inherited(arguments);
      this.entries.forEach(function (entry) {
        entry.destroy();
      })
    }
  });
});