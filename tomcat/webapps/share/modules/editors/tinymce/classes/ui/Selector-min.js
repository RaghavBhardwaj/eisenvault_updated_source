define("tinymce/ui/Selector",["tinymce/util/Class"],function(c){function g(l){var h=[],j=l.length,k;while(j--){k=l[j];if(!k.__checked){h.push(k);k.__checked=1}}j=h.length;while(j--){delete h[j].__checked}return h}var f=/^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i;var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=/^\s*|\s*$/g,d;var b=c.extend({init:function(i){var k=this.match;function j(q){if(q){q=q.toLowerCase();return function(r){return q==="*"||r.type===q}}}function o(q){if(q){return function(r){return r._name===q}}}function l(q){if(q){q=q.split(".");return function(s){var r=q.length;while(r--){if(!s.hasClass(q[r])){return false}}return true}}}function h(r,s,q){if(r){return function(t){var u=t[r]?t[r]():"";return !s?!!q:s==="="?u===q:s==="*="?u.indexOf(q)>=0:s==="~="?(" "+u+" ").indexOf(" "+q+" ")>=0:s==="!="?u!=q:s==="^="?u.indexOf(q)===0:s==="$="?u.substr(u.length-q.length)===q:false}}}function n(q){var r;if(q){q=/(?:not\((.+)\))|(.+)/i.exec(q);if(!q[1]){q=q[2];return function(u,s,t){return q==="first"?s===0:q==="last"?s===t-1:q==="even"?s%2===0:q==="odd"?s%2===1:u[q]?u[q]():false}}else{r=m(q[1],[]);return function(s){return !k(s,r)}}}}function p(q,r,u){var t;function s(v){if(v){r.push(v)}}t=f.exec(q.replace(e,""));s(j(t[1]));s(o(t[2]));s(l(t[3]));s(h(t[4],t[5],t[6]));s(n(t[7]));r.psuedo=!!t[7];r.direct=u;return r}function m(r,t){var v=[],q,u,s;do{a.exec("");u=a.exec(r);if(u){r=u[3];v.push(u[1]);if(u[2]){q=u[3];break}}}while(u);if(q){m(q,t)}r=[];for(s=0;s<v.length;s++){if(v[s]!=">"){r.push(p(v[s],[],v[s-1]===">"))}}t.push(r);return t}this._selectors=m(i,[])},match:function(o,v){var p,k,q,m,n,x,u,j,s,h,t,r,w;v=v||this._selectors;for(p=0,k=v.length;p<k;p++){n=v[p];m=n.length;w=o;r=0;for(q=m-1;q>=0;q--){j=n[q];while(w){if(j.psuedo){t=w.parent().items();s=h=t.length;while(s--){if(t[s]===w){break}}}for(x=0,u=j.length;x<u;x++){if(!j[x](w,s,h)){x=u+1;break}}if(x===u){r++;break}else{if(q===m-1){break}}w=w.parent()}}if(r===m){return true}}return false},find:function(j){var o=[],m,h,k=this._selectors;function n(u,r,t){var s,q,w,v,x,p=r[t];for(s=0,q=u.length;s<q;s++){x=u[s];for(w=0,v=p.length;w<v;w++){if(!p[w](x,s,q)){w=v+1;break}}if(w===v){if(t==r.length-1){o.push(x)}else{if(x.items){n(x.items(),r,t+1)}}}else{if(p.direct){return}}if(x.items){n(x.items(),r,t)}}}if(j.items){for(m=0,h=k.length;m<h;m++){n(j.items(),k[m],0)}if(h>1){o=g(o)}}if(!d){d=b.Collection}return new d(o)}});return b});