webpackJsonp([66],{2634:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":d(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":d(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,a,l,r){return Q+=1,{id:Q,name:e,calories:t,fat:a,carbs:l,protein:r}}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),f=a(0),m=l(f),_=a(53),h=l(_),E=a(33),D=l(E),p=a(54),g=l(p),b=a(29),R=l(b),T=a(103),v=l(T),A=a(3431),O=l(A),y=a(20),C=a(104),N=l(C);a(105);var H=a(248),S=l(H),w=a(165),j=(a(380),a(739)),k=l(j),L=(a(10),function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}}),I=[u("20RF","IDR 2,200,000","2","\tof 10","IDR 4,400,000"),u("20TK","IDR 2,200,000",null,"of 10",null),u("20GP","IDR 2,200,000",null,"of 10",null),u("40RF","IDR 4,200,000",null,"of 5",null),u("40GP","IDR 4,200,000","1","of 5","IDR 4,200,000"),u("Ancillary Price",null,null,null,"IDR 100,000"),u("Total Price",null,null,null," IDR 8,700,000 ")],Q=0,q=function(e){function t(){o(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));J.call(e);var a=new Date,l=a.getDate(),r=a.getMonth()+1;a.getFullYear();return l<10&&(l="0"+l),r<10&&(r="0"+r),e.state={anchorEl:void 0,selectedDate:new Date,arrivalDate:new Date(Date.now()+864e5),clearedDate:null,radioButton:"radioButton1",total:0,open:!1,autoFill:!1,makeData:[{field1:"20RF",field2:"IDR 2,200,000",field6:"2200000",field3:"2",field4:"of 10",field5:"IDR 4,400,000"},{field1:"20TK",field2:"IDR 2,200,000",field6:"2200000",field3:"",field4:"of 10",field5:0},{field1:"20GP",field2:"IDR 2,200,000",field6:"2200000",field3:"",field4:"of 10",field5:0},{field1:"40RF",field2:"IDR 4,200,000",field6:"4200000",field3:"",field4:"of 5",field5:0},{field1:"40GP",field2:"IDR 4,200,000",field6:"4200000",field3:"1",field4:"of 5",field5:"IDR 4,200,000"}],makeData2:[{field1:"20RF",field2:"IDR 2,200,000",field6:"2200000",field3:"",field4:"of 10",field5:0},{field1:"20TK",field2:"IDR 2,200,000",field6:"2200000",field3:"",field4:"of 10",field5:0},{field1:"20GP",field2:"IDR 2,200,000",field6:"2200000",field3:"",field4:"of 10",field5:0},{field1:"40RF",field2:"IDR 4,200,000",field6:"4200000",field3:"",field4:"of 5",field5:0},{field1:"40GP",field2:"IDR 4,200,000",field6:"4200000",field3:"",field4:"of 5",field5:0}]},e}return s(t,e),c(t,[{key:"componentWillMount",value:function(){document.title="Freight Quote Details - KretaHub",this.calculateTotal()}},{key:"render",value:function(){var e=this,t=this.state;t.anchorEl,t.menuState,t.currentDate,this.props.classes;return m.default.createElement(D.default,null,m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col"},m.default.createElement("div",{className:" row jr-card-header pt-3 px-2"},m.default.createElement("h2",{className:"col"},m.default.createElement(v.default,{id:"Freight Quote Details"})),m.default.createElement(R.default,{className:"float-right col-1",variant:"raised",style:{background:"#29487D",color:"#fff"},component:"span",onClick:this.handleAutofill},"Autofill")),m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row"},m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Departure :"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("p",{className:""},O.default[0].line1)),m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Arrival :"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("p",{className:""},O.default[0].line5))),m.default.createElement("div",{className:"row"},m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Closing time:"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("div",{style:{display:"inline-flex",width:"85%"}},m.default.createElement(w.DatePicker,{style:{width:250},format:"MMMM DD, YYYY",disabled:!0,value:this.state.selectedDate,onChange:this.handleDateChange,animateYearScrolling:!1}),m.default.createElement(w.TimePicker,{disabled:!0,ampm:!1,value:new Date((new Date).setHours(2,0,0,0)),onChange:this.handleDateChange}))),m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Trip Length :"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("p",{className:""},O.default[0].line6))),m.default.createElement("div",{className:"row"},m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Departure Time :"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("div",{style:{display:"inline-flex",width:"85%"}},m.default.createElement(w.DatePicker,{style:{width:250},disabled:!0,format:"MMMM DD, YYYY",value:this.state.selectedDate,onChange:this.handleDateChange,animateYearScrolling:!1}),m.default.createElement(w.TimePicker,{disabled:!0,ampm:!1,value:new Date((new Date).setHours(6,0,0,0)),onChange:this.handleDateChange}))),m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Arrival Time :"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("div",{style:{display:"inline-flex",width:"85%"}},m.default.createElement(w.DatePicker,{style:{width:250},disabled:!0,format:"MMMM DD, YYYY",value:this.state.arrivalDate,onChange:this.handleDateChange,animateYearScrolling:!1}),m.default.createElement(w.TimePicker,{disabled:!0,ampm:!1,value:new Date((new Date).setHours(0,0,0,0)),onChange:this.handleDateChange})))),m.default.createElement("div",{className:"row"},m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Train Name:"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("p",{className:""},O.default[0].line4)),m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Train Number :"),m.default.createElement("div",{className:"col-md-3 col-12"},m.default.createElement("p",{className:""},O.default[0].line8))),m.default.createElement("div",{className:"row"},m.default.createElement("label",{className:"col-md-3 col-12",for:"email"},"Terms and Conditions:"),m.default.createElement("div",{className:"col-md-8 col-12"},m.default.createElement("textarea",{className:"border border-primary rounded",rows:"3",style:{minWidth:"100%"}}))),m.default.createElement("h2",null,"Book This Schedule"),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-3 mt-3",style:{marginRight:"-2%"}},m.default.createElement("label",{for:"Student"},"Incoterm:")),m.default.createElement("div",{className:"col-md"},m.default.createElement("label",{className:"m-0",for:"fcl"},m.default.createElement(S.default,{checked:"radioButton1"===this.state.radioButton,onChange:this.setRadioButton,"aria-label":"A",value:"radioButton1",name:"radioButton"}),"Station-to-Station"),m.default.createElement("label",{className:"",for:"lcl"},m.default.createElement(S.default,{checked:"radioButton2"===this.state.radioButton,onChange:this.setRadioButton,"aria-label":"A",value:"radioButton2",name:"radioButton"}),"Door-to-Station"),m.default.createElement("label",{className:"",for:"cargo"},m.default.createElement(S.default,{checked:"radioButton3"===this.state.radioButton,onChange:this.setRadioButton,"aria-label":"A",value:"radioButton3",name:"radioButton"}),"Door-to-Door")))),m.default.createElement("div",{className:"table-responsive-material"},m.default.createElement("div",{className:"col-sm-12"},m.default.createElement("div",{className:"p-a"},m.default.createElement(N.default,{showPagination:!1,sortable:!1,data:!1===this.state.autoFill?this.state.makeData2:this.state.makeData,columns:[{Header:"Container type",accessor:"field1",minWidth:150},{Header:"Price",accessor:"field2"},{Header:"QTY",accessor:"field3",className:"text-right",Cell:!1===this.state.autoFill?this.renderEditable2:this.renderEditable},{Header:"Capacity",accessor:"field4",minWidth:150},{Header:"Subtotal",accessor:"field5",className:"text-right"}],defaultPageSize:5,className:"-striped -highlight"}),m.default.createElement("br",null),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-6"},m.default.createElement("h3",null,"Ancillary Price:")),m.default.createElement("div",{className:"col-6 float-right"},m.default.createElement("div",{className:"float-right"},m.default.createElement("h3",null,"IDR 100,000")))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-6"},m.default.createElement("h1",null,"Total:")),m.default.createElement("div",{className:"col-6 float-right"},m.default.createElement("div",{className:"float-right"},m.default.createElement("h1",null,!0===this.state.autoFill&&0==this.state.total?"IDR 8,700,000":this.calculateTotal()))))))),m.default.createElement("br",null),m.default.createElement("br",null),m.default.createElement("div",{className:"row align-items-center justify-content-center"},m.default.createElement(y.Link,{to:"/app/dashboard/packinglist"},m.default.createElement(R.default,{variant:"raised",style:{background:"#29487D",color:"#fff"},component:"span"},"BOOK NOW")),m.default.createElement("br",null),m.default.createElement("br",null),m.default.createElement("br",null))))),m.default.createElement(k.default,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:m.default.createElement("span",{id:"message-id"},"Qty cannot exceed capacity of 20."),action:[m.default.createElement(R.default,{key:"undo",color:"secondary",size:"small",onClick:function(){e.setState({open:!1})}},"Close")]}))}}]),t}(m.default.Component),J=function(){var e=this;this.handleChange=function(t){return function(a){e.setState(i({},t,a.target.value))}},this.onOptionMenuSelect=function(t){e.setState({menuState:!0,anchorEl:t.currentTarget})},this.handleRequestClose=function(){e.setState({menuState:!1})},this.handleDateChange=function(t){e.setState({selectedDate:t},e.untilDate)},this.untilDate=function(){var t=e.state.selectedDate,a=new Date(t),l=new Date(a);l.setDate(l.getDate()+1);var r=l.getDate(),i=l.getMonth()+1,o=l.getFullYear(),n=i+"/"+r+"/"+o;e.setState({arrivalDate:n})},this.handleClearedDateChange=function(t){e.setState({clearedDate:t})},this.onChange=function(t){e.setState({date:t})},this.handleChange=function(t){e.setState({name:t.target.value})},this.addRow=function(){e.setState(function(e){return{makeData:[].concat(r(e.makeData),[{number:e.makeData.length+1,product:"",description:"",quantity:"",rate:"",amount:0}])}})},this.calculateTotal=function(){return"IDR "+(e.state.total+1e5).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},this.saveData=function(){var t=e.state;e.props.saveInvoice(t)},this.handleDueChange=function(t){e.setState({due:t})},this.renderEditable=function(t){return m.default.createElement("div",{style:{backgroundColor:"#fafafa"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){var l=[].concat(r(e.state.makeData));if(l[t.index][t.column.id]=a.target.innerHTML,l[t.index].field3<=20){var i=l[t.index].field6*l[t.index].field3,o="IDR "+i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");l[t.index].field5=o,e.setState({makeData:l,total:i})}else e.setState({open:!0},function(){})},dangerouslySetInnerHTML:{__html:e.state.makeData[t.index][t.column.id]}})},this.renderEditable2=function(t){return m.default.createElement("div",{style:{backgroundColor:"#fafafa"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){var l=[].concat(r(e.state.makeData2));if(l[t.index][t.column.id]=a.target.innerHTML,l[t.index].field3<=20){var i=l[t.index].field6*l[t.index].field3,o="IDR "+i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");l[t.index].field5=o,e.setState({makeData2:l,total:i})}else e.setState({open:!0},function(){})},dangerouslySetInnerHTML:{__html:e.state.makeData2[t.index][t.column.id]}})},this.setRadioButton=function(t){e.setState({radioButton:t.target.value})},this.handleAutofill=function(){e.setState({autoFill:!e.state.autoFill})}},P=q;t.default=P;var B=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"createData","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(L,"styles","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(I,"data","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(Q,"id","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(q,"Freightdetail","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(P,"default","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"_createClass","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(m,"_react2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(h,"_IconButton2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(D,"_Paper2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(g,"_TextField2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(R,"_Button2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(v,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(O,"_ATANotice2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(N,"_reactTable2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(S,"_Radio2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(k,"_Snackbar2","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(r,"_toConsumableArray","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(i,"_defineProperty","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(n,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(s,"_inherits","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(L,"styles","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(I,"data","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(Q,"id","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(u,"createData","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(q,"Freightdetail","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(J,"_initialiseProps","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(P,"_default","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"),__REACT_HOT_LOADER__.register(B,"_temp","E:/Raqami/Jumbo/src/app/routes/dashboard/routes/Default/frieghtQuoteDetail.js"))}()},3431:function(e,t){e.exports=[{mainHeading:"ATA Notice for Booking #0001    ",subHeading1:"Dear PT. Indotech",subHeading2:"We are happy to inform you that your freight has arrived at the destination, Kalimas Station, Surabaya.",subHeading3:"You will receive another email shortly in order to complete your full payment.",mainEmail:"someone@example.com",shipper:"PT. Indotech",carrier:"PT. Bumi Wijaya Indorail",line1:"Sungai Lagoa - Jakarta",line4:"KA. Maju Cepat",line5:"Kalimas - Surabaya",line6:"18 hours",line8:"107",line9:"Pemilik / pengirim baru",line10:"Station-to-Station",field1:"#0001",field2:"IDR 8.700.000",field3:"IDR 1.740.000",field4:"BCA",field5:"PT KretaHub Logistik Internasional",field6:"000-123-4567",field7:"Senayan",companyName:"KretaHub"}]}});
//# sourceMappingURL=66.f38a8fee694ff15df5ea.chunk.js.map