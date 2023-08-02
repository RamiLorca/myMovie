(()=>{"use strict";var e={9492:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727);var s=r(144),n=r(1096),a=r(3551),o=function(){var e=this,t=e._self._c;return t(n.Z,{attrs:{id:"app"}},[t("nav-bar-2"),t(a.Z,[t("router-view")],1),t("Footer")],1)},i=[],c=(r(7658),r(1828)),l=r(8322),u=r(5223),m=r(3584),d=r(5057),v=(r(3710),function(){var e=this,t=e._self._c;return t(m.Z,{attrs:{dark:"",padless:""}},[t(l.Z,{staticClass:"centered-content",attrs:{color:"#fe0d02",flat:"",title:"",width:"100%"}},[t(u.ZB,{staticClass:"icons"},e._l(e.icons,(function(r){return t(c.Z,{key:r,staticClass:"mx-4",attrs:{icon:""}},[t(d.Z,{attrs:{size:"24px"}},[e._v(" "+e._s(r)+" ")])],1)})),1),t(u.ZB,{staticClass:"centered-content"},[t("strong",[e._v("Ramiro Lorca "+e._s((new Date).getFullYear()))])])],1)],1)}),h=[];const g={data:function(){return{icons:["mdi-facebook","mdi-linkedin","mdi-instagram"]}}},f=g;var p=r(1001),_=(0,p.Z)(f,v,h,!1,null,"4727fcbd",null);const w=_.exports;var b=r(677),y=r(8236),x=r(5234),C=(r(9753),r(2222),r(7042),function(){var e=this,t=e._self._c;return t("nav",[t(b.Z,{attrs:{app:"",color:"#fe0d02",dark:"",height:"100"}},[t("img",{attrs:{src:r(1049),id:"mainLogo"}}),t("div",{staticClass:"horizontal-btn"},[t(c.Z,{staticClass:"ml-2",attrs:{text:"",to:"/"}},[e._v("Movies")]),t(c.Z,{staticClass:"ml-2",attrs:{text:"",to:"/genres"}},[e._v("Genres")]),t(c.Z,{staticClass:"ml-2",attrs:{text:"",to:"/watchlist"}},[e._v("WatchList")])],1),t(x.Z),t("div",{staticClass:"hamburger-icon"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hamburgerStatus,expression:"hamburgerStatus"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.hamburgerStatus)?e._i(e.hamburgerStatus,null)>-1:e.hamburgerStatus},on:{click:e.toggleMenu,change:function(t){var r=e.hamburgerStatus,s=t.target,n=!!s.checked;if(Array.isArray(r)){var a=null,o=e._i(r,a);s.checked?o<0&&(e.hamburgerStatus=r.concat([a])):o>-1&&(e.hamburgerStatus=r.slice(0,o).concat(r.slice(o+1)))}else e.hamburgerStatus=n}}}),t("label",{staticClass:"toggle",attrs:{for:"checkbox"}},[t("div",{staticClass:"bar bar--top"}),t("div",{staticClass:"bar bar--middle"}),t("div",{staticClass:"bar bar--bottom"})])])],1),e.showOverlay?t(y.Z,[t(l.Z,[t(c.Z,{attrs:{text:"",to:"/"},on:{click:e.toggleMenu}},[e._v("Movies")]),t(c.Z,{attrs:{text:"",to:"/genres"},on:{click:e.toggleMenu}},[e._v("Genres")]),t(c.Z,{attrs:{text:"",to:"/watchlist"},on:{click:e.toggleMenu}},[e._v("WatchList")])],1)],1):e._e()],1)}),k=[];const Z={data:function(){return{showOverlay:!1,hamburgerStatus:!1}},methods:{toggleMenu:function(){this.hamburgerStatus?(this.hamburgerStatus=!1,this.showOverlay=!1):(this.hamburgerStatus=!0,this.showOverlay=!0)}}},M=Z;var P=(0,p.Z)(M,C,k,!1,null,"e3244fc0",null);const S=P.exports,O={components:{NavBar2:S,Footer:w},name:"App",mounted:function(){document.title="myMovies",window.addEventListener("beforeunload",this.handleRefresh)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.handleRefresh)},methods:{handleRefresh:function(){this.$router.push("/")}},data:function(){return{}}},T=O;var L=(0,p.Z)(T,o,i,!1,null,null,null);const W=L.exports;var E=r(8345),I=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"mt-10 mb-0 grey--text",staticStyle:{"justify-self":"center"}},[e._v("Check out these titles!")]),t("MovieCarousel2")],1)},R=[],U=r(4992),A=r(6714),j=r(3790),B=function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-carousel-container"},[e.isLoading?e._e():t(U.Z,{ref:"customCarousel",staticClass:"custom-carousel",attrs:{"hide-delimiters":"","show-arrows":"",height:"100%"},on:{change:e.carouselIndexChanged}},e._l(e.movies,(function(r){return t(A.Z,{key:r.id,staticClass:"custom-carousel-item",attrs:{cover:""}},[t("div",{staticClass:"movie-info"},[t("div",{staticClass:"img-box"},[t("img",{staticClass:"movie-poster",attrs:{src:r.img_url}})]),t("div",{staticClass:"contents-and-button"},[t("div",{staticClass:"title-and-summary"},[t("h1",{staticClass:"mt-5 grey--text text--darken-3",attrs:{id:"movie-title"}},[e._v(e._s(r.movie_title))]),t("p",{staticClass:"grey--text ml-0"},[e._v(e._s(r.release_date?r.release_date.slice(0,4):""))]),t("div",{staticClass:"rating"},[t(j.Z,{attrs:{value:r.vote_average/2,color:"amber",dense:"","half-increments":"",readonly:"",size:"20"}}),t("div",{staticClass:"grey--text ml-4"},[e._v(e._s(10*r.vote_average)+" %")])],1),t("p",{staticClass:"mt-5 grey--text text--darken-3 subheader"},[e._v(e._s(r.movie_overview))]),r.want_to_watch?t(c.Z,{attrs:{id:"added-button",text:""}},[e._v(" Added "),t(d.Z,{attrs:{dark:"",right:""}},[e._v("check")])],1):t(c.Z,{attrs:{id:"add-button",tonal:"",loading:e.buttonLoading},on:{click:function(t){return e.wantToWatch(r)}}},[e._v(" Add to Watchlist ")])],1)])])])})),1),e.isLoading?t("pulse-loader",{attrs:{id:"pulse-loader",loading:e.isLoading,color:e.color,margin:e.margin}}):e._e()],1)},D=[],F=r(1907),N=r(5617),$=(r(1539),r(2564),r(9669)),z=r.n($);const G={addMovie:function(e){return z().post("/movies/add",e)},deleteMovie:function(e){return z()["delete"]("movies/delete/".concat(e))},getMoviesByPreferences:function(){return z().get("/movies/preferences")},getMoviesById:function(e){return z().get("/movies/".concat(e))},getWatchedMovies:function(){return z().get("/movies/watched")},getWantToWatchMovies:function(){return z().get("/movies/want-to-watch")},getRatings:function(){return z().get("/movies/movie-rating")}};var H=r(7118);const V={components:{PulseLoader:H.Z},data:function(){return{movies:[],isLoading:!0,current:0,show:!1,buttonLoading:!1,color:"#fe0d02",margin:"10px"}},computed:{currentMovie:function(){return this.movies[this.$store.state.currentMovieIndex]||null}},mounted:function(){var e=this;return(0,N.Z)((0,F.Z)().mark((function t(){var r,s,n;return(0,F.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=0,s=3;case 2:if(!(r<s)){t.next=29;break}return t.prev=3,t.next=6,G.getMoviesByPreferences();case 6:if(n=t.sent,!(n.data.length>0)){t.next=10;break}return e.movies=n.data,t.abrupt("break",29);case 10:t.next=24;break;case 12:if(t.prev=12,t.t0=t["catch"](3),console.error("Error fetching movies:",t.t0),r++,!(r<s)){t.next=22;break}return console.log("Retrying (".concat(r,"/").concat(s,")...")),t.next=20,new Promise((function(e){return setTimeout(e,1e3)}));case 20:t.next=24;break;case 22:return console.error("Max retries reached. Cannot fetch movies."),t.abrupt("break",29);case 24:return t.prev=24,e.isLoading=!1,t.finish(24);case 27:t.next=2;break;case 29:case"end":return t.stop()}}),t,null,[[3,12,24,27]])})))()},methods:{wantToWatch:function(e){var t=this;return(0,N.Z)((0,F.Z)().mark((function r(){var s;return(0,F.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.buttonLoading=!0,r.prev=1,e.want_to_watch=!0,r.next=5,G.addMovie(e);case 5:s=r.sent,200===s.status&&(t.buttonLoading=!1),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),console.error(r.t0),t.buttonLoading=!1;case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},carouselIndexChanged:function(e){this.$store.commit("SET_CURRENT_MOVIE_INDEX",e)}}},J=V;var X=(0,p.Z)(J,B,D,!1,null,"2427f141",null);const Y=X.exports,q={name:"Home2",components:{MovieCarousel2:Y}},K=q;var Q=(0,p.Z)(K,I,R,!1,null,"704d78bc",null);const ee=Q.exports;var te=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("h1",{staticClass:"mt-10 mb-0 ml-10 mr-10 grey--text"},[e._v("Which genres do you want to see?")]),t("div",{staticClass:"selector-box"},[t("preferences-selectors",{attrs:{"genre-preferences":e.genrePreferences},on:{"update:genrePreferences":function(t){e.genrePreferences=t},"update:genre-preferences":function(t){e.genrePreferences=t},checkboxToggled:e.onCheckBoxToggled}})],1)])},re=[];const se={updatePreferences:function(e){return z().put("/preferences/update",e)},getUserPreferences:function(e){return z().get("/preferences/".concat(e))}};r(8309);var ne=function(){var e=this,t=e._self._c;return t("div",{staticClass:"selectors"},e._l(e.genres,(function(r){return t("label",{key:r.name,staticClass:"checkbox-container",attrs:{for:r.name}},[t("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",name:r.name,id:r.name},domProps:{checked:e.isChecked(r.name)},on:{change:function(t){return e.onCheckboxChange(r.name)}}}),t("div",{staticClass:"checkbox-square",class:{"checked-image1":e.isChecked(r.name),"checked-image2":!e.isChecked(r.name)}},[t("div",{staticClass:"checkbox-image"},[e.isChecked(r.name)?t("img",{staticStyle:{"object-fit":"contain",width:"100%",height:"100%"},attrs:{src:r.imageChecked,alt:r.name}}):t("img",{staticStyle:{"object-fit":"contain",width:"100%",height:"100%"},attrs:{src:r.imageUnchecked,alt:r.name+"2"}})])]),t("label",{staticClass:"movie-label custom-text",attrs:{for:r.name}},[e._v(e._s(r.label))])])})),0)},ae=[],oe=r(4503),ie=r(6080);const ce={name:"preferences-selectors",props:{genrePreferences:Object},data:function(){return{genres:[{name:"wants_action",label:"Action",imageChecked:r(6523),imageUnchecked:r(4614)},{name:"wants_adventure",label:"Adventure",imageChecked:r(6321),imageUnchecked:r(3308)},{name:"wants_comedy",label:"Comedy",imageChecked:r(794),imageUnchecked:r(8460)},{name:"wants_drama",label:"Drama",imageChecked:r(5343),imageUnchecked:r(4211)},{name:"wants_family",label:"Family",imageChecked:r(6734),imageUnchecked:r(1921)},{name:"wants_horror",label:"Horror",imageChecked:r(801),imageUnchecked:r(8272)},{name:"wants_romance",label:"Romance",imageChecked:r(6186),imageUnchecked:r(3578)},{name:"wants_scifi",label:"Sci-Fi",imageChecked:r(5675),imageUnchecked:r(1484)},{name:"wants_thriller",label:"Thriller",imageChecked:r(7531),imageUnchecked:r(233)}]}},methods:{isChecked:function(e){return this.genrePreferences&&this.genrePreferences[e]},onCheckboxChange:function(e){this.$emit("update:genrePreferences",(0,ie.Z)((0,ie.Z)({},this.genrePreferences),{},(0,oe.Z)({},e,!this.isChecked(e)))),this.$emit("checkboxToggled")}}},le=ce;var ue=(0,p.Z)(le,ne,ae,!1,null,"89367e3c",null);const me=ue.exports,de={name:"Genres",components:{PreferencesSelectors:me},data:function(){return{genrePreferences:{}}},created:function(){var e=this;return(0,N.Z)((0,F.Z)().mark((function t(){var r;return(0,F.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se.getUserPreferences(1);case 3:r=t.sent,e.genrePreferences=r.data,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{onCheckBoxToggled:function(){this.savePreferences()},savePreferences:function(){var e=!this.genrePreferences.wants_action&&!this.genrePreferences.wants_adventure&&!this.genrePreferences.wants_comedy&&!this.genrePreferences.wants_drama&&!this.genrePreferences.wants_horror&&!this.genrePreferences.wants_romance&&!this.genrePreferences.wants_scifi&&!this.genrePreferences.wants_thriller&&!this.genrePreferences.wants_family;if(e){var t={user_id:1,wants_action:!0,wants_adventure:!0,wants_comedy:!0,wants_drama:!0,wants_horror:!0,wants_romance:!0,wants_scifi:!0,wants_thriller:!0,wants_family:!0};se.updatePreferences(t).then((function(e){console.log(e.data)}))["catch"]((function(e){console.error("Error updating genre preferences:",e)}))}else{var r={user_id:1,wants_action:this.genrePreferences.wants_action||!1,wants_adventure:this.genrePreferences.wants_adventure||!1,wants_comedy:this.genrePreferences.wants_comedy||!1,wants_drama:this.genrePreferences.wants_drama||!1,wants_horror:this.genrePreferences.wants_horror||!1,wants_romance:this.genrePreferences.wants_romance||!1,wants_scifi:this.genrePreferences.wants_scifi||!1,wants_thriller:this.genrePreferences.wants_thriller||!1,wants_family:this.genrePreferences.wants_family||!1};se.updatePreferences(r).then((function(e){console.log(e.data)}))["catch"]((function(e){console.error("Error updating genre preferences:",e)}))}}},watch:{genrePreferences:{handler:function(){this.savePreferences()},deep:!0}}},ve=de;var he=(0,p.Z)(ve,te,re,!1,null,"2ebd02d7",null);const ge=he.exports;var fe=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"mt-10 mb-0 ml-10 mr-10 grey--text",staticStyle:{"margin-left":"10px"}},[e._v("Your saved movies")]),t("saved-movies")],1)},pe=[],_e=r(4437),we=r(6035),be=r(4149),ye=r(3296),xe=r(2469),Ce=r(5294),ke=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t(we.Z,{attrs:{fluid:""}},[t(Ce.Z,e._l(e.wantToWatchMovies,(function(r){return t(_e.Z,{key:r.movie_id,attrs:{cols:"12",sm:"3"}},[t(ye.Z,{attrs:{"open-delay":"100"},scopedSlots:e._u([{key:"default",fn:function(s){var n=s.hover;return[t(l.Z,{class:{"on-hover":n},attrs:{elevation:n?16:2},on:{click:function(t){return e.showMovieDetails(r)}}},[t(xe.Z,{staticClass:"movie-image",attrs:{src:r.img_url,alt:""}}),t("div",{staticStyle:{"min-width":"0"}},[t(u.EB,{staticClass:"subtitle-2"},[t("div",{staticClass:"ellipsis-title"},[e._v(e._s(r.movie_title))])])],1)],1)]}}],null,!0)})],1)})),1)],1),t("transition",{attrs:{name:"fade"}},[t(be.Z,{attrs:{persistent:"","max-width":"800"},model:{value:e.showOverlay,callback:function(t){e.showOverlay=t},expression:"showOverlay"}},[t(l.Z,{staticClass:"movie-card-overlay"},[e.selectedMovie?t("MovieCard",{attrs:{movie:e.selectedMovie},on:{close:e.closeOverlay,movieRemoved:e.onMovieRemoved}}):e._e(),t(u.h7,[t(c.Z,{attrs:{icon:""},on:{click:function(t){e.showOverlay=!1}}},[t(d.Z,{staticClass:"close-overlay-icon"},[e._v("mdi-close")])],1)],1)],1)],1)],1)],1)},Ze=[],Me=function(){var e=this,t=e._self._c;return t(l.Z,[t("div",{staticClass:"movie-info"},[t("div",{staticClass:"img-box"},[t("img",{staticClass:"movie-poster",attrs:{src:e.movie.img_url}})]),t("div",{staticClass:"title-and-summary"},[t("h1",{staticClass:"mt-0 grey--text text--darken-3",attrs:{id:"movie-title"}},[e._v(e._s(e.movie.movie_title))]),t("p",{staticClass:"grey--text mx-0"},[e._v(e._s(e.movie.release_date?e.movie.release_date.slice(0,4):""))]),t("div",{staticClass:"rating"},[t(j.Z,{attrs:{value:e.movie.vote_average/2,color:"amber",dense:"","half-increments":"",readonly:"",size:"20"}}),t("div",{staticClass:"grey--text ml-0"},[e._v(e._s(10*e.movie.vote_average)+" %")])],1),t("p",{staticClass:"mt-5 grey--text text--darken-3 subheader"},[e._v(e._s(e.movie.movie_overview))]),t("div",{staticClass:"removal-buttons"},[e.showConfirmation?t("div",{staticClass:"are-you-sure-prompt"},[t("p",[e._v("Are you sure?")]),t("div",{staticClass:"yes-or-no"},[t(c.Z,{staticClass:"red lighten-1 white--text",on:{click:e.removeFromList}},[e._v("Remove")]),t(c.Z,{staticClass:"blue--text",attrs:{text:"",small:""},on:{click:function(t){e.showConfirmation=!1}}},[e._v("Cancel")])],1)]):t("div",[t(c.Z,{attrs:{variant:"tonal"},on:{click:function(t){e.showConfirmation=!0}}},[e._v("Remove From Watchlist")])],1)])])])])},Pe=[];const Se={name:"MovieCard",props:{movie:Object},data:function(){return{showConfirmation:!1}},methods:{removeFromList:function(){var e=this;G.deleteMovie(this.movie.movie_id).then((function(t){200==t.status&&e.$emit("movieRemoved")}))}}},Oe=Se;var Te=(0,p.Z)(Oe,Me,Pe,!1,null,"6a1f6688",null);const Le=Te.exports,We={data:function(){return{wantToWatchMovies:{},showOverlay:!1,selectedMovie:null}},components:{MovieCard:Le},mounted:function(){this.fetchWantToWatchMovies()},methods:{fetchWantToWatchMovies:function(){var e=this;G.getWantToWatchMovies().then((function(t){200==t.status&&(e.wantToWatchMovies=t.data)}))["catch"]((function(e){console.error("Error fetching wantToWatchMovies:",e)}))},showMovieDetails:function(e){this.selectedMovie=e,this.showOverlay=!0},closeOverlay:function(){this.selectedMovie=null,this.showOverlay=!1},onMovieRemoved:function(){this.showOverlay=!1,this.fetchWantToWatchMovies()}}},Ee=We;var Ie=(0,p.Z)(Ee,ke,Ze,!1,null,"1c1fab93",null);const Re=Ie.exports,Ue={name:"WatchList",components:{SavedMovies:Re}},Ae=Ue;var je=(0,p.Z)(Ae,fe,pe,!1,null,"15674381",null);const Be=je.exports;s.ZP.use(E.ZP);var De=new E.ZP({mode:"history",base:"/myMoviesDemo/",routes:[{path:"/",name:"Home2",component:ee},{path:"/genres",name:"Genres",component:ge},{path:"/watchlist",name:"WatchList",component:Be},{path:"/watchlist/:movieId",name:"MovieDetails",component:Le}]});const Fe=De;r(8862);var Ne=r(629);s.ZP.use(Ne.ZP);var $e=localStorage.getItem("token"),ze=JSON.parse(localStorage.getItem("user"));null!=$e&&(z().defaults.headers.common.Authorization="Bearer ".concat($e));const Ge=new Ne.ZP.Store({state:{token:$e||"",user:ze||{},movies:[],watchListMovies:[],currentMovieIndex:Math.floor(20*Math.random())},mutations:{SET_AUTH_TOKEN:function(e,t){e.token=t,localStorage.setItem("token",t),z().defaults.headers.common.Authorization="Bearer ".concat(t)},SET_USER:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},LOGOUT:function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},z().defaults.headers.common={}},SET_MOVIES:function(e,t){e.movies=t},SET_WATCHLIST_MOVIES:function(e,t){e.watchListMovies=t},SET_CURRENT_MOVIE_INDEX:function(e,t){e.currentMovieIndex=t}},actions:{getMoviesByGenre:function(e,t){var r=e.commit;return z().get("/genre/".concat(t)).then((function(e){r("SET_MOVIES",e.data)}))},getWatchListMovies:function(e){var t=e.commit;return G.getWantToWatchMovies().then((function(e){200===e.status&&t("SET_WATCHLIST_MOVIES",e.data)}))["catch"]((function(e){console.error(e)}))}}});var He=r(6605),Ve=r(5685),Je=r.n(Ve);s.ZP.use(He.Z),s.ZP.use(Je());const Xe=new He.Z({icons:{iconfont:"md"}});s.ZP.config.productionTip=!1,z().defaults.baseURL="https://mymoviesbackend-production.up.railway.app/",new s.ZP({router:Fe,store:Ge,vuetify:Xe,render:function(e){return e(W)}}).$mount("#app")},4614:(e,t,r)=>{e.exports=r.p+"img/action-black.625220bf.svg"},6523:(e,t,r)=>{e.exports=r.p+"img/action-white.a775d6e2.svg"},3308:(e,t,r)=>{e.exports=r.p+"img/adventure-grey.0db4aa90.svg"},6321:(e,t,r)=>{e.exports=r.p+"img/adventure-white.4d48d1d5.svg"},8460:(e,t,r)=>{e.exports=r.p+"img/comedy-grey.8b0bb044.svg"},794:(e,t,r)=>{e.exports=r.p+"img/comedy-white.e18d18a6.svg"},4211:(e,t,r)=>{e.exports=r.p+"img/drama-grey.247c021b.svg"},5343:(e,t,r)=>{e.exports=r.p+"img/drama-white.69e8d32d.svg"},1921:(e,t,r)=>{e.exports=r.p+"img/family-grey.09cb1bf0.svg"},6734:(e,t,r)=>{e.exports=r.p+"img/family-white.3d61d3c7.svg"},8272:(e,t,r)=>{e.exports=r.p+"img/horror-grey.88cbc458.svg"},801:(e,t,r)=>{e.exports=r.p+"img/horror-white.be1d0aad.svg"},3578:(e,t,r)=>{e.exports=r.p+"img/romance-grey.7168f85d.svg"},6186:(e,t,r)=>{e.exports=r.p+"img/romance-white.9cc7ff2c.svg"},1484:(e,t,r)=>{e.exports=r.p+"img/scifi-grey.def61d37.svg"},5675:(e,t,r)=>{e.exports=r.p+"img/scifi-white.e84e501b.svg"},233:(e,t,r)=>{e.exports=r.p+"img/thriller-grey.36284c74.svg"},7531:(e,t,r)=>{e.exports=r.p+"img/thriller-white.44380e67.svg"},1049:(e,t,r)=>{e.exports=r.p+"img/myMoviesLogo.033e36cf.png"}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,s,n,a)=>{if(!s){var o=1/0;for(u=0;u<e.length;u++){for(var[s,n,a]=e[u],i=!0,c=0;c<s.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](s[c])))?s.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/myMoviesDemo/"})(),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var n,a,[o,i,c]=s,l=0;if(o.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(s);l<o.length;l++)a=o[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},s=self["webpackChunkfinal_vue_capstone_seed"]=self["webpackChunkfinal_vue_capstone_seed"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=r.O(void 0,[998],(()=>r(9492)));s=r.O(s)})();
//# sourceMappingURL=app.5dd5b300.js.map