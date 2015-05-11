define("tinymce/util/URI",["tinymce/util/Tools"],function(c){var d=c.each,a=c.trim;function b(g,h){var f=this,j,i;g=a(g);h=f.settings=h||{};if(/^([\w\-]+):([^\/]{2})/i.test(g)||/^\s*#/.test(g)){f.source=g;return}var e=g.indexOf("//")===0;if(g.indexOf("/")===0&&!e){g=(h.base_uri?h.base_uri.protocol||"http":"http")+"://mce_host"+g}if(!/^[\w\-]*:?\/\//.test(g)){i=h.base_uri?h.base_uri.path:new b(location.href).directory;if(h.base_uri.protocol===""){g="//mce_host"+f.toAbsPath(i,g)}else{g=((h.base_uri&&h.base_uri.protocol)||"http")+"://mce_host"+f.toAbsPath(i,g)}}g=g.replace(/@@/g,"(mce_at)");g=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(g);d(["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],function(k,m){var l=g[m];if(l){l=l.replace(/\(mce_at\)/g,"@@")}f[k]=l});j=h.base_uri;if(j){if(!f.protocol){f.protocol=j.protocol}if(!f.userInfo){f.userInfo=j.userInfo}if(!f.port&&f.host==="mce_host"){f.port=j.port}if(!f.host||f.host==="mce_host"){f.host=j.host}f.source=""}if(e){f.protocol=""}}b.prototype={setPath:function(f){var e=this;f=/^(.*?)\/?(\w+)?$/.exec(f);e.path=f[0];e.directory=f[1];e.file=f[2];e.source="";e.getURI()},toRelative:function(i){var f=this,e;if(i==="./"){return i}i=new b(i,{base_uri:f});if((i.host!="mce_host"&&f.host!=i.host&&i.host)||f.port!=i.port||(f.protocol!=i.protocol&&i.protocol!=="")){return i.getURI()}var g=f.getURI(),h=i.getURI();if(g==h||(g.charAt(g.length-1)=="/"&&g.substr(0,g.length-1)==h)){return g}e=f.toRelPath(f.path,i.path);if(i.query){e+="?"+i.query}if(i.anchor){e+="#"+i.anchor}return e},toAbsolute:function(f,e){f=new b(f,{base_uri:this});return f.getURI(this.host==f.host&&this.protocol==f.protocol?e:0)},toRelPath:function(k,m){var f,j=0,g="",h,e;k=k.substring(0,k.lastIndexOf("/"));k=k.split("/");f=m.split("/");if(k.length>=f.length){for(h=0,e=k.length;h<e;h++){if(h>=f.length||k[h]!=f[h]){j=h+1;break}}}if(k.length<f.length){for(h=0,e=f.length;h<e;h++){if(h>=k.length||k[h]!=f[h]){j=h+1;break}}}if(j===1){return m}for(h=0,e=k.length-(j-1);h<e;h++){g+="../"}for(h=j-1,e=f.length;h<e;h++){if(h!=j-1){g+="/"+f[h]}else{g+=f[h]}}return g},toAbsPath:function(h,j){var f,e=0,l=[],g,k;g=/\/$/.test(j)?"/":"";h=h.split("/");j=j.split("/");d(h,function(i){if(i){l.push(i)}});h=l;for(f=j.length-1,l=[];f>=0;f--){if(j[f].length===0||j[f]==="."){continue}if(j[f]===".."){e++;continue}if(e>0){e--;continue}l.push(j[f])}f=h.length-e;if(f<=0){k=l.reverse().join("/")}else{k=h.slice(0,f).join("/")+"/"+l.reverse().join("/")}if(k.indexOf("/")!==0){k="/"+k}if(g&&k.lastIndexOf("/")!==k.length-1){k+=g}return k},getURI:function(g){var f,e=this;if(!e.source||g){f="";if(!g){if(e.protocol){f+=e.protocol+"://"}else{f+="//"}if(e.userInfo){f+=e.userInfo+"@"}if(e.host){f+=e.host}if(e.port){f+=":"+e.port}}if(e.path){f+=e.path}if(e.query){f+="?"+e.query}if(e.anchor){f+="#"+e.anchor}e.source=f}return e.source}};return b});