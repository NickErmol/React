(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(45),s=n(3),a="dialogs/SEND-MESSAGE",c={messages:[{id:"1",message:"Hi"},{id:"2",message:"Hello"},{id:"3",message:"How are you?"},{id:"4",message:"Good"},{id:"5",message:"Thanks"},{id:"6",message:"Good for you"},{id:"7",message:"Yo"}],dialogs:[{id:"1",name:"Nick",userAvatar:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"},{id:"2",name:"Kirill",userAvatar:"https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg"},{id:"3",name:"Vlad",userAvatar:"https://banner2.cleanpng.com/20180529/eot/kisspng-computer-icons-clip-art-profile-avatar-5b0de499bbdc67.8725542215276371457695.jpg"},{id:"4",name:"Sveta",userAvatar:"https://img.favpng.com/8/13/6/avatar-computer-icons-png-favpng-zapkeKu3xzjy6HwSaFu87UfGQ.jpg"},{id:"5",name:"Alina",userAvatar:"https://banner2.cleanpng.com/20180329/bhe/kisspng-computer-icons-avatar-user-profile-human-5abcd90dcf1548.0400521415223257738482.jpg"},{id:"6",name:"Pasha",userAvatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNWA656CRe97bqFdSiLSLH-gp6tfGFKMURg&usqp=CAU"},{id:"7",name:"Sasha",userAvatar:"https://w7.pngwing.com/pngs/238/446/png-transparent-computer-icons-user-profile-avatar-old-man-face-heroes-head.png"}]},i=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n={id:8,message:t.newMessageBody};return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},135:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2co_F"}},136:function(e,t,n){e.exports={avatarImage:"Post_avatarImage__nUfTF",item:"Post_item__f_hhu"}},14:function(e,t,n){e.exports={nav:"Nav_nav__1RD2F",item:"Nav_item__1LTVU",activeLink:"Nav_activeLink__2y_DN"}},245:function(e,t,n){},246:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},257:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var r=function(e){return e.auth.userId},s=function(e){return e.auth.isAuth},a=function(e){return e.auth.login}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b}));var r=n(3),s=n(57),a=(n(1),n(92)),c=n(54),i=n.n(c),o=n(0),u=["input","meta"],l=["input","meta"],j=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,a=n&&r;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(o.jsx)("div",{children:s}),a&&Object(o.jsx)("span",{children:r})]})},d=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,u));return Object(o.jsxs)(j,Object(r.a)(Object(r.a)({},e),{},{children:["  ",Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))]}))},p=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,l));return Object(o.jsxs)(j,Object(r.a)(Object(r.a)({},e),{},{children:["  ",Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))]}))},b=function(e,t,n,s){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(a.a,Object(r.a)({placeholder:e,name:t,component:n,validate:s},c))," ",i]})}},296:function(e,t,n){"use strict";n.r(t);var r=n(8),s=n(10),a=n.n(s),c=n(17),i=n(45),o=n(3),u=n(131).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c07e0a16-2a1e-4352-bcf3-70767c0c66bc"}}),l={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return u.post("follow/".concat(e),{})},unFollow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return u.delete("follow/".concat(e))}},j=function(e){return u.get("profile/"+e)},d=function(e){return u.get("profile/status/"+e)},p=function(e){return u.put("profile/status",{status:e})},b=function(){return u.get("auth/me")},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.post("auth/login",{email:e,password:t,rememberMe:n})},h=function(){return u.delete("auth/login")},O="profile/ADD_POST",g="profile/DELETE_POST",m="profile/SET_USER_PROFILE",v="profile/SET_STATUS",x={posts:[{id:"1",message:"Hi, how are you?",likesCount:10},{id:"2",message:"It's my first post",likesCount:12}],profile:null,status:""},w=function(e){return{type:v,status:e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case m:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case v:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case g:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}},P=n(107),S={},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e},C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},k="users/FOLLOW",N="users/UNFOLLOW",I="users/SET_USERS",E="users/SET_CURRENT_PAGE",F="users/SET_TOTAL_USERS_COUNT",A="users/TOGGLE_IS_FETCHING",U="users/TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},L=function(e){return{type:k,userId:e}},z=function(e){return{type:N,userId:e}},M=function(e){return{type:E,currentPage:e}},G=function(e){return{type:A,isFetching:e}},D=function(e,t){return{type:U,isFetching:e,userId:t}},R=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(D(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(o.a)(Object(o.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case N:return Object(o.a)(Object(o.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case I:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case E:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case F:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case A:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case U:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},H=n(34),q="auth/SET_USER_DATA",W="auth/SET_USER_PHOTO",V={id:null,login:null,email:null,isAuth:!1,photo:"some photo"},J=function(e,t,n,r){return{type:q,payload:{userId:e,email:t,login:n,isAuth:r}}},K=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.login,i=r.email,t(J(s,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(o.a)(Object(o.a)({},e),t.payload);case W:return Object(o.a)(Object(o.a)({},e),t.photo);default:return e}},Y="INITIALIZED_SUCCESS",Z={initialized:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},$=n(132),ee=n(130),te=Object(r.c)({profilePage:_,dialogsPage:P.a,sideBar:y,usersPage:B,auth:X,app:Q,form:ee.a}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,re=Object(r.e)(te,ne(Object(r.a)($.a)));window.__store__=re;var se=re,ae=n(1),ce=n.n(ae),ie=n(66),oe=n.n(ie),ue=(n(245),n(23)),le=n(24),je=n(26),de=n(25),pe=(n(246),n(16)),be=n(93),fe=n.n(be),he=n(0),Oe=function(e){return Object(he.jsxs)("header",{className:fe.a.header,children:[Object(he.jsx)("img",{src:"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"}),Object(he.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?Object(he.jsxs)("div",{children:[e.login," - ",Object(he.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(he.jsx)(pe.b,{to:"/login",children:"Login"})})]})},ge=n(11),me=n(28),ve=function(e){Object(je.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(le.a)(n,[{key:"render",value:function(){return Object(he.jsx)(Oe,Object(o.a)({},this.props))}}]),n}(ce.a.Component),xe=Object(r.d)(Object(ge.b)((function(e){return{isAuth:Object(me.a)(e),login:Object(me.b)(e)}}),{logout:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:0===e.sent.data.resultCode&&t(J(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ve),we=n(14),_e=n.n(we),Pe=function(){return Object(he.jsxs)("nav",{className:_e.a.nav,children:[Object(he.jsx)("div",{className:_e.a.item,children:Object(he.jsx)(pe.b,{to:"/profile",activeClassName:_e.a.activeLink,children:"Profile"})}),Object(he.jsx)("div",{className:_e.a.item,children:Object(he.jsx)(pe.b,{to:"/dialogs",activeClassName:_e.a.activeLink,children:"Messages"})}),Object(he.jsx)("div",{className:_e.a.item,children:Object(he.jsx)(pe.b,{to:"/users",activeClassName:_e.a.activeLink,children:"Users"})}),Object(he.jsx)("div",{className:_e.a.item,children:Object(he.jsx)(pe.b,{to:"/news",activeClassName:_e.a.activeLink,children:"News"})}),Object(he.jsx)("div",{className:_e.a.item,children:Object(he.jsx)(pe.b,{to:"/music",activeClassName:_e.a.activeLink,children:"Music"})}),Object(he.jsx)("div",{className:_e.a.item,children:Object(he.jsx)(pe.b,{to:"/settings",activeClassName:_e.a.activeLink,children:"Settings"})})]})},Se=n(7),ye=(n(252),function(e){return Object(he.jsx)("div",{children:"Settings"})}),Ce=(n(253),function(e){return Object(he.jsx)("div",{children:"News"})}),ke=(n(254),function(e){return Object(he.jsx)("div",{children:"Music"})}),Ne=n(57),Ie=n(69),Ee=n(56),Fe=n(71),Ae=n.n(Fe),Ue=n(134),Te=n.n(Ue),Le=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.portionSize,c=void 0===a?10:a,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(o.length/c),j=Object(ae.useState)(1),d=Object(Ee.a)(j,2),p=d[0],b=d[1],f=(p-1)*c+1,h=p*c;return Object(he.jsxs)("div",{className:Ae.a.paginator,children:[p>1&&Object(he.jsx)("button",{onClick:function(){b(p-1)},children:" Prev "}),o.filter((function(e){return e>=f&&e<=h})).map((function(e){return Object(he.jsx)("span",{className:Te()(Object(Ie.a)({},Ae.a.selectedPage,r===e),Ae.a.pageNumber),onClick:function(){s(e)},children:e})})),l>p&&Object(he.jsx)("button",{onClick:function(){b(p+1)},children:" Next "})]})},ze=n(135),Me=n.n(ze),Ge=n.p+"static/media/userDefaultPhoto.a63bc39c.png",De=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,s=e.follow;return Object(he.jsxs)("div",{children:[Object(he.jsxs)("span",{children:[Object(he.jsx)("div",{children:Object(he.jsx)(pe.b,{to:"/profile/".concat(t.id),children:Object(he.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ge,className:Me.a.userPhoto,alt:""})})}),Object(he.jsx)("div",{children:t.followed?Object(he.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(he.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(he.jsxs)("span",{children:[Object(he.jsxs)("span",{children:[Object(he.jsx)("div",{children:t.name}),Object(he.jsx)("div",{children:t.status})]}),Object(he.jsxs)("span",{children:[Object(he.jsx)("div",{children:"user.location.country"}),Object(he.jsx)("div",{children:"user.location.city"})]})]})]})},Re=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],Be=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,s=e.pageSize,a=e.users,c=Object(Ne.a)(e,Re);return Object(he.jsxs)("div",{children:[Object(he.jsx)(Le,{currentPage:t,pageSize:s,totalItemsCount:r,onPageChanged:n}),Object(he.jsx)("div",{children:a.map((function(e){return Object(he.jsx)(De,{user:e,followingInProgress:c.followingInProgress,unFollow:c.unFollow,follow:c.follow},e.id)}))})]})},He=(n(255),n.p+"static/media/preloader.c6d1e57a.svg"),qe=function(e){return Object(he.jsx)("div",{children:Object(he.jsx)("img",{src:He})})},We=n(88),Ve=(n(256),function(e){return e.usersPage.users}),Je=function(e){return e.usersPage.pageSize},Ke=function(e){return e.usersPage.totalUsersCount},Xe=function(e){return e.usersPage.currentPage},Ye=function(e){return e.usersPage.isFetching},Ze=function(e){return e.usersPage.followingInProgress},Qe=function(e){Object(je.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ue.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(le.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(he.jsxs)(he.Fragment,{children:[this.props.isFetching?Object(he.jsx)(qe,{}):null,Object(he.jsx)(Be,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(ce.a.Component),$e=Object(r.d)(Object(ge.b)((function(e){return{users:Ve(e),pageSize:Je(e),totalUsersCount:Ke(e),currentPage:Xe(e),isFetching:Ye(e),followingInProgress:Ze(e)}}),{follow:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,l.follow.bind(l),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,l.unFollow.bind(l),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:M,toggleFollowingProgress:D,requestUsers:function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(!0)),r(M(e)),n.next=4,l.getUsers(e,t);case 4:s=n.sent,r(G(!1)),r((c=s.data.items,{type:I,users:c})),r((a=s.data.totalCount,{type:F,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}),We.a)(Qe),et=(n(257),n(129)),tt=n(29),nt=n(38),rt=n(54),st=n.n(rt),at=Object(nt.a)(40),ct=Object(et.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(he.jsxs)("form",{onSubmit:t,children:[Object(tt.a)("Email","email",tt.b,[nt.b,at]),Object(tt.a)("Password","password",tt.b,[nt.b,at],{type:"password"}),Object(tt.a)(null,"rememberMe",tt.b,[],{type:"checkbox"},"remember me"),n&&Object(he.jsx)("div",{className:st.a.formSummaryError,children:n}),Object(he.jsx)("div",{children:Object(he.jsx)("button",{children:"Login"})})]})})),it=Object(ge.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(s){var c,i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(e,t,n);case 2:0===(c=r.sent).data.resultCode?s(K()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",s(Object(H.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(he.jsx)(Se.a,{to:"/profile"}):Object(he.jsxs)("div",{children:[Object(he.jsx)("h1",{children:"Login"}),Object(he.jsx)(ct,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),ot=n(73),ut=n.n(ot),lt=n(136),jt=n.n(lt),dt=function(e){return Object(he.jsxs)("div",{className:jt.a.item,children:[Object(he.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",alt:"user avatar"}),e.message,Object(he.jsxs)("div",{children:[Object(he.jsx)("span",{children:"Like"})," ",e.likesCount]})]})},pt=n(92),bt=Object(nt.a)(10),ft=ce.a.memo((function(e){var t=e.posts.map((function(e){return Object(he.jsx)(dt,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(he.jsxs)("div",{className:ut.a.postWrapper,children:[Object(he.jsx)("h3",{children:"My posts"}),Object(he.jsx)("div",{children:"New post"}),Object(he.jsx)(ht,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(he.jsx)("div",{className:ut.a.posts,children:t})]})})),ht=Object(et.a)({form:"AddPostForm"})((function(e){return Object(he.jsxs)("form",{onSubmit:e.handleSubmit,className:ut.a.addMessage,children:[Object(he.jsx)(pt.a,{component:tt.c,name:"newPostText",placeholder:"Enter your message",validate:[nt.b,bt]}),Object(he.jsx)("button",{children:"add message"})]})})),Ot=ft,gt=function(e){return e.profilePage.profile},mt=function(e){return e.profilePage.status},vt=function(e){return e.profilePage.posts},xt=function(e){return e.profilePage.newPostText},wt=Object(r.d)(Object(ge.b)((function(e){return{posts:vt(e),newPostText:xt(e)}}),{addPost:function(e){return{type:O,newPostText:e}}}))(Ot),_t=n(91),Pt=n.n(_t),St=function(e){var t=Object(ae.useState)(!1),n=Object(Ee.a)(t,2),r=n[0],s=n[1],a=Object(ae.useState)(e.status),c=Object(Ee.a)(a,2),i=c[0],o=c[1];Object(ae.useEffect)((function(){o(e.status)}),[e.status]);return Object(he.jsxs)("div",{children:[!r&&Object(he.jsx)("div",{children:Object(he.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"-------"})}),r&&Object(he.jsx)("div",{children:Object(he.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(i)},autoFocus:!0,value:i})})]})},yt=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return t?Object(he.jsx)("div",{children:Object(he.jsxs)("div",{className:Pt.a.descriptionBlock,children:[Object(he.jsx)("img",{src:t.photos.large}),Object(he.jsxs)("div",{children:[" About me : ",t.aboutMe]}),Object(he.jsxs)("div",{children:[" Looking for a job : ",t.lookingForAJob?"true":"false"]}),Object(he.jsxs)("div",{children:[" Looking for a job description : ",t.lookingForAJobDescription]}),Object(he.jsxs)("div",{children:[" Full name : ",t.fullName]}),Object(he.jsx)("div",{children:" Contacts :"}),Object(he.jsx)(St,{status:n,updateStatus:r})]})}):Object(he.jsx)(qe,{})},Ct=function(e){return Object(he.jsxs)("div",{children:[Object(he.jsx)(yt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(he.jsx)(wt,{})]})},kt=function(e){Object(je.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(le.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(he.jsx)("div",{children:Object(he.jsx)(Ct,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(ce.a.Component),Nt=Object(r.d)(Object(ge.b)((function(e){return{profile:gt(e),status:mt(e),authorizedUserId:Object(me.c)(e),isAuth:Object(me.a)(e)}}),{getUserProfile:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:r=t.sent,n((s=r.data,{type:m,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(w(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===t.sent.data.resultCode&&n(w(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Se.f)(kt),It=ce.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Et=function(e){Object(je.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(le.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(he.jsxs)("div",{className:"app-wrapper",children:[Object(he.jsx)(xe,{}),Object(he.jsx)(Pe,{}),Object(he.jsxs)("div",{className:"app-wrapper-content",children:[Object(he.jsx)(Se.b,{path:"/dialogs",render:(e=It,function(t){return Object(he.jsx)(ce.a.Suspense,{fallback:Object(he.jsx)(qe,{}),children:Object(he.jsx)(e,Object(o.a)({},t))})})}),Object(he.jsx)(Se.b,{path:"/profile/:userId?",render:function(){return Object(he.jsx)(Nt,{})}}),Object(he.jsx)(Se.b,{path:"/users",render:function(){return Object(he.jsx)($e,{})}}),Object(he.jsx)(Se.b,{path:"/news",render:function(){return Object(he.jsx)(Ce,{})}}),Object(he.jsx)(Se.b,{path:"/music",render:function(){return Object(he.jsx)(ke,{})}}),Object(he.jsx)(Se.b,{path:"/settings",render:function(){return Object(he.jsx)(ye,{})}}),Object(he.jsx)(Se.b,{path:"/login",render:function(){return Object(he.jsx)(it,{})}})]})]}):Object(he.jsx)(qe,{});var e}}]),n}(ce.a.Component),Ft=Object(r.d)(Se.f,Object(ge.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(K()).then((function(){e({type:Y})}))}}}))(Et);oe.a.render(Object(he.jsx)(pe.a,{children:Object(he.jsx)(ge.a,{store:se,children:Object(he.jsx)(Ft,{})})}),document.getElementById("root"))},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){return e?void 0:"Field is required"},s=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1AUef",error:"FormsControls_error__3q4-2",formSummaryError:"FormsControls_formSummaryError__B9O0p"}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__o-5VI",pageNumber:"Paginator_pageNumber__3VIPz",selectedPage:"Paginator_selectedPage__yZn1a"}},73:function(e,t,n){e.exports={postWrapper:"MyPosts_postWrapper__1ndH5",posts:"MyPosts_posts__1GLdG"}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(3),s=n(23),a=n(24),c=n(26),i=n(25),o=n(1),u=n.n(o),l=n(11),j=n(7),d=n(28),p=n(0),b=function(e){return{isAuth:Object(d.a)(e)}},f=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(r.a)({},this.props)):Object(p.jsx)(j.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(b)(t)}},91:function(e,t,n){e.exports={avatarImage:"ProfileInfo_avatarImage___yo9G",descriptionBlock:"ProfileInfo_descriptionBlock__2vLzO"}},93:function(e,t,n){e.exports={header:"Header_header__3ohxo",loginBlock:"Header_loginBlock__3Xlnl"}}},[[296,1,2]]]);
//# sourceMappingURL=main.3095437d.chunk.js.map