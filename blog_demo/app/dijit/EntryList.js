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
      this.listNode = domConstruct.create('h1', {
        innerHTML: 'Dojo + Dijit version'
      }, this.domNode);
      this.listNode = domConstruct.create('ul', {}, this.domNode);
    },

    postCreate: function postCreate() {
      var that = this;
      that.entries = that.item.map(function (entry) {
        return new Entry({item: entry}).placeAt(that.listNode);
      });
    }
  });
});