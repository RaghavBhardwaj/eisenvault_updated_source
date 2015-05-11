(function(){var f=YAHOO.util.Dom,n=YAHOO.util.Event,b=YAHOO.util.Selector;var d=Alfresco.util.encodeHTML,m=Alfresco.util.userProfileLink,q=Alfresco.Share.userAvatar;Alfresco.DocumentVersions=function g(r){Alfresco.DocumentVersions.superclass.constructor.call(this,"Alfresco.DocumentVersions",r,["datasource","datatable","paginator","history","animation"]);YAHOO.Bubbling.on("metadataRefresh",this.doRefresh,this);return this};YAHOO.extend(Alfresco.DocumentVersions,Alfresco.component.Base,{options:{nodeRef:null,siteId:"",containerId:null,allowNewVersionUpload:false},latestVersion:null,versionCache:null,dataSourceURLStem:Alfresco.constants.PROXY_URI+"api/version",onReady:function l(){var r=f.get(this.id+"-olderVersions");if(!r){return}this.widgets.alfrescoDataTable=new Alfresco.util.DataTable({dataSource:{url:this.dataSourceURLStem+"?nodeRef="+this.options.nodeRef,doBeforeParseData:this.bind(function(t,s){this.latestVersion=s.splice(0,1)[0];f.get(this.id+"-latestVersion").innerHTML=this.getDocumentVersionMarkup(this.latestVersion);this.versionCache=s;return({data:s})})},dataTable:{container:this.id+"-olderVersions",columnDefinitions:[{key:"version",sortable:false,formatter:this.bind(this.renderCellVersion)}],config:{MSG_EMPTY:this.msg("message.noVersions")}}});this.widgets.alfrescoDataTable.getDataTable().subscribe("renderEvent",function(){this.resizeHistoryDetails()},this,this);n.addListener(window,"resize",function(){this.resizeHistoryDetails()},this,true)},resizeHistoryDetails:function e(){var t=(f.getViewportWidth()*0.25)+"px",r=YAHOO.util.Selector.query("h3.thin",this.id+"-body");for(var s=0;s<r.length;s++){r[s].style.width=t}t=(f.getViewportWidth()*0.25-40)+"px",r=YAHOO.util.Selector.query("div.version-details-right",this.id+"-body");for(var s=0;s<r.length;s++){r[s].style.width=t}},renderCellVersion:function k(s,r,t,u){s.innerHTML=this.getDocumentVersionMarkup(r.getData())},getDocumentVersionMarkup:function h(s){var t=Alfresco.constants.PROXY_URI+"api/node/content/"+s.nodeRef.replace(":/","")+"/"+s.name+"?a=true",r="";r+='<div class="version-panel-left">';r+='   <span class="document-version">'+d(s.label)+"</span>";r+="</div>";r+='<div class="version-panel-right">';r+='   <h3 class="thin dark" style="width:'+(f.getViewportWidth()*0.25)+'px;">'+d(s.name)+"</h3>";r+='   <span class="actions">';if(this.options.allowNewVersionUpload){r+='   <a href="#" name=".onRevertVersionClick" rel="'+s.label+'" class="'+this.id+' revert" title="'+this.msg("label.revert")+'">&nbsp;</a>'}r+='      <a href="'+t+'" class="download" title="'+this.msg("label.download")+'">&nbsp;</a>';r+='      <a href="#" name=".onViewHistoricPropertiesClick" rel="'+s.nodeRef+'" class="'+this.id+' historicProperties" title="'+this.msg("label.historicProperties")+'">&nbsp;</a>';r+="   </span>";r+='   <div class="clear"></div>';r+='   <div class="version-details">';r+='      <div class="version-details-left">';r+=q(s.creator.userName,32);r+="      </div>";r+='      <div class="version-details-right">';r+=m(s.creator.userName,s.creator.firstName+" "+s.creator.lastName,'class="theme-color-1"')+" ";r+=Alfresco.util.relativeTime(Alfresco.util.fromISO8601(s.createdDateISO))+"<br />";r+=((s.description||"").length>0)?d(s.description,true):'<span class="faded">('+this.msg("label.noComment")+")</span>";r+="      </div>";r+="   </div>";r+="</div>";r+='<div class="clear"></div>';return r},onRevertVersionClick:function o(r){Alfresco.module.getRevertVersionInstance().show({filename:this.latestVersion.name,nodeRef:this.options.nodeRef,version:r,onRevertVersionComplete:{fn:this.onRevertVersionComplete,scope:this}})},onRevertVersionComplete:function c(){Alfresco.util.PopupManager.displayMessage({text:this.msg("message.revertComplete")});YAHOO.Bubbling.fire("previewChangedEvent");YAHOO.Bubbling.fire("metadataRefresh",{})},onViewHistoricPropertiesClick:function j(r){Alfresco.module.getHistoricPropertiesViewerInstance().show({filename:this.latestVersion.name,currentNodeRef:this.options.nodeRef,latestVersion:this.latestVersion,nodeRef:r})},onUploadNewVersionClick:function a(){if(!this.modules.fileUpload){this.modules.fileUpload=Alfresco.getFileUploadInstance()}var t=this.latestVersion,r=t.name,s="*";if(r&&new RegExp(/[^\.]+\.[^\.]+/).exec(r)){s="*"+r.substring(r.lastIndexOf("."))}this.modules.fileUpload.show({siteId:this.options.siteId,containerId:this.options.containerId,updateNodeRef:this.options.nodeRef,updateFilename:r,updateVersion:t.label,overwrite:true,suppressRefreshEvent:true,filter:[{description:this.msg("label.filter-description",r),extensions:s}],mode:this.modules.fileUpload.MODE_SINGLE_UPDATE,onFileUploadComplete:{fn:this.onNewVersionUploadComplete,scope:this}})},onNewVersionUploadComplete:function p(r){if(r.failed.length==0&&r.successful.length>0){if(this.options.siteId!=null&&this.options.siteId.length!=0){try{Alfresco.util.Ajax.jsonPost({url:Alfresco.constants.PROXY_URI+"slingshot/doclib/activity",dataObj:{fileName:r.successful[0].fileName,nodeRef:r.successful[0].nodeRef,site:this.options.siteId,type:"file-updated",page:"document-details"}})}catch(s){}}YAHOO.lang.later(0,this,function(){window.location=window.location.href.split("?")[0]+"?nodeRef="+r.successful[0].nodeRef})}},doRefresh:function i(){YAHOO.Bubbling.unsubscribe("metadataRefresh",this.doRefresh,this);this.refresh("components/document-details/document-versions?nodeRef={nodeRef}"+(this.options.siteId?"&site={siteId}":""))}})})();