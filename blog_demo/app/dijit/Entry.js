define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dojo/dom-construct',
  'dojo/on'
], function (declare, _WidgetBase, domConstruct, on) {
  return declare([_WidgetBase], {
    constructor: function (options) {
      this.inherited(arguments);
      this.item = options.item;
    },

    buildRendering: function buildRendering() {
      this.domNode = domConstruct.create('li', {
        innerHTML: this.item.title
      });
    },

    startup: function startup() {
      this.inherited(arguments);
      this.signal = on(this.domNode, 'click', this.item.onClick);
    },

    destroy: function destroy() {
      this.signal.remove();
      this.inherited(arguments);
    }
  });
});