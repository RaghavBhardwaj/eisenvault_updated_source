define("tinymce/EnterKey",["tinymce/dom/TreeWalker","tinymce/dom/RangeUtils","tinymce/Env"],function(b,d,a){var c=a.ie&&a.ie<11;return function(h){var l=h.dom,g=h.selection,f=h.settings;var k=h.undoManager,i=h.schema,e=i.getNonEmptyElements();function j(E){var y,J,m,D,x,s,P,F,r,n,q,w,M,A,G;function H(Q){return Q&&l.isBlock(Q)&&!/^(TD|TH|CAPTION|FORM)$/.test(Q.nodeName)&&!/^(fixed|absolute)/i.test(Q.style.position)&&l.getContentEditable(Q)!=="true"}function I(R){var Q;if(l.isBlock(R)){Q=g.getRng();R.appendChild(l.create("span",null,"\u00a0"));g.select(R);R.lastChild.outerHTML="";g.setRng(Q)}}function C(S){var R=S,T=[],Q;while((R=R.firstChild)){if(l.isBlock(R)){return}if(R.nodeType==1&&!e[R.nodeName.toLowerCase()]){T.push(R)}}Q=T.length;while(Q--){R=T[Q];if(!R.hasChildNodes()||(R.firstChild==R.lastChild&&R.firstChild.nodeValue==="")){l.remove(R)}else{if(R.nodeName=="A"&&(R.innerText||R.textContent)===" "){l.remove(R)}}}}function p(R){var X,U,Q,T=R,S;function W(Y){while(Y){if(Y.nodeType==1||(Y.nodeType==3&&Y.data&&/[\r\n\s]/.test(Y.data))){return Y}Y=Y.nextSibling}}if(a.ie&&a.ie<9&&s&&s.firstChild){if(s.firstChild==s.lastChild&&s.firstChild.tagName=="BR"){l.remove(s.firstChild)}}if(R.nodeName=="LI"){var V=W(R.firstChild);if(V&&/^(UL|OL)$/.test(V.nodeName)){R.insertBefore(l.doc.createTextNode("\u00a0"),R.firstChild)}}Q=l.createRng();if(R.hasChildNodes()){X=new b(R,R);while((U=X.current())){if(U.nodeType==3){Q.setStart(U,0);Q.setEnd(U,0);break}if(e[U.nodeName.toLowerCase()]){Q.setStartBefore(U);Q.setEndBefore(U);break}T=U;U=X.next()}if(!U){Q.setStart(T,0);Q.setEnd(T,0)}}else{if(R.nodeName=="BR"){if(R.nextSibling&&l.isBlock(R.nextSibling)){if(!P||P<9){S=l.create("br");R.parentNode.insertBefore(S,R)}Q.setStartBefore(R);Q.setEndBefore(R)}else{Q.setStartAfter(R);Q.setEndAfter(R)}}else{Q.setStart(R,0);Q.setEnd(R,0)}}g.setRng(Q);l.remove(S);g.scrollIntoView(R)}function z(R){var Q=f.forced_root_block;if(Q&&Q.toLowerCase()===R.tagName.toLowerCase()){l.setAttribs(R,f.forced_root_block_attrs)}}function u(R){var S=D,U,T,Q;if(R||w=="TABLE"){U=l.create(R||A);z(U)}else{U=s.cloneNode(false)}Q=U;if(f.keep_styles!==false){do{if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U|VAR|CITE|DFN|CODE|MARK|Q|SUP|SUB|SAMP)$/.test(S.nodeName)){if(S.id=="_mce_caret"){continue}T=S.cloneNode(false);l.setAttrib(T,"id","");if(U.hasChildNodes()){T.appendChild(U.firstChild);U.appendChild(T)}else{Q=T;U.appendChild(T)}}}while((S=S.parentNode))}if(!c){Q.innerHTML='<br data-mce-bogus="1">'}return U}function t(T){var S,R,Q;if(D.nodeType==3&&(T?x>0:x<D.nodeValue.length)){return false}if(D.parentNode==s&&G&&!T){return true}if(T&&D.nodeType==1&&D==s.firstChild){return true}if(D.nodeName==="TABLE"||(D.previousSibling&&D.previousSibling.nodeName=="TABLE")){return(G&&!T)||(!G&&T)}S=new b(D,s);if(D.nodeType==3){if(T&&x===0){S.prev()}else{if(!T&&x==D.nodeValue.length){S.next()}}}while((R=S.current())){if(R.nodeType===1){if(!R.getAttribute("data-mce-bogus")){Q=R.nodeName.toLowerCase();if(e[Q]&&Q!=="br"){return false}}}else{if(R.nodeType===3&&!/^[ \t\r\n]*$/.test(R.nodeValue)){return false}}if(T){S.prev()}else{S.next()}}return true}function o(R,V){var X,S,T,U,W,Q,Y=A||"P";S=l.getParent(R,l.isBlock);Q=h.getBody().nodeName.toLowerCase();if(!S||!H(S)){S=S||m;if(!S.hasChildNodes()){X=l.create(Y);z(X);S.appendChild(X);y.setStart(X,0);y.setEnd(X,0);return X}U=R;while(U.parentNode!=S){U=U.parentNode}while(U&&!l.isBlock(U)){T=U;U=U.previousSibling}if(T&&i.isValidChild(Q,Y.toLowerCase())){X=l.create(Y);z(X);T.parentNode.insertBefore(X,T);U=T;while(U&&!l.isBlock(U)){W=U.nextSibling;X.appendChild(U);U=W}y.setStart(R,V);y.setEnd(R,V)}}return R}function K(){function R(U){var T=q[U?"firstChild":"lastChild"];while(T){if(T.nodeType==1){break}T=T[U?"nextSibling":"previousSibling"]}return T===s}function S(){var T=q.parentNode;if(T.nodeName=="LI"){return T}return q}var Q=q.parentNode.nodeName;if(/^(OL|UL|LI)$/.test(Q)){A="LI"}r=A?u(A):l.create("BR");if(R(true)&&R()){if(Q=="LI"){l.insertAfter(r,S())}else{l.replace(r,q)}}else{if(R(true)){if(Q=="LI"){l.insertAfter(r,S());r.appendChild(l.doc.createTextNode(" "));r.appendChild(q)}else{q.parentNode.insertBefore(r,q)}}else{if(R()){l.insertAfter(r,S());I(r)}else{q=S();J=y.cloneRange();J.setStartAfter(s);J.setEndAfter(q);n=J.extractContents();if(A=="LI"&&n.firstChild.nodeName=="LI"){r=n.firstChild;l.insertAfter(n,q)}else{l.insertAfter(n,q);l.insertAfter(r,q)}}}}l.remove(s);p(r);k.add()}function B(){var R=new b(D,s),Q;while((Q=R.next())){if(e[Q.nodeName.toLowerCase()]||Q.length>0){return true}}}function O(){var S,R,Q;if(D&&D.nodeType==3&&x>=D.nodeValue.length){if(!c&&!B()){S=l.create("br");y.insertNode(S);y.setStartAfter(S);y.setEndAfter(S);R=true}}S=l.create("br");y.insertNode(S);if(c&&w=="PRE"&&(!P||P<8)){S.parentNode.insertBefore(l.doc.createTextNode("\r"),S)}Q=l.create("span",{},"&nbsp;");S.parentNode.insertBefore(Q,S);g.scrollIntoView(Q);l.remove(Q);if(!R){y.setStartAfter(S);y.setEndAfter(S)}else{y.setStartBefore(S);y.setEndBefore(S)}g.setRng(y);k.add()}function v(Q){do{if(Q.nodeType===3){Q.nodeValue=Q.nodeValue.replace(/^[\r\n]+/,"")}Q=Q.firstChild}while(Q)}function N(S){var Q=l.getRoot(),R,T;R=S;while(R!==Q&&l.getContentEditable(R)!=="false"){if(l.getContentEditable(R)==="true"){T=R}R=R.parentNode}return R!==Q?T:Q}function L(R){var Q;if(!c){R.normalize();Q=R.lastChild;if(!Q||(/^(left|right)$/gi.test(l.getStyle(Q,"float",true)))){l.add(R,"br")}}}y=g.getRng(true);if(E.isDefaultPrevented()){return}if(!y.collapsed){h.execCommand("Delete");return}new d(l).normalize(y);D=y.startContainer;x=y.startOffset;A=(f.force_p_newlines?"p":"")||f.forced_root_block;A=A?A.toUpperCase():"";P=l.doc.documentMode;F=E.shiftKey;if(D.nodeType==1&&D.hasChildNodes()){G=x>D.childNodes.length-1;D=D.childNodes[Math.min(x,D.childNodes.length-1)]||D;if(G&&D.nodeType==3){x=D.nodeValue.length}else{x=0}}m=N(D);if(!m){return}k.beforeChange();if(!l.isBlock(m)&&m!=l.getRoot()){if(!A||F){O()}return}if((A&&!F)||(!A&&F)){D=o(D,x)}s=l.getParent(D,l.isBlock);q=s?l.getParent(s.parentNode,l.isBlock):null;w=s?s.nodeName.toUpperCase():"";M=q?q.nodeName.toUpperCase():"";if(M=="LI"&&!E.ctrlKey){s=q;w=M}if(w=="LI"){if(!A&&F){O();return}if(l.isEmpty(s)){K();return}}if(w=="PRE"&&f.br_in_pre!==false){if(!F){O();return}}else{if((!A&&!F&&w!="LI")||(A&&F)){O();return}}if(A&&s===h.getBody()){return}A=A||"P";if(t()){if(/^(H[1-6]|PRE|FIGURE)$/.test(w)&&M!="HGROUP"){r=u(A)}else{r=u()}if(f.end_container_on_empty_block&&H(q)&&l.isEmpty(s)){r=l.split(q,s)}else{l.insertAfter(r,s)}p(r)}else{if(t(true)){r=s.parentNode.insertBefore(u(),s);I(r);p(s)}else{J=y.cloneRange();J.setEndAfter(s);n=J.extractContents();v(n);r=n.firstChild;l.insertAfter(n,s);C(r);L(s);p(r)}}l.setAttrib(r,"id","");h.fire("NewBlock",{newBlock:r});k.add()}h.on("keydown",function(m){if(m.keyCode==13){if(j(m)!==false){m.preventDefault()}}})}});