(function(g){var k="",l;var e={},q=[],d=0;var f=document.getElementsByTagName("script");for(var h=0;h<f.length;h++){var a=f[h].src;if(a.indexOf("/plugin.dev.js")!=-1){l=a.substring(0,a.lastIndexOf("/"))}}function c(u,v){var t,r=[];for(var s=0;s<u.length;++s){t=e[u[s]]||p(u[s]);if(!t){throw"module definition dependecy not found: "+u[s]}r.push(t)}v.apply(null,r)}function p(t){var r=g;var i=t.split(/[.\/]/);for(var s=0;s<i.length;++s){if(!r[i[s]]){return}r=r[i[s]]}return r}function o(t){var r=g;var i=t.split(/[.\/]/);for(var s=0;s<i.length-1;++s){if(r[i[s]]===undefined){r[i[s]]={}}r=r[i[s]]}r[i[i.length-1]]=e[t]}function j(u,t,s){if(typeof u!=="string"){throw"invalid module definition, module id must be defined and be a string"}if(t===undefined){throw"invalid module definition, dependencies must be specified"}if(s===undefined){throw"invalid module definition, definition function must be specified"}c(t,function(){e[u]=s.apply(null,arguments)});if(--d===0){for(var r=0;r<q.length;r++){o(q[r])}}}function b(i){q=i}function n(){document.write(k)}function m(i){k+='<script type="text/javascript" src="'+l+"/"+i+'"><\/script>\n';d++}g.define=j;g.require=c;b(["tinymce/pasteplugin/Utils","tinymce/pasteplugin/Clipboard","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Quirks","tinymce/pasteplugin/Plugin"]);m("classes/Utils.js");m("classes/Clipboard.js");m("classes/WordFilter.js");m("classes/Quirks.js");m("classes/Plugin.js");n()})(this);