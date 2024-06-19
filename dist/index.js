"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var T=m(function(rr,I){"use strict";function Q(r,e){if(r===1)return 0;if(r===e)return 1;throw new Error("invalid arguments. Input arguments are not broadcast compatible.")}I.exports=Q});var R=m(function(er,O){"use strict";var j=require("@stdlib/array-base-resolve-getter"),U=require("@stdlib/math-base-special-maxn"),k=T();function V(r,e,t){var a,s,g,v,i,n,l,c,p,h,u,o,y,q;if(v=[r.length,e.length,t.length],v[0]===0)return[];for(o=U(v[0],v[1],v[2]),c=k(v[0],o),n=k(v[1],o),l=k(v[2],o),g=j(r),a=j(e),s=j(t),u=0,p=0,h=0,i=[],q=0;q<o;q++)g(r,u)?y=a(e,p):y=s(t,h),i.push(y),u+=c,p+=n,h+=l;return i}O.exports=V});var F=m(function(ar,A){"use strict";var z=require("@stdlib/math-base-special-ceil");function W(r,e,t){return e<0?z((t+1)/-e):z((r-t)/e)}A.exports=W});var K=m(function(vr,J){"use strict";var E=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),P=require("@stdlib/array-base-assert-is-boolean-data-type"),d=require("@stdlib/array-base-arraylike2object"),G=require("@stdlib/strided-base-reinterpret-complex"),b=require("@stdlib/strided-base-reinterpret-boolean"),f=T(),X=F();function H(r,e,t,a,s,g,v){var i,n,l,c,p,h,u,o;for(l=f(e.length,r),i=f(t.length,r),n=f(a.length,r),h=0,c=0,p=0,u=v,o=0;o<r;o++)s[u]=e[h]?t[c]:a[p],h+=l,c+=i,p+=n,u+=g;return s}function Y(r,e,t,a,s,g,v){var i,n,l,c,p,h,u,o,y,q,x,w,S,B,C,D;for(l=e.data,i=t.data,n=a.data,c=s.data,u=e.accessors[0],p=t.accessors[0],h=a.accessors[0],o=s.accessors[1],x=f(l.length,r),y=f(i.length,r),q=f(n.length,r),B=0,w=0,S=0,C=v,D=0;D<r;D++)o(c,C,u(l,B)?p(i,w):h(n,S)),B+=x,w+=y,S+=q,C+=g;return c}function Z(r,e,t,a,s,g,v){var i,n,l,c,p,h,u,o,y,q,x;for(i=e.data,n=e.accessors[0],p=f(i.length,r),l=f(t.length/2,r)*2,c=f(a.length/2,r)*2,h=g*2,y=0,u=0,o=0,q=v*2,x=0;x<r;x++)n(i,y)?(s[q]=t[u],s[q+1]=t[u+1]):(s[q]=a[o],s[q+1]=a[o+1]),y+=p,u+=l,o+=c,q+=h;return s}function _(r,e,t,a,s,g){var v,i,n,l,c;return r.length===0?a:(c=X(a.length,s,g),v=d(r),P(v.dtype)&&(v=d(b(r,0))),i=d(e),n=d(t),l=d(a),v.accessorProtocol||i.accessorProtocol||n.accessorProtocol||l.accessorProtocol?v.accessorProtocol===!1&&P(i.dtype)&&P(n.dtype)&&P(l.dtype)?(H(c,v.data,b(e,0),b(t,0),b(a,0),s,g),a):E(i.dtype)&&E(n.dtype)&&E(l.dtype)?(Z(c,v,G(e,0),G(t,0),G(a,0),s,g),a):(Y(c,v,i,n,l,s,g),a):(H(c,r,e,t,a,s,g),a))}J.exports=_});var $=require("@stdlib/utils-define-nonenumerable-read-only-property"),L=R(),M=K();$(L,"assign",M);module.exports=L;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
