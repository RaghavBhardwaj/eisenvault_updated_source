define(["dojo/_base/declare","alfresco/menus/AlfContextMenu","alfresco/renderers/_ActionsMixin","alfresco/menus/AlfMenuGroup"],function(a,e,c,b){return a([e,c],{postCreate:function d(){this.inherited(arguments);this.actionsGroup=new b({});this.addActions();this._contextMenu.addChild(this.actionsGroup)}})});