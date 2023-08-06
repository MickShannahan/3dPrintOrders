import{d as D,r as k,c as r,e as _,o as h,a as p,b as e,f as d,t as u,w as m,v as V,g as f,F as q,h as F,i as v,j as y,k as M,P as U,A as w}from"./index-c9a29f9d.js";const j={class:"container-fluid"},P={class:"row justify-content-center"},B={class:"col-12 col-md-10 bg-page drop-1 rounded mb-3 mt-1 py-2"},N={class:"row mb-2"},A={class:"col-4 pe-0 ps-1"},E=e("i",{class:"mdi mdi-file-document text-yellow"},null,-1),H={class:"text-yellow"},R={class:"col-4 text-center px-1"},T=e("i",{class:"mdi mdi-package-variant-closed text-purple"},null,-1),G={class:"text-purple"},L={class:"col-4 text-end ps-0"},z=e("i",{class:"mdi mdi-currency-usd text-teal"},null,-1),I={class:"text-light"},J={class:"row justify-content-between"},K={class:"col-12 col-md-4 mb-3 mt-2 mb-md-0"},Q={class:"input-group"},W=e("button",{class:"input-group-text btn-accent"},[e("i",{class:"mdi mdi-magnify"})],-1),X={class:"col-3 col-md-1 my-1"},Y={class:"form-check form-switch"},Z=e("label",{class:"form-check-label",for:"flexSwitchCheckDefault"},[e("i",{class:"mdi mdi-progress-clock text-yellow"})],-1),$={class:"col-3 col-md-1 my-1"},ee={class:"form-check form-switch"},te=e("label",{class:"form-check-label",for:"flexSwitchCheckDefault"},[e("i",{class:"mdi mdi-package-variant-closed-check text-purple"})],-1),se={class:"col-3 col-md-1 my-1"},oe={class:"form-check form-switch"},ce=e("label",{class:"form-check-label",for:"flexSwitchCheckDefault"},[e("i",{class:"mdi mdi-check-decagram text-teal"})],-1),le=e("i",{class:"mdi mdi-filter text-purple"},null,-1),ae={class:"row justify-content-center"},re={__name:"HomePage",setup(ne){async function g(){try{await M.getOrders()}catch(s){U.error(s,"[Getting Orders]")}}D(()=>{g(),x()});const a=k(""),c=k({});function x(){a.value="",c.value={"in-queue":!0,printed:!0}}const n=r(()=>w.orders.filter(s=>{let t=!1;for(let i in c.value)s.status==i&&c.value[i]&&(t=!0);if(!t)return!1;if(a.value=="")return!0;const l=new RegExp(a.value,"ig");return l.test(s.customer)||l.test(s.model)||l.test(s.color)||l.test(s.customRequest)||l.test(s.status)})),b=r(()=>w.orders.length),C=r(()=>n.value.reduce((s,t)=>s+t.qty,0)),S=r(()=>n.value.reduce((s,t)=>s+t.cost,0));return(s,t)=>{const l=_("Order"),i=_("OrderForm"),O=_("Modal");return h(),p("section",j,[e("section",P,[e("div",B,[e("section",N,[e("div",A,[E,d(" Orders "),e("span",H,u(n.value.length)+"/"+u(b.value),1)]),e("div",R,[T,d(" Units "),e("span",G,u(C.value),1)]),e("div",L,[z,e("span",I,u(S.value),1)])]),e("section",J,[e("div",K,[e("div",Q,[m(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),class:"form-control",placeholder:"Search"},null,512),[[V,a.value]]),W])]),e("div",X,[e("div",Y,[m(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>c.value["in-queue"]=o),class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[f,c.value["in-queue"]]]),Z])]),e("div",$,[e("div",ee,[m(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>c.value.printed=o),class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[f,c.value.printed]]),te])]),e("div",se,[e("div",oe,[m(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>c.value.complete=o),class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[f,c.value.complete]]),ce])]),e("div",{class:"col-12 col-md-2 my-1 text-end"},[e("button",{onClick:x,class:"btn selectable text-purple"},[le,d("clear ")])])])])]),e("section",ae,[(h(!0),p(q,null,F(n.value,o=>(h(),p("div",{key:o.id,class:"col-12 col-md-10"},[v(l,{order:o},null,8,["order"])]))),128)),v(O,{id:"order-form"},{header:y(()=>[d("Create Order")]),body:y(()=>[v(i)]),_:1})])])}}};export{re as default};
