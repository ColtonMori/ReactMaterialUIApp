webpackJsonp([48],{2669:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),_=r(c),l=n(3828),d=r(l),p=n(2744),f=r(p),m=n(103),E=r(m),R=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateContent=n.updateContent.bind(n),n.state={content:"<h2>Awesome Rich Content</h2>\n<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n\n<ul>\n        <li>ullamcorper ligula</li>\n        <li>Duis vel neque</li>\n</ul>\n\n<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n"},n}return a(t,e),u(t,[{key:"updateContent",value:function(e){this.setState({content:e})}},{key:"onChange",value:function(e){var t=e.editor.getData();this.setState({content:t})}},{key:"onBlur",value:function(e){console.log("onBlur event called with event info: ",e)}},{key:"afterPaste",value:function(e){console.log("afterPaste event called with event info: ",e)}},{key:"render",value:function(){return _.default.createElement("div",null,_.default.createElement(f.default,{title:_.default.createElement(E.default,{id:"sidebar.editors.CKEditor"}),match:this.props.match}),_.default.createElement("div",{className:"jr-card"},_.default.createElement(d.default,{activeClass:"p10",content:this.state.content,events:{blur:this.onBlur.bind(this),afterPaste:this.afterPaste.bind(this),change:this.onChange.bind(this)}})))}}]),t}(_.default.Component),b=R;t.default=b;var h=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"CK","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"default","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"_createClass","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(_,"_react2","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(d,"_reactCkeditorComponent2","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(f,"_index2","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(E,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(i,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(a,"_inherits","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(R,"CK","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"_default","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(h,"_temp","E:/Raqami/Jumbo/src/app/routes/editors/routes/CK/index.js"))}()},2744:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(368),s=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},u=function(e,t,n){return 0===n?"#/":"#/"+e.split(t)[0]+t},c=function(e){var t=e.title,n=e.match,r=n.path.substr(1),o=r.split("/");return i.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},i.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t),i.default.createElement(a.Breadcrumb,{className:"mb-0",tag:"nav"},o.map(function(e,t){return i.default.createElement(a.BreadcrumbItem,{active:o.length===t+1,tag:o.length===t+1?"span":"a",key:t,href:u(r,e,t)},s(e))})))},_=c;t.default=_;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"getDisplayString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"getUrlString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"default","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_react2","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(s,"getDisplayString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"getUrlString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_default","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"))}()},3828:function(e,t,n){"use strict";e.exports=n(3829)},3829:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),_=n(4),l=r(_),d=n(40),p=r(d),f=n(3830),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onLoad=n.onLoad.bind(n),n.state={isScriptLoaded:n.props.isScriptLoaded,config:n.props.config},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.isScriptLoaded?this.onLoad():f(this.props.scriptUrl,this.onLoad)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting){if(this.setState({isScriptLoaded:!0}),!window.CKEDITOR)return void console.error("CKEditor not found");this.editorInstance=window.CKEDITOR.appendTo(p.default.findDOMNode(this),this.state.config,this.props.content);for(var e in this.props.events){var t=this.props.events[e];this.editorInstance.on(e,t)}}}},{key:"render",value:function(){return c.default.createElement("div",{className:this.props.activeClass})}}]),t}(c.default.Component);m.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},m.propTypes={content:l.default.any,config:l.default.object,isScriptLoaded:l.default.bool,scriptUrl:l.default.string,activeClass:l.default.string,events:l.default.object},t.default=m},3830:function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,i){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(i=t,t={}),t=t||{},i=i||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t)||!!t.async,s.src=e,t.attrs&&n(s,t.attrs),t.text&&(s.text=""+t.text),("onload"in s?r:o)(s,i),s.onload||r(s,i),a.appendChild(s)}}});
//# sourceMappingURL=48.ed9b0efb41ec691ee890.chunk.js.map