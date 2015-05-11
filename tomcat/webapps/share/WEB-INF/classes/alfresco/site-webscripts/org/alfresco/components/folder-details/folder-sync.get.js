<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js">

function main()
{
   AlfrescoUtil.param('nodeRef');
   AlfrescoUtil.param('site', null);
   var nodeDetails = AlfrescoUtil.getNodeDetails(model.nodeRef, model.site,
   {
      actions: true
   });
   model.folderDetails = (nodeDetails != null);
   model.syncEnabled = (syncMode.getValue() != "OFF");
   
   // Widget instantiation metadata...
   // Note: both the document and folder sync use the same Alfresco.DocumentSync JS component
   var folderSync = {
      id: "FolderSync", 
      name: "Alfresco.DocumentSync",
      options: {
         nodeRef: model.nodeRef,
         siteId: model.site,
         documentDetails: nodeDetails,
         syncMode: syncMode.getValue()
      }
   };
   model.widgets = [folderSync];
}

main();