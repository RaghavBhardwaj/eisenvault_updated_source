define("tinymce/ui/FilePicker",["tinymce/ui/ComboBox"],function(a){return a.extend({init:function(d){var b=this,c=tinymce.activeEditor,e;d.spellcheck=false;e=c.settings.file_browser_callback;if(e){d.icon="browse";d.onaction=function(){e(b.getEl("inp").id,b.getEl("inp").value,d.filetype,window)}}b._super(d)}})});