define(["dojo/_base/declare","alfresco/forms/SingleTextFieldForm","alfresco/forms/controls/ComboBox"],function(b,a,d){return b([a],{queryAttribute:"name",optionsPublishTopic:null,optionsPublishPayload:null,postMixInProperties:function c(){this.widgets=[{name:"alfresco/forms/controls/ComboBox",assignTo:"entryField",config:{label:(this.textBoxLabel!=null)?this.message(this.textBoxLabel):"",name:this.textFieldName,requirementConfig:{initialValue:true},iconClass:(this.textBoxIconClass!=null)?this.textBoxIconClass:"",additionalCssClasses:(this.textBoxCssClasses!=null)?this.textBoxCssClasses:"",optionsConfig:{queryAttribute:this.queryAttribute,publishTopic:this.optionsPublishTopic,publishPayload:this.optionsPublishPayload}}}]}})});