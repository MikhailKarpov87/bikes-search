(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),s=a.n(c),l=(a(43),a(3)),o=a(4),i=a(7),u=a(5),h=a(8),d=a(6),p=a(10),m="https://dev.getyoumedia.com/bike_search/api/api.php",f=["\u0430\u043c\u043e\u0440\u0442\u0438\u0437\u0430\u0442\u043e\u0440 fox","\u0437\u0430\u0434\u043d\u0435\u0435 \u043a\u043e\u043b\u0435\u0441\u043e","\u043f\u0435\u0440\u0447\u0430\u0442\u043a\u0438 oakley","\u0448\u043b\u0435\u043c POC"],g={price:"\u0426\u0435\u043d\u0435",shop_id:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u0443"},y="FETCHING_DATA",v="FETCHING_DATA_SUCCESS",k="FETCHING_DATA_FAILURE",b="UPDATE_SEARCHTERM",E="GET_SHOPLIST",O="GET_CATEGORIES",N="UPDATE_FILTER",j="SORT_RESULTS",T="TOGGLE_FILTER",w=a(11),C=a(12),_=a(33),S=a(1),F=a.n(S),x=Object(p.combineReducers)({searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},currentSearchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload.searchTerm;default:return e}},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload?{}:e;case v:var a=e.data||[],r=t.payload.newRequest?t.payload.data.data.results:a.concat(t.payload.data.data.results);return Object(w.a)({},e,{data:r,resultsNum:t.payload.data.data.resultsNum});case k:return Object(w.a)({},e,{error:!0});default:return e}},shops:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload.data;default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload.data;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case y:return!0;case v:case k:return!1;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload.page;default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var a=t.payload;return{sortBy:a.sortBy,sortOrder:a.sortOrder};default:return e}},showFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.status;switch(t.type){case T:return a;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(w.a)({},e,{shops:F.a.keys(t.payload.data)});case O:return Object(w.a)({},e,{categories:F.a.keys(t.payload.data)});case N:var a=t.payload.filterType,r=t.payload.status?[].concat(Object(_.a)(e[a]),[t.payload.id]):e[a].filter(function(e){return e!==t.payload.id});return Object(w.a)({},e,Object(C.a)({},a,r));default:return e}}}),D=a(31),A=a(32),R=function(e){var t=e.label,a=e.list,r=e.selected,c=e.handleFilter,s=e.name;return n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("b",null,t)),F.a.map(a,function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("input",{className:"uk-checkbox",type:"checkbox",key:t,id:t,name:s,checked:r.includes(t),onChange:c}),e)}))},I=a(14),M=a.n(I);function B(e,t){return function(a,r){var n=r(),c=n.page,s=n.currentSearchTerm,l=n.sort,o=l.sortBy,i=l.sortOrder,u=n.filter,h=u.shops,d=u.categories,p=h?h.join():"All",f=d?d.join():"All",g=o&&i?"&sortBy=".concat(o,"&sortOrder=").concat(i):"",b=t?1:c+1;e===s&&t||(a(function(e){return{type:y,payload:e}}(t)),M.a.get("".concat(m,"?search=").concat(e,"&page=").concat(b,"&shops=").concat(p,"&categories=").concat(f).concat(g)).then(function(r){a(function(e,t,a,r){return{type:v,payload:{data:e,searchTerm:t,page:a,newRequest:r}}}(r,e,b,t))}).catch(function(e){a(function(e){return{type:k,payload:e}}(e))}))}}function L(e){return{type:b,payload:e}}var G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleFilter",value:function(e){var t=e.currentTarget;this.props.updateFilter(t.name,t.id,t.checked)}},{key:"render",value:function(){var e=this,t=this.props,a=t.filter,r=t.shops,c=t.categories,s=t.showFilter;return n.a.createElement("div",{className:"uk-animation-slide-bottom-medium filter-".concat(s&F.a.size(r)>0?"expanded":"collapsed")},n.a.createElement(R,{label:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b",list:r,name:"shops",selected:a.shops,handleFilter:function(t){return e.handleFilter(t)}}),n.a.createElement(R,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",list:c,name:"categories",selected:a.categories,handleFilter:function(t){return e.handleFilter(t)}}))}}]),t}(r.Component),H=Object(d.b)(function(e){return{showFilter:e.showFilter,shops:e.shops,categories:e.categories,filter:e.filter}},{updateFilter:function(e,t,a){return function(r,n){r({type:N,payload:{id:t,status:a,filterType:e}});var c=n().searchTerm;c&&r(B(c,!0))}}})(G),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={n:0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.nextMessage(e.state)},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"nextMessage",value:function(e){var t=f[++e.n]?e.n:0;this.setState({n:t})}},{key:"handleClick",value:function(e){this.props.updateSearchTerm(e),this.props.fetchData(e,!0)}},{key:"render",value:function(){var e=this,t=f[this.state.n];return f.length&&n.a.createElement("div",{className:"uk-text-center uk-animation-fade uk-animation-slow search_tip_box"},"\u041d\u0430\u0439\u0442\u0438",n.a.createElement("span",{className:"search_tip_text",key:this.state.n,onClick:function(){return e.handleClick(t)}},t))}}]),t}(r.Component),P=Object(d.b)(null,{updateSearchTerm:L,fetchData:B})(U),K=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData=F.a.debounce(this.props.fetchData,1e3),this.props.getShopList(),this.props.getCategories()}},{key:"handleInputChange",value:function(e){var t=e.currentTarget.value;this.props.updateSearchTerm(t),!this.props.loading&&t.length>1&&this.fetchData(t,!0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.searchTerm,r=t.fetchData,c=t.toggleFilter;return n.a.createElement("div",{className:"searchbar"},n.a.createElement(P,null),n.a.createElement("div",{className:"uk-card-primary uk-card-body uk-card-small uk-width-1-2@m uk-animation-fade uk-animation uk-align-center searchbox"},n.a.createElement("div",{className:"uk-width-9-10 uk-align-center searchbar_form"},n.a.createElement("div",{className:"uk-flex uk-flex-center"},n.a.createElement("input",{type:"text",className:"uk-input",onChange:function(t){return e.handleInputChange(t)},value:a,onKeyPress:function(e){return"Enter"===e.key&&a.length>1&&r(a,!0)}}),n.a.createElement("button",{className:"uk-button uk-button-primary",onClick:function(){return r(a,!0)}},"\u0418\u0441\u043a\u0430\u0442\u044c"),n.a.createElement("span",{className:"filter-icon","uk-icon":"settings",onClick:function(){c(!e.props.showFilter)}}))),n.a.createElement(H,null)))}}]),t}(r.Component),q=Object(d.b)(function(e){return{loading:e.loading,searchTerm:e.searchTerm,showFilter:e.showFilter}},{updateSearchTerm:L,fetchData:B,getShopList:function(){return function(e){M.a.get("".concat(m,"?get_shopslist")).then(function(t){e({type:E,payload:t})})}},getCategories:function(){return function(e){M.a.get("".concat(m,"?get_categories")).then(function(t){e({type:O,payload:t})})}},toggleFilter:function(e){return{type:T,status:e}}})(K),J=function(e){var t=e.result,a=t.id,r=t.name,c=t.url,s=t.price;return n.a.createElement("div",{className:"searchresult"},n.a.createElement("div",{className:"uk-card-default uk-card-body uk-card-small uk-animation-fade uk-animation-fast listitem",key:a},n.a.createElement("div",{className:"result_header"},n.a.createElement("h4",null,r),n.a.createElement("span",{className:"uk-label"},s," \u20bd")),n.a.createElement("ul",{className:"uk-breadcrumb"},n.a.createElement("li",null,e.shopName),n.a.createElement("li",null,e.catName)),n.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer noopener"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d")))},W=function(e){return e.isLoading?n.a.createElement("div",{className:"flex-container"},n.a.createElement("span",{"uk-spinner":"",className:"uk-align-center loader-fix"})):null},z=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){var t=document.scrollingElement;t.scrollTop+window.innerHeight>=t.offsetHeight&&e.loadMoreResults()})}},{key:"loadMoreResults",value:function(){var e=this.props,t=e.searchTerm,a=e.page,r=e.resultsNum,n=e.loading,c=e.fetchData;!n&&10*a<r&&c(t,!1)}},{key:"getCategoryName",value:function(e){return this.props.categories[e]?this.props.categories[e]:"--"}},{key:"getShopName",value:function(e){return this.props.shops[e]?this.props.shops[e]:"--"}},{key:"render",value:function(){var e=this,t=this.props,a=t.resultsNum,r=t.searchTerm,c=t.results,s=t.loading;return t.error?n.a.createElement("div",{className:"uk-width-1-2@m uk-align-center"},n.a.createElement("div",{class:"uk-alert-danger","uk-alert":!0},n.a.createElement("span",{class:"uk-alert-close","uk-close":!0}),n.a.createElement("p",null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."))):n.a.createElement("div",{className:"uk-width-1-2@m uk-align-center"},r&&c&&n.a.createElement("h4",{className:"uk-heading-line uk-text-center"},n.a.createElement("span",null,c?a?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432: "+a:"\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e :(":null)),!!a&&F.a.map(c,function(t){return n.a.createElement(J,{key:t.id,result:t,shopName:e.getShopName(t.shop_id),catName:e.getCategoryName(t.category)})}),n.a.createElement(W,{isLoading:s}))}}]),t}(r.Component),Q=Object(d.b)(function(e){return{results:e.results.data,error:e.results.error,shops:e.shops,categories:e.categories,loading:e.loading,resultsNum:e.results.resultsNum,sort:e.sort,page:e.page,filter:e.filter,searchTerm:e.searchTerm}},{fetchData:B})(z),V=function(e){var t=e.sortBy===e.name?"primary":"default",a=e.sortBy===e.name&&"DESC"===e.sortOrder?"\u2191":"\u2193";return n.a.createElement("button",{className:"uk-button uk-button-".concat(t," uk-button-small sort_button"),name:e.name,key:e.name,onClick:e.onClick},e.label+a)},X=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.resultsNum,a=e.results,r=e.sort,c=r.sortBy,s=r.sortOrder,l=e.sortResults;return t&&a?n.a.createElement("div",{className:"uk-width-3-4 center-fix"},n.a.createElement("div",{className:"sort_panel"},n.a.createElement("h5",{className:"uk-align-center sort_button",key:"h5"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"),F.a.map(g,function(e,t){return n.a.createElement(V,{name:t,key:t,sortBy:c,sortOrder:s,label:e,onClick:function(e){return l(e.currentTarget.name,s)}})}))):null}}]),t}(r.Component),Y=Object(d.b)(function(e){return{results:e.results.data,resultsNum:e.results.resultsNum,filter:e.filter,sort:e.sort}},{sortResults:function(e,t){return function(a,r){var n=r().searchTerm;a({type:j,payload:{sortBy:e,sortOrder:t=t&&"ASC"===t?"DESC":"ASC"}}),n&&a(B(n,!0))}}})(X),Z=function(){return n.a.createElement("div",{className:"uk-text-center uk-text-small uk-text-muted footer"},n.a.createElement("p",{className:"small"},"made by ",n.a.createElement("a",{href:"https://github.com/MikhailKarpov87/",target:"_blank",rel:"noopener noreferrer"},"Mihanik87")),n.a.createElement("p",{className:"small"},n.a.createElement("a",{href:"https://github.com/MikhailKarpov87/bikes-search",target:"_blank",rel:"noopener noreferrer"},"GitHub")))},$=function(){return n.a.createElement("div",{className:"main-container"},n.a.createElement(q,null),n.a.createElement(Y,null),n.a.createElement(Q,null),n.a.createElement(Z,null))},ee={searchTerm:"",currentSearchTerm:"",results:{},shops:{},categories:{},loading:!1,page:1,sort:{sortBy:"",sortOrder:""},filter:{categories:[],shops:[]},showFilter:!1},te=Object(A.composeWithDevTools)(Object(p.applyMiddleware)(D.a))(p.createStore),ae=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{store:te(x,ee)},n.a.createElement($,null))}}]),t}(r.Component);s.a.render(n.a.createElement(ae,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.51bbbabc.chunk.js.map