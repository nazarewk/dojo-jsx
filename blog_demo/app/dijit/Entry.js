define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dojo/dom-construct',
  'dojo/on'
], function (declare, _WidgetBase, domConstruct, on) {
  return declare([_WidgetBase], {

    buildRendering: function buildRendering() {
      // Normally this.domNode is a div created in super() call
      // this.inherited(arguments) in dojo's inheritance model
      // we'll skip it and create <li> instead
      this.domNode = domConstruct.create('li', {
        innerHTML: this.item.title
      });
    },

    postCreate: function postCreate() {
      this.inherited(arguments);
      this.signal = on(this.domNode, 'click', this.item.onClick);
    },

    destroy: function destroy() {
      this.signal.remove();
      this.inherited(arguments);
    }
  });
});