define(["dojo/_base/declare","alfresco/menus/AlfMenuBarItem","alfresco/menus/_AlfDisplayFilterMixin","alfresco/documentlibrary/_AlfDocumentListTopicMixin","dojo/_base/lang","dojo/_base/array"],function(c,b,a,g,f,h){return c([b,a,g],{postCreate:function e(){this.hide();this.filterTopic=this.metadataChangeTopic;this.inherited(arguments)},invertFilter:false,filter:function d(j){var i=f.exists("node.parent.properties.sync:directSync",j);if((i&&!this.invertFilter)||(!i&&this.invertFilter)){this.hide()}else{this.show()}}})});