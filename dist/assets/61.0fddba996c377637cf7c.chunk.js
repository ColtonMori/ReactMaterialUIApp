webpackJsonp([61],{2635:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(0),c=l(o),f=a(33),m=l(f),h=a(54),p=l(h),g=a(29),_=l(g),E=a(103),b=l(E),D=a(167),k=l(D),C=a(2948),R=l(C),y=a(381),H=l(y),v=(a(20),a(766)),T=l(v),x=(a(165),a(77)),O=l(x),A=a(148),N=l(A),w=a(3430),L=l(w),S=a(104),j=l(S);a(105);var q=(a(398),a(739)),J=l(q),P=a(53),G=l(P),W=a(376),M=l(W),I=function(e){return{container:{display:"flex",flexWrap:"wrap"}}},F={backgroundColor:"#3f51b5",color:"#fff"},B=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.renderEditable=function(t){return c.default.createElement("div",{style:{backgroundColor:"#fff"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){var l=[].concat(n(e.state.makeData));l[t.index][t.column.id]=a.target.innerHTML,e.setState({makeData:l})},dangerouslySetInnerHTML:{__html:e.state.makeData[t.index][t.column.id]}})},e.addRow=function(){var t={field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",field9:""};e.setState({makeData:e.state.makeData.concat(t)})},e.deleteRow=function(t){if(null!=e.state.makeData[1]){var a=[].concat(n(e.state.makeData));a.splice(t,1),e.setState({makeData:a})}},e.handleRow=function(t){return t.index==e.state.makeData.length-1?c.default.createElement("div",null,c.default.createElement(N.default,{color:"primary",onClick:e.addRow},"add_circle")):c.default.createElement("div",null,c.default.createElement(N.default,{color:"error",onClick:function(){e.deleteRow(t.index)}},"delete"))},e.renderEditable2=function(t){return c.default.createElement("div",{style:{backgroundColor:"#fff"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){[].concat(n(e.state.makeData2))[t.index][t.column.id]=a.target.innerHTML,e.setState({makeData2:makeData2})},dangerouslySetInnerHTML:{__html:e.state.makeData2[t.index][t.column.id]}})},e.addRow2=function(){var t={field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",field9:""};e.setState({makeData2:e.state.makeData2.concat(t)})},e.deleteRow2=function(t){if(null!=e.state.makeData2[1]){var a=[].concat(n(e.state.makeData2));a.splice(t,1),e.setState({makeData2:a})}},e.handleRow2=function(t){return t.index==e.state.makeData2.length-1?c.default.createElement("div",null,c.default.createElement(N.default,{color:"primary",onClick:e.addRow2},"add_circle")):c.default.createElement("div",null,c.default.createElement(N.default,{color:"error",onClick:function(){e.deleteRow2(t.index)}},"delete"))},e.renderEditable3=function(t){return c.default.createElement("div",{style:{backgroundColor:"#fff"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){[].concat(n(e.state.makeData3))[t.index][t.column.id]=a.target.innerHTML,e.setState({makeData3:makeData3})},dangerouslySetInnerHTML:{__html:e.state.makeData3[t.index][t.column.id]}})},e.addRow3=function(){var t={field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",field9:""};e.setState({makeData3:e.state.makeData3.concat(t)})},e.deleteRow3=function(t){if(null!=e.state.makeData3[1]){var a=[].concat(n(e.state.makeData3));a.splice(t,1),e.setState({makeData3:a})}},e.handleRow3=function(t){return t.index==e.state.makeData3.length-1?c.default.createElement("div",null,c.default.createElement(N.default,{color:"primary",onClick:e.addRow3},"add_circle")):c.default.createElement("div",null,c.default.createElement(N.default,{color:"error",onClick:function(){e.deleteRow3(t.index)}},"delete"))},e.handleOnsubmit=function(){e.state.makeData.forEach(function(t,a){for(var l in t)""==t[l]?e.setState({open:!e.state.open,checkData:!1},function(){e.changeRoute()}):e.setState({open:!0,checkData:!0},function(){e.changeRoute()})}),e.state.makeData2.forEach(function(t,a){for(var l in t)""==t[l]?e.setState({open:!e.state.open,checkData2:!1},function(){e.changeRoute()}):e.setState({open:!0,checkData2:!0},function(){e.changeRoute()})}),e.state.makeData3.forEach(function(t,a){for(var l in t)""==t[l]?e.setState({open:!e.state.open,checkData3:!1},function(){e.changeRoute()}):e.setState({open:!0,checkData3:!0},function(){e.changeRoute()})})},e.changeRoute=function(){e.props.history.push("/app/dashboard/mainthankyou")},e.handleClose=function(){e.setState({open:!1})},e.handleChange=function(t){return function(a){var l=[].concat(n(e.state.makeData));l[t.index][t.column.id]=a.target.value,e.setState({makeData:l},function(){})}},e.handleChange2=function(t){return function(a){var l=[].concat(n(e.state.makeData2));l[t.index][t.column.id]=a.target.value,e.setState({makeData2:l})}},e.handleChange3=function(t){return function(a){var l=[].concat(n(e.state.makeData3));l[t.index][t.column.id]=a.target.value,e.setState({makeData3:l})}},e.autofillTable1=function(){var t=e.state.makeData.map(function(e,t){return 0==t?{field1:"Non-DG",field2:"Rice",field3:"Rice",field4:"1",field5:"bags",field6:"1000",field7:"2",field8:"1",field9:"2.5"}:e});e.setState({makeData:t})},e.autofillTable2=function(){var t=e.state.makeData2.map(function(e,t){return 0==t?{field1:"Non-DG",field2:"Rice",field3:"Rice",field4:"1",field5:"bags",field6:"1000",field7:"2",field8:"1",field9:"2.5"}:e});e.setState({makeData2:t})},e.autofillTable3=function(){var t=e.state.makeData3.map(function(e,t){return 0==t?{field1:"Non-DG",field2:"Rice",field3:"Rice",field4:"1",field5:"bags",field6:"1000",field7:"2",field8:"1",field9:"2.5"}:e});e.setState({makeData3:t})},e.goods=["Rice","Iron","Coke","Sugar","Salt","Grain","Ferro","Klinger","Fuel","Kerozene","Heavy machines/vehicles","Fruits","Wood","Liquid bulk goods","Solid bulk goods","Large freight containers","Other freight containers","Palletised goods","Pre-slung goods","Mobile self-propelled units","Other mobile units","Other cargo not elsewhere specified"],e.units=["bag","board feet","bale","bottle","box","hundred","cubic centimeter","cubic feet","curie","cylinder","centimeter","can","case","carton","hundred weight","cubic yard","diameter","drum","dewar","day","dozen","each","feet","gallon","gram","grain","gross","hour","inch","jar","kilogram","kit","lambda","pound","linear feet","length","liter","lot","linear yard","thousand","milligram","milliliter","millimeter","minute","month","micron","meter","omega","ounce","package","piece","page","package","pail","pair","pint","quarter","quart","rod","roll","ream","square feet","sheet","set","square yard","tube","transaction","unit","vial","week","yard","year"],e.state={type:"",open:!1,checkData:!0,checkData2:!0,checkData3:!0,errorMessage:"Please fill in the fields",makeData:[{field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",field9:""}],makeData2:[{field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",field9:""}],makeData3:[{field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",field9:""}]},e}return s(t,e),d(t,[{key:"componentWillMount",value:function(){document.title="Shipper PackingList  - KretaHub"}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"container-fluid"},c.default.createElement("br",null),c.default.createElement(m.default,null,c.default.createElement("h1",{className:"text-center p-3"},"Packing List"),c.default.createElement("div",{className:"container"},c.default.createElement("h2",{style:F,className:"pl-2"},"Container 1: 20RF"),c.default.createElement(_.default,{onClick:this.autofillTable1},"Autofill"),c.default.createElement(j.default,{sortable:!1,name:"table1",className:"-striped -highlight",defaultPageSize:this.state.makeData.length,key:this.state.makeData.length,showPagination:!1,data:this.state.makeData,columns:[{Header:"Type*",accessor:"field1",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData[t.index].field1,onChange:e.handleChange(t),inputProps:{name:"type",id:"type"}},c.default.createElement(k.default,{value:"Non-DG"},"Non-DG"),c.default.createElement(k.default,{value:"DG"},"DG")))}},{Header:"Name*",accessor:"field2",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData[t.index].field2,onChange:e.handleChange(t),inputProps:{name:"type",id:"type"}},e.goods.map(function(e){return c.default.createElement(k.default,{value:e},e)})))}},{Header:"Description*",accessor:"field3",Cell:function(t){return c.default.createElement("input",{onChange:e.handleChange(t),value:e.state.makeData[t.index].field3,style:{border:"none",width:"100%",lineHeight:"80%"}})}},{Header:"QTY*",className:"text-right",accessor:"field4",Cell:function(t){return c.default.createElement("input",{onChange:e.handleChange(t),value:e.state.makeData[t.index].field4,className:"text-right float-left",style:{border:"none",width:"100%",lineHeight:"80%"},type:"number"})}},{Header:"Unit*",accessor:"field5",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData[t.index].field5,onChange:e.handleChange(t),inputProps:{name:"type",id:"type"}},e.units.map(function(e){return c.default.createElement(k.default,{value:e},e)})))}},{Header:"Weight*",className:"text-right",accessor:"field6",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange(t),value:e.state.makeData[t.index].field6,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),"kg")}},{Header:"Length",className:"text-right",accessor:"field7",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange(t),value:e.state.makeData[t.index].field7,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"x"))}},{Header:"Width",className:"text-right",accessor:"field8",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange(t),value:e.state.makeData[t.index].field8,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"x"))}},{Header:"Height",className:"text-right",accessor:"field9",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange(t),value:e.state.makeData[t.index].field9,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"m "))}},{Header:"",accessor:"",Cell:this.handleRow,minWidth:30}]})),c.default.createElement("br",null),c.default.createElement("div",{className:"container"},c.default.createElement("h2",{style:F,className:"pl-2"},"Container 2: 20RF"),c.default.createElement(_.default,{onClick:this.autofillTable2},"Autofill"),c.default.createElement(j.default,{sortable:!1,name:"table1",className:"-striped -highlight",defaultPageSize:this.state.makeData2.length,key:this.state.makeData2.length,showPagination:!1,data:this.state.makeData2,columns:[{Header:"Type*",accessor:"field1",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData2[t.index].field1,onChange:e.handleChange2(t),inputProps:{name:"type",id:"type"}},c.default.createElement(k.default,{value:"Non-DG"},"Non-DG"),c.default.createElement(k.default,{value:"DG"},"DG")))}},{Header:"Name*",accessor:"field2",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData2[t.index].field2,onChange:e.handleChange2(t),inputProps:{name:"type",id:"type"}},e.goods.map(function(e){return c.default.createElement(k.default,{value:e},e)})))}},{Header:"Description*",accessor:"field3",Cell:function(t){return c.default.createElement("input",{onChange:e.handleChange2(t),value:e.state.makeData2[t.index].field3,style:{border:"none",width:"100%",lineHeight:"80%"}})}},{Header:"QTY*",className:"text-right",accessor:"field4",Cell:function(t){return c.default.createElement("input",{onChange:e.handleChange2(t),value:e.state.makeData2[t.index].field4,className:"text-right float-left",style:{border:"none",width:"100%",lineHeight:"80%"},type:"number"})}},{Header:"Unit*",accessor:"field5",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData2[t.index].field5,onChange:e.handleChange2(t),inputProps:{name:"type",id:"type"}},e.units.map(function(e){return c.default.createElement(k.default,{value:e},e)})))}},{Header:"Weight*",className:"text-right",accessor:"field6",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange2(t),value:e.state.makeData2[t.index].field6,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),"kg")}},{Header:"Length",className:"text-right",accessor:"field7",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange2(t),value:e.state.makeData2[t.index].field7,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"x"))}},{Header:"Width",className:"text-right",accessor:"field8",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange2(t),value:e.state.makeData2[t.index].field8,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"x"))}},{Header:"Height",className:"text-right",accessor:"field9",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange2(t),value:e.state.makeData2[t.index].field9,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"m "))}},{Header:"",accessor:"",Cell:this.handleRow2,minWidth:30}]})),c.default.createElement("br",null),c.default.createElement("div",{className:"container"},c.default.createElement("h2",{style:F,className:"pl-2"},"Container 3: 40GP"),c.default.createElement(_.default,{onClick:this.autofillTable3},"Autofill"),c.default.createElement(j.default,{sortable:!1,name:"table1",className:"-striped -highlight",defaultPageSize:this.state.makeData3.length,key:this.state.makeData3.length,showPagination:!1,data:this.state.makeData3,columns:[{Header:"Type*",accessor:"field1",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData3[t.index].field1,onChange:e.handleChange3(t),inputProps:{name:"type",id:"type"}},c.default.createElement(k.default,{value:"Non-DG"},"Non-DG"),c.default.createElement(k.default,{value:"DG"},"DG")))}},{Header:"Name*",accessor:"field2",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData3[t.index].field2,onChange:e.handleChange3(t),inputProps:{name:"type",id:"type"}},e.goods.map(function(e){return c.default.createElement(k.default,{value:e},e)})))}},{Header:"Description*",accessor:"field3",Cell:function(t){return c.default.createElement("input",{onChange:e.handleChange3(t),value:e.state.makeData3[t.index].field3,style:{border:"none",width:"100%",lineHeight:"80%"}})}},{Header:"QTY*",className:"text-right",accessor:"field4",Cell:function(t){return c.default.createElement("input",{onChange:e.handleChange3(t),value:e.state.makeData3[t.index].field4,className:"text-right float-left",style:{border:"none",width:"100%",lineHeight:"80%"},type:"number"})}},{Header:"Unit*",accessor:"field5",Cell:function(t){return c.default.createElement("span",null,c.default.createElement(M.default,{value:e.state.makeData3[t.index].field5,onChange:e.handleChange3(t),inputProps:{name:"type",id:"type"}},e.units.map(function(e){return c.default.createElement(k.default,{value:e},e)})))}},{Header:"Weight*",className:"text-right",accessor:"field6",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange3(t),value:e.state.makeData3[t.index].field6,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),"kg")}},{Header:"Length",className:"text-right",accessor:"field7",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange3(t),value:e.state.makeData3[t.index].field7,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"x"))}},{Header:"Width",className:"text-right",accessor:"field8",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange3(t),value:e.state.makeData3[t.index].field8,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"x"))}},{Header:"Height",className:"text-right",accessor:"field9",Cell:function(t){return c.default.createElement("span",null,c.default.createElement("input",{onChange:e.handleChange3(t),value:e.state.makeData3[t.index].field9,className:"text-right float-left",style:{border:"none",width:"70%",lineHeight:"80%"},type:"number"}),c.default.createElement("span",{className:"float-right"},"m "))}},{Header:"",accessor:"",Cell:this.handleRow3,minWidth:30}]})),c.default.createElement("br",null),c.default.createElement("div",{className:"row align-items-center justify-content-center"},c.default.createElement(_.default,{variant:"raised",style:{background:"#29487D",color:"#fff"},component:"span",onClick:this.changeRoute},"FINISH BOOKING"),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",null))))}}]),t}(c.default.Component),z=B;t.default=z;var K=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(I,"styles","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(F,"head","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(B,"Default","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(z,"default","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_createClass","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(c,"_react2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(m,"_Paper2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(p,"_TextField2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(_,"_Button2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(b,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(k,"_MenuItem2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(R,"_stations2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(H,"_materialUiNextDatepicker2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(T,"_index2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(O,"_Table2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(N,"_Icon2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(L,"_packingdata2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(j,"_reactTable2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(J,"_Snackbar2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(G,"_IconButton2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(M,"_Select2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(n,"_toConsumableArray","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(r,"_classCallCheck","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(i,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(s,"_inherits","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(I,"styles","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(F,"head","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(B,"Default","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(z,"_default","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"),__REACT_HOT_LOADER__.register(K,"_temp","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/packinglist.js"))}()},2948:function(e,t){e.exports=[{field:"Any Station",id:"1"},{field:"Sungai Lagoa - Jakarta",id:"2"},{field:"Kalimas - Surabaya",id:"3"}]},3430:function(e,t){e.exports=[{field1:"Non-DG",field2:"Rice",field3:"Rice",field4:"1",field5:"bags",field6:"1000 kg",field7:"2 m",field8:"1 m",field9:"2.5 m"}]}});
//# sourceMappingURL=61.0fddba996c377637cf7c.chunk.js.map