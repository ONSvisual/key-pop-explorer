import{S as Ia,i as Aa,s as $a,e as s,t as k,k as b,c as r,a as n,h as w,d as l,m as g,b as a,F as _l,f as Ca,g as Z,G as e,H as vl,I as ta,j as oa,l as sl,J as fl,K as te,L as Va,M as rl,N as Pa,O as pl,v as ml,P as bl,w as La,Q as gl,x as Na,y as Da,R as El,T as yl,U as kl,q as ka,o as wa,B as Sa,r as wl}from"../chunks/vendor-4c2c0f6f.js";import{a as Il}from"../chunks/paths-396f020f.js";import{t as Al}from"../chunks/config-198f3a14.js";function $l(i){let t,o,c,_,u,h,f,p=`${i[0]}px`;return{c(){t=s("aside"),o=s("div"),c=s("strong"),_=k("WARNING! This is a prototype. Data is synthetic. It is NOT actual 2021 Census data."),h=b(),f=s("div"),this.h()},l(v){t=r(v,"ASIDE",{role:!0,class:!0});var A=n(t);o=r(A,"DIV",{class:!0});var I=n(o);c=r(I,"STRONG",{});var E=n(c);_=w(E,"WARNING! This is a prototype. Data is synthetic. It is NOT actual 2021 Census data."),E.forEach(l),I.forEach(l),A.forEach(l),h=g(v),f=r(v,"DIV",{class:!0}),n(f).forEach(l),this.h()},h(){a(o,"class","wrapper middle"),a(t,"role","alert"),a(t,"class","warning svelte-180bvkl"),_l(()=>i[1].call(t)),a(f,"class","spacer svelte-180bvkl"),Ca(f,"height",p,!1)},m(v,A){Z(v,t,A),e(t,o),e(o,c),e(c,_),u=vl(t,i[1].bind(t)),Z(v,h,A),Z(v,f,A)},p(v,[A]){A&1&&p!==(p=`${v[0]}px`)&&Ca(f,"height",p,!1)},i:ta,o:ta,d(v){v&&l(t),u(),v&&l(h),v&&l(f)}}}function Ll(i,t,o){let c;function _(){c=this.clientHeight,o(0,c)}return[c,_]}class Nl extends Ia{constructor(t){super();Aa(this,t,Ll,$l,$a,{})}}function nl(i,t,o){const c=i.slice();return c[8]=t[o],c[10]=o,c}function ol(i,t,o){const c=i.slice();return c[11]=t[o],c}function il(i,t,o){const c=i.slice();return c[8]=t[o],c}function cl(i){let t,o,c=i[8].label+"",_,u,h;return{c(){t=s("li"),o=s("a"),_=k(c),h=b(),this.h()},l(f){t=r(f,"LI",{class:!0});var p=n(t);o=r(p,"A",{class:!0,href:!0});var v=n(o);_=w(v,c),v.forEach(l),h=g(p),p.forEach(l),this.h()},h(){a(o,"class","secondary-nav__link js-nav-clone__link"),a(o,"href",u=""+(ce+i[8].url)),a(t,"class","secondary-nav__item")},m(f,p){Z(f,t,p),e(t,o),e(o,_),e(t,h)},p(f,p){p&8&&c!==(c=f[8].label+"")&&oa(_,c),p&8&&u!==(u=""+(ce+f[8].url))&&a(o,"href",u)},d(f){f&&l(t)}}}function Dl(i){let t,o,c=i[8].label+"",_,u;return{c(){t=s("li"),o=s("a"),_=k(c),this.h()},l(h){t=r(h,"LI",{class:!0});var f=n(t);o=r(f,"A",{class:!0,href:!0});var p=n(o);_=w(p,c),p.forEach(l),f.forEach(l),this.h()},h(){a(o,"class","primary-nav__link col col--md-8 col--lg-10"),a(o,"href",u=""+(ce+i[8].url)),a(t,"class","primary-nav__item js-nav"),te(t,"hide--md",i[8].secondary)},m(h,f){Z(h,t,f),e(t,o),e(o,_)},p(h,f){f&8&&c!==(c=h[8].label+"")&&oa(_,c),f&8&&u!==(u=""+(ce+h[8].url))&&a(o,"href",u),f&8&&te(t,"hide--md",h[8].secondary)},d(h){h&&l(t)}}}function Sl(i){let t,o,c,_,u,h=i[8].label+"",f,p,v,A,I,E,d,N=i[8].label+"",H,x,se,z,ee,W;function Pe(...D){return i[7](i[10],...D)}let U=i[8].children,C=[];for(let D=0;D<U.length;D+=1)C[D]=ul(ol(i,U,D));return{c(){t=s("li"),o=s("a"),c=s("span"),_=b(),u=s("span"),f=k(h),A=b(),I=s("ul"),E=s("li"),d=s("a"),H=k(N),se=b();for(let D=0;D<C.length;D+=1)C[D].c();this.h()},l(D){t=r(D,"LI",{class:!0});var S=n(t);o=r(S,"A",{class:!0,href:!0,"aria-expanded":!0,"aria-label":!0});var $=n(o);c=r($,"SPAN",{"aria-hidden":!0,class:!0}),n(c).forEach(l),_=g($),u=r($,"SPAN",{class:!0});var M=n(u);f=w(M,h),M.forEach(l),$.forEach(l),A=g(S),I=r(S,"UL",{class:!0,"aria-expanded":!0,"aria-label":!0});var B=n(I);E=r(B,"LI",{class:!0});var K=n(E);d=r(K,"A",{class:!0,tabindex:!0,href:!0});var T=n(d);H=w(T,N),T.forEach(l),K.forEach(l),se=g(B);for(let P=0;P<C.length;P+=1)C[P].l(B);B.forEach(l),S.forEach(l),this.h()},h(){a(c,"aria-hidden","true"),a(c,"class","expansion-indicator"),a(u,"class","submenu-title"),a(o,"class","primary-nav__link col col--md-8 col--lg-10"),a(o,"href",p=""+(ce+i[8].url)),a(o,"aria-expanded","false"),a(o,"aria-label",v=i[8].label+" sub menu"),a(d,"class","primary-nav__child-link"),a(d,"tabindex","-1"),a(d,"href",x=""+(ce+i[8].url)),a(E,"class","primary-nav__child-item js-expandable__child hide--md"),a(I,"class","primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content jsEnhance"),a(I,"aria-expanded",z=i[8].expanded),a(I,"aria-label","submenu"),te(I,"js-nav-hidden",!i[8].expanded),a(t,"class","primary-nav__item js-nav js-expandable"),te(t,"js-expandable-active",i[8].expanded)},m(D,S){Z(D,t,S),e(t,o),e(o,c),e(o,_),e(o,u),e(u,f),e(t,A),e(t,I),e(I,E),e(E,d),e(d,H),e(I,se);for(let $=0;$<C.length;$+=1)C[$].m(I,null);ee||(W=Va(o,"click",Pe),ee=!0)},p(D,S){if(i=D,S&8&&h!==(h=i[8].label+"")&&oa(f,h),S&8&&p!==(p=""+(ce+i[8].url))&&a(o,"href",p),S&8&&v!==(v=i[8].label+" sub menu")&&a(o,"aria-label",v),S&8&&N!==(N=i[8].label+"")&&oa(H,N),S&8&&x!==(x=""+(ce+i[8].url))&&a(d,"href",x),S&8){U=i[8].children;let $;for($=0;$<U.length;$+=1){const M=ol(i,U,$);C[$]?C[$].p(M,S):(C[$]=ul(M),C[$].c(),C[$].m(I,null))}for(;$<C.length;$+=1)C[$].d(1);C.length=U.length}S&8&&z!==(z=i[8].expanded)&&a(I,"aria-expanded",z),S&8&&te(I,"js-nav-hidden",!i[8].expanded),S&8&&te(t,"js-expandable-active",i[8].expanded)},d(D){D&&l(t),Pa(C,D),ee=!1,W()}}}function ul(i){let t,o,c=i[11].label+"",_,u;return{c(){t=s("li"),o=s("a"),_=k(c),this.h()},l(h){t=r(h,"LI",{class:!0});var f=n(t);o=r(f,"A",{class:!0,tabindex:!0,href:!0});var p=n(o);_=w(p,c),p.forEach(l),f.forEach(l),this.h()},h(){a(o,"class","primary-nav__child-link"),a(o,"tabindex","-1"),a(o,"href",u=""+(ce+i[11].url)),a(t,"class","primary-nav__child-item js-expandable__child")},m(h,f){Z(h,t,f),e(t,o),e(o,_)},p(h,f){f&8&&c!==(c=h[11].label+"")&&oa(_,c),f&8&&u!==(u=""+(ce+h[11].url))&&a(o,"href",u)},d(h){h&&l(t)}}}function dl(i){let t;function o(u,h){return u[8].children?Sl:Dl}let c=o(i),_=c(i);return{c(){_.c(),t=sl()},l(u){_.l(u),t=sl()},m(u,h){_.m(u,h),Z(u,t,h)},p(u,h){c===(c=o(u))&&_?_.p(u,h):(_.d(1),_=c(u),_&&(_.c(),_.m(t.parentNode,t)))},d(u){_.d(u),u&&l(t)}}}function Cl(i){let t,o,c,_,u,h,f,p,v,A,I,E,d,N,H,x,se,z,ee,W,Pe,U,C,D,S,$,M,B,K,T,P,Ee,Ye,q,J,F,ye,ze,ke,O,we,ue,Ie,Ae,Ue,de,he,$e,Ke,fe,_e,me,Je,Q,V,R,ae,Qe,Xe,Y,Le,le,Ne,De,Se,Oe,Ze,je,re=i[3].filter(hl),G=[];for(let m=0;m<re.length;m+=1)G[m]=cl(il(i,re,m));let Ce=i[3],j=[];for(let m=0;m<Ce.length;m+=1)j[m]=dl(nl(i,Ce,m));return{c(){t=s("header"),o=s("a"),c=k("Skip to main content"),_=b(),u=s("div"),h=k(i[0]),f=b(),p=s("div"),v=s("div"),A=s("div"),I=s("a"),E=s("img"),N=b(),H=s("div"),x=s("div"),se=s("span"),z=k("English (EN) |"),ee=b(),W=s("a"),Pe=k("Cymraeg (CY)"),C=b(),D=s("div"),S=s("ul");for(let m=0;m<G.length;m+=1)G[m].c();$=b(),M=s("div"),B=s("nav"),K=s("ul"),T=s("li"),P=s("a"),Ee=s("span"),Ye=k("Menu"),q=b(),J=s("li"),F=s("a"),ye=s("span"),ze=k("Search"),ke=b(),O=s("ul"),we=s("li"),ue=s("a"),Ie=k("Home"),Ae=b();for(let m=0;m<j.length;m+=1)j[m].c();Ue=b(),de=s("li"),he=s("span"),$e=k("English (EN) |"),Ke=b(),fe=s("a"),_e=k("Cymraeg (CY)"),Je=b(),Q=s("div"),V=s("div"),R=s("form"),ae=s("label"),Qe=k("Search for a keyword(s) or time series ID"),Xe=b(),Y=s("input"),Le=b(),le=s("button"),Ne=s("span"),De=k("Search"),Se=b(),Oe=s("span"),this.h()},l(m){t=r(m,"HEADER",{});var L=n(t);o=r(L,"A",{class:!0,href:!0,tabindex:!0});var y=n(o);c=w(y,"Skip to main content"),y.forEach(l),_=g(L),u=r(L,"DIV",{id:!0,class:!0});var X=n(u);h=w(X,i[0]),X.forEach(l),f=g(L),p=r(L,"DIV",{class:!0});var He=n(p);v=r(He,"DIV",{class:!0});var Ve=n(v);A=r(Ve,"DIV",{class:!0});var sa=n(A);I=r(sa,"A",{href:!0});var Te=n(I);E=r(Te,"IMG",{class:!0,src:!0,alt:!0}),Te.forEach(l),sa.forEach(l),N=g(Ve),H=r(Ve,"DIV",{class:!0});var be=n(H);x=r(be,"DIV",{class:!0});var ne=n(x);se=r(ne,"SPAN",{});var ia=n(se);z=w(ia,"English (EN) |"),ia.forEach(l),ee=g(ne),W=r(ne,"A",{href:!0,class:!0,lang:!0});var ra=n(W);Pe=w(ra,"Cymraeg (CY)"),ra.forEach(l),ne.forEach(l),be.forEach(l),C=g(Ve),D=r(Ve,"DIV",{class:!0});var ge=n(D);S=r(ge,"UL",{class:!0});var na=n(S);for(let ve=0;ve<G.length;ve+=1)G[ve].l(na);na.forEach(l),ge.forEach(l),Ve.forEach(l),He.forEach(l),$=g(L),M=r(L,"DIV",{class:!0});var Ge=n(M);B=r(Ge,"NAV",{"aria-label":!0});var Re=n(B);K=r(Re,"UL",{class:!0});var xe=n(K);T=r(xe,"LI",{class:!0});var Be=n(T);P=r(Be,"A",{href:!0,id:!0,"aria-controls":!0,"aria-expanded":!0,class:!0});var Me=n(P);Ee=r(Me,"SPAN",{class:!0});var ca=n(Ee);Ye=w(ca,"Menu"),ca.forEach(l),Me.forEach(l),Be.forEach(l),q=g(xe),J=r(xe,"LI",{class:!0});var ea=n(J);F=r(ea,"A",{href:!0,id:!0,"aria-controls":!0,"aria-expanded":!0,class:!0});var ua=n(F);ye=r(ua,"SPAN",{class:!0});var da=n(ye);ze=w(da,"Search"),da.forEach(l),ua.forEach(l),ea.forEach(l),xe.forEach(l),ke=g(Re),O=r(Re,"UL",{class:!0,id:!0,"aria-expanded":!0});var oe=n(O);we=r(oe,"LI",{class:!0});var aa=n(we);ue=r(aa,"A",{class:!0,href:!0,style:!0});var ha=n(ue);Ie=w(ha,"Home"),ha.forEach(l),aa.forEach(l),Ae=g(oe);for(let ve=0;ve<j.length;ve+=1)j[ve].l(oe);Ue=g(oe),de=r(oe,"LI",{class:!0});var ie=n(de);he=r(ie,"SPAN",{});var fa=n(he);$e=w(fa,"English (EN) |"),fa.forEach(l),Ke=g(ie),fe=r(ie,"A",{href:!0,class:!0});var _a=n(fe);_e=w(_a,"Cymraeg (CY)"),_a.forEach(l),ie.forEach(l),oe.forEach(l),Re.forEach(l),Ge.forEach(l),Je=g(L),Q=r(L,"DIV",{class:!0,id:!0,"aria-expanded":!0});var va=n(Q);V=r(va,"DIV",{class:!0,role:!0});var pa=n(V);R=r(pa,"FORM",{class:!0,action:!0});var Fe=n(R);ae=r(Fe,"LABEL",{class:!0,for:!0});var ma=n(ae);Qe=w(ma,"Search for a keyword(s) or time series ID"),ma.forEach(l),Xe=g(Fe),Y=r(Fe,"INPUT",{type:!0,autocomplete:!0,class:!0,id:!0,name:!0}),Le=g(Fe),le=r(Fe,"BUTTON",{type:!0,class:!0,id:!0});var la=n(le);Ne=r(la,"SPAN",{class:!0});var ba=n(Ne);De=w(ba,"Search"),ba.forEach(l),Se=g(la),Oe=r(la,"SPAN",{class:!0}),n(Oe).forEach(l),la.forEach(l),Fe.forEach(l),pa.forEach(l),va.forEach(l),L.forEach(l),this.h()},h(){a(o,"class","skiplink"),a(o,"href","#main"),a(o,"tabindex","0"),a(u,"id","pagePath"),a(u,"class","hide"),a(E,"class","logo"),fl(E.src,d="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg")||a(E,"src",d),a(E,"alt","Office for National Statistics logo - Homepage"),a(I,"href",ce+"/"),a(A,"class","col col--lg-one-third col--md-one-third"),a(W,"href",U="//cy.ons.gov.uk"+i[0]),a(W,"class","language__link"),a(W,"lang","cy"),a(x,"class","language"),a(H,"class","col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"),a(S,"class","secondary-nav__list js-nav-clone__list"),a(D,"class","secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide"),a(v,"class","header col-wrap"),a(p,"class","wrapper"),a(Ee,"class","nav--controls__text"),a(P,"href","#nav-primary"),a(P,"id","menu-toggle"),a(P,"aria-controls","nav-primary"),a(P,"aria-expanded",i[1]),a(P,"class","nav--controls__menu"),a(T,"class","nav--controls__item"),te(T,"menu-is-expanded",i[1]),a(ye,"class","nav--controls__text"),a(F,"href","#nav-search"),a(F,"id","search-toggle"),a(F,"aria-controls","nav-search"),a(F,"aria-expanded",i[2]),a(F,"class","nav--controls__search"),a(J,"class","nav--controls__item"),te(J,"search-is-expanded",i[2]),a(K,"class","nav--controls"),a(ue,"class","primary-nav__link col col--md-7 col--lg-9"),a(ue,"href",ce+"/"),Ca(ue,"color","#e5e6e7"),a(we,"class","primary-nav__item js-nav"),a(fe,"href",me="//cy.ons.gov.uk"+i[0]),a(fe,"class","language__link"),a(de,"class","hide--md primary-nav__language"),a(O,"class","wrapper primary-nav__list"),a(O,"id","nav-primary"),a(O,"aria-expanded",i[1]),te(O,"nav-main--hidden",!i[1]),a(B,"aria-label","Header links"),a(M,"class","primary-nav print--hide"),a(ae,"class","search__label col col--md-23 col--lg-24"),a(ae,"for","nav-search"),a(Y,"type","search"),a(Y,"autocomplete","off"),a(Y,"class","search__input col col--md-21 col--lg-32"),a(Y,"id","nav-search"),a(Y,"name","q"),Y.value="",a(Ne,"class","visuallyhidden"),a(Oe,"class","icon icon-search--light"),a(le,"type","submit"),a(le,"class","search__button col--md-3 col--lg-3"),a(le,"id","nav-search-submit"),a(R,"class","col-wrap search__form"),a(R,"action",ce+"/search"),a(V,"class","wrapper"),a(V,"role","search"),a(Q,"class","search print--hide"),a(Q,"id","searchBar"),a(Q,"aria-expanded",i[2]),te(Q,"nav-search--hidden",!i[2])},m(m,L){Z(m,t,L),e(t,o),e(o,c),e(t,_),e(t,u),e(u,h),e(t,f),e(t,p),e(p,v),e(v,A),e(A,I),e(I,E),e(v,N),e(v,H),e(H,x),e(x,se),e(se,z),e(x,ee),e(x,W),e(W,Pe),e(v,C),e(v,D),e(D,S);for(let y=0;y<G.length;y+=1)G[y].m(S,null);e(t,$),e(t,M),e(M,B),e(B,K),e(K,T),e(T,P),e(P,Ee),e(Ee,Ye),e(K,q),e(K,J),e(J,F),e(F,ye),e(ye,ze),e(B,ke),e(B,O),e(O,we),e(we,ue),e(ue,Ie),e(O,Ae);for(let y=0;y<j.length;y+=1)j[y].m(O,null);e(O,Ue),e(O,de),e(de,he),e(he,$e),e(de,Ke),e(de,fe),e(fe,_e),e(t,Je),e(t,Q),e(Q,V),e(V,R),e(R,ae),e(ae,Qe),e(R,Xe),e(R,Y),e(R,Le),e(R,le),e(le,Ne),e(Ne,De),e(le,Se),e(le,Oe),Ze||(je=[Va(P,"click",rl(i[5])),Va(F,"click",rl(i[6]))],Ze=!0)},p(m,[L]){if(L&1&&oa(h,m[0]),L&1&&U!==(U="//cy.ons.gov.uk"+m[0])&&a(W,"href",U),L&8){re=m[3].filter(hl);let y;for(y=0;y<re.length;y+=1){const X=il(m,re,y);G[y]?G[y].p(X,L):(G[y]=cl(X),G[y].c(),G[y].m(S,null))}for(;y<G.length;y+=1)G[y].d(1);G.length=re.length}if(L&2&&a(P,"aria-expanded",m[1]),L&2&&te(T,"menu-is-expanded",m[1]),L&4&&a(F,"aria-expanded",m[2]),L&4&&te(J,"search-is-expanded",m[2]),L&24){Ce=m[3];let y;for(y=0;y<Ce.length;y+=1){const X=nl(m,Ce,y);j[y]?j[y].p(X,L):(j[y]=dl(X),j[y].c(),j[y].m(O,Ue))}for(;y<j.length;y+=1)j[y].d(1);j.length=Ce.length}L&1&&me!==(me="//cy.ons.gov.uk"+m[0])&&a(fe,"href",me),L&2&&a(O,"aria-expanded",m[1]),L&2&&te(O,"nav-main--hidden",!m[1]),L&4&&a(Q,"aria-expanded",m[2]),L&4&&te(Q,"nav-search--hidden",!m[2])},i:ta,o:ta,d(m){m&&l(t),Pa(G,m),Pa(j,m),Ze=!1,pl(je)}}}let ce="//www.ons.gov.uk";const hl=i=>i.secondary;function Vl(i,t,o){let c,_=!1,u=!1,h=[{label:"Business, industry and trade",url:"/businessindustryandtrade",expanded:!1,children:[{label:"Business",url:"/businessindustryandtrade/business"},{label:"Changes to business",url:"/businessindustryandtrade/changestobusiness"},{label:"Construction industry",url:"/businessindustryandtrade/constructionindustry"},{label:"IT and internet industry",url:"/businessindustryandtrade"},{label:"International trade",url:"/businessindustryandtrade/itandinternetindustry"},{label:"Manufacturing and production industry",url:"/businessindustryandtrade/manufacturingandproductionindustry"},{label:"Retail industry",url:"/businessindustryandtrade/retailindustry"},{label:"Tourism industry",url:"/businessindustryandtrade/tourismindustry"}]},{label:"Economy",url:"/economy",expanded:!1,children:[{label:"Economic output and productivity",url:"/economy/economicoutputandproductivity"},{label:"Environmental accounts",url:"/economy/environmentalaccounts"},{label:"Government, public sector and taxes",url:"/economy/governmentpublicsectorandtaxes"},{label:"Gross Domestic Product (GDP)",url:"/economy/grossdomesticproductgdp"},{label:"Gross Value Added (GVA)",url:"/economy/grossvalueaddedgva"},{label:"Inflation and price indices",url:"/economy/inflationandpriceindices"},{label:"Investments, pensions and trusts",url:"/economy/investmentspensionsandtrusts"},{label:"National accounts",url:"/economy/nationalaccounts"},{label:"Regional accounts",url:"/economy/regionalaccounts"}]},{label:"Employment and labour market",url:"/employmentandlabourmarket",expanded:!1,children:[{label:"People in work",url:"/employmentandlabourmarket/peopleinwork"},{label:"People not in work",url:"/employmentandlabourmarket/peoplenotinwork"}]},{label:"People, population and community",url:"/peoplepopulationandcommunity",expanded:!1,children:[{label:"Births, deaths and marriages",url:"/peoplepopulationandcommunity/birthsdeathsandmarriages"},{label:"Crime and justice",url:"/peoplepopulationandcommunity/crimeandjustice"},{label:"Cultural identity",url:"/peoplepopulationandcommunity/culturalidentity"},{label:"Education and childcare",url:"/peoplepopulationandcommunity/educationandchildcare"},{label:"Elections",url:"/peoplepopulationandcommunity/elections"},{label:"Health and social care",url:"/peoplepopulationandcommunity/healthandsocialcare"},{label:"Household characteristics",url:"/peoplepopulationandcommunity/householdcharacteristics"},{label:"Housing",url:"/peoplepopulationandcommunity/housing"},{label:"Leisure and tourism",url:"/peoplepopulationandcommunity/leisureandtourism"},{label:"Personal and household finances",url:"/peoplepopulationandcommunity/personalandhouseholdfinances"},{label:"Population and migration",url:"/peoplepopulationandcommunity/populationandmigration"},{label:"Well-being",url:"/peoplepopulationandcommunity/wellbeing"}]},{label:"Taking part in a survey?",url:"/surveys"},{label:"Release calendar",url:"/releasecalendar",secondary:!0},{label:"Methodology",url:"/methodology",secondary:!0},{label:"Media",url:"/news",secondary:!0},{label:"About",url:"/aboutus",secondary:!0},{label:"Blog",url:"https://blog.ons.gov.uk/",secondary:!0}];function f(I,E){window.matchMedia("(max-width:767px)").matches&&(I.preventDefault(),o(3,h[E].expanded=!h[E].expanded,h))}return ml(()=>{o(0,c=window.location.pathname)}),[c,_,u,h,f,()=>o(1,_=!_),()=>o(2,u=!u),(I,E)=>f(E,I)]}class Pl extends Ia{constructor(t){super();Aa(this,t,Vl,Cl,$a,{})}}function Ol(i){let t,o,c,_,u,h,f,p,v,A,I,E,d,N,H,x,se,z,ee,W,Pe,U,C,D,S,$,M,B,K,T,P,Ee,Ye,q,J,F,ye,ze,ke,O,we,ue,Ie,Ae,Ue,de,he,$e,Ke,fe,_e,me,Je,Q,V,R,ae,Qe,Xe,Y,Le,le,Ne,De,Se,Oe,Ze,je,re,G,Ce,j,m,L,y,X,He,Ve,sa,Te,be,ne,ia,ra,ge,na,Ge,Re,xe;return{c(){t=s("footer"),o=s("h2"),c=k("Footer links"),_=b(),u=s("div"),h=s("div"),f=s("nav"),p=s("div"),v=s("div"),A=s("h3"),I=k("Help"),E=b(),d=s("ul"),N=s("li"),H=s("a"),x=k("Accessibility"),se=b(),z=s("li"),ee=s("a"),W=k("Cookies"),Pe=b(),U=s("li"),C=s("a"),D=k("Privacy"),S=b(),$=s("li"),M=s("a"),B=k("Terms and conditions"),K=b(),T=s("div"),P=s("h3"),Ee=k("About ONS"),Ye=b(),q=s("ul"),J=s("li"),F=s("a"),ye=k("What we do"),ze=b(),ke=s("li"),O=s("a"),we=k("Careers"),ue=b(),Ie=s("li"),Ae=s("a"),Ue=k("Contact us"),de=b(),he=s("li"),$e=s("a"),Ke=k("Freedom of Information"),fe=b(),_e=s("div"),me=s("h3"),Je=k("Connect with us"),Q=b(),V=s("ul"),R=s("li"),ae=s("a"),Qe=k("Twitter"),Xe=b(),Y=s("li"),Le=s("a"),le=k("Facebook"),Ne=b(),De=s("li"),Se=s("a"),Oe=k("LinkedIn"),Ze=b(),je=s("li"),re=s("a"),G=k("Consultations"),Ce=b(),j=s("li"),m=s("a"),L=k("Discussion forums"),y=b(),X=s("li"),He=s("a"),Ve=k("Email alerts"),sa=b(),Te=s("div"),be=s("div"),ne=s("img"),ra=b(),ge=s("p"),na=k("All content is available under the "),Ge=s("a"),Re=k("Open Government Licence v3.0"),xe=k(", except where otherwise stated"),this.h()},l(Be){t=r(Be,"FOOTER",{class:!0});var Me=n(t);o=r(Me,"H2",{class:!0});var ca=n(o);c=w(ca,"Footer links"),ca.forEach(l),_=g(Me),u=r(Me,"DIV",{class:!0});var ea=n(u);h=r(ea,"DIV",{class:!0});var ua=n(h);f=r(ua,"NAV",{"aria-label":!0});var da=n(f);p=r(da,"DIV",{class:!0});var oe=n(p);v=r(oe,"DIV",{class:!0});var aa=n(v);A=r(aa,"H3",{class:!0});var ha=n(A);I=w(ha,"Help"),ha.forEach(l),E=g(aa),d=r(aa,"UL",{class:!0});var ie=n(d);N=r(ie,"LI",{class:!0});var fa=n(N);H=r(fa,"A",{href:!0});var _a=n(H);x=w(_a,"Accessibility"),_a.forEach(l),fa.forEach(l),se=g(ie),z=r(ie,"LI",{class:!0});var va=n(z);ee=r(va,"A",{href:!0});var pa=n(ee);W=w(pa,"Cookies"),pa.forEach(l),va.forEach(l),Pe=g(ie),U=r(ie,"LI",{class:!0});var Fe=n(U);C=r(Fe,"A",{href:!0});var ma=n(C);D=w(ma,"Privacy"),ma.forEach(l),Fe.forEach(l),S=g(ie),$=r(ie,"LI",{class:!0});var la=n($);M=r(la,"A",{href:!0});var ba=n(M);B=w(ba,"Terms and conditions"),ba.forEach(l),la.forEach(l),ie.forEach(l),aa.forEach(l),K=g(oe),T=r(oe,"DIV",{class:!0});var ve=n(T);P=r(ve,"H3",{class:!0});var Oa=n(P);Ee=w(Oa,"About ONS"),Oa.forEach(l),Ye=g(ve),q=r(ve,"UL",{class:!0});var We=n(q);J=r(We,"LI",{class:!0});var ja=n(J);F=r(ja,"A",{href:!0});var Ha=n(F);ye=w(Ha,"What we do"),Ha.forEach(l),ja.forEach(l),ze=g(We),ke=r(We,"LI",{class:!0});var Ta=n(ke);O=r(Ta,"A",{href:!0});var Ga=n(O);we=w(Ga,"Careers"),Ga.forEach(l),Ta.forEach(l),ue=g(We),Ie=r(We,"LI",{class:!0});var Ma=n(Ie);Ae=r(Ma,"A",{href:!0});var Fa=n(Ae);Ue=w(Fa,"Contact us"),Fa.forEach(l),Ma.forEach(l),de=g(We),he=r(We,"LI",{class:!0});var Ua=n(he);$e=r(Ua,"A",{href:!0});var Ra=n($e);Ke=w(Ra,"Freedom of Information"),Ra.forEach(l),Ua.forEach(l),We.forEach(l),ve.forEach(l),fe=g(oe),_e=r(oe,"DIV",{class:!0});var ga=n(_e);me=r(ga,"H3",{class:!0});var xa=n(me);Je=w(xa,"Connect with us"),xa.forEach(l),Q=g(ga),V=r(ga,"UL",{class:!0});var pe=n(V);R=r(pe,"LI",{class:!0});var Ba=n(R);ae=r(Ba,"A",{href:!0});var Wa=n(ae);Qe=w(Wa,"Twitter"),Wa.forEach(l),Ba.forEach(l),Xe=g(pe),Y=r(pe,"LI",{class:!0});var qa=n(Y);Le=r(qa,"A",{href:!0});var Ya=n(Le);le=w(Ya,"Facebook"),Ya.forEach(l),qa.forEach(l),Ne=g(pe),De=r(pe,"LI",{class:!0});var za=n(De);Se=r(za,"A",{href:!0});var Ka=n(Se);Oe=w(Ka,"LinkedIn"),Ka.forEach(l),za.forEach(l),Ze=g(pe),je=r(pe,"LI",{class:!0});var Ja=n(je);re=r(Ja,"A",{href:!0});var Qa=n(re);G=w(Qa,"Consultations"),Qa.forEach(l),Ja.forEach(l),Ce=g(pe),j=r(pe,"LI",{class:!0});var Xa=n(j);m=r(Xa,"A",{href:!0});var Za=n(m);L=w(Za,"Discussion forums"),Za.forEach(l),Xa.forEach(l),y=g(pe),X=r(pe,"LI",{class:!0});var el=n(X);He=r(el,"A",{href:!0});var al=n(He);Ve=w(al,"Email alerts"),al.forEach(l),el.forEach(l),pe.forEach(l),ga.forEach(l),oe.forEach(l),da.forEach(l),ua.forEach(l),sa=g(ea),Te=r(ea,"DIV",{class:!0});var ll=n(Te);be=r(ll,"DIV",{class:!0});var Ea=n(be);ne=r(Ea,"IMG",{class:!0,alt:!0,width:!0,src:!0}),ra=g(Ea),ge=r(Ea,"P",{class:!0});var ya=n(ge);na=w(ya,"All content is available under the "),Ge=r(ya,"A",{href:!0});var tl=n(Ge);Re=w(tl,"Open Government Licence v3.0"),tl.forEach(l),xe=w(ya,", except where otherwise stated"),ya.forEach(l),Ea.forEach(l),ll.forEach(l),ea.forEach(l),Me.forEach(l),this.h()},h(){a(o,"class","visuallyhidden"),a(A,"class","footer-nav__heading"),a(H,"href",qe+"/help/accessibility"),a(N,"class","footer-nav__item"),a(ee,"href",qe+"/cookies"),a(z,"class","footer-nav__item"),a(C,"href",qe+"/help/privacynotice"),a(U,"class","footer-nav__item"),a(M,"href",qe+"/help/termsandconditions"),a($,"class","footer-nav__item"),a(d,"class","footer-nav__list"),a(v,"class","col col--lg-one-third col--md-one-third"),a(P,"class","footer-nav__heading"),a(F,"href",qe+"/aboutus/whatwedo"),a(J,"class","footer-nav__item"),a(O,"href",qe+"/aboutus/careers"),a(ke,"class","footer-nav__item"),a(Ae,"href",qe+"/aboutus/contactus"),a(Ie,"class","footer-nav__item"),a($e,"href",qe+"/aboutus/transparencyandgovernance/freedomofinformationfoi"),a(he,"class","footer-nav__item"),a(q,"class","footer-nav__list"),a(T,"class","col col--lg-one-third col--md-one-third"),a(me,"class","footer-nav__heading"),a(ae,"href","https://twitter.com/ONS"),a(R,"class","footer-nav__item"),a(Le,"href","https://www.facebook.com/ONS"),a(Y,"class","footer-nav__item"),a(Se,"href","https://www.linkedin.com/company/office-for-national-statistics"),a(De,"class","footer-nav__item"),a(re,"href","https://consultations.ons.gov.uk/"),a(je,"class","footer-nav__item"),a(m,"href","https://www.statsusernet.org.uk/login"),a(j,"class","footer-nav__item"),a(He,"href","https://public.govdelivery.com/accounts/UKONS/subscribers/new"),a(X,"class","footer-nav__item"),a(V,"class","footer-nav__list"),a(_e,"class","col col--lg-one-third col--md-one-third"),a(p,"class","footer-nav col-wrap"),a(f,"aria-label","Footer links"),a(h,"class","wrapper"),a(ne,"class","footer-license__img"),a(ne,"alt","OGL"),a(ne,"width","60"),fl(ne.src,ia="https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg")||a(ne,"src",ia),a(Ge,"href","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"),a(ge,"class","footer-license__text margin-left-sm--0"),a(be,"class","footer-license"),a(Te,"class","wrapper"),a(u,"class","footer"),a(t,"class","print--hide margin-top--4")},m(Be,Me){Z(Be,t,Me),e(t,o),e(o,c),e(t,_),e(t,u),e(u,h),e(h,f),e(f,p),e(p,v),e(v,A),e(A,I),e(v,E),e(v,d),e(d,N),e(N,H),e(H,x),e(d,se),e(d,z),e(z,ee),e(ee,W),e(d,Pe),e(d,U),e(U,C),e(C,D),e(d,S),e(d,$),e($,M),e(M,B),e(p,K),e(p,T),e(T,P),e(P,Ee),e(T,Ye),e(T,q),e(q,J),e(J,F),e(F,ye),e(q,ze),e(q,ke),e(ke,O),e(O,we),e(q,ue),e(q,Ie),e(Ie,Ae),e(Ae,Ue),e(q,de),e(q,he),e(he,$e),e($e,Ke),e(p,fe),e(p,_e),e(_e,me),e(me,Je),e(_e,Q),e(_e,V),e(V,R),e(R,ae),e(ae,Qe),e(V,Xe),e(V,Y),e(Y,Le),e(Le,le),e(V,Ne),e(V,De),e(De,Se),e(Se,Oe),e(V,Ze),e(V,je),e(je,re),e(re,G),e(V,Ce),e(V,j),e(j,m),e(m,L),e(V,y),e(V,X),e(X,He),e(He,Ve),e(u,sa),e(u,Te),e(Te,be),e(be,ne),e(be,ra),e(be,ge),e(ge,na),e(ge,Ge),e(Ge,Re),e(ge,xe)},p:ta,i:ta,o:ta,d(Be){Be&&l(t)}}}let qe="//www.ons.gov.uk";class jl extends Ia{constructor(t){super();Aa(this,t,null,Ol,$a,{})}}function Hl(i){let t,o,c,_,u,h,f,p,v,A;c=new Nl({}),u=new Pl({});const I=i[1].default,E=bl(I,i,i[0],null);return v=new jl({}),{c(){t=s("link"),o=b(),La(c.$$.fragment),_=b(),La(u.$$.fragment),h=b(),f=s("main"),E&&E.c(),p=b(),La(v.$$.fragment),this.h()},l(d){const N=gl('[data-svelte="svelte-hkng3"]',document.head);t=r(N,"LINK",{rel:!0,href:!0}),N.forEach(l),o=g(d),Na(c.$$.fragment,d),_=g(d),Na(u.$$.fragment,d),h=g(d),f=r(d,"MAIN",{});var H=n(f);E&&E.l(H),H.forEach(l),p=g(d),Na(v.$$.fragment,d),this.h()},h(){a(t,"rel","icon"),a(t,"href",Il+"/favicon.png")},m(d,N){e(document.head,t),Z(d,o,N),Da(c,d,N),Z(d,_,N),Da(u,d,N),Z(d,h,N),Z(d,f,N),E&&E.m(f,null),Z(d,p,N),Da(v,d,N),A=!0},p(d,[N]){E&&E.p&&(!A||N&1)&&El(E,I,d,d[0],A?kl(I,d[0],N,null):yl(d[0]),null)},i(d){A||(ka(c.$$.fragment,d),ka(u.$$.fragment,d),ka(E,d),ka(v.$$.fragment,d),A=!0)},o(d){wa(c.$$.fragment,d),wa(u.$$.fragment,d),wa(E,d),wa(v.$$.fragment,d),A=!1},d(d){l(t),d&&l(o),Sa(c,d),d&&l(_),Sa(u,d),d&&l(h),d&&l(f),E&&E.d(d),d&&l(p),Sa(v,d)}}}let Tl="light";function Gl(i,t,o){let{$$slots:c={},$$scope:_}=t;return wl("theme",Al[Tl]),i.$$set=u=>{"$$scope"in u&&o(0,_=u.$$scope)},[_,c]}class Rl extends Ia{constructor(t){super();Aa(this,t,Gl,Hl,$a,{})}}export{Rl as default};
