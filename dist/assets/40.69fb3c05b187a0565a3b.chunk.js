webpackJsonp([40],{2742:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),u=n(d),m=a(247),_=n(m),p=a(53),f=n(p),E=a(733),C=n(E),h=a(83),b=a(29),R=n(b),g=a(736),O=n(g);a(738);var A=a(3221),v=n(A),T=a(3250),y=n(T),x=a(2903),L=n(x),D=a(3009),j=n(D),S=a(103),q=n(S),H=723812738,J=[{id:1,name:"All contacts",icon:"zmdi-menu"},{id:2,name:"Frequently contacted",icon:"zmdi-time-restore"},{id:3,name:"Starred contacts",icon:"zmdi-star"}],N=function(t){function a(){o(this,a);var e=c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.ContactSideBar=function(t){return u.default.createElement("div",{className:"module-side"},u.default.createElement("div",{className:"module-side-header"},u.default.createElement("div",{className:"module-logo"},u.default.createElement("i",{className:"zmdi zmdi-account-box mr-4"}),u.default.createElement("span",null,u.default.createElement(q.default,{id:"chat.contacts"})))),u.default.createElement("div",{className:"module-side-content"},u.default.createElement("div",{className:"module-side-scroll"},u.default.createElement("div",{className:"module-add-task"},u.default.createElement(R.default,{className:"btn-block jr-btn",variant:"raised",color:"primary","aria-label":"add",onClick:e.onAddContact},u.default.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw"}),u.default.createElement("span",null,"Add New Contact"))),u.default.createElement("div",{className:"module-side-nav"},u.default.createElement("ul",{className:"module-nav"},J.map(function(t){return u.default.createElement("li",{key:t.id,className:"nav-item"},u.default.createElement("a",{href:"javascript:void(0)",className:t.id===e.state.selectedSectionId?"active":"",onClick:e.onFilterOptionSelect.bind(e,t)},u.default.createElement("i",{className:"zmdi "+t.icon}),u.default.createElement("span",null,t.name)))}))))))},e.addFavourite=function(t){e.setState({alertMessage:t.starred?"Contact removed as star":"Contact marked as star",showMessage:!0,contactList:e.state.contactList.map(function(e){return e.id===t.id?i({},e,{starred:!t.starred}):e}),allContact:e.state.allContact.map(function(e){return e.id===t.id?i({},e,{starred:!t.starred}):e})})},e.onContactSelect=function(t){t.selected=!t.selected;var a=0,n=e.state.contactList.map(function(e){return e.selected&&a++,e.id===t.id?(e.selected&&a++,t):e});e.setState({selectedContacts:a,contactList:n})},e.onAddContact=function(){e.setState({addContactState:!0})},e.onContactClose=function(){e.setState({addContactState:!1})},e.onFilterOptionSelect=function(t){switch(t.name){case"All contacts":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact});break;case"Frequently contacted":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact.filter(function(e){return e.frequently})});break;case"Starred contacts":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact.filter(function(e){return e.starred})})}},e.onSaveContact=function(t){var a=!0,n=e.state.allContact.map(function(e){return e.id===t.id?(a=!1,t):e});a&&n.push(t),e.setState({alertMessage:a?"Contact Added Successfully":"Contact Updated Successfully",showMessage:!0,contactList:n,allContact:n})},e.onDeleteContact=function(t){e.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:e.state.allContact.filter(function(e){return e.id!==t.id}),contactList:e.state.allContact.filter(function(e){return e.id!==t.id})})},e.onDeleteSelectedContact=function(){var t=e.state.allContact.filter(function(e){return!e.selected});e.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:t,contactList:t,selectedContacts:0})},e.filterContact=function(t){var a=e.state.filterOption;if(""===t)e.setState({contactList:e.state.allContact});else{var n=e.state.allContact.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1});"All contacts"===a?e.setState({contactList:n}):"Frequently contacted"===a?e.setState({contactList:n.filter(function(e){return e.frequently})}):"Starred contacts"===a&&e.setState({contactList:n.filter(function(e){return e.starred})})}},e.handleRequestClose=function(){e.setState({showMessage:!1})},e.getAllContact=function(){var t=e.state.allContact.map(function(e){return e?i({},e,{selected:!0}):e});e.setState({selectedContacts:t.length,allContact:t,contactList:t})},e.getUnselectedAllContact=function(){var t=e.state.allContact.map(function(e){return e?i({},e,{selected:!1}):e});e.setState({selectedContacts:0,allContact:t,contactList:t})},e.state={noContentFoundMessage:"No contact found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,user:{name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"http://via.placeholder.com/150x150"},searchUser:"",filterOption:"All contacts",allContact:v.default,contactList:v.default,selectedContact:null,selectedContacts:0,addContactState:!1},e}return r(a,t),l(a,[{key:"componentDidMount",value:function(){this.manageHeight()}},{key:"componentDidUpdate",value:function(){this.manageHeight()}},{key:"manageHeight",value:function(){this.props.width>=1200?(e(".module-list-scroll").slimscroll({height:"calc(100vh - 265px)"}),e(".module-side-scroll").slimscroll({height:"calc(100vh - 200px)"})):(this.props.width,e(".module-list-scroll").slimscroll({height:"calc(100vh - 245px)"}),e(".module-side-scroll").slimscroll({height:"calc(100vh - 80px)"}))}},{key:"onAllContactSelect",value:function(){this.state.selectedContacts<this.state.contactList.length?this.getAllContact():this.getUnselectedAllContact()}},{key:"updateContactUser",value:function(e){this.setState({searchUser:e.target.value}),this.filterContact(e.target.value)}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.contactList,n=e.addContactState,o=e.selectedContacts,c=e.alertMessage,r=e.showMessage,s=e.noContentFoundMessage;return u.default.createElement("div",{className:"app-wrapper"},u.default.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},u.default.createElement("div",{className:"d-block d-xl-none"},u.default.createElement(_.default,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.ContactSideBar(t))),u.default.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.ContactSideBar(t)),u.default.createElement("div",{className:"module-box"},u.default.createElement("div",{className:"module-box-header"},u.default.createElement(f.default,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},u.default.createElement("i",{className:"zmdi zmdi-menu"})),u.default.createElement(L.default,{placeholder:"Search contact",notification:!1,apps:!1,user:this.state.user,onChange:this.updateContactUser.bind(this),value:this.state.searchUser})),u.default.createElement("div",{className:"module-box-content"},u.default.createElement("div",{className:"module-box-topbar"},u.default.createElement(C.default,{color:"primary",indeterminate:o>0&&o<a.length,checked:o>0,onChange:this.onAllContactSelect.bind(this),value:"SelectMail"}),o>0&&u.default.createElement(f.default,{onClick:this.onDeleteSelectedContact.bind(this)},u.default.createElement("i",{className:"zmdi zmdi-delete"}))),u.default.createElement("div",{className:"module-list-scroll"},0===a.length?u.default.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},s):u.default.createElement(y.default,{contactList:a,addFavourite:this.addFavourite.bind(this),onContactSelect:this.onContactSelect.bind(this),onDeleteContact:this.onDeleteContact.bind(this),onSaveContact:this.onSaveContact.bind(this)}))))),u.default.createElement(j.default,{open:n,contact:{id:H++,name:"",thumb:"",email:"",phone:"",designation:"",selected:!1,starred:!1,frequently:!1},onSaveContact:this.onSaveContact,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}),u.default.createElement(O.default,{anchorOrigin:{vertical:"top",horizontal:"center"},open:r,autoHideDuration:3e3,onClose:this.handleRequestClose,SnackbarContentProps:{"aria-describedby":"message-id"},message:u.default.createElement("span",{id:"message-id"},c)}))}}]),a}(d.Component),w=function(e){return{width:e.settings.width}},M=(0,h.connect)(w)(N);t.default=M;var k=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(H,"contactId","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(J,"filterOptions","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(N,"Contact","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(w,"mapStateToProps","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(M,"default","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_extends","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(l,"_createClass","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(u,"_react2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(_,"_Drawer2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(f,"_IconButton2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(C,"_Checkbox2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(R,"_Button2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(O,"_Snackbar2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(v,"_contactList2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(y,"_ContactList2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(L,"_index2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(j,"_AddContact2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(q,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(c,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(r,"_inherits","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(H,"contactId","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(J,"filterOptions","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(N,"Contact","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(w,"mapStateToProps","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(M,"_default","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(k,"_temp","E:/Raqami/Jumbo/src/app/routes/contact/basic/index.js"))}()}).call(t,a(95))},2903:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),d=n(l),u=a(53),m=n(u),_=a(368),p=a(739),f=n(p),E=function(e){function t(){o(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(e),e}return r(t,e),i(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,t=e.placeholder,a=e.onChange,n=e.value,o=e.user,c=e.notification,r=e.apps;return d.default.createElement("div",{className:"module-box-header-inner"},d.default.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},d.default.createElement("div",{className:"form-group"},d.default.createElement("input",{className:"form-control border-0",type:"search",placeholder:t,onChange:a,value:n}),d.default.createElement("button",{className:"search-icon"},d.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),d.default.createElement(_.Popover,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},d.default.createElement("h3",null,o.name),d.default.createElement("h4",null,o.email)),d.default.createElement("div",{className:"d-inline-block d-sm-none"},d.default.createElement(_.Dropdown,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},d.default.createElement(_.DropdownToggle,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},d.default.createElement(m.default,{className:"icon-btn size-40"},d.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),d.default.createElement(_.DropdownMenu,{className:"p-0"},d.default.createElement(f.default,{styleName:"search-dropdown",placeholder:"",onChange:a,value:n})))),d.default.createElement("div",{className:"module-box-header-right"},r&&d.default.createElement(m.default,{className:"size-40","aria-label":"Menu"},d.default.createElement("i",{className:"zmdi zmdi-apps"})),c&&d.default.createElement(m.default,{className:"size-40","aria-label":"Menu"},d.default.createElement("i",{className:"zmdi zmdi-notifications-none"})),d.default.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:o.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:o.avatar})))}}]),t}(d.default.Component),C=E;t.default=C,E.defaultProps={styleName:"",value:"",notification:!0,apps:!0};var h=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"AppModuleHeader","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(C,"default","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(m,"_IconButton2","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(f,"_SearchBox2","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(c,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_inherits","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(E,"AppModuleHeader","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(C,"_default","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(h,"_temp","E:/Raqami/Jumbo/src/components/AppModuleHeader/index.js"))}()},3009:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),d=n(l),u=a(368),m=a(55),_=n(m),p=a(29),f=n(p),E=a(53),C=n(E),h=a(377),b=n(h),R=a(103),g=n(R),O=function(e){function t(e){o(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.contact,r=n.id,s=n.thumb,i=n.name,l=n.email,d=n.phone,u=n.designation,m=n.selected,_=n.starred,p=n.frequently;return a.state={id:r,thumb:s,name:i,email:l,phone:d,designation:u,selected:m,starred:_,frequently:p},a}return r(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSaveContact,n=(t.onDeleteContact,t.onContactClose),o=t.open,c=t.contact,r=this.state,s=r.id,i=r.name,l=r.email,m=r.phone,p=r.designation,E=r.selected,h=r.starred,R=r.frequently,O=this.state.thumb;return O||(O="http://via.placeholder.com/225x225"),d.default.createElement(u.Modal,{className:"modal-box",toggle:n,isOpen:o},d.default.createElement(u.ModalHeader,{className:"modal-box-header bg-primary"},""===c.name?d.default.createElement(g.default,{id:"contact.addContact"}):d.default.createElement(g.default,{id:"contact.saveContact"}),d.default.createElement(C.default,{className:"text-white",onClick:n},d.default.createElement(b.default,null))),d.default.createElement("div",{className:"modal-box-content"},d.default.createElement("div",{className:"row no-gutters"},d.default.createElement("div",{className:"col-lg-3 text-center text-lg-right order-lg-2"},d.default.createElement("img",{className:"ml-lg-3 mb-4 mb-lg-0 avatar size-120",src:O})),d.default.createElement("div",{className:"col-lg-9 d-flex flex-column order-lg-1"},d.default.createElement(_.default,{required:!0,id:"required",label:d.default.createElement(g.default,{id:"appModule.name"}),onChange:function(t){return e.setState({name:t.target.value})},defaultValue:i,margin:"none"}),d.default.createElement(_.default,{id:"required",label:d.default.createElement(g.default,{id:"appModule.email"}),onChange:function(t){return e.setState({email:t.target.value})},value:l,margin:"normal"}),d.default.createElement(_.default,{id:"required",label:d.default.createElement(g.default,{id:"appModule.phone"}),onChange:function(t){return e.setState({phone:t.target.value})},value:m,margin:"normal"}),d.default.createElement(_.default,{id:"required",label:d.default.createElement(g.default,{id:"appModule.designation"}),onChange:function(t){return e.setState({designation:t.target.value})},value:p,multiline:!0,rowsMax:"4",margin:"normal"})))),d.default.createElement("div",{className:"modal-box-footer d-flex flex-row"},d.default.createElement(f.default,{disabled:""===i,variant:"raised",color:"primary",onClick:function(){n(),a({id:s,name:i,thumb:O,email:l,phone:m,designation:p,selected:E,starred:h,frequently:R}),e.setState({id:s+1,name:"",thumb:"",email:"",phone:"",designation:""})}},d.default.createElement(g.default,{id:"contact.saveContact"}))))}}]),t}(d.default.Component),A=O;t.default=A;var v=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"AddContact","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(A,"default","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(_,"_TextField2","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(f,"_Button2","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(C,"_IconButton2","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(b,"_Close2","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(g,"_IntlMessages2","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(c,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(r,"_inherits","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(O,"AddContact","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(A,"_default","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(v,"_temp","E:/Raqami/Jumbo/src/components/contact/AddContact/index.js"))}()},3221:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{id:1457690400,name:"Stella Johnson",thumb:"http://via.placeholder.com/150x150",email:"stella.johnson@example.com",phone:"+1-215-659-7529",designation:"CEO",selected:!1,starred:!1,frequently:!0},{id:1457690401,name:"Garry Sobars",thumb:"http://via.placeholder.com/150x150",email:"garry.sobars@example.com",phone:"+1-215-745-7529",designation:"CFO",selected:!1,starred:!1,frequently:!0},{id:1457690402,name:"Alex Dolgove",thumb:"http://via.placeholder.com/150x150",email:"alex.dolgove@example.com",phone:"+1-215-748-7855",designation:"Designer",selected:!1,starred:!1,frequently:!0},{id:1457690403,name:"Domnic Brown",thumb:"http://via.placeholder.com/150x150",email:"domnic.brown@example.com",phone:"+1-215-756-4579",designation:"PHP Developer",selected:!1,starred:!1,frequently:!0},{id:1457690404,name:"Kadir M",thumb:"http://via.placeholder.com/150x150",email:"kadir.m@example.com",phone:"+1-215-659-7586",designation:"HR Manager",selected:!1,starred:!1,frequently:!1},{id:1457690405,name:"John Smith",thumb:"http://via.placeholder.com/150x150",email:"john.smith@example.com",phone:"+1-215-876-8596",designation:"Marketing Head",selected:!1,starred:!1,frequently:!1},{id:1457690406,name:"Domnic Harris",thumb:"http://via.placeholder.com/150x150",email:"domnic.harris@example.com",phone:"+1-215-785-3841",designation:"BDO",selected:!1,starred:!0,frequently:!1},{id:1457690407,name:"Jimmy Jo",thumb:"http://via.placeholder.com/150x150",email:"jimmy.jo@example.com",phone:"+1-215-456-5863",designation:"CCO",selected:!1,starred:!1,frequently:!1},{id:1457690408,name:"Jimmy Jon",thumb:"http://via.placeholder.com/150x150",email:"jimmy.jon@example.com",phone:"+1-215-278-4558",designation:"Developer",selected:!1,starred:!0,frequently:!1},{id:1457690409,name:"Jeson Born",thumb:"http://via.placeholder.com/150x150",email:"jeson.born@example.com",phone:"+1-215-286-7551",designation:"UI-UX Designer",selected:!1,starred:!1,frequently:!1},{id:1457690410,name:"Steve Smith",thumb:"http://via.placeholder.com/150x150",email:"steve.smith@example.com",phone:"+1-215-586-5862",designation:"CEO",selected:!1,starred:!1,frequently:!1},{id:1457690500,name:"Stella Johnson",thumb:"http://via.placeholder.com/150x150",email:"stella.johnson@example.com",phone:"+1-215-659-7529",designation:"CEO",selected:!1,starred:!1,frequently:!0},{id:1457690501,name:"Garry Sobars",thumb:"http://via.placeholder.com/150x150",email:"garry.sobars@example.com",phone:"+1-215-745-7529",designation:"CFO",selected:!1,starred:!1,frequently:!0},{id:1457690502,name:"Alex Dolgove",thumb:"http://via.placeholder.com/150x150",email:"alex.dolgove@example.com",phone:"+1-215-748-7855",designation:"Designer",selected:!1,starred:!1,frequently:!0},{id:1457690503,name:"Domnic Brown",thumb:"http://via.placeholder.com/150x150",email:"domnic.brown@example.com",phone:"+1-215-756-4579",designation:"PHP Developer",selected:!1,starred:!1,frequently:!0},{id:1457690404,name:"Kadir M",thumb:"http://via.placeholder.com/150x150",email:"kadir.m@example.com",phone:"+1-215-659-7586",designation:"HR Manager",selected:!1,starred:!1,frequently:!1},{id:1457690505,name:"John Smith",thumb:"http://via.placeholder.com/150x150",email:"john.smith@example.com",phone:"+1-215-876-8596",designation:"Marketing Head",selected:!1,starred:!1,frequently:!1},{id:1457690506,name:"Domnic Harris",thumb:"http://via.placeholder.com/150x150",email:"domnic.harris@example.com",phone:"+1-215-785-3841",designation:"BDO",selected:!1,starred:!0,frequently:!1},{id:1457690507,name:"Jimmy Jo",thumb:"http://via.placeholder.com/150x150",email:"jimmy.jo@example.com",phone:"+1-215-456-5863",designation:"CCO",selected:!1,starred:!1,frequently:!1},{id:1457690508,name:"Jimmy Jon",thumb:"http://via.placeholder.com/150x150",email:"jimmy.jon@example.com",phone:"+1-215-278-4558",designation:"Developer",selected:!1,starred:!0,frequently:!1},{id:1457690509,name:"Jeson Born",thumb:"http://via.placeholder.com/150x150",email:"jeson.born@example.com",phone:"+1-215-286-7551",designation:"UI-UX Designer",selected:!1,starred:!1,frequently:!1},{id:1457690510,name:"Steve Smith",thumb:"http://via.placeholder.com/150x150",email:"steve.smith@example.com",phone:"+1-215-586-5862",designation:"CEO",selected:!1,starred:!1,frequently:!1}];t.default=n;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","E:/Raqami/Jumbo/src/app/routes/contact/data/contactList.js")}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_default","E:/Raqami/Jumbo/src/app/routes/contact/data/contactList.js"),__REACT_HOT_LOADER__.register(o,"_temp","E:/Raqami/Jumbo/src/app/routes/contact/data/contactList.js"))}()},3250:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),c=n(o),r=a(3251),s=n(r),i=function(e){var t=e.contactList,a=e.addFavourite,n=e.onContactSelect,o=e.onSaveContact,r=e.onDeleteContact;return c.default.createElement("div",{className:"contact-main-content"},t.map(function(e,t){return c.default.createElement(s.default,{key:t,contact:e,onDeleteContact:r,onSaveContact:o,addFavourite:a,onContactSelect:n})}))},l=i;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ContactList","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_react2","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(s,"_index2","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"ContactList","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","E:/Raqami/Jumbo/src/components/contact/ContactList/index.js"))}()},3251:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),d=n(l),u=a(733),m=n(u),_=a(53),p=n(_),f=a(190),E=n(f),C=a(3009),h=n(C),b=function(e){function t(){o(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onContactOptionSelect=function(t){e.setState({menuState:!0,anchorEl:t.currentTarget})},e.handleRequestClose=function(){e.setState({menuState:!1})},e.onContactClose=function(){e.setState({addContactState:!1})},e.onDeleteContact=function(t){e.setState({addContactState:!1}),e.props.onDeleteContact(t)},e.onEditContact=function(){e.setState({menuState:!1,addContactState:!0})},e.state={anchorEl:void 0,menuState:!1,addContactState:!1},e}return r(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.contact,n=t.addFavourite,o=t.onContactSelect,c=t.onSaveContact,r=this.state,s=r.menuState,i=r.anchorEl,l=r.addContactState,u=a.name,_=a.thumb,C=a.email,b=a.phone,R=a.designation,g=a.starred,O=["Edit","Delete"];return d.default.createElement("div",{className:"contact-item"},d.default.createElement(m.default,{color:"primary",checked:a.selected,value:"checkedF",onClick:function(){o(a)}}),d.default.createElement("div",{className:"col-auto px-1 actions"},d.default.createElement(p.default,{className:"size-30",onClick:function(){n(a)}},g?d.default.createElement("i",{className:"zmdi zmdi-star"}):d.default.createElement("i",{className:"zmdi zmdi-star-outline"}))),null===_||""===_?d.default.createElement("div",{className:"rounded-circle size-40 bg-blue text-center text-white mx-4",style:{fontSize:20}},u.charAt(0).toUpperCase()):d.default.createElement("img",{className:"rounded-circle size-40 mx-3",alt:u,src:_}),d.default.createElement("div",{className:"col"},d.default.createElement("p",{className:"mb-0"},d.default.createElement("span",{className:"text-truncate contact-name"},u),d.default.createElement("span",{className:"d-inline-block toolbar-separator"}," "),d.default.createElement("span",{className:"text-truncate job-title"},R)),d.default.createElement("div",{className:"text-muted"},d.default.createElement("span",{className:"email d-inline-block mr-2"},C,","),d.default.createElement("span",{className:"phone d-inline-block"},b))),d.default.createElement("div",{className:"col-auto px-1 actions d-none d-xs-flex"},d.default.createElement(p.default,{className:"size-30",onClick:this.onContactOptionSelect},d.default.createElement("i",{className:"zmdi zmdi-more-vert"})),d.default.createElement(E.default,{id:"long-menu",anchorEl:i,open:s,onClose:this.handleRequestClose,style:{maxHeight:180},MenuListProps:{style:{width:100}}},O.map(function(t){return d.default.createElement(f.MenuItem,{key:t,onClick:function(){"Edit"===t?e.onEditContact():(e.handleRequestClose(),e.onDeleteContact(a))}},t)})),l&&d.default.createElement(h.default,{open:l,contact:a,onSaveContact:c,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact})))}}]),t}(d.default.Component),R=b;t.default=R;var g=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"ContactCell","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(R,"default","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(m,"_Checkbox2","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(p,"_IconButton2","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(E,"_Menu2","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(h,"_index2","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(c,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(r,"_inherits","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(b,"ContactCell","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(R,"_default","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(g,"_temp","E:/Raqami/Jumbo/src/components/contact/ContactList/ContactCell/index.js"))}()}});
//# sourceMappingURL=40.69fb3c05b187a0565a3b.chunk.js.map