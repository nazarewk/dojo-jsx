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
      this.entries = [];
    },

    buildRendering: function buildRendering() {
      this.inherited(arguments);
      domConstruct.create('h1', {
        innerHTML: 'Dojo + Dijit version'
      }, this.domNode);
      domConstruct.create('p', {
        innerHTML: 'Click to display alert'
      }, this.domNode);
      this.listNode = domConstruct.create('ul', {}, this.domNode);
      var files ='\
        <h2>Files list:</h2>\
        <ul> \
          <li><a href="app/main.jsx">app/main.jsx</a></li> \
          <li><a href="app/dijit/Entry.js">app/dijit/Entry.js</a></li> \
          <li><a href="app/dijit/EntryList.js">app/dijit/EntryList.js</a></li> \
        </ul>';
      domConstruct.place(domConstruct.toDom(files), this.domNode);
    },

    postCreate: function postCreate() {
      this.inherited(arguments);
      var that = this;
      that.entries = that.item.map(function (entry) {
        return new Entry({item: entry}).placeAt(that.listNode);
      });
    },

    startup: function startup() {
      this.inherited(arguments);
      this.entries.forEach(function (entry) {
        entry.startup();
      })
    }
  });
});