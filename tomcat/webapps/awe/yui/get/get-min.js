YAHOO.util.Get=function(){var m={},k=0,r=0,l=false,n=YAHOO.env.ua,s=YAHOO.lang,q,d,e,i=function(x,t,y){var u=y||window,z=u.document,A=z.createElement(x),v;for(v in t){if(t.hasOwnProperty(v)){A.setAttribute(v,t[v])}}return A},h=function(u,v,t){var w={id:"yui__dyn_"+(r++),type:"text/css",rel:"stylesheet",href:u};if(t){s.augmentObject(w,t)}return i("link",w,v)},p=function(u,v,t){var w={id:"yui__dyn_"+(r++),type:"text/javascript",src:u};if(t){s.augmentObject(w,t)}return i("script",w,v)},a=function(t,u){return{tId:t.tId,win:t.win,data:t.data,nodes:t.nodes,msg:u,purge:function(){d(this.tId)}}},b=function(t,w){var u=m[w],v=(s.isString(t))?u.win.document.getElementById(t):t;if(!v){q(w,"target node not found: "+t)}return v},c=function(w){var u=m[w],v,t;u.finished=true;if(u.aborted){v="transaction "+w+" was aborted";q(w,v);return}if(u.onSuccess){t=u.scope||u.win;u.onSuccess.call(t,a(u))}},o=function(v){var u=m[v],t;if(u.onTimeout){t=u.scope||u;u.onTimeout.call(t,a(u))}},f=function(v,A){var u=m[v],D=u.win,C=D.document,B=C.getElementsByTagName("head")[0],x,y,t,E,z;if(u.timer){u.timer.cancel()}if(u.aborted){y="transaction "+v+" was aborted";q(v,y);return}if(A){u.url.shift();if(u.varName){u.varName.shift()}}else{u.url=(s.isString(u.url))?[u.url]:u.url;if(u.varName){u.varName=(s.isString(u.varName))?[u.varName]:u.varName}}if(u.url.length===0){if(u.type==="script"&&n.webkit&&n.webkit<420&&!u.finalpass&&!u.varName){z=p(null,u.win,u.attributes);z.innerHTML='YAHOO.util.Get._finalize("'+v+'");';u.nodes.push(z);B.appendChild(z)}else{c(v)}return}t=u.url[0];if(!t){u.url.shift();return f(v)}if(u.timeout){u.timer=s.later(u.timeout,u,o,v)}if(u.type==="script"){x=p(t,D,u.attributes)}else{x=h(t,D,u.attributes)}e(u.type,x,v,t,D,u.url.length);u.nodes.push(x);if(u.insertBefore){E=b(u.insertBefore,v);if(E){E.parentNode.insertBefore(x,E)}}else{B.appendChild(x)}if((n.webkit||n.gecko)&&u.type==="css"){f(v,t)}},j=function(){if(l){return}l=true;var t,u;for(t in m){if(m.hasOwnProperty(t)){u=m[t];if(u.autopurge&&u.finished){d(u.tId);delete m[t]}}}l=false},g=function(u,t,v){var x="q"+(k++),w;v=v||{};if(k%YAHOO.util.Get.PURGE_THRESH===0){j()}m[x]=s.merge(v,{tId:x,type:u,url:t,finished:false,aborted:false,nodes:[]});w=m[x];w.win=w.win||window;w.scope=w.scope||w.win;w.autopurge=("autopurge" in w)?w.autopurge:(u==="script")?true:false;w.attributes=w.attributes||{};w.attributes.charset=v.charset||w.attributes.charset||"utf-8";s.later(0,w,f,x);return{tId:x}};e=function(H,z,x,u,D,E,G){var F=G||f,B,t,I,v,J,A,C,y;if(n.ie&&n.ie<11){z.onreadystatechange=function(){B=this.readyState;if("loaded"===B||"complete"===B){z.onreadystatechange=null;F(x,u)}}}else{if(n.webkit){if(H==="script"){if(n.webkit>=420){z.addEventListener("load",function(){F(x,u)})}else{t=m[x];if(t.varName){v=YAHOO.util.Get.POLL_FREQ;t.maxattempts=YAHOO.util.Get.TIMEOUT/v;t.attempts=0;t._cache=t.varName[0].split(".");t.timer=s.later(v,t,function(w){I=this._cache;A=I.length;J=this.win;for(C=0;C<A;C=C+1){J=J[I[C]];if(!J){this.attempts++;if(this.attempts++>this.maxattempts){y="Over retry limit, giving up";t.timer.cancel();q(x,y)}else{}return}}t.timer.cancel();F(x,u)},null,true)}else{s.later(YAHOO.util.Get.POLL_FREQ,null,F,[x,u])}}}}else{z.onload=function(){F(x,u)}}}};q=function(w,v){var u=m[w],t;if(u.onFailure){t=u.scope||u.win;u.onFailure.call(t,a(u,v))}};d=function(z){if(m[z]){var t=m[z],u=t.nodes,x=u.length,C=t.win.document,A=C.getElementsByTagName("head")[0],v,y,w,B;if(t.insertBefore){v=b(t.insertBefore,z);if(v){A=v.parentNode}}for(y=0;y<x;y=y+1){w=u[y];if(w.clearAttributes){w.clearAttributes()}else{for(B in w){if(w.hasOwnProperty(B)){delete w[B]}}}A.removeChild(w)}t.nodes=[]}};return{POLL_FREQ:10,PURGE_THRESH:20,TIMEOUT:2000,_finalize:function(t){s.later(0,null,c,t)},abort:function(u){var v=(s.isString(u))?u:u.tId,t=m[v];if(t){t.aborted=true}},script:function(t,u){return g("script",t,u)},css:function(t,u){return g("css",t,u)}}}();YAHOO.register("get",YAHOO.util.Get,{version:"2.9.0",build:"2800"});