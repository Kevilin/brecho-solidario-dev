(this["webpackJsonpbrecho-solidario"]=this["webpackJsonpbrecho-solidario"]||[]).push([[0],{110:function(e,t,a){e.exports=a(121)},121:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(47),l=a.n(o),i=a(18),c=a(50),A=a(16),m=a(15),s=a(51),d=a(52),b=a(75),u=a.n(b),p=function(){return r.a.createElement(c.h,{as:"nav",position:"fixed",top:"0",zIndex:10,direction:"row",p:" .5rem 2rem",justifyContent:"space-between",borderBottom:"1px",borderColor:"#716D6D",alignItems:"center",bg:"#0E76A8",w:"100%"},r.a.createElement(A.b,{to:"/brecho-solidario"},r.a.createElement(s.a,{width:"50px",display:{base:"none",md:"flex"},src:u.a,alt:"cabide-logo",className:"logo-header"})),r.a.createElement(c.a,null,r.a.createElement(c.k,{display:"flex",fontFamily:"Inter",fontWeight:"500",fontSize:{base:".8rem",md:"1rem"}},r.a.createElement(c.g,{listStyleType:"none",_hover:{color:"brand.btn",transition:"0.2s"},m:4},r.a.createElement(A.b,{to:"/brecho-solidario"},"Inicioo")),r.a.createElement(c.g,{listStyleType:"none",m:4,_hover:{color:"brand.btn",transition:"0.2s"}},r.a.createElement(A.b,{to:"/brecho-solidario/explorar"},"Explorar")))),r.a.createElement(A.b,{to:"/brecho-solidario/publicar"},r.a.createElement(d.a,{bg:"brand.btn",display:{base:"none",md:"flex"},color:"brand.bg",_hover:{bg:"#008000"}},"Doar!")))},C=a(125),Q=a(77),E=a.n(Q),h=function(e){var t=e.route,a=e.title;return r.a.createElement(A.b,{to:t},r.a.createElement(d.a,{role:"button",onClick:function(){window.scrollTo({top:0})},mt:4,bg:"brand.btn",color:"brand.bg",_hover:{bg:"#789b8b"}},a))},g=a(3),f=a.n(g),j=a(7),x=a(13),I=a(21),v=a(78),R=Object(v.a)({apiKey:"AIzaSyDDpK9sE1KNy2vTamJqS-KYlA9qHxnGrsI",authDomain:"dev-oc-5e1df.firebaseapp.com",databaseURL:"https://dev-oc-5e1df-default-rtdb.firebaseio.com",projectId:"dev-oc-5e1df",storageBucket:"dev-oc-5e1df.appspot.com",messagingSenderId:"954284552129",appId:"1:954284552129:web:e795d5334b980d7d86c940",measurementId:"G-L3LSCC1Q13"}),y=Object(I.f)(R),w=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1];return{getDataFirebase:function(){var e=Object(j.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(Object(I.b)(y,"posts"));case 2:t=e.sent,r(t.docs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),deleteDataFirebase:function(){var e=Object(j.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(Object(I.d)(y,"posts","".concat(t)));case 2:localStorage.clear();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),data:a}},O=Object(C.a)(c.a),S=function(){var e=w(),t=e.getDataFirebase;e.data;return Object(n.useEffect)((function(){t(),window.scrollTo({top:0})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{as:"main",initial:{opacity:0},animate:{opacity:1,y:-20},transition:{delay:.5},mt:"5rem"},r.a.createElement(c.h,{direction:"row",alignItems:"center",flexWrap:"wrap",justifyContent:"space-evenly"},r.a.createElement(c.a,{p:5},r.a.createElement(c.j,{as:"h1",color:"brand.text",fontSize:{base:"2rem",md:"2.5rem"},fontWeight:"700",m:"1.5rem 0",lineHeight:"1.8",textAlign:"left"},"Encontre roupas ou doe as suas para quem precisa!",r.a.createElement(c.a,{fontSize:"1.5rem",fontWeight:"500",as:"p"},"Negocie de uma forma f\xe1cil e totalmente gratuita! \ud83d\udc55")),r.a.createElement(d.b,null,r.a.createElement(h,{route:"explorar",title:"Preciso de doa\xe7\xf5es"}),r.a.createElement(A.b,{to:"publicar"},r.a.createElement(d.a,{role:"button",mt:4,bg:"rgba(158, 194, 177, 0.31)",color:"#66AD8C",_hover:""},"Quero doar")))),r.a.createElement(c.a,null,r.a.createElement(s.a,{src:E.a,p:40,loading:"lazy",mt:10})))))},D=a(53),z=a(31),F=Object(I.f)(R),k=a(40),G=a(39),T=a(55),B=Object(C.a)(c.a),H=function(e){var t=e.post,a=t.data().inputs,n=a.name,o=a.title,l=a.address,i=a.locality,m=a.surname,b=a.qtd_pecas,u=(a.estado_peca,a.urlLink);return r.a.createElement(B,{initial:{opacity:0},animate:{opacity:1,y:-20}},r.a.createElement(c.a,{maxW:"sm",borderRadius:"xl",w:{base:"100%",md:"23rem"},p:4,bg:"brand.bg",overflow:"hidden",minH:"25rem",boxShadow:"xl"},r.a.createElement(c.e,{alignItems:"center",mb:4},r.a.createElement(T.a,{size:"sm",name:n}),r.a.createElement(c.j,{as:"h5"},n," ",m)),r.a.createElement(c.a,{overflow:"hidden",rounded:"20px",maxHeight:"20rem"},r.a.createElement(s.a,{src:0===u.length?null:u[0].urlLink,alt:0===u.length?null:u[0].imageData,borderRadius:"sm",loading:"lazy",w:"100%",h:"30vh",objectFit:"cover",style:{scale:"1",transition:"0.5s ease-in-out"},_hover:{transform:"scale(1.1)"},rounded:"20px"})),r.a.createElement(c.j,{m:".5rem 0",as:"h4",fontSize:"xl",fontWeight:"600",w:"20rem"},o),r.a.createElement(c.e,{color:"gray",fontSize:"sm"},r.a.createElement("span",{role:"img"},r.a.createElement(G.b,null)),r.a.createElement(c.j,{as:"span"},l," - ",i)),r.a.createElement(c.c,{mt:2,borderColor:"gray",m:".5rem 0"}),r.a.createElement(c.e,{as:"span",fontSize:"sm"},""===b?null:r.a.createElement(c.e,null,r.a.createElement(k.a,{as:G.c,color:"gray",fontSize:"1.2rem"})," ",r.a.createElement(c.j,null,b," pe\xe7as "))),r.a.createElement(A.b,{to:"posts/".concat(t.id)},r.a.createElement(d.a,{role:"button",w:"100%",mt:4,bg:"brand.btn",onClick:function(){return window.scrollTo({top:0})},color:"brand.bg",_hover:{bg:"#789b8b"}},"Ver mais"))))},V=function(){var e=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1];return{getDataFirebase:function(){var e=Object(j.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(Object(I.b)(F,"posts"));case 2:t=e.sent,r(t.docs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),data:a}}(),t=e.getDataFirebase,a=e.data;return Object(n.useEffect)((function(){t(),window.scrollTo({top:0})}),[]),r.a.createElement(c.h,{bg:"#EAECEB",mt:"4rem"},r.a.createElement(c.a,{minHeight:"100vh",mb:20},r.a.createElement(c.a,{bg:"brand.alojadoresbg",p:10,mb:10},r.a.createElement(c.j,{as:"h1",fontSize:{base:"1.5rem",md:"2.5rem"},color:"brand.text",textAlign:"center",fontWeight:"700",lineHeight:"1.2"},"Encontre a roupa de sua prefer\xeancia! \ud83d\udc55")),r.a.createElement(c.h,{direction:"row",flexWrap:"wrap",justifyContent:"center"},r.a.createElement(c.d,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",xl:"repeat(3, 1fr)"},gap:16},0===a.length?r.a.createElement(c.b,{w:"100%"},r.a.createElement(D.a,{size:"xl",color:"brand.btn",m:"0 auto"})):a.map((function(e){return r.a.createElement(H,{key:Object(z.a)(),post:e})}))))))},Y=a(41),L=a(73),N=a(79),K=function(e){var t=e.id,a=e.label,n=e.type,o=e.place,l=e.value,i=e.nameprop;return r.a.createElement(Y.a,{id:t,isRequired:!0},r.a.createElement(Y.b,null,a),r.a.createElement(L.a,{type:n,onChange:l,name:i,placeholder:o,bg:"#E5E5E5"}))},J=a(74),P=function(e){var t=e.title,a=e.options,n=e.name,o=e.handleChange;return r.a.createElement(Y.a,null,r.a.createElement(Y.b,null,t),r.a.createElement(J.a,{isRequired:!0,iconColor:"brand.btn",bg:"#E5E5E5",name:n,placeholder:"Selecionar",onChange:o},a.map((function(e,t){return r.a.createElement(c.a,{as:"option",key:t},e)}))))},W=a(12),q=a(68),M=a(26),Z=a(49),X=Object(Z.b)(R),U=Object(I.f)(R),_=function(){return r.a.createElement(c.a,{position:"fixed",bottom:"-35px",zIndex:200,left:"0",w:"100%"},r.a.createElement("lottie-player",{src:"https://assets7.lottiefiles.com/packages/lf20_nxsyeqbd.json",background:"transparent",speed:"1",style:{width:"100%",height:"100vh"},loop:!0,autoplay:!0}))},$=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],o=t[1],l=function(){var e=Object(n.useState)(Object(z.a)()),t=Object(x.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(!1)),o=Object(x.a)(r,2),l=o[0],i=o[1],c=Object(n.useState)(!1),A=Object(x.a)(c,2),m=A[0],s=A[1],d=Object(n.useState)({}),b=Object(x.a)(d,2),u=b[0],p=b[1],C=Object(n.useState)([]),Q=Object(x.a)(C,2),E=Q[0],h=Q[1],g=function(){var e=Object(j.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(I.a)(Object(I.b)(U,"posts"),{inputs:u});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),v=function(){window.localStorage.setItem("text",a)};return{handleSubmit:function(e){v();var t=""===u.name||""===u.address||""===u.locality||""===u.surname||u.phone.length<8||""===u.title;if(e.preventDefault(),t)return alert("Revise todos os campos");i(!0),setTimeout((function(){i(!1),s(!0)}),3e3),g()},handleChange:function(e){var t;p(Object(q.a)(Object(q.a)({},u),{},(t={},Object(W.a)(t,e.target.name,e.target.value),Object(W.a)(t,"urlLink",E),Object(W.a)(t,"user",a),t)))},onFileChange:function(){var e=Object(j.a)(f.a.mark((function e(t){var a,n,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E.length<3)){e.next=12;break}return a=t.target.files[0],n=Object(Z.c)(X,"documents/".concat(a.name)),e.next=5,Object(Z.d)(n,a);case 5:return r=e.sent,e.next=8,Object(Z.a)(n);case 8:o=e.sent,h((function(e){return[].concat(Object(M.a)(e),[{urlLink:o,imageData:r.ref.name}])})),e.next=13;break;case 12:return e.abrupt("return",alert("S\xf3 \xe9 possivel inserir 3 imagens."));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),firebaseAdd:g,urlLink:E,toSubmit:l,redirect:m}}(),i=l.handleSubmit,A=l.handleChange,b=l.onFileChange,u=l.urlLink,p=l.toSubmit,C=l.redirect;return r.a.createElement(c.h,{as:"form",w:"100%",p:{md:"6",base:"0"},spacing:6,onSubmit:i},r.a.createElement(c.h,{direction:{base:"column",md:"row"}},r.a.createElement(K,{nameprop:"name",label:"Nome",type:"text",place:"",value:A}),r.a.createElement(K,{nameprop:"surname",label:"Sobrenome",type:"text",place:"",value:A})),r.a.createElement(c.a,null,r.a.createElement(Y.a,{isRequired:!0},r.a.createElement(Y.b,null,"N\xfamero de WhatsApp para que possam entrar em contato (8 caracteres)"),r.a.createElement(L.b,null,r.a.createElement(L.c,{children:"+55 519",bg:"green.400",color:"brand.bg"}),r.a.createElement(L.a,{type:"number",name:"phone",bg:"#E5E5E5",placeholder:"Digite seu telefone sem o 9",onChange:A})))),r.a.createElement(K,{nameprop:"title",label:"T\xedtulo da publica\xe7\xe3o",type:"text",place:"",value:A}),r.a.createElement(K,{nameprop:"locality",label:"Cidade",type:"text",place:"",value:A}),r.a.createElement(K,{nameprop:"address",label:"Endere\xe7o",type:"text",place:"",value:A}),r.a.createElement(c.h,{direction:{base:"column",md:"row"}},r.a.createElement(P,{title:"Quantidade",options:[1,2,3,4,5],handleChange:A,name:"qtd_pecas"}),r.a.createElement(P,{title:"Estado da pe\xe7a",options:["Bastante usada","Pouco usada","Semi nova"],name:"estado_peca",handleChange:A})),r.a.createElement(c.a,null,r.a.createElement(c.j,{fontWeight:"500"},"Adicione uma foto da roupa!"),r.a.createElement(Y.b,{textAlign:"center",borderWidth:".1rem",borderColor:"brand.btn",borderRadius:"md",borderStyle:"dashed",p:5,cursor:"pointer"},r.a.createElement(k.a,{as:N.a,fontSize:"5rem",textAlign:"center",cursor:"pointer",transition:".3s",_hover:{color:"brand.btn"}}),r.a.createElement(L.a,{type:"file",disabled:!!a||null,nameprop:"file",accept:"image/png, image/jpeg",border:"none",display:"none",name:"pictures",onChange:function(e){if(0===e.target.files.length)return null;b(e),o(!0),setTimeout((function(){o(!1)}),4e3)}}),r.a.createElement(c.j,null,"Selecione um arquivo (jpeg, jpg, png)")),r.a.createElement(c.a,null,r.a.createElement(c.e,{justifyContent:"center"},a?r.a.createElement(D.a,null):u.map((function(e){return r.a.createElement(c.l,{p:3,key:Object(z.a)()},r.a.createElement(c.j,null,e.imageData),r.a.createElement(c.a,{w:"70px",h:"80px",overflow:"hidden"},r.a.createElement(s.a,{loading:"lazy",src:e.urlLink,borderRadius:"md",objectFit:"cover",w:"100%"})))}))),r.a.createElement(c.j,{textAlign:"center",as:"p",fontSize:".9rem",color:"brand.description"},"Imagens anexadas: ",u.length," / 3")),r.a.createElement(Y.b,null,r.a.createElement(K,{nameprop:"description",label:"Descri\xe7\xe3o",type:"text",place:"",value:A}))),p?r.a.createElement(_,null):null,r.a.createElement(d.a,{role:"button",disabled:a&&!0,type:"submit",mt:4,p:2,w:"100%",bg:"brand.btn",color:"brand.bg",_hover:{bg:"#789b8b"}},p?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.e,{alignItems:"center"},r.a.createElement(c.j,{as:"p",fontSize:{base:".9rem",md:"1rem"}},"Obrigado por sua doa\xe7\xe3o!",r.a.createElement("span",{role:"img","aria-labelledby":"emoji-hearth"},"\ud83e\udd17")," ","Redirecionando..."),r.a.createElement(D.a,null))):"Publicar!"),C&&r.a.createElement(c.a,null,r.a.createElement(m.a,{to:"/brecho-solidario/explorar"})))},ee=Object(C.a)(c.a),te=function(){return Object(n.useEffect)((function(){window.scrollTo({top:0})}),[]),r.a.createElement(ee,{initial:{opacity:0},animate:{opacity:1,y:-20}},r.a.createElement(c.h,{textAlign:"center",p:8,mt:"4rem"},r.a.createElement(c.j,{as:"h1",fontSize:"48px",fontWeight:"700",m:"1rem 0",lineHeight:"1.2"},"Obrigado por doar!",r.a.createElement("span",{role:"img","aria-labelledby":"emoji-house"},r.a.createElement(s.a,{src:"https://res.cloudinary.com/dqp3lvyd0/image/upload/v1639582003/smiling-face-with-smiling-eyes_1f60a_t7lnqb.png",paddingLeft:1,width:"2.3rem",display:"unset"}))),r.a.createElement(c.j,{as:"span"},"Basta preencher o seguinte formul\xe1rio para que possamos publicar sua doa\xe7\xe3o.")),r.a.createElement(c.h,{direction:"row",mt:6,justifyContent:"center"},r.a.createElement(c.a,{w:"80%",borderRadius:"md"},r.a.createElement($,null))))},ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.h,{flexWrap:"wrap",p:"2.5rem",mt:"1rem",direction:"row",as:"footer",alignItems:"center",justifyContent:"space-between",bg:"brand.footerbg"},r.a.createElement(c.a,null,r.a.createElement(c.j,{as:"h3",color:"brand.btn",fontWeight:"500"},"Todos os direitos reservados. \xa9 ",(new Date).getFullYear()," Brech\xf3 Solid\xe1rio.")),r.a.createElement(c.i,{p:1}),r.a.createElement(c.h,{direction:"row",spacing:5,color:"brand.btn"},r.a.createElement(A.b,{to:"/brecho-solidario/"},"Inicio"),r.a.createElement(A.b,{to:"/brecho-solidario/explorar"},"Explorar"))),r.a.createElement(c.j,{textAlign:"center",fontSize:".9rem",p:3,bg:"brand.footerbg",color:"brand.bg"},"Desenvolvido por"," ",r.a.createElement(c.a,{as:"a",fontWeight:500,_hover:{borderBottom:"1px solid",borderColor:"brand.btn"},href:"https://github.com/kevilin",target:"_blank",rel:"noreferrer noopener"},"Kevilin Rodrigues")))},ne=a(80),re=Object(C.a)(c.a),oe=function(e){var t=e.res,a=Object(n.useState)(),o=Object(x.a)(a,2),l=o[0],i=o[1],m=w().deleteDataFirebase,b=t.data().inputs,u=b.name,p=b.title,C=b.locality,Q=b.urlLink,E=b.surname,h=b.qtd_pecas,g=b.estado_peca,f=b.phone,j=b.address,I=b.others,v=b.description,R=b.user,y=Q.slice(1,3),O=[{title:"Quantidade de pe\xe7as",name:h,icon:G.c},{title:"Estado da pe\xe7a",name:g,icon:G.a}];return Object(n.useEffect)((function(){var e=window.localStorage.getItem("text");i(e)}),[]),r.a.createElement(re,{initial:{opacity:0},animate:{opacity:1,y:-20}},r.a.createElement(c.h,{justifyContent:"center",p:{base:"10",md:"5"}},r.a.createElement(c.a,{w:"90%",m:"0 auto"},r.a.createElement(c.h,null,r.a.createElement(c.e,null,r.a.createElement(T.a,{name:u,mr:3}),r.a.createElement(c.j,{display:"flex",alignItems:"center"},u," ",E)),r.a.createElement(c.j,{as:"h1",fontSize:{base:"2rem",md:"2.5rem"},fontWeight:"700",pt:3,lineHeight:"1.2",textAlign:"left"},p),r.a.createElement(c.j,{as:"p",mt:3,color:"brand.description"},r.a.createElement(k.a,{as:G.b})," ",j," - ",C),r.a.createElement(c.h,{direction:{base:"column",lg:"row"},w:"100%",h:{base:"none",lg:"70vh"},overflow:"hidden",alignItems:"center"},r.a.createElement(c.a,{w:{base:"none",lg:"70%"},minHeight:{base:"none",lg:"50vh"},borderRadius:"xl",overflow:"hidden"},r.a.createElement(s.a,{loading:"lazy",src:0===Q.length?null:Q[0].urlLink,alt:0===Q.length?null:Q[0].imageData,objectFit:"cover",w:"100%",h:"100%",style:{scale:"1",transition:"0.5s ease-in-out"},_hover:{transform:"scale(1.1)"}})),r.a.createElement(c.h,{display:"flex",spacing:2},0===Q.length?null:y.map((function(e){return r.a.createElement(c.a,{key:Object(z.a)(),overflow:"hidden",w:{base:"none",lg:"80%"},minHeight:{base:"none",lg:"35vh"},maxHeight:"25vh",borderRadius:"md"},r.a.createElement(s.a,{loading:"lazy",src:e.urlLink,alt:e.imageData,w:"100%",h:"35vh",objectFit:"cover",style:{scale:"1",transition:"0.5s ease-in-out"},_hover:{transform:"scale(1.1)"},borderRadius:"md"}))}))))),r.a.createElement(c.h,{direction:"row",pt:4},r.a.createElement(c.h,{direction:"row",flexWrap:{base:"wrap",lg:"nowrap"},w:"100%"},r.a.createElement(c.a,{w:{base:"100%",lg:"60%"}},r.a.createElement(c.j,{as:"h2",fontSize:{base:"1.5rem",md:"2rem"},w:"100%",fontWeight:"700",lineHeight:"1.2",textAlign:"left"},"Descri\xe7\xe3o:"),r.a.createElement(c.j,{as:"p",mt:3,color:"brand.description",minW:"100%"},v)),r.a.createElement(c.a,{w:{base:"100%",lg:"30%"}},r.a.createElement(c.j,{as:"h2",fontSize:{base:"1.5rem",md:"2rem"},fontWeight:"700",paddingTop:{base:5,lg:0},lineHeight:"1.2",textAlign:"left"},"Detalhes:"),r.a.createElement(c.h,{direction:{base:"column",md:"row"},flexWrap:"wrap",p:3},O.map((function(e){return r.a.createElement(c.e,{key:Object(z.a)(),p:"1rem 0"},r.a.createElement(k.a,{as:e.icon,color:"green.100"===e.name,fontSize:"2rem",p:"5px",bg:"green.100"===e.name,borderRadius:"md",ml:2}),r.a.createElement(c.j,{as:"h4",fontWeight:"600",color:"no"===e.name?"red.400":"green.400",fontSize:"1rem"},e.title," : ",e.name))}))),r.a.createElement(c.h,null,r.a.createElement(c.j,{as:"p",mt:3,color:"brand.description"},I))))),r.a.createElement(c.h,{direction:"row",spacing:{base:1,lg:2},flexWrap:"wrap",alignItems:"center"},r.a.createElement(c.f,{href:"https://api.whatsapp.com/send?phone=5551".concat(f,"&text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20anunciou%20uma%20roupa%20no%20Brech%C3%B3%20Solid%C3%A1rio.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"),_hover:"",isExternal:!0,w:{base:"100%",lg:"15rem"}},r.a.createElement(d.a,{role:"button",mt:4,bg:"brand.btn",color:"brand.bg",w:"100%",_hover:{bg:"#789b8b"}},"Contato por Whatsapp ",r.a.createElement(k.a,{as:ne.a,ml:2}))),l===R?r.a.createElement(A.b,{to:"/brecho-solidario/explorar/"},r.a.createElement(c.j,{onClick:function(){return m(t.id)},w:"100%",paddingTop:4,fontWeight:500,color:"red.400"},"Remover publica\xe7\xe3o")):null))))},le=function(){var e=Object(m.h)(),t=w(),a=t.getDataFirebase,o=t.data;Object(n.useEffect)((function(){a()}),[]);var l=o.filter((function(t){return t.id===e.id}));return r.a.createElement(c.a,{minHeight:"100vh",mt:"5rem"},0===o.length?r.a.createElement(c.b,{mt:3},r.a.createElement(D.a,{size:"xl",color:"brand.btn",m:"0 auto"})):l.map((function(e){return r.a.createElement(oe,{res:e,key:Object(z.a)()})})))},ie=a(81),ce=a.n(ie),Ae=function(){return r.a.createElement(c.l,{justifyContent:"center",w:"100%",h:"100vh"},r.a.createElement(s.a,{src:ce.a,width:"10rem"}),r.a.createElement(c.j,{textAlign:"center",fontWeight:"600",color:"brand.text",p:3,fontSize:{base:"1.5rem",md:"2rem"}},"Ops, parece que a rota que voc\xea digitou n\xe3o existe!"),r.a.createElement(A.b,{to:"/brecho-solidario"},r.a.createElement(c.j,{color:"brand.text"},"\u2190 Voltar ao in\xedcio")))};var me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null,r.a.createElement(c.b,{as:"header"},r.a.createElement(p,null)),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/brecho-solidario/",element:r.a.createElement(S,null)}),r.a.createElement(m.b,{path:"/brecho-solidario/Explorar",element:r.a.createElement(V,null)}),r.a.createElement(m.b,{path:"/brecho-solidario/publicar",element:r.a.createElement(te,null)}),r.a.createElement(m.b,{path:"/brecho-solidario/explorar/posts/:id",element:r.a.createElement(le,null)}),r.a.createElement(m.b,{path:"/brecho-solidario/*",element:r.a.createElement(Ae,null)})),r.a.createElement(ae,null)))},se=Object(i.b)({styles:{global:{body:{bg:"#ECECEC",fontFamily:"Inter, sans-serif"}}},colors:{brand:{bg:"#F4F4F4",btn:"#8CB09F",text:"#343A40",btntwo:"#A74602",alojadoresbg:"rgba(158, 194, 177, 0.24)",footerbg:"#23292A",description:"#716D6D",maps:"#1A73E8",export:"#D9E2DE"}},components:{Button:{sizes:{md:{h:"50px",w:"180px",fontSize:"lg",padding:"20px"}}}}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{theme:se},r.a.createElement(me,null))),document.getElementById("root"))},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABA3AAAQNwEY5b47AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACl5/7/AAAAP90Uk5TAAECAwQF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IR43gzaU42Pa0gricStpwzYspi0DId7WlXYU4i3ashzibdNpxwq8THvOhXhZhwjtWIRptKf0aIh3NfmCtryJm2nTltYQr8r7B+15CZfQropb60E8adBW2jQdnWnflgkDOtaBeEpBvzHv0ra7UTfGuFSXiZeUMy6XAV9SUld74C1KytqVBtxOSVkLAZxJSVmTAYSjlFR1OfZaQUlVHbDXZEqK+jKEvU6ipKjx+JfQRkpqao1v3E1JSQvwb8dSUtIwfGsRJQVV5OJb51FS0FP4j7TVlJQT7YzvjKSknMfxX9nbKSlm1yH4nlGUFHMLvi9tCSWlbK6LH+hSQ0klg/Ejd1NSyLI0/Ej9DZSUUd4OP3EeJWVchH14jJIiJmFfMt+mpIS56din8KeUFLCpCfaj1Q5K4EW6Y796VFICruoS1GJAjBJou89Ara6MUgKs7CQcwOlllMDa0RUHdNQqSkBtaAML8l6nBNKq5rAk7U5K8MQezoVVgyopAbO+L2zosoQSJLGHc2FLaEQRJTDW94VtjR6poQRC1dRcxOPwqbspvld6x6GIV+PxJRRfWz+6PhJR77I3qil+9f6AdCSs8aiFMYr/rH74ZBhScOF9H9ZQ/KPw0YFNYVZu/5unL9gSo3hc2WfTLm8Gp+R0OGfEmJvvmDr9pTfmiJe88tjEMYP6dzm0DkRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERExCH/D92FI0Qb2a1OAAAAAElFTkSuQmCC"},77:function(e,t,a){e.exports=a.p+"static/media/cabide.b1a81924.png"},81:function(e,t,a){e.exports=a.p+"static/media/404.f3dd7a96.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.e6c500a5.chunk.js.map