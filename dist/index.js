"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var T=d(function(rr,I){"use strict";function Q(r,e){if(r===1)return 0;if(r===e)return 1;throw new Error("invalid arguments. Input arguments are not broadcast compatible.")}I.exports=Q});var R=d(function(er,O){"use strict";var j=require("@stdlib/array-base-resolve-getter"),U=require("@stdlib/math-base-special-maxn"),k=T();function V(r,e,s){var a,t,g,v,c,l,n,i,p,h,o,u,y,q;if(v=[r.length,e.length,s.length],v[0]===0)return[];for(u=U(v[0],v[1],v[2]),i=k(v[0],u),l=k(v[1],u),n=k(v[2],u),g=j(r),a=j(e),t=j(s),o=0,p=0,h=0,c=[],q=0;q<u;q++)g(r,o)?y=a(e,p):y=t(s,h),c.push(y),o+=i,p+=l,h+=n;return c}O.exports=V});var F=d(function(ar,A){"use strict";var z=require("@stdlib/math-base-special-ceil");function W(r,e,s){return e<0?z((s+1)/-e):z((r-s)/e)}A.exports=W});var K=d(function(vr,J){"use strict";var E=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),P=require("@stdlib/array-base-assert-is-boolean-data-type"),m=require("@stdlib/array-base-arraylike2object"),G=require("@stdlib/strided-base-reinterpret-complex"),b=require("@stdlib/strided-base-reinterpret-boolean"),f=T(),X=F();function H(r,e,s,a,t,g,v){var c,l,n,i,p,h,o,u;for(n=f(e.length,r),c=f(s.length,r),l=f(a.length,r),h=0,i=0,p=0,o=v,u=0;u<r;u++)t[o]=e[h]?s[i]:a[p],h+=n,i+=c,p+=l,o+=g;return t}function Y(r,e,s,a,t,g,v){var c,l,n,i,p,h,o,u,y,q,x,w,S,B,C,D;for(n=e.data,c=s.data,l=a.data,i=t.data,o=e.accessors[0],p=s.accessors[0],h=a.accessors[0],u=t.accessors[1],x=f(n.length,r),y=f(c.length,r),q=f(l.length,r),B=0,w=0,S=0,C=v,D=0;D<r;D++)u(i,C,o(n,B)?p(c,w):h(l,S)),B+=x,w+=y,S+=q,C+=g;return i}function Z(r,e,s,a,t,g,v){var c,l,n,i,p,h,o,u,y,q,x;for(c=e.data,l=e.accessors[0],p=f(c.length,r),n=f(s.length/2,r)*2,i=f(a.length/2,r)*2,h=g*2,y=0,o=0,u=0,q=v*2,x=0;x<r;x++)l(c,y)?(t[q]=s[o],t[q+1]=s[o+1]):(t[q]=a[u],t[q+1]=a[u+1]),y+=p,o+=n,u+=i,q+=h;return t}function _(r,e,s,a,t,g){var v,c,l,n,i;return r.length===0?a:(i=X(a.length,t,g),v=m(r),P(v.dtype)&&(r=b(r,0),v=m(r)),c=m(e),l=m(s),n=m(a),v.accessorProtocol||c.accessorProtocol||l.accessorProtocol||n.accessorProtocol?v.accessorProtocol===!1&&P(c.dtype)&&P(l.dtype)&&P(n.dtype)?(H(i,r,b(e,0),b(s,0),b(a,0),t,g),a):E(c.dtype)&&E(l.dtype)&&E(n.dtype)?(Z(i,v,G(e,0),G(s,0),G(a,0),t,g),a):(Y(i,v,c,l,n,t,g),a):(H(i,r,e,s,a,t,g),a))}J.exports=_});var $=require("@stdlib/utils-define-nonenumerable-read-only-property"),L=R(),M=K();$(L,"assign",M);module.exports=L;
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
