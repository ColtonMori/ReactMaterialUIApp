webpackJsonp([54],{2709:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=a(n),s=i(2959),o=a(s),m=i(4095),_=a(m),l=i(2744),u=a(l),d=i(103),c=a(d),g=function(e){var t=e.match;return r.default.createElement("div",null,r.default.createElement(u.default,{title:r.default.createElement(c.default,{id:"sidebar.timeLine.zigzag"}),match:t}),r.default.createElement("div",{className:"timeline-section timeline-center timeline-zigzag clearfix animated slideInUpTiny animation-duration-3"},o.default.map(function(e,t){return r.default.createElement(_.default,{key:t,styleName:t%2==0?"":"timeline-inverted",timeLine:e})})))},p=g;t.default=p;var E=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"Zigzag","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(p,"default","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(o,"_timeLineData2","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(_,"_ZigzagTimeLineItem2","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(u,"_index2","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(c,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(g,"Zigzag","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(p,"_default","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"),__REACT_HOT_LOADER__.register(E,"_temp","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/zigzag/index.js"))}()},2744:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=a(n),s=i(368),o=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},m=function(e,t,i){return 0===i?"#/":"#/"+e.split(t)[0]+t},_=function(e){var t=e.title,i=e.match,a=i.path.substr(1),n=a.split("/");return r.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t),r.default.createElement(s.Breadcrumb,{className:"mb-0",tag:"nav"},n.map(function(e,t){return r.default.createElement(s.BreadcrumbItem,{active:n.length===t+1,tag:n.length===t+1?"span":"a",key:t,href:m(a,e,t)},o(e))})))},l=_;t.default=l;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"getDisplayString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(m,"getUrlString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"ContainerHeader","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"getDisplayString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(m,"getUrlString","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"ContainerHeader","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","E:/Raqami/Jumbo/src/components/ContainerHeader/index.js"))}()},2959:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{image:"http://via.placeholder.com/150x150",time:"30 NOV, 1981",title:"Established",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},{image:"http://via.placeholder.com/150x150",time:"20 APRIL, 1982",title:"Completed first 50 projects",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"},{image:"http://via.placeholder.com/150x150",time:"11 MAY, 1983",title:"Took over JIMBA INC",description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,"},{image:"http://via.placeholder.com/150x150",time:"18 SEPT, 1984",title:"Best builder award from usa builder board",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},{image:"http://via.placeholder.com/150x150",time:"30 NOV, 1985",title:"completed first 100 projects",description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}],n=a;t.default=n;var r=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"timeLineData","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/timeLineData.js"),__REACT_HOT_LOADER__.register(n,"default","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/timeLineData.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"timeLineData","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/timeLineData.js"),__REACT_HOT_LOADER__.register(n,"_default","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/timeLineData.js"),__REACT_HOT_LOADER__.register(r,"_temp","E:/Raqami/Jumbo/src/app/routes/timeLine/routes/timeLineData.js"))}()},4095:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=a(n),s=function(e){var t=e.styleName,i=e.timeLine,a=i.time,n=i.title,s=i.image,o=i.description;return r.default.createElement("div",{className:"timeline-item "+t},r.default.createElement("div",{className:"timeline-badge timeline-img"},t.includes("timeline-inverted")?r.default.createElement("img",{className:"size-60",src:"assets/images/pentagon_1.png",alt:"Pentagon",title:"Pentagon"}):r.default.createElement("img",{className:"size-60",src:"assets/images/pentagon.png",alt:"Pentagon",title:"Pentagon"})),r.default.createElement("div",{className:"timeline-panel "},r.default.createElement("div",{className:"timeline-panel-scroll"},r.default.createElement("div",{className:"timeline-panel-header"},r.default.createElement("div",{className:"timeline-header-img timeline-left"},r.default.createElement("img",{className:"size-60 rounded-circle",src:s,alt:"Pentagon",title:"Pentagon"})),r.default.createElement("div",{className:"timeline-heading"},r.default.createElement("h5",null,a),r.default.createElement("h3",{className:"timeline-title"},n))),r.default.createElement("div",{className:"timeline-body"},r.default.createElement("p",{className:"card-text"},o," ")))))},o=s;t.default=o;var m=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"ZigzagTimeLineItem","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"),__REACT_HOT_LOADER__.register(o,"default","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"),__REACT_HOT_LOADER__.register(s,"ZigzagTimeLineItem","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"),__REACT_HOT_LOADER__.register(o,"_default","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"),__REACT_HOT_LOADER__.register(m,"_temp","E:/Raqami/Jumbo/src/components/timeline/ZigzagTimeLineItem.js"))}()}});
//# sourceMappingURL=54.69fb3c05b187a0565a3b.chunk.js.map