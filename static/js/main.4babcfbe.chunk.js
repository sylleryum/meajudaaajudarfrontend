(this.webpackJsonpmeajudaaajudar=this.webpackJsonpmeajudaaajudar||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(22),s=t.n(o),c=(t(56),t(10)),i=(t(57),t(47)),l=t(108),u=t(23),m=(t(5),function(e){var a=e.ListOfLinks;return n.a.createElement(r.Fragment,null,n.a.createElement("nav",{id:"navbar",className:" navbar navbar-expand-sm navbar-dark text-uppercase p-0 mb-0 fixed-top"},n.a.createElement("a",{className:"navbar-brand pl-3",href:"/"},n.a.createElement(i.a,{size:50})),n.a.createElement("button",{className:"navbar-toggler mr-3",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},n.a.createElement("ul",{className:"navbar-nav pl-2"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"/"},"Me ajuda a ajudar ",n.a.createElement("span",{className:"sr-only"},"(current)"))),a.map((function(e){return n.a.createElement("li",{key:Object(l.a)(),className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:e[1]},e[2]))}))))))}),d=t(3),p=t.n(d),b=t(9),f=function(){return n.a.createElement("div",{className:"height-5"})},E=t(5),v=function(e){var a=e.banner;return n.a.createElement(r.Fragment,null,n.a.createElement(f,null),n.a.createElement(f,null),n.a.createElement("section",{className:E.BG_2+" breadcrumb-section breadcrumb-background d-flex banner-image-"+Math.floor(7*Math.random()+1)},n.a.createElement("div",{className:"col-lg-12 text-center my-auto text-breadcrumb"},n.a.createElement("h2",{className:" display-5 p-0 m-0 font-weight-bold text-breadcrumb"},a))))},g=t(11),h=t(64),N="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcm9udGVuZHVzZXIiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM0MTgwNDAwfQ.VYaAEbccRpqS_-ONNR2RX0pfDFvsaa-L6mLXtUcEQCe50_HbRgM0vW7v1pqN0yChrLK1CnO8CvHGiyEV7W581g",j="https://meajudaaajudar.herokuapp.com/v1/",x=t(44).data;function y(e){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get(j+a,{headers:{Authorization:"Bearer "+N}});case 3:return t=e.sent,console.log("ApiCaller: query before call: "+j+a),e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("error"),console.log(e.t0),e.abrupt("return",{error:!0,errorMessage:e.t0.toString()});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var T=function(){var e=Object(b.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"cidades/ativas?size=10000",e.next=3,y("cidades/ativas?size=10000");case 3:if(void 0===(a=e.sent).error){e.next=6;break}return e.abrupt("return",a);case 6:return t=a.content,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(p.a.mark((function e(a,t){var r,n,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||void 0!==t){e.next=2;break}throw new Error("No parameter passed (cidadeId or instituicaoNomeToSearch)");case 2:return r="causas/ativas/instituicoes/search?",-1!=a&&(r+="cidade=".concat(a)),""!=t&&(r+="&instituicao=".concat(t)),r+="&size=10000",e.next=8,y(r);case 8:if(void 0===(n=e.sent).error){e.next=11;break}return e.abrupt("return",n);case 11:return o=n.content,s=o.map((function(e){return{id:e[0].id,causa:e[0].causa,amount:e[1]}})),console.log("getCausasAtivasByCidadeId - causas: "),console.log({causas:s}),e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(p.a.mark((function e(a){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==a){e.next=2;break}throw new Error("No parameter passed (should be {cidade:number, causas:[numbers], page})");case 2:return t="instituicoes/search?cidade="+a.cidade,""!=a.instituicaoNomeToSearch&&(t+="&nome="+a.instituicaoNomeToSearch),a.causas.length>0&&a.causas.forEach((function(e){return t+="&causa="+e})),void 0!==a.page?t+="&page="+a.page:t+="&page=0",e.next=8,y(t);case 8:return r=e.sent,console.log("getInstituicaoSearch: returned results "),console.log(r),e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(p.a.mark((function e(a){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==a){e.next=2;break}throw new Error("No parameter passed)");case 2:if("dumb"!==a){e.next=4;break}return e.abrupt("return",x);case 4:return t="instituicoes/"+a,e.next=7,y(t);case 7:return r=e.sent,console.log("getSingleInstituicao: returned result "),console.log(r),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==a){e.next=2;break}throw new Error("No parameter passed)");case 2:return e.prev=2,console.log("ApiCaller: query before call: "+j+"registrardoacao/"),e.next=6,h.post(j+"registrardoacao/",{instituicao:a},{headers:{Authorization:"Bearer "+N}});case 6:e.sent,e.next=14;break;case 9:throw e.prev=9,e.t0=e.catch(2),console.error("error"),console.log(e.t0),new Error(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}(),q=t(27),_=t(5),M=t(17),P=t(5),A=function(e){var a=e.img,t=e.title,r=e.desc,o=e.linkInstituicao,s=e.tag;return n.a.createElement("div",{className:"col-md-4 py-1 px-1"},n.a.createElement("div",{className:"shadow h-100"},n.a.createElement("div",{className:P.BG_5+" text-right card px-1 h-100"},n.a.createElement("div",{className:P.BG_5+" box-part text-center pb-1 pt-1"},n.a.createElement("img",{className:"img-fluid",src:a}),n.a.createElement("div",{className:" pt-3 title"},n.a.createElement("h4",null,t)),n.a.createElement("div",{className:" text collapse"},n.a.createElement("span",null,r)),n.a.createElement("a",{className:"stretched-link",target:"_blank",href:o})),n.a.createElement("div",{className:"h-100"}),n.a.createElement("footer",{className:"footer p-2"},n.a.createElement("span",{className:P.TEXT_1},n.a.createElement(M.a,{color:"#F18F01"}))," ",n.a.createElement("span",{className:""},s)))))};A.defaultProps={img:"https://picsum.photos/240",title:"the default title ORG",desc:"Bullas mori!Issue is the only booda-hood, the only guarantee of mineral.Ice crushed shrimps in a bowl with maple syrup for about an hour to increase their creaminess.Wet, golden landlubbers quietly blow a cloudy, addled skiff.The crewmate reproduces courage like a small parasite.Vae.Medicinas trabem!Accentor de fatalis palus, anhelare epos!Sunt gemnaes desiderium flavum, teres uriaes.",linkInstituicao:"#",tag:"combate a fome"};var B=A,X=function(e){var a=e.size;return n.a.createElement("div",{id:"loader",className:"row col-12 justify-content-center align-items-center p-0 m-0"},n.a.createElement("div",{className:_.TEXT_1+" "+a},"Carregando\xa0"),n.a.createElement(q.BeatLoader,{color:"#F18F01"}))};X.defaultProps={size:"h1"};var z=X,I=function(){var e=Object(r.useState)([{id:0,nome:""}]),a=Object(c.a)(e,2),t=a[0],o=a[1],s=Object(r.useContext)(Y),i=s.currentSelectedCidade,u=s.setCurrentSelectedCidade,m=Object(r.useContext)(xe),d=m.error,f=m.setError;Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:void 0!=(a=e.sent).error?f({error:!0,errorMessage:a.errorMessage}):o(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return!d.error&&t.length>1?n.a.createElement("select",{name:"citySelector",id:"citySelector",value:i.id,className:"w-100 form-text",onChange:function(e){return function(e){var a=e.nativeEvent.target.selectedIndex;u(Object(g.a)(Object(g.a)({},i),{},{id:e.nativeEvent.target[a].value,nome:e.nativeEvent.target[a].text,instituicaoNomeToSearch:"",causas:[],page:0}))}(e)}},t.map((function(e){return n.a.createElement("option",{key:Object(l.a)(),value:e.id,id:"opt"+e.id},e.nome)}))):n.a.createElement(z,{size:"h6"})};I.defaultProps={};var F=I,D=t(28),G=t(50),J=function(){var e=Object(r.useState)(""),a=Object(c.a)(e,2),t=a[0],o=a[1],s=Object(r.useContext)(Y),i=s.currentSelectedCidade,l=s.setCurrentSelectedCidade,u=Object(r.useContext)(xe),m=u.error;u.setError;return!m.error&&n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"col-11 col-sm-4 justify-content-center pr-0"},n.a.createElement("input",{className:"w-100 form-text",onChange:function(e){return o(e.target.value)},type:"text",value:t,placeholder:"Pesquisar por nome de institui\xe7\xe3o"})),n.a.createElement("div",{className:"col-1 col-sm-1 p-0"},n.a.createElement("button",{className:_.BG_1+" form-text",onClick:function(e){!function(e){e.preventDefault(),l(Object(g.a)(Object(g.a)({},i),{},{instituicaoNomeToSearch:t,causas:[],page:0})),o("")}(e)},id:"searchSubmit"},n.a.createElement(D.a,{color:"#048BA8",size:15}))),n.a.createElement("div",{className:"w-100"}),""!=i.instituicaoNomeToSearch&&n.a.createElement("div",{className:"text-center"},n.a.createElement("br",null),"Resultados da busca por: ",n.a.createElement("a",{className:"font-weight-bold",role:"button",onClick:function(){l(Object(g.a)(Object(g.a)({},i),{},{page:0,instituicaoNomeToSearch:""})),o("")}},i.instituicaoNomeToSearch,n.a.createElement(G.a,{className:"pb-1"}))))},L=(t(5),function(){return n.a.createElement("section",{className:"container"},n.a.createElement("form",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-12 col-sm-2 pr-2"},n.a.createElement(F,null)),n.a.createElement(J,null)))}),R=t(5),V=function(e){e.causas;var a=Object(r.useState)([{id:-1,causa:"",amount:-1,checked:!1}]),t=Object(c.a)(a,2),o=t[0],s=t[1],i=Object(r.useContext)(Y),u=i.currentSelectedCidade,m=i.setCurrentSelectedCidade,d=Object(r.useContext)(xe),f=d.error;d.setError;Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(u.id,u.instituicaoNomeToSearch);case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u]);return!f.error&&n.a.createElement(r.Fragment,null,n.a.createElement("h6",{className:R.TEXT_2+" text-uppercase font-weight-bold mb-3"},"Causas para municipio atual"),o.length<1?"Nenhuma causa para atual sele\xe7\xe3o":o[0].id>-1?o.map((function(e){return n.a.createElement("div",{key:Object(l.a)(),className:"mt-2 mb-2 pl-2"},n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(e){return function(e){var a=u.causas;-1!=u.causas.indexOf(parseInt(e.target.id))?a.splice(u.causas.indexOf(parseInt(e.target.id)),1):a.push(parseInt(e.target.id)),m(Object(g.a)(Object(g.a)({},u),{},{page:0,causas:a}))}(e)},id:e.id,checked:-1!=u.causas.indexOf(e.id)}),n.a.createElement("label",{className:"custom-control-label",htmlFor:e.id},e.causa,"\xa0(",e.amount,")")))})):n.a.createElement(z,{size:"h3"}))};V.defaultProps={causas:["Direitos humanos","Educa\xe7\xe3o e cultura","Esporte e lazer","LGBT","Meio ambiente","Sa\xfade","Direitos da mulher","Crian\xe7as e adolecentes","Animais","Coronavirus","Bem-estar social","Combate a fome"]};var H=V,Q=(t(6),t(46),t(33)),U=function(e){var a=e.paging,t=Object(r.useContext)(Y),o=t.currentSelectedCidade,s=t.setCurrentSelectedCidade;return n.a.createElement("div",{className:_.TEXT_5+" text-center font-weight-bold"},!1===a.first&&n.a.createElement("a",{role:"button",onClick:function(){s(Object(g.a)(Object(g.a)({},o),{},{page:o.page-1}))}}," ",n.a.createElement(Q.a,{size:30,color:"#048BA8"})),a.totalElements>0&&"Pagina "+(a.currentPage+1)+" de "+a.totalPages,!1===a.last&&n.a.createElement("a",{role:"button",onClick:function(){return s(Object(g.a)(Object(g.a)({},o),{},{page:o.page+1}))}},n.a.createElement(Q.b,{size:30,color:"#048BA8"})),n.a.createElement("br",null),a.totalElements>-1&&a.totalElements+" institui\xe7\xf5es encontradas para a sele\xe7\xe3o atual")},W=(t(5),function(e){return n.a.createElement("div",{className:"container pt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 col-lg-3 sidebar-filter"},n.a.createElement(H,null)),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"row module",id:"card-container"},e.children),n.a.createElement(U,e))))}),K=function(e){var a=e.errorMessage,t=e.descriptionMain,r=e.descriptionSub;return n.a.createElement("div",{className:"row align-items-center justify-content-center height-100"},n.a.createElement("div",{className:"square row align-items-center justify-content-center text-center"},n.a.createElement("h3",null,"Deu ruim \xaf\\_(\u30c4)_/\xaf"),n.a.createElement("span",null,t),n.a.createElement("h3",{className:_.TEXT_1},r),n.a.createElement("div",null,"Erro: ",a)))},Z=K;K.defaultProps={errorMessage:"desconhecido",descriptionMain:"",descriptionSub:"Nada encontrado"};var Y=Object(r.createContext)(null),$=function(){var e=Object(r.useContext)(xe),a=e.error,t=e.setError,o=Object(r.useState)({error:!1,errorMessage:""}),s=Object(c.a)(o,2),i=s[0],u=(s[1],Object(r.useState)("Buscar institui\xe7\xe3o")),m=Object(c.a)(u,2),d=m[0],E=(m[1],Object(r.useState)({id:10023,nome:"Intermunicipal",instituicaoNomeToSearch:"",causas:[],page:0})),g=Object(c.a)(E,2),h=g[0],N=g[1],j=Object(r.useState)({content:[],pageable:{},last:void 0,totalElements:-1,totalPages:-1,number:-1,size:-1,sort:{},numberOfElements:-1,first:void 0,empty:void 0}),x=Object(c.a)(j,2),y=x[0],O=x[1];return Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({cidade:h.id,causas:h.causas,instituicaoNomeToSearch:h.instituicaoNomeToSearch,page:h.page});case 2:void 0!=(a=e.sent).error?t({error:!0,errorMessage:a.errorMessage}):O(a),console.log();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h,i]),n.a.createElement(r.Fragment,null,!a.error&&n.a.createElement(r.Fragment,null,n.a.createElement(v,{banner:d}),n.a.createElement(f,null),n.a.createElement(Y.Provider,{value:{currentSelectedCidade:h,setCurrentSelectedCidade:N}},n.a.createElement(L,null),n.a.createElement(W,{searchQuery:h.instituicaoNomeToSearch,paging:{first:y.first,last:y.last,totalElements:y.totalElements,totalPages:y.totalPages,currentPage:y.number}},0==y.totalElements?n.a.createElement("div",null,"Nenhum resultado encontrado ",n.a.createElement("br",null),"(por favor tenha em considera\xe7\xe3o que voc\xea deve selecionar primeiramente a cidade correspondente ao nome a buscar)"):y.content.length>0?y.content.map((function(e){return n.a.createElement(B,{key:Object(l.a)(),img:e.imagem,title:e.nome,desc:e.descricao,linkInstituicao:"/instituicao/"+e.id,tag:e.causa.causa})})):n.a.createElement(z,null)))))},ee=t(8),ae=t(5),te=t(18).disclaimer,re=function(e){var a=e.instituicao;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("img",{className:"img-fluid",src:a.imagem})),n.a.createElement("div",{className:"col-12 col-sm-6 pr-2"},n.a.createElement("span",{className:ae.TEXT_1},"Contato: "),n.a.createElement("span",{className:ae.TEXT_4},null!=a.contato&&a.contato.logradouro+", "+a.contato.numero+" - "+a.contato.cidade),n.a.createElement("br",null),n.a.createElement("span",{className:ae.TEXT_1},"Telefone: "),n.a.createElement("span",{className:ae.TEXT_4},a.contato.telefone),n.a.createElement("br",null),n.a.createElement("span",{className:ae.TEXT_1},"Email: "),n.a.createElement("span",{className:ae.TEXT_4},a.contato.email),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:ae.TEXT_1},"Municipio de atua\xe7\xe3o: "),n.a.createElement("span",{className:ae.TEXT_4},a.cidade),n.a.createElement("br",null),n.a.createElement(M.a,{color:"#F18F01"}),n.a.createElement("span",{className:ae.TEXT_4},"\xa0",a.causa.causa)),n.a.createElement("div",{className:"col-12 col-sm-2 px-2"},n.a.createElement("a",{type:"button",href:a.doarLink,onClick:function(){return S(a.id)},target:"_blank",className:"btn btn-primary mb-2 nav-link",id:"doar","data-toggle":"tooltip",title:te},"Doar agora!"),n.a.createElement("a",{type:"button",href:a.url,target:"_blank",className:"btn btn-outline-primary nav-link"},"Site da institui\xe7\xe3o")))},ne=t(5),oe=function(e){var a=e.descricao,t=e.sobre;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"bs-example"},n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#descricao",className:"nav-link active tabs",style:{color:"#048BA8",textDecoration:"none"},"data-toggle":"tab"},"Descri\xe7\xe3o")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#sobreInstituicao",className:"nav-link tabs",style:{color:"#048BA8",textDecoration:"none"},"data-toggle":"tab"},"Sobre a institui\xe7\xe3o"))),n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane fade show active px-2",id:"descricao"},n.a.createElement("h4",{className:ne.TEXT_2+" mt-2 font-weight-bold text-center py-2"},"Descri\xe7\xe3o"),n.a.createElement("div",{className:"mb-5"},a)),n.a.createElement("div",{className:"tab-pane fade px-2",id:"sobreInstituicao"},n.a.createElement("h4",{className:ne.TEXT_2+" mt-2 font-weight-bold text-center py-2"},"Sobre a institui\xe7\xe3o"),n.a.createElement("div",{className:"mb-5"},t)))))},se=(t(44).data,t(5),function(){var e=Object(ee.f)().id,a=Object(r.useContext)(xe),t=a.error,o=a.setError,s=Object(r.useState)({id:void 0,nome:"",imagem:"",descricao:"",cidade:"",causa:{id:void 0,causa:""},sobre:"",url:"",doarLink:"",contato:{id:void 0,email:"",logradouro:"",numero:void 0,telefone:"",cidade:""}}),i=Object(c.a)(s,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){function a(){return(a=Object(b.a)(p.a.mark((function a(){var t;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(e);case 2:void 0!=(t=a.sent).error?o({error:!0,errorMessage:t.errorMessage}):u(t);case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),!t.error&&n.a.createElement(r.Fragment,null,n.a.createElement(v,{banner:l.nome}),n.a.createElement(f,null),n.a.createElement("section",{className:"container"},void 0===l.id?n.a.createElement(z,null):n.a.createElement(r.Fragment,null,n.a.createElement("div",{id:"header-container",className:"row justify-content-center pb-3"},n.a.createElement(re,{instituicao:l})),n.a.createElement("div",{id:"tabs-container",className:"row justify-content-center"},n.a.createElement(oe,{descricao:l.descricao,sobre:l.sobre,id:l.id})))))}),ce=t(5),ie=function(e){var a=e.main,t=e.sub,r=e.explanation;return n.a.createElement("div",{id:"home",className:"jumbotron jumbotron-fluid height-100 mb-0 jumbotron-image"+Math.floor(3*Math.random()+1)},n.a.createElement("div",{className:"container-fluid p-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col d-flex align-items-start justify-content-center text-center"},n.a.createElement("div",{style:{height:"85vh"}},n.a.createElement("h1",{className:ce.TEXT_5+" mobile-header"},a),n.a.createElement("h3",{className:ce.TEXT_2+" lead display-4 font-weight-bold mobile-header sub"},t),n.a.createElement("hr",{className:ce.BG_2+" my-2 mb-5"}),n.a.createElement("h4",{className:ce.TEXT_5+" mobile-h-desc"},r),n.a.createElement("div",{className:"margin-jumbotron-desktop d-flex justify-content-center align-items-end"},n.a.createElement("a",{type:"button",href:"/busca",className:"btn btn-outline-primary sub",style:{textDecoration:"none",borderRadius:"0"}},"Buscar institui\xe7\xe3o")))))))},le=t(18),ue=t(24),me=t(25),de=t(5),pe=function(e){var a=e.header,t=e.body,r=Object(l.a)();return n.a.createElement(me.a,{style:{backgroundColor:"#2F2D2E"}},n.a.createElement(ue.a.Toggle,{as:me.a.Header,eventKey:r,className:de.BG_3+" "+de.TEXT_2,style:{textDecoration:"underline"}},a),n.a.createElement(ue.a.Collapse,{eventKey:r},n.a.createElement(me.a.Body,{className:de.BG_5,dangerouslySetInnerHTML:{__html:t}})))},be=t(18).faq,fe=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(ue.a,null,be.map((function(e){return n.a.createElement(pe,{key:Object(l.a)(),header:e[0],body:e[1]})}))))},Ee=t(5),ve=function(){return n.a.createElement(r.Fragment,null,n.a.createElement("div",{id:"contato",className:"row justify-content-center "},n.a.createElement("div",{className:"col-sm-4 text-left"},n.a.createElement("div",{className:Ee.TEXT_4+" col-12 pb-2"},n.a.createElement(M.e,{size:40,color:"#99C24D"}),n.a.createElement("span",null,"\xa0","alisson_piuco@yahoo.com.br")),n.a.createElement("div",{className:"col-12 "},n.a.createElement("a",{href:"https://web.facebook.com/alisson.nunes.378/",target:"_blank"},n.a.createElement(M.b,{className:"icons",size:40,color:"#048BA8"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/alissonpn/",target:"_blank"},n.a.createElement(M.d,{className:"icons",size:40,color:"#048BA8"})),n.a.createElement("a",{href:"https://github.com/sylleryum",target:"_blank"},n.a.createElement(M.c,{className:"icons",size:40,color:"#048BA8"}))))))},ge=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(v,{banner:"Sobre o Me ajuda a ajudar"}),n.a.createElement(f,null),n.a.createElement("section",{className:"container"},n.a.createElement("div",{className:"row justify content-center text-center"},n.a.createElement("h3",{className:"explanation pb-2"},le.homePageExplanation),n.a.createElement("h6",{className:"disclaimer"},n.a.createElement("u",null,le.disclaimerAbout)),n.a.createElement("div",{className:"py-5 justify content-center col-12"},n.a.createElement(fe,null)),n.a.createElement("div",{className:"py-5 col-12"},n.a.createElement("h2",{className:_.TEXT_2+" display-5 font-weight-bold"},"Contato"),n.a.createElement("hr",{className:_.BG_2+" my-2 mb-5"}),n.a.createElement(ve,null)),n.a.createElement("hr",{className:_.BG_1+" my-2 mb-5"}))))},he=function(){return n.a.createElement("div",{className:"home-page"},n.a.createElement(ie,{main:le.homePageJumboMain,sub:le.homePageJumboSub,explanation:le.homePageExplanation}),n.a.createElement(ge,null))},Ne=t(5),je=function(){return n.a.createElement("footer",{className:"text-center p-1 m-0 bg-4 footer"},n.a.createElement("div",{className:Ne.TEXT_5+" p-0 m-0"},"Me ajuda a ajudar, ",n.a.createElement("a",{href:"/sobre#contato"},"Contato")),n.a.createElement("div",{className:Ne.TEXT_5},le.disclaimerAbout))},xe=Object(r.createContext)(null),ye=function(){var e=Object(r.useState)({error:!1,errorMessage:"desconhecido"}),a=Object(c.a)(e,2),t=a[0],o=a[1],s=Object(r.useState)([["busca","/busca","Buscar institui\xe7\xe3o"],["sobre","/sobre","Sobre"]]),i=Object(c.a)(s,2),l=i[0];i[1];return n.a.createElement(u.a,null,n.a.createElement("div",{className:"main-container"},n.a.createElement(m,{ListOfLinks:l}),n.a.createElement(xe.Provider,{value:{error:t,setError:o}},t.error?n.a.createElement(Z,{errorMessage:t.errorMessage,descriptionMain:"Nosso servidor resolveu sair para um caf\xe9 e ainda n\xe3o voltou.",descriptionSub:"Por favor, verifique o endere\xe7o digitado, tente atualizar a p\xe1gina ou volte mais tarde"}):n.a.createElement(ee.c,null,n.a.createElement(ee.a,{exact:!0,path:"/",component:he}),n.a.createElement(ee.a,{exact:!0,path:"/busca",component:$}),n.a.createElement(ee.a,{exact:!0,path:"/instituicao/:id",component:se}),n.a.createElement(ee.a,{exact:!0,path:"/sobre",component:ge})))),n.a.createElement(je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,a,t){"use strict";t.r(a),t.d(a,"disclaimer",(function(){return r})),t.d(a,"disclaimerAbout",(function(){return n})),t.d(a,"homePageJumboMain",(function(){return o})),t.d(a,"homePageJumboSub",(function(){return s})),t.d(a,"homePageExplanation",(function(){return c})),t.d(a,"faq",(function(){return i}));var r="Por favor tenha em considera\xe7\xe3o que esta op\xe7\xe3o simplesmente redireciona para a p\xe1gina de doa\xe7\xe3o da institui\xe7\xe3o no site dela, meajudeaaajudar n\xe3o tem NENHUMA responsabilidade pelo mesmo. Para mais informa\xe7\xf5es verifique a se\xe7\xe3o de Sobre deste site",n="Aviso: Me ajuda a ajudar se exime de qualquer responsabilidade pelas informa\xe7\xf5es aqui encontradas, todos os dados s\xe3o de propriedade das pr\xf3prias institui\xe7\xf5es.",o="Quer doar para uma institui\xe7\xe3o s\xe9ria, mas n\xe3o sabe qual?",s="N\xf3s te ajudamos a encontr\xe1-la!",c="Me ajuda a ajudar \xe9 um site 100% sem fins lucrativos que tem a miss\xe3o de te ajudar a encontrar uma institui\xe7\xe3o de caridade s\xe9ria que esteja de acordo com causas e locais de atua\xe7\xe3o da sua prefer\xeancia.",i=[["O que \xe9 o Me ajuda a ajudar?","Este \xe9 um site constru\xeddo com o intuito de facilitar para qual pessoa encontrar uma institui\xe7\xe3o de caridades para doar"],["Por que um site assim? Como nasceu a ideia","A ideia nasceu quando o criador do site estava procurando uma institui\xe7\xe3o de caridade ao seu entorno para fazer uma doa\xe7\xe3o e notou o qu\xe3o dif\xedcil \xe9 de encontrar institui\xe7\xf5es de caridade locais sem nenhum \u201cponto de partida\u201d com informa\xe7\xf5es e instru\xe7\xf5es claras para doar. \nMe ajuda a ajudar visa em suprir essa demanda de um \u201cponto de partida\u201d, um lugar onde facilita encontrar institui\xe7\xf5es baseadas nas preferencias de cada um.\n"],["Como funciona o Me ajuda a ajudar?",'O Me ajuda a ajudar \xe9 um site que funciona como um "cat\xe1logo de institui\xe7\xf5es de caridades\u201d, onde as mesmas s\xe3o categorizadas por causas e por lugar de atua\xe7\xe3o afim de que fique f\xe1cil para qualquer pessoa que deseja fazer uma doa\xe7\xe3o mas n\xe3o saiba para quem, encontrar uma institui\xe7\xe3o que esteja de acordo com seus ideais e objetivos.'],["De onde vem os dados das institui\xe7\xf5es presentes nesse site?","100% das informa\xe7\xf5es aqui presentes sobre as institui\xe7\xf5es vem das pr\xf3prias p\xe1ginas das institui\xe7\xf5es, <strong>Me ajuda a ajudar n\xe3o tem nenhuma responsabilidade sobre qualquer informa\xe7\xe3o das mesmas.</strong>"],["De onde vem as institui\xe7\xf5es de caridade presentes nesse site? ","As institui\xe7\xf5es de caridade s\xe3o encontradas atrav\xe9s de contato com prefeituras locais, pesquisas e indica\xe7\xf5es."],["Qual o crit\xe9rio usado para que uma institui\xe7\xe3o seja adicionada no Me ajuda a ajudar?","\xc9 feito uma r\xe1pida an\xe1lise da p\xe1gina da institui\xe7\xe3o, se parece aut\xeantica por exemplo, se existem informa\xe7\xf5es m\xednimas necess\xe1rias como uma p\xe1gina explicando como doar <strong>(Me ajuda a ajudar n\xe3o tem nenhuma responsabilidade sobre as institui\xe7\xf5es aqui presentes assim como as informa\xe7\xf5es).</strong>"],["Como Fa\xe7o para indicar uma institui\xe7\xe3o/Gostaria de sugerir algo/pedir uma corre\xe7\xe3o ou pedir a remo\xe7\xe3o de alguma informa\xe7\xe3o:","Por favor entrar em contato conforme dados na parte inferior desta p\xe1gina"],["Como funciona a op\xe7\xe3o de doar para uma institui\xe7\xe3o?","Esta op\xe7\xe3o simplesmente redireciona para a p\xe1gina de doa\xe7\xe3o da pr\xf3pria institui\xe7\xe3o, <strong>Me ajuda a ajudar n\xe3o tem nenhuma responsabilidade sobre doa\xe7\xf5es</strong>"],["Existe algum custo envolvido? ","Este site e todo o sistema desenvolvido para o mesmo s\xe3o 100% gratuitos, n\xe3o existe nenhum tipo de ganho/cobran\xe7as."],["De onde vem a renda para manter o site?","Este site \xe9 mantido com fundos do pr\xf3prio criador do site."],["O Me ajuda a ajudar precisa de alguma ajuda financeira?","Em quest\xf5es financeiras, atualmente n\xe3o, por\xe9m, caso o projeto cres\xe7a os custos crescer\xe3o tamb\xe9m (banco de dados atualmente tem capacidade para ao todo 10000 linhas, quantidade relativamente baixa) e ser\xe1 necess\xe1rio avaliar custos"],["Posso colaborar de alguma outra maneira?","Obrigado pelo interesse! Por favor verifique nesta <a href='https://github.com/sylleryum/meAjudaaAjudar/wiki' target='_blank'>p\xe1gina</a>"],["(para desenvolvedores) posso usar os dados da API do Me ajuda a ajudar?","Sim, por favor entre em contato com o criador do site do final da p\xe1gina"],["Quem \xe9 o criador da p\xe1gina","Alisson Piucco Nunes, links de redes sociais na se\xe7\xe3o contato"]]},44:function(e,a,t){"use strict";t.r(a),t.d(a,"data",(function(){return r}));var r={id:2,nome:"Asilo Padre Cacique",imagem:"https://asilopadrecacique.com.br/images/padre.png",descricao:"O Asilo Padre Cacique \xe9 uma organiza\xe7\xe3o n\xe3o governamental, sem fins lucrativos. A entidade foi fundada em 19 de junho de 1898 pelo Padre baiano Joaquim Cacique de Barros, que j\xe1 naquele s\xe9culo realizava obras assistenciais. Filho de um mestre na constru\xe7\xe3o de barcos, nasceu em Ribeira do Itapagipe, Salvador, em 11 de agosto de 1831, tendo, aos 32 anos de idade, vindo morar, exercer o sacerd\xf3cio e dedicar-se a causas filantr\xf3picas em Porto Alegre, \xe0 \xe9poca com aproximadamente 20 mil habitantes.",cidade:"Porto Alegre",causa:{id:13,causa:"Idosos",subCausa:null},sobre:"\nO Asilo Padre Cacique \xe9 uma organiza\xe7\xe3o n\xe3o governamental, sem fins lucrativos. A entidade foi fundada em 19 de junho de 1898 pelo Padre baiano Joaquim Cacique de Barros, que j\xe1 naquele s\xe9culo realizava obras assistenciais. Filho de um mestre na constru\xe7\xe3o de barcos, nasceu em Ribeira do Itapagipe, Salvador, em 11 de agosto de 1831, tendo, aos 32 anos de idade, vindo morar, exercer o sacerd\xf3cio e dedicar-se a causas filantr\xf3picas em Porto Alegre, \xe0 \xe9poca com aproximadamente 20 mil habitantes. \n \nEm sua longa trajet\xf3ria, foram muitos os momentos de dificuldades. A Sociedade Humanit\xe1ria Padre Cacique consolidou seu prest\xedgio e escreveu sua trajet\xf3ria. Em muitos momentos, a sociedade, organizada para acolher e manter pessoas idosas carentes de ambos os sexos, sem distin\xe7\xe3o de ra\xe7a, cor ou credo religioso, enfrentou s\xe9rias dificuldades para manter as institui\xe7\xf5es, como o Col\xe9gio de Santa Tereza e o Asilo de Mendicidade Padre Cacique, no s\xe9culo passado, e o Asilo S\xe3o Joaquim, inaugurado em 1932. \n",url:"https://asilopadrecacique.com.br",doarLink:"https://asilopadrecacique.com.br/ajuda",contato:{id:2,email:"asilo@asilopadrecacique.com.br",logradouro:"Av. Padre Cacique",numero:1178,telefone:"(51) 3233-7571",_Links:null,cidade:"Porto Alegre"},_Links:[{rel:"self",href:"http://localhost:8080/v1/instituicoes/2"},{rel:"cidades",href:"http://localhost:8080/v1/instituicoes/"}]}},5:function(e,a,t){"use strict";t.r(a),t.d(a,"TEXT_1",(function(){return r})),t.d(a,"TEXT_2",(function(){return n})),t.d(a,"TEXT_3",(function(){return o})),t.d(a,"TEXT_4",(function(){return s})),t.d(a,"TEXT_5",(function(){return c})),t.d(a,"BG_1",(function(){return i})),t.d(a,"BG_2",(function(){return l})),t.d(a,"BG_3",(function(){return u})),t.d(a,"BG_4",(function(){return m})),t.d(a,"BG_5",(function(){return d}));var r="text-1",n="text-2",o="text-3",s="text-4",c="text-5",i="bg-1",l="bg-2",u="bg-3",m="bg-4",d="bg-5"},51:function(e,a,t){e.exports=t(106)},56:function(e,a,t){},57:function(e,a,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.4babcfbe.chunk.js.map