(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{297:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1x6aS",dialogsItems:"Dialogs_dialogsItems__r3f9p",dialog:"Dialogs_dialog__lXvsG",userAvatar:"Dialogs_userAvatar__1XmDI",active:"Dialogs_active__32U1E",messages:"Dialogs_messages__32_Bf",message:"Dialogs_message__15SQy"}},298:function(e,s,a){"use strict";a.r(s);a(1);var t=a(11),i=a(8),n=a(88),c=a(107),r=function(e){return e.dialogsPage},d=function(e){return e.dialogsPage.newMessageBody},o=a(297),g=a.n(o),l=a(16),m=a(0),u=function(e){var s="/dialogs/"+e.id;return Object(m.jsxs)("div",{className:g.a.dialog,children:[Object(m.jsx)("img",{className:g.a.userAvatar,src:e.userAvatar,alt:""}),Object(m.jsx)(l.b,{to:s,children:e.name})]})},j=function(e){return Object(m.jsx)("div",{className:g.a.message,children:e.message})},b=a(92),_=a(129),v=a(38),O=a(29),f=Object(v.a)(50),x=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,className:g.a.addMessage,children:[Object(m.jsx)(b.a,{component:O.c,name:"newMessageBody",placeholder:"Enter your message",validate:[v.b,f]}),Object(m.jsx)("button",{children:"add message"})]})})),h=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(m.jsx)(u,{id:e.id,name:e.name,userAvatar:e.userAvatar},e.id)})),t=s.messages.map((function(e){return Object(m.jsx)(j,{message:e.message},e.id)}));return Object(m.jsxs)("div",{className:g.a.dialogs,children:[Object(m.jsx)("div",{className:g.a.dialogsItems,children:a}),Object(m.jsxs)("div",{className:g.a.messages,children:[Object(m.jsx)("div",{children:t}),Object(m.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})};s.default=Object(i.d)(Object(t.b)((function(e){return{dialogsPage:r(e),newMessageBody:d(e)}}),{sendMessage:c.b}),n.a)(h)}}]);
//# sourceMappingURL=3.55aaea8f.chunk.js.map