(function(e){function a(a){for(var t,i,o=a[0],c=a[1],u=a[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);s&&s(a);while(v.length)v.shift()();return n.push.apply(n,u||[]),l()}function l(){for(var e,a=0;a<n.length;a++){for(var l=n[a],t=!0,o=1;o<l.length;o++){var c=l[o];0!==r[c]&&(t=!1)}t&&(n.splice(a--,1),e=i(i.s=l[0]))}return e}var t={},r={app:0},n=[];function i(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,a,l){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:l})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)i.d(l,t,function(a){return e[a]}.bind(null,t));return l},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="https://hgm-hgm2789.github.io/form/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var s=c;n.push([0,"chunk-vendors"]),l()})({0:function(e,a,l){e.exports=l("56d7")},"034f":function(e,a,l){"use strict";l("85ec")},"05c9":function(e,a,l){},"56d7":function(e,a,l){"use strict";l.r(a);l("e260"),l("e6cf"),l("cca6"),l("a79d");var t=l("2b0e"),r=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{attrs:{id:"app"}},[l("Header"),l("Main"),l("Footer")],1)},n=[],i=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{attrs:{id:"Header"}},[l("header",{staticClass:"header"},[l("span",[e._v("杭州方大丝绸有限公司")]),l("span",{staticClass:"Application"},[e._v("应聘登记表")])])])}],c={name:"Header"},u=c,s=(l("7714"),l("2877")),d=Object(s["a"])(u,i,o,!1,null,"55cdde0f",null),v=d.exports,p=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{attrs:{id:"Main"}},[l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"应聘岗位",placeholder:"请输入",required:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),l("van-field",{staticClass:"filed border",attrs:{required:"",readonly:"",clickable:"",name:"datePicker",value:e.value1,label:"填表日期",placeholder:"请选择","input-align":"center"},on:{click:function(a){e.DateshowPicker=!0}}}),l("van-popup",{attrs:{position:"bottom"},model:{value:e.DateshowPicker,callback:function(a){e.DateshowPicker=a},expression:"DateshowPicker"}},[l("van-datetime-picker",{attrs:{"min-date":e.minDate,"max-date":e.maxDate,type:"date"},on:{confirm:e.DateonConfirm,cancel:function(a){e.DateshowPicker=!1}},model:{value:e.completionDate,callback:function(a){e.completionDate=a},expression:"completionDate"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"姓名",placeholder:"请输入",required:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),l("van-field",{staticClass:"filed border",attrs:{required:"",readonly:"",clickable:"",name:"Genderpicker",value:e.value3,label:"性别",placeholder:"请选择","input-align":"center"},on:{click:function(a){e.GendershowPicker=!0}}}),l("van-popup",{attrs:{position:"bottom"},model:{value:e.GendershowPicker,callback:function(a){e.GendershowPicker=a},expression:"GendershowPicker"}},[l("van-picker",{attrs:{type:"value3","show-toolbar":"",columns:e.Gender},on:{confirm:e.GenderonConfirm,cancel:function(a){e.GendershowPicker=!1}}})],1),l("van-field",{staticClass:"filed border",attrs:{required:"",readonly:"",clickable:"",name:"datePicker",value:e.value4,label:"出生日期",placeholder:"请选择","input-align":"center"},on:{click:function(a){e.BirthdayshowPicker=!0}}}),l("van-popup",{attrs:{position:"bottom"},model:{value:e.BirthdayshowPicker,callback:function(a){e.BirthdayshowPicker=a},expression:"BirthdayshowPicker"}},[l("van-datetime-picker",{attrs:{"min-date":e.minDate,"max-date":e.maxDate,type:"date"},on:{confirm:e.BirthdayonConfirm,cancel:function(a){e.BirthdayshowPicker=!1}},model:{value:e.birthDate,callback:function(a){e.birthDate=a},expression:"birthDate"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"民族",placeholder:"请输入",required:""},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"政治面貌",placeholder:"请输入",required:""},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1),l("van-field",{staticClass:"filed border",attrs:{required:"",readonly:"",clickable:"",name:"Genderpicker",value:e.value7,label:"婚否",placeholder:"请选择","input-align":"center"},on:{click:function(a){e.MarryshowPicker=!0}}}),l("van-popup",{attrs:{position:"bottom"},model:{value:e.MarryshowPicker,callback:function(a){e.MarryshowPicker=a},expression:"MarryshowPicker"}},[l("van-picker",{attrs:{type:"value7","show-toolbar":"",columns:e.Marry},on:{confirm:e.MarryonConfirm,cancel:function(a){e.MarryshowPicker=!1}}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"健康状况",placeholder:"请输入",required:""},model:{value:e.value8,callback:function(a){e.value8=a},expression:"value8"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"籍贯(省、市)",placeholder:"请输入",required:""},model:{value:e.value9,callback:function(a){e.value9=a},expression:"value9"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"联系方式",placeholder:"请输入",required:""},model:{value:e.value10,callback:function(a){e.value10=a},expression:"value10"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"电子邮箱",placeholder:"请输入",required:""},model:{value:e.value11,callback:function(a){e.value11=a},expression:"value11"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"学历",placeholder:"请输入",required:""},model:{value:e.value12,callback:function(a){e.value12=a},expression:"value12"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"现住址",placeholder:"请输入",required:""},model:{value:e.value13,callback:function(a){e.value13=a},expression:"value13"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"目前是否在职",placeholder:"请输入",required:""},model:{value:e.value14,callback:function(a){e.value14=a},expression:"value14"}})],1),l("van-field",{staticClass:"filed border",attrs:{required:"",readonly:"",clickable:"",name:"ArrivaldatePicker",value:e.value15,label:"预计到岗时间",placeholder:"请选择","input-align":"center"},on:{click:function(a){e.ArrivalshowPicker=!0}}}),l("van-popup",{attrs:{position:"bottom"},model:{value:e.ArrivalshowPicker,callback:function(a){e.ArrivalshowPicker=a},expression:"ArrivalshowPicker"}},[l("van-datetime-picker",{attrs:{"min-date":e.minDate,"max-date":e.maxDate,type:"date"},on:{confirm:e.ArrivalonConfirm,cancel:function(a){e.ArrivalshowPicker=!1}},model:{value:e.ArrivalDate,callback:function(a){e.ArrivalDate=a},expression:"ArrivalDate"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"期望薪资",placeholder:"请输入",required:""},model:{value:e.value16,callback:function(a){e.value16=a},expression:"value16"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"外语水平",placeholder:"请输入",required:""},model:{value:e.value17,callback:function(a){e.value17=a},expression:"value17"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"计算机水平",placeholder:"请输入",required:""},model:{value:e.value18,callback:function(a){e.value18=a},expression:"value18"}})],1),l("van-cell-group",[l("van-field",{staticStyle:{"white-space":"nowrap"},attrs:{label:"教育经历(请至少完整填写一行)",required:""},model:{value:e.value19,callback:function(a){e.value19=a},expression:"value19"}})],1),l("data-table",{attrs:{tableColumns:e.tableColumns,tableData:e.tableData}}),l("van-cell-group",[l("van-field",{staticStyle:{"white-space":"nowrap"},attrs:{label:"工作经历(请至少完整填写一行，没有则写`无`",required:""},model:{value:e.value20,callback:function(a){e.value20=a},expression:"value20"}})],1),l("data-table",{attrs:{tableColumns:e.workTableColumns,tableData:e.workTableData}}),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"个人荣誉",placeholder:"请输入"},model:{value:e.value21,callback:function(a){e.value21=a},expression:"value21"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"兴趣特长",placeholder:"请输入"},model:{value:e.value22,callback:function(a){e.value22=a},expression:"value22"}})],1),l("van-cell-group",[l("van-field",{staticClass:"filed",attrs:{label:"自我评价",placeholder:"请输入",required:""},model:{value:e.value23,callback:function(a){e.value23=a},expression:"value23"}})],1)],1)},f=[],b=(l("d81d"),l("cb29"),l("99af"),function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticStyle:{padding:"0 20px"}},[l("table",{staticClass:"table-wrap"},[l("thead",[l("tr",{staticStyle:{height:"25px"}},e._l(e.tableColumns,(function(a,t){return l("th",{key:t},[e._v(" "+e._s(a.title)+" ")])})),0)]),l("tbody",e._l(e.tableData,(function(a,t){return l("tr",{key:t,staticStyle:{height:"25px"}},e._l(e.tableColumns,(function(t,r){return l("td",{key:r},[l("van-field",{model:{value:a[t.prop],callback:function(l){e.$set(a,t.prop,l)},expression:"row[column.prop]"}})],1)})),0)})),0)])])}),m=[],h={name:"dataTable",props:{tableData:{type:Array,default:function(){return[]}},tableColumns:{type:Array,default:function(){return[]}}}},k=h,y=(l("fd13"),Object(s["a"])(k,b,m,!1,null,"6a7b8005",null)),w=y.exports,x={components:{dataTable:w},name:"Main",data:function(){return{tableColumns:[{prop:"time",title:"时间"},{prop:"student",title:"毕业院校"},{prop:"professional",title:"专业"},{prop:"info",title:"详细情况"}],tableData:new Array(3).fill(1).map((function(){return{time:"",student:"",professional:"",info:""}})),workTableColumns:[{prop:"time",title:"时间"},{prop:"company",title:"公司名称"},{prop:"post",title:"职务"},{prop:"duty",title:"职责"}],workTableData:new Array(3).fill(1).map((function(){return{time:"",company:"",post:"",duty:""}})),value:"",value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value12:"",value13:"",value14:"",value15:"",value16:"",value17:"",value18:"",value19:"",value20:"",value21:"",value22:"",value23:"",minDate:new Date(1900,0,1),maxDate:new Date(2025,10,1),completionDate:new Date,birthDate:new Date,ArrivalDate:new Date,DateshowPicker:!1,Gender:["男","女"],Marry:["是","否"],GendershowPicker:!1,BirthdayshowPicker:!1,MarryshowPicker:!1,ArrivalshowPicker:!1}},methods:{dateFormatter:function(e){if(!e)return"";var a=new Date(e),l=a.getMonth()+1+"",t="".concat(a.getFullYear(),"-").concat(l.length<10?"0".concat(l):l,"-").concat(a.getDate());return t},DateonConfirm:function(e){this.value1=this.dateFormatter(e),this.DateshowPicker=!1},GenderonConfirm:function(e){this.value3=e,this.GendershowPicker=!1},BirthdayonConfirm:function(e){this.value4=this.dateFormatter(e),this.BirthdayshowPicker=!1},MarryonConfirm:function(e){this.value7=e,this.MarryshowPicker=!1},ArrivalonConfirm:function(e){this.value15=this.dateFormatter(e),this.ArrivalshowPicker=!1}}},g=x,C=(l("63e8"),Object(s["a"])(g,p,f,!1,null,"3ed1dc22",null)),P=C.exports,D=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{attrs:{id:"Footer"}},[l("div",{staticClass:"footer",staticStyle:{margin:"16px"}},[l("van-button",{staticClass:"color",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)])},_=[],q={name:"Footer",data:function(){return{username:"",password:""}},methods:{onSubmit:function(e){console.log("submit",e)}}},A=q,M=(l("a7e4"),Object(s["a"])(A,D,_,!1,null,"65b2291b",null)),O=M.exports,j={name:"App",components:{Header:v,Main:P,Footer:O}},G=j,S=(l("034f"),Object(s["a"])(G,r,n,!1,null,null,null)),B=S.exports,F=l("b970");l("157a"),l("499a");t["a"].use(F["a"]),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(B)}}).$mount("#app")},"63e8":function(e,a,l){"use strict";l("05c9")},7714:function(e,a,l){"use strict";l("cb84")},"85ec":function(e,a,l){},a7e4:function(e,a,l){"use strict";l("c070")},c070:function(e,a,l){},c0fd:function(e,a,l){},cb84:function(e,a,l){},fd13:function(e,a,l){"use strict";l("c0fd")}});
//# sourceMappingURL=app.3428b8d7.js.map