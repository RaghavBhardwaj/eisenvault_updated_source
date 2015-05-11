define(["dojo/_base/declare","alfresco/core/ProcessWidgets","alfresco/core/ObjectProcessingMixin","dojo/_base/lang"],function(b,c,a,e){return b([c,a],{postCreate:function d(){var f=e.clone(this.widgets);this.processObject(["processCurrentItemTokens","convertNodeRefToUrl","processInstanceTokens"],f);this.processWidgets(f,this.domNode)},widgets:[{name:"alfresco/buttons/AlfButton",config:{label:"Add Comment",publishTopic:"ALF_CREATE_FORM_DIALOG_REQUEST",publishPayloadType:"PROCESS",publishPayloadModifiers:["processCurrentItemTokens","convertNodeRefToUrl"],publishPayload:{dialogTitle:"Add Comment",dialogConfirmationButtonTitle:"Add",dialogCancellationButtonTitle:"Cancel",formSubmissionTopic:"ALF_CRUD_CREATE",formSubmissionPayloadMixin:{url:"api/node/{nodeRef}/comments",pubSubScope:"{pubSubScope}"},additionalCssClasses:"no-padding",fixedWidth:true,widgets:[{name:"alfresco/forms/controls/TinyMCE",config:{name:"content"}}]},publishGlobal:true,renderFilter:[{target:"currentMetadata",property:"parent.permissions.user.CreateChildren",values:[true]}]}},{name:"alfresco/lists/AlfList",config:{waitForPageWidgets:false,loadDataPublishTopic:"ALF_CRUD_GET_ALL",loadDataPublishPayload:{url:"components/node/{nodeRef}/comments?reverse=true&startIndex=0&pageSize=10",urlType:"SHARE"},documentsLoadedTopic:"ALF_COMMENTS_LOADED",widgets:[{name:"alfresco/documentlibrary/views/AlfDocumentListView",config:{widgets:[{name:"alfresco/documentlibrary/views/layouts/Row",config:{generatePubSubScope:true,widgets:[{name:"alfresco/documentlibrary/views/layouts/Cell",config:{widgets:[{name:"alfresco/documentlibrary/views/layouts/Column",config:{widgets:[{name:"alfresco/documentlibrary/views/layouts/Cell",config:{widgets:[{name:"alfresco/renderers/Date",config:{modifiedDateProperty:"modifiedOnISO",modifiedByProperty:"author.username"}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{widgets:[{name:"alfresco/renderers/EditableComment",config:{propertyToRender:"content"}}]}}]}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{widgets:[{name:"alfresco/renderers/PublishAction",config:{iconClass:"edit-16",publishTopic:"ALF_EDIT_COMMENT",renderFilter:[{property:"permissions.edit",values:[true]}]}},{name:"alfresco/renderers/PublishAction",config:{iconClass:"delete-16",publishTopic:"ALF_CRUD_DELETE",publishPayloadType:"PROCESS",publishPayload:{url:"{url}",confirmationTitle:"Delete Comment",confirmationPrompt:"Are you sure you want to delete the comment'?",successMessage:"Successfully deleted",requiresConfirmation:true,pubSubScope:"{pubSubScope}"},publishGlobal:true,publishPayloadModifiers:["processCurrentItemTokens"],renderFilter:[{property:"permissions.delete",values:[true]}]}}]}}]}}]}}]}}]})});