"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[372],{9372:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(422),a=n(4420),s=n(296),o=function(e){var t=e.contacts,n=e.filter,r=t.items;if(!n)return r;var a=n.toLowerCase();return r.filter((function(e){return e.name.toLowerCase().includes(a)}))},c="contacts-list-form_form__w4UXn",l="contacts-list-form_formContainer__lBXID",i="contacts-list-form_phonebookInput__p64Vi",u="contacts-list-form_phonebookButton__7BrJo",m=n(184),f=function(){var e=(0,a.I0)(),t=(0,a.v9)(o);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Phonebook"}),(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.elements.name,o=n.target.elements.number,c=a.value.toLowerCase();t.some((function(e){return e.name.toLowerCase()===c}))?alert("".concat(a.value," is already in contacts")):(e((0,s.uK)({id:(0,r.x0)(),name:a.value,number:o.value})),n.target.reset())},className:c,children:[(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("label",{htmlFor:"phonebookName",children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Enter a name",className:i})]}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("label",{htmlFor:"phonebookNumber",children:"Number"}),(0,m.jsx)("input",{type:"tel",name:"number",required:!0,className:i,placeholder:"Enter the number"})]}),(0,m.jsx)("button",{className:u,type:"submit",children:"Add contact"})]}),(0,m.jsx)("h2",{children:"Contacts"})]})},h=n(2791),d=n(2019),p=function(e){var t=e.message;return(0,m.jsx)("p",{className:"error",children:t})},x={buttonDelete:"contacts-list_buttonDelete__bkesa"},b=function(){var e=(0,a.v9)(o),t=(0,a.v9)(o),n=t.isLoading,r=t.error,c=(0,a.I0)();(0,h.useEffect)((function(){c((0,s.yF)())}),[c]);var l=e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,m.jsxs)("li",{className:x.item,children:[(0,m.jsxs)("p",{children:[" ",n,": ",r," "]}),(0,m.jsx)("button",{onClick:function(){return function(e){c((0,s.GK)(e))}(t)},type:"button",className:x.btn,children:"Delete"})]},t)}));return(0,m.jsxs)("div",{children:[n&&(0,m.jsx)(d.Z,{}),r&&(0,m.jsx)(p,{message:r}),(0,m.jsx)("ul",{className:x.list,children:l})]})},j=n(5653),v={filterInput:"contacts-filter_filterInput__lU3ae"},_=function(){var e=(0,a.I0)();return(0,m.jsx)("input",{onChange:function(t){e((0,j.T)(t.target.value))},name:"filter",placeholder:"Search",className:v.input})},N=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(f,{}),(0,m.jsx)(_,{}),(0,m.jsx)(b,{})]})}}}]);
//# sourceMappingURL=372.61755cfe.chunk.js.map