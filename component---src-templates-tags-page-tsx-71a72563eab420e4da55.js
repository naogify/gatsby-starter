(window.webpackJsonp=window.webpackJsonp||[]).push([[15,9],{"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return oe}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("yE/o"),i=a("FcLX"),o=a("z8k1"),s=a("3mGJ"),d=a("+6Dn"),u=a("yIZz"),m=a("pVnL"),p=a.n(m),h=a("lwsE"),b=a.n(h),f=a("W8MJ"),v=a.n(f),g=a("a1gu"),E=a.n(g),O=a("Nsbk"),j=a.n(O),N=a("PJYZ"),k=a.n(N),C=a("7W2i"),y=a.n(C),A=a("lSNA"),I=a.n(A),P=a("3WF5"),x=a.n(P),L=a("Og4/"),w=a.n(L),z=a("TSYQ"),G=a.n(z),K=a("ZeOK"),V=a("ICNK"),W=a("Y53p"),D=a("H+2d"),J=a("MZgk");function S(e){var t=e.children,a=e.className,n=e.content,r=G()(a,"description"),c=Object(V.a)(S,e),i=Object(W.a)(S,e);return l.a.createElement(i,p()({},c,{className:r}),D.a.isNil(t)?n:t)}S.handledProps=["as","children","className","content"],S.create=Object(J.c)(S,(function(e){return{content:e}}));var M=S;function Y(e){var t=e.children,a=e.className,n=e.content,r=G()("header",a),c=Object(V.a)(Y,e),i=Object(W.a)(Y,e);return l.a.createElement(i,p()({},c,{className:r}),D.a.isNil(t)?n:t)}Y.handledProps=["as","children","className","content"],Y.create=Object(J.c)(Y,(function(e){return{content:e}}));var Z=Y;function H(e){var t=e.children,a=e.className,n=e.content,r=e.description,c=e.floated,i=e.header,o=e.verticalAlign,s=G()(Object(K.e)(c,"floated"),Object(K.f)(o),"content",a),d=Object(V.a)(H,e),u=Object(W.a)(H,e);return D.a.isNil(t)?l.a.createElement(u,p()({},d,{className:s}),Z.create(i),M.create(r),n):l.a.createElement(u,p()({},d,{className:s}),t)}H.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],H.create=Object(J.c)(H,(function(e){return{content:e}}));var Q=H,R=a("D1pA");function T(e){var t=e.className,a=e.verticalAlign,n=G()(Object(K.f)(a),t),r=Object(V.a)(T,e);return l.a.createElement(R.a,p()({},r,{className:n}))}T.handledProps=["className","verticalAlign"],T.create=Object(J.c)(T,(function(e){return{name:e}}));var U=T,X=a("YO3V"),F=a.n(X),q=a("5XkN"),B=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=E()(this,(e=j()(t)).call.apply(e,[this].concat(l))),I()(k()(a),"handleClick",(function(e){a.props.disabled||w()(a.props,"onClick",e,a.props)})),a}return y()(t,e),v()(t,[{key:"render",value:function(){var e=this.props,a=e.active,r=e.children,c=e.className,i=e.content,o=e.description,s=e.disabled,d=e.header,u=e.icon,m=e.image,h=e.value,b=Object(W.a)(t,this.props),f=G()(Object(K.a)(a,"active"),Object(K.a)(s,"disabled"),Object(K.a)("li"!==b,"item"),c),v=Object(V.a)(t,this.props),g="li"===b?{value:h}:{"data-value":h};if(!D.a.isNil(r))return l.a.createElement(b,p()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),r);var E=U.create(u,{autoGenerateKey:!1}),O=q.a.create(m,{autoGenerateKey:!1});if(!Object(n.isValidElement)(i)&&F()(i))return l.a.createElement(b,p()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),E||O,Q.create(i,{autoGenerateKey:!1,defaultProps:{header:d,description:o}}));var j=Z.create(d,{autoGenerateKey:!1}),N=M.create(o,{autoGenerateKey:!1});return E||O?l.a.createElement(b,p()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),E||O,(i||j||N)&&l.a.createElement(Q,null,j,N,i)):l.a.createElement(b,p()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),j,N,i)}}]),t}(n.Component);I()(B,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),B.create=Object(J.c)(B,(function(e){return{content:e}}));var $=B;function _(e){var t=e.children,a=e.className,n=e.content,r=Object(V.a)(_,e),c=Object(W.a)(_,e),i=G()(Object(K.a)("ul"!==c&&"ol"!==c,"list"),a);return l.a.createElement(c,p()({},r,{className:i}),D.a.isNil(t)?n:t)}_.handledProps=["as","children","className","content"];var ee=_,te=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=E()(this,(e=j()(t)).call.apply(e,[this].concat(l))),I()(k()(a),"handleItemOverrides",(function(e){return{onClick:function(t,n){w()(e,"onClick",t,n),w()(a.props,"onItemClick",t,n)}}})),a}return y()(t,e),v()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,r=a.bulleted,c=a.celled,i=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,m=a.horizontal,h=a.inverted,b=a.items,f=a.link,v=a.ordered,g=a.relaxed,E=a.selection,O=a.size,j=a.verticalAlign,N=G()("ui",O,Object(K.a)(n,"animated"),Object(K.a)(r,"bulleted"),Object(K.a)(c,"celled"),Object(K.a)(d,"divided"),Object(K.a)(m,"horizontal"),Object(K.a)(h,"inverted"),Object(K.a)(f,"link"),Object(K.a)(v,"ordered"),Object(K.a)(E,"selection"),Object(K.b)(g,"relaxed"),Object(K.e)(u,"floated"),Object(K.f)(j),"list",o),k=Object(V.a)(t,this.props),C=Object(W.a)(t,this.props);return D.a.isNil(i)?D.a.isNil(s)?l.a.createElement(C,p()({role:"list",className:N},k),x()(b,(function(t){return $.create(t,{overrideProps:e.handleItemOverrides})}))):l.a.createElement(C,p()({role:"list",className:N},k),s):l.a.createElement(C,p()({role:"list",className:N},k),i)}}]),t}(n.Component);I()(te,"Content",Q),I()(te,"Description",M),I()(te,"Header",Z),I()(te,"Icon",U),I()(te,"Item",$),I()(te,"List",ee),I()(te,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]);var ae=te,ne=function(e){return n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Header,null,"Tags")),n.createElement(o.a.Content,null,n.createElement(ae,null,e.tags.map((function(t){var a=t.fieldValue===e.tag,l=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(ae.Item,{as:"span",key:t.fieldValue},n.createElement(ae.Icon,{name:"tag",color:a?"blue":null}),n.createElement(ae.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:l},t.fieldValue," (",t.totalCount,")")))})))))},le=a("R6OX"),re=a("LvDl"),ce=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(le.a,{pagination:!0},Object(re.times)(e.pageCount,(function(a){var l=(a+1).toString(),r=e.pageCount<10?5:3,c=+l-r<+t&&+l+r>+t,i=+l===e.pageCount;return c||1==+l||i?n.createElement(le.a.Item,{key:l,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+l+"/",name:l,active:t===l}):+l==e.pageCount-1||2==+l?n.createElement(le.a.Item,{key:l,disabled:!0},"..."):null})))},ie=a("soUV"),oe=(t.default=Object(ie.b)((function(e){var t=e.data.tags.group,a=e.data.posts.edges,l=e.location.pathname,m=Math.ceil(e.data.posts.totalCount/10),p=n.createElement(c.a,null,a.map((function(e){var t=e.node,a=t.frontmatter,l=t.timeToRead,c=t.fields.slug,s=t.excerpt,d=a.author.avatar.children[0],u=Object(re.get)(a,"image.children.0.fixed",{}),m=n.createElement(i.a.Group,null,n.createElement(i.a,null,n.createElement(i.a.Avatar,{src:d.fixed.src,srcSet:d.fixed.srcSet}),n.createElement(i.a.Content,null,n.createElement(i.a.Author,{style:{fontWeight:400}},a.author.id),n.createElement(i.a.Metadata,{style:{margin:0}},a.updatedDate," - ",l," min read")))),p=n.createElement(o.a.Description,null,s,n.createElement("br",null),n.createElement(r.Link,{to:c},"Read more…"));return n.createElement(o.a,{key:c,fluid:!0,image:u,header:a.title,extra:m,description:p})})));return n.createElement(c.a,null,n.createElement(u.a,null),n.createElement(s.a,{vertical:!0},n.createElement(d.a,{padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{style:{maxWidth:600}},p,n.createElement(s.a,{vertical:!0,textAlign:"center"},n.createElement(ce,{Link:r.Link,pathname:l,pageCount:m}))),n.createElement("div",null,n.createElement(ne,{Link:r.Link,tags:t,tag:e.pageContext.tag})))))})),"1852904082")},b0KN:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return l}));var n=a("1GPU");t.default=n.default;var l="2645663780"}}]);
//# sourceMappingURL=component---src-templates-tags-page-tsx-71a72563eab420e4da55.js.map