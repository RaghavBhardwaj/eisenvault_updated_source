define("tinymce/spellcheckerplugin/DomTextMatcher",[],function(){return function(u,e){var t,c=[],j,y=e.dom;var q,k,w;q=e.schema.getBlockElements();k=e.schema.getWhiteSpaceElements();w=e.schema.getShortEndedElements();function x(C,D){if(!C[0]){throw"findAndReplaceDOMText cannot handle zero-length matches"}return{start:C.index,end:C.index+C[0].length,text:C[0],data:D}}function a(C){var m;if(C.nodeType===3){return C.data}if(k[C.nodeName]&&!q[C.nodeName]){return""}m="";if(q[C.nodeName]||w[C.nodeName]){m+="\n"}if((C=C.firstChild)){do{m+=a(C)}while((C=C.nextSibling))}return m}function z(E,G,K){var C,J,H,D,L=[],I=0,F=E,m,M=0;G=G.slice(0);G.sort(function(O,N){return O.start-N.start});m=G.shift();out:while(true){if(q[F.nodeName]||w[F.nodeName]){I++}if(F.nodeType===3){if(!J&&F.length+I>=m.end){J=F;D=m.end-I}else{if(C){L.push(F)}}if(!C&&F.length+I>m.start){C=F;H=m.start-I}I+=F.length}if(C&&J){F=K({startNode:C,startNodeIndex:H,endNode:J,endNodeIndex:D,innerNodes:L,match:m.text,matchIndex:M});I-=(J.length-D);C=null;J=null;L=[];m=G.shift();M++;if(!m){break}}else{if((!k[F.nodeName]||q[F.nodeName])&&F.firstChild){F=F.firstChild;continue}else{if(F.nextSibling){F=F.nextSibling;continue}}}while(true){if(F.nextSibling){F=F.nextSibling;break}else{if(F.parentNode!==E){F=F.parentNode}else{break out}}}}}function n(C){function m(F,D){var E=c[D];if(!E.stencil){E.stencil=C(E)}var G=E.stencil.cloneNode(false);G.setAttribute("data-mce-index",D);if(F){G.appendChild(y.doc.createTextNode(F))}return G}return function(J){var Q,D,K,F=J.startNode,M=J.endNode,R=J.matchIndex,S=y.doc;if(F===M){var G=F;K=G.parentNode;if(J.startNodeIndex>0){Q=S.createTextNode(G.data.substring(0,J.startNodeIndex));K.insertBefore(Q,G)}var E=m(J.match,R);K.insertBefore(E,G);if(J.endNodeIndex<G.length){D=S.createTextNode(G.data.substring(J.endNodeIndex));K.insertBefore(D,G)}G.parentNode.removeChild(G);return E}else{Q=S.createTextNode(F.data.substring(0,J.startNodeIndex));D=S.createTextNode(M.data.substring(J.endNodeIndex));var O=m(F.data.substring(J.startNodeIndex),R);var N=[];for(var I=0,H=J.innerNodes.length;I<H;++I){var T=J.innerNodes[I];var P=m(T.data,R);T.parentNode.replaceChild(P,T);N.push(P)}var L=m(M.data.substring(0,J.endNodeIndex),R);K=F.parentNode;K.insertBefore(Q,F);K.insertBefore(O,F);K.removeChild(F);K=M.parentNode;K.insertBefore(L,M);K.insertBefore(D,M);K.removeChild(M);return L}}}function f(C){var m=C.parentNode;m.insertBefore(C.firstChild,C);C.parentNode.removeChild(C)}function v(m){var G=u.getElementsByTagName("*"),F=[];m=typeof(m)=="number"?""+m:null;for(var E=0;E<G.length;E++){var D=G[E],C=D.getAttribute("data-mce-index");if(C!==null&&C.length){if(C===m||m===null){F.push(D)}}}return F}function b(m){var C=c.length;while(C--){if(c[C]===m){return C}}return -1}function i(C){var m=[];d(function(D,E){if(C(D,E)){m.push(D)}});c=m;return this}function d(D){for(var C=0,m=c.length;C<m;C++){if(D(c[C],C)===false){break}}return this}function h(m){if(c.length){z(u,c,n(m))}return this}function p(m,C){if(j&&m.global){while((t=m.exec(j))){c.push(x(t,C))}}return this}function s(m){var C,D=v(m?b(m):null);C=D.length;while(C--){f(D[C])}return this}function r(m){return c[m.getAttribute("data-mce-index")]}function l(m){return v(b(m))[0]}function o(D,m,C){c.push({start:D,end:D+m,text:j.substr(D,m),data:C});return this}function g(C){var D=v(b(C));var m=e.dom.createRng();m.setStartBefore(D[0]);m.setEndAfter(D[D.length-1]);return m}function A(C,D){var m=g(C);m.deleteContents();if(D.length>0){m.insertNode(e.dom.doc.createTextNode(D))}return m}function B(){c.splice(0,c.length);s();return this}j=a(u);return{text:j,matches:c,each:d,filter:i,reset:B,matchFromElement:r,elementFromMatch:l,find:p,add:o,wrap:h,unwrap:s,replace:A,rangeFromMatch:g,indexOf:b}}});