webpackJsonp([1,0],[function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var r=o(32),n=t(r),s=o(31),l=t(s),i=o(24),u=t(i),p=o(30),f=t(p),d=o(26),c=t(d);n["default"].use(l["default"]);var v=new l["default"];v.map({"*":{name:"workweek",component:f["default"]},"/":{name:"workweek",component:f["default"]},"/faq":{name:"faq",component:c["default"]}}),v.start(u["default"],"app")},function(e,a,o){var t,r;o(14),t=o(9),r=o(22),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a){"use strict";function o(e){var a=e.slice().map(function(e){return e=parseFloat(e),isNaN(e)&&(e=0),e=Math.min(24,e),e=Math.max(0,e)});return a}function t(e,a,t){var r=[],n=0,i=0,p=0,f=0,d=19,c=0,v=!1,h=void 0;e=o(e),"laborDisagree"===t&&(e[6]=0),e[6]>0&&"disaster"===t&&(c=1),e[6]>0&&"laborAgree"===t&&(v=!0,h='<a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=40">違法</a>：非天災、事變或突發事件禁止於 <a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=36">例假日（週日）</a> 工作， <a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=79">違者處 2 萬以上 30 萬以下罰鍰</a> 。'),e.forEach(function(e,o){var l=Array.apply(null,Array(12)).map(function(a,r){var l=u.OFF;return e>r&&n++,e<=r?l=u.OFF:6===o?l="disaster"===t?u.DAYOFF_WORK:u.DAYOFF_ILLEGAL_WORK:n-i>40&&r-s>=2?(l=u.OVER_TWO_HOURS_WORK,i++):n-i>40&&r-s<2?(l=u.OVERTIME_WORK,i++):n-i>42?(l=u.OVER_TWO_HOURS_WORK,i++):n-i>40?(l=u.OVERTIME_WORK,i++):r<s?l=u.REGULAR_WORK:r-s>=2?(l=u.OVER_TWO_HOURS_WORK,i++):r-s<2?(l=u.OVERTIME_WORK,i++):l=u.OFF,l});if(r.push(l),o<5){var d=e-8;d>0&&d<=2?f+=4*a/3*d:d>2&&(f+=4*a/3*2+5*a/3*(d-2))}o<5||6===o&&"disaster"!==t?p+=e-8>0?e-8:0:5===o&&(p+=e)});var m=r[0].map(function(e,a){return r.map(function(e){return e[a]})});if(e[5]>0){var y=e.slice(0,5).reduce(function(e,a){return parseFloat(e)+parseFloat(a)}),O=e[5];if(y<=40){var w=40-y;O-=w}O<0||(O<=2?f+=O*a*1/3:O<=8?f+=2*a*1/3+(O-2)*a*2/3:O>8&&(f+=2*a*1/3+6*a*2/3+(O-8)*a*5/3))}e[6]>0&&e[6]<=8?f+=8*a:e[6]>8&&("disaster"===t?f+=(e[6]-8)*a*2+8*a:e[6]<=10?f+=(e[6]-8)*a*4/3+8*a:e[6]>10&&(f+=(e[6]-10)*a*5/3+2*a*4/3+8*a));var _=7;return e.slice(0,6).forEach(function(e){e>0&&_--}),{holiday:d,workingMatrix:r,transposed:m,overtimePay:parseFloat(f),overtimeHoursTotal:p,totalWorkdays:365-d-_*l,extraDayoff:c,illegal:v,illegalReason:h}}function r(e,a,t){var r=[],n=0,i=0,p=0,f=0,d=12,c=0,v=!1,h=void 0;e=o(e),"laborDisagree"===t&&(e[6]=0),e[6]>0&&"disaster"===t&&(c=1),e[6]>0&&"laborAgree"===t&&(v=!0,h='<a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=40">違法</a>：非天災、事變或突發事件禁止於 <a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=36">例假日（週日）</a> 工作， <a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=79">違者處 2 萬以上 30 萬以下罰鍰</a> 。'),e.forEach(function(e,o){var l=Array.apply(null,Array(12)).map(function(a,r){var l=u.OFF;return e>r&&n++,e<=r?l=u.OFF:6===o?l="disaster"===t?u.DAYOFF_WORK:u.DAYOFF_ILLEGAL_WORK:n-i>40&&r-s>=2?(l=u.OVER_TWO_HOURS_WORK,i++):n-i>40&&r-s<2?(l=u.OVERTIME_WORK,i++):n-i>42?(l=u.OVER_TWO_HOURS_WORK,i++):n-i>40?(l=u.OVERTIME_WORK,i++):r<s?l=u.REGULAR_WORK:r-s>=2?(l=u.OVER_TWO_HOURS_WORK,i++):r-s<2?(l=u.OVERTIME_WORK,i++):l=u.OFF,l});if(r.push(l),o<5){var d=e-8;d>0&&d<=2?f+=4*a/3*d:d>2&&(f+=4*a/3*2+5*a/3*(d-2))}o<5||6===o&&"disaster"!==t?p+=e-8>0?e-8:0:5===o&&(p+=e>0&&e<=4?4:e>0&&e<=8?8:e>0&&e<=12?12:e)});var m=r[0].map(function(e,a){return r.map(function(e){return e[a]})});e[5]>0&&(f+=e[5]<=4?2*a*4/3+2*a*5/3:e[5]<=8?2*a*4/3+6*a*5/3:2*a*4/3+10*a*5/3),e[6]>0&&e[6]<=8?f+=8*a:e[6]>8&&("disaster"===t?f+=(e[6]-8)*a*2+8*a:e[6]<=10?f+=(e[6]-8)*a*4/3+8*a:e[6]>10&&(f+=(e[6]-10)*a*5/3+2*a*4/3+8*a));var y=7;return e.slice(0,6).forEach(function(e){e>0&&y--}),{holiday:d,workingMatrix:r,transposed:m,overtimePay:parseFloat(f),overtimeHoursTotal:p,totalWorkdays:365-d-y*l,extraDayoff:c,illegal:v,illegalReason:h}}function n(e,a,t){var r=[],n=0,i=0,p=0,f=0,d=19,c=0,v=!1,h=void 0;e=o(e),"laborDisagree"===t&&(e[5]=0,e[6]=0),(e[6]>0||e[5]>0)&&"disaster"===t&&(c=(e[6]>0?1:0)+(e[5]>0?1:0)),(e[6]>0||e[5]>0)&&"laborAgree"===t&&(v=!0,h='<a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=40">違法</a>：非天災、事變或突發事件禁止於 <a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=36">例假日（週日與週六）</a> 工作， <a target="_blank" href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030001&FLNO=79">違者處 2 萬以上 30 萬以下罰鍰</a> 。'),e.forEach(function(e,o){var l=Array.apply(null,Array(12)).map(function(a,r){var l=u.OFF;return e>r&&n++,e<=r?l=u.OFF:5===o||6===o?l="disaster"===t?u.DAYOFF_WORK:u.DAYOFF_ILLEGAL_WORK:n-i>40&&r-s>=2?(l=u.OVER_TWO_HOURS_WORK,i++):n-i>40&&r-s<2?(l=u.OVERTIME_WORK,i++):n-i>42?(l=u.OVER_TWO_HOURS_WORK,i++):n-i>40?(l=u.OVERTIME_WORK,i++):r<s?l=u.REGULAR_WORK:r-s>=2?(l=u.OVER_TWO_HOURS_WORK,i++):r-s<2?(l=u.OVERTIME_WORK,i++):l=u.OFF,l});if(r.push(l),o<5){var d=e-8;d>0&&d<=2?f+=4*a/3*d:d>2&&(f+=4*a/3*2+5*a/3*(d-2))}(o<5||(6===o||5===o)&&"disaster"!==t)&&(p+=e-8>0?e-8:0)});var m=r[0].map(function(e,a){return r.map(function(e){return e[a]})});[5,6].forEach(function(o){e[o]>0&&e[o]<=8?f+=8*a:e[o]>8&&("disaster"===t?f+=(e[o]-8)*a*2+8*a:e[o]<=10?f+=(e[o]-8)*a*4/3+8*a:e[o]>10&&(f+=(e[o]-10)*a*5/3+2*a*4/3+8*a))});var y=7;return e.slice(0,5).forEach(function(e){e>0&&y--}),{holiday:d,workingMatrix:r,transposed:m,overtimePay:parseFloat(f),overtimeHoursTotal:p,totalWorkdays:365-d-y*l,extraDayoff:c,illegal:v,illegalReason:h}}Object.defineProperty(a,"__esModule",{value:!0});var s=8,l=52,i=["一","二","三","四","五","六","日"],u={OFF:0,REGULAR_WORK:1,OVERTIME_WORK:2,OVER_TWO_HOURS_WORK:3,DAYOFF_WORK:4,DAYOFF_ILLEGAL_WORK:5};a.REGULAR_HOURS_PER_DAY=s,a.DAY_NAMES=i,a.STATE=u,a.current=t,a.oneRestOneOff=r,a.twoOff=n},function(e,a){"use strict"},function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var r=o(1),n=t(r);a["default"]={components:{WeekTable:n["default"]},props:["solution","regularPay","overtimePayWinner","expand"]}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={data:function(){return{}},computed:{},ready:function(){},attached:function(){},methods:{},components:{}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:["reason"],watch:{reason:function(e){this.$dispatch("reason-changed",e)}}}},function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var r=o(1),n=t(r);a["default"]={components:{WeekTable:n["default"]},props:["solution","regularPay","overtimePayWinner","expand"]}},function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var r=o(1),n=t(r);a["default"]={components:{WeekTable:n["default"]},props:["solution","regularPay","overtimePayWinner","expand"]}},function(e,a,o){"use strict";function t(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a["default"]=e,a}Object.defineProperty(a,"__esModule",{value:!0});var r=o(2),n=t(r);a["default"]={props:["timetable"],data:function(){return{DAY_NAMES:n.DAY_NAMES,STATE:n.STATE}}}},function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a["default"]=e,a}Object.defineProperty(a,"__esModule",{value:!0});var n=o(2),s=r(n),l=o(27),i=t(l),u=o(25),p=t(u),f=o(28),d=t(f),c=o(29),v=t(c);a["default"]={components:{OffdayCondition:i["default"],CurrentSolution:p["default"],OneRestOneOffSolution:d["default"],TwoOffSolution:v["default"]},methods:{toggleExpanding:function(e){this.expandDetail=!this.expandDetail},hash:function(){var e={reason:this.reason,workhours:this.workhours.join(","),monthlyPay:this.monthlyPay};this.$router.go({name:"workweek",query:e})},reasonChanged:function(e){this.reason=e}},data:function(){var e=this.$route.query,a=e.workhours?e.workhours.split(",").map(function(e){return parseInt(e)}):[8,8,8,8,8,4,0],o=36e3,t="disaster";return e.regularDayOffWorkReason&&(e.reason=e.regularDayOffWorkReason),!e.reason||"laborAgree"!==e.reason&&"laborDisagree"!==e.reason&&"disaster"!==e.reason||(t=e.reason),e.monthlyPay&&(o=parseFloat(e.monthlyPay)),{reason:t,daynames:s.DAY_NAMES,workhours:a,assumingWorkHours:240,monthlyPay:o,expandDetail:!1,regularHoursPerDay:s.REGULAR_HOURS_PER_DAY}},computed:{hourlyPay:function(){return parseFloat(this.monthlyPay/this.assumingWorkHours)},regularPay:function(){return 8*this.hourlyPay*7},currentSolution:function(){return s.current(this.workhours,this.hourlyPay,this.reason)},oneRestOneOffSolution:function(){return s.oneRestOneOff(this.workhours,this.hourlyPay,this.reason)},twoOffSolution:function(){return s.twoOff(this.workhours,this.hourlyPay,this.reason)},mostOvertimePay:function(){var e=[this.currentSolution.overtimePay,this.oneRestOneOffSolution.overtimePay,this.twoOffSolution.overtimePay],a=Math.max.apply(Math,e);return{current:this.currentSolution.overtimePay===a,oneRestOneOff:this.oneRestOneOffSolution.overtimePay===a,twoOff:this.twoOffSolution.overtimePay===a}}},watch:{reason:function(e){this.hash()},workhours:function(e){this.hash()},monthlyPay:function(e){this.hash()}}}},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){e.exports=' <div id=app> <nav class="navbar navbar-default"> <div class=container-fluid> <div class=navbar-header> <button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#bs-example-navbar-collapse-1 aria-expanded=false> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class=navbar-brand v-link="{ path: \'/\'}">g0v 勞基法專題</a> </div> <div class="collapse navbar-collapse" id=bs-example-navbar-collapse-1> <ul class="nav navbar-nav"> <li v-bind:class="{\'active\': $route.name === \'workweek\'}"><a v-link="{ path: \'/\'}">勞基法計算機 <span class=sr-only>(current)</span></a></li> <li v-bind:class="{\'active\': $route.name === \'faq\'}"><a v-link="{ path: \'/faq\' }">常見疑問</a></li> </ul> </div> </div> </nav> <div class=jumbotron> <div class=container> <h1><span class="glyphicon glyphicon-wrench"></span>勞基法計算機</h1> <p> 沒人搞得清楚這次修法正確的計算方式，不如來個計算機自己按一按吧。 </p> </div> </div> <router-view></router-view> <div class=footer> 本專案源碼於 <a href=https://github.com/g0v/workweek>g0v/workweek</a> 以 MIT 授權釋出， 有任何問題請提交至 <a href=https://github.com/g0v/workweek/issues>issue tracker</a> </div> </div> '},function(e,a){e.exports=' <h3>勞基法現行版本</h3> <ul> <li>週薪：{{regularPay}} 元</li> <li>加班時數：{{solution.overtimeHoursTotal}}</li> <li v-bind:class="{ \'pro\': overtimePayWinner }"> 額外工資：{{solution.overtimePay.toFixed(2)}} 元 </li> <li>總計週薪：{{regularPay + solution.overtimePay}} 元</li> <li class=pro>國定假日天數：19 天</li> <li class=info v-if="solution.extraDayoff > 0"> 額外補休時數：{{solution.extraDayoff}} 日 </li> <li class=warning v-show=solution.illegal> {{{solution.illegalReason}}} </li> </ul> <week-table :timetable=solution.transposed></week-table> <div v-show=expand class="alert alert-info"> 相關規定： <ul> <li>台(87)勞動二字第39675號函：例假日（通常是週日）上班低於八個小時，薪水均為 {{hourlyPay}} x 8</li> </ul> </div> '},function(e,a){e.exports=' <div class="container faq"> <h2>一例一休中所刪除的七天國定假日週休二日的勞工早就沒有放了，刪除七天假的爭議點是？</h2> <div class=answer> <p> 過去實施雙週 84 小時工時，若勞工每個平常日（週一到週五）都工作八小時，雙週工時為 80 小時，所以每週還少上兩個小時的正常工時。勞動部主動解釋因為勞工尚未做滿法定工時，一年下來欠 104 個小時，所以可以合法挪移，讓七天假日免放。 </p> <p> 但是現已實施單週 40 小時工時，若沒有調整勞基法的狀況，依照現行法令週休二日的勞工也享有這七天假期，並非「早就沒有放這七天假期」。 </p> <p> 參考資料： <ul> <li><a href="https://youtu.be/4gd2m_73NHE?t=23m13s">有話好說：勞工絕食 召委落跑！一例一休闖關失敗！ 23 分 13 秒處</a></li> <li><a href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030002&FLNO=23">勞基法施行細則 23 條</a></li> </ul> </p> </div> <h2>新增更多常見問答或修改現有問答</h2> <div class=answer> 若想新增或修改常見問答，請登入 <a href=https://github.com/g0v/workweek/issues>github 並且開新 issue</a>。 </div> </div> '},function(e,a){e.exports=" <div class=dayoff-options> 例假日工作條件設定： <div class=radio> <label> <input type=radio value=disaster v-model=reason> 發生天災、事變或突發事件，雇主停止休假要求勞工出勤 </label> </div> <div class=radio> <label> <input type=radio value=laborAgree v-model=reason> <span class=strong>沒有</span>發生上述事件，但雇主要求上班，且勞工同意於例假日出勤 </label> </div> <div class=radio> <label> <input type=radio value=laborDisagree v-model=reason> <span class=strong>沒有</span>發生上述事件，但雇主要求上班，而勞工拒絕於例假日出勤 </label> </div> </div> "},function(e,a){e.exports=' <h3>勞動部草案一例一休版本</h3> <ul> <li>週薪：{{regularPay}} 元</li> <li>加班時數：{{solution.overtimeHoursTotal}}</li> <li v-bind:class="{ \'pro\': overtimePayWinner }"> 額外工資：{{solution.overtimePay.toFixed(2)}} 元 </li> <li>總計週薪：{{regularPay + solution.overtimePay}} 元</li> <li class=con>國定假日天數：12 天</li> <li v-if="solution.extraDayoff > 0" class=info>額外補休時數：{{solution.extraDayoff}} 日</li> <li class=warning v-show=solution.illegal> {{{solution.illegalReason}}} </li> </ul> <week-table :timetable=solution.transposed></week-table> <div v-show=expand class="alert alert-info"> 相關規則： <ul> <li> 根據 <a href=http://www.cna.com.tw/news/firstnews/201606290106-1.aspx target=_blank>報導</a>，休息日工資計算的部分，擬從原本的加倍發給，改為在2小時以內者，按平日工資額另給予每小時1又1/3，再繼續工作者另給予每小時1又2/3。 </li> <li>工作時間計算方式為工作4小時以內，以4小時計算，超過4小時至8小時，以8小時計算，超過8小時至12小時以內者，以12小時計。</li> </ul> </div> '},function(e,a){e.exports=' <h3>一週兩例假日版本</h3> <ul> <li>週薪：{{regularPay}} 元</li> <li>加班時數：{{solution.overtimeHoursTotal}}</li> <li v-bind:class="{ \'pro\': overtimePayWinner }"> 額外工資：{{solution.overtimePay.toFixed(2)}} 元 </li> <li>總計週薪：{{regularPay + solution.overtimePay}} 元</li> <li class=pro>國定假日天數：19 天</li> <li v-if="solution.extraDayoff > 0" class=info> 額外補休時數：{{ solution.extraDayoff }} 日 </li> <li class=warning v-show=solution.illegal> {{{solution.illegalReason}}} </li> </ul> <week-table :timetable=solution.transposed></week-table> <div v-show=expand class="alert alert-info"> 相關規則： <ul> <li>國民黨版在立法說明提到比照公務員，兩例有可能實質變兩休，但目前草案並沒有這個效果，還要觀察是否有後續動作</li> </ul> </div> '},function(e,a){e.exports=' <table class=week> <th v-for="name in DAY_NAMES"> {{ name }} </th><th> <tr v-for="hour in timetable"> <td v-for="day in hour" track-by=$index> <span v-if="day !== STATE.OFF" class=emoji v-bind:class="{\n        \'regular\': day === STATE.REGULAR_WORK,\n        \'overtime\': day === STATE.OVERTIME_WORK,\n        \'overtime-two-hours\': day === STATE.OVER_TWO_HOURS_WORK,\n        \'work-on-dayoff\': day === STATE.DAYOFF_WORK || day === STATE.DAYOFF_ILLEGAL_WORK,\n        \'off\': day === STATE.OFF\n      }"></span> <span class=emoji v-if="day === STATE.OFF">--</span> </td> </tr> </th></table> '},function(e,a){e.exports=' <div class=container> <div class=handler> <a v-show=!expandDetail v-on:click=toggleExpanding>[+] 展開詳細說明</a> <a v-show=expandDetail v-on:click=toggleExpanding>[-] 收起詳細說明</a> </div> <div v-show=expandDetail class="alert alert-info"> <span class="glyphicon glyphicon-pencil" aria-hidden=true></span> <span> 前置條件： <ul> <li><a target=_blank href="http://laws.mol.gov.tw/Chi/FLAW/FLAWDOC03.asp?keyword=&lc1=FL014930%2C+20150701%2C+24&sdate=&edate=&datatype=etype&recordNo=7">勞動 2 字第 0960130677 號 函</a>：原約定月薪給付總額相當於 240 小時者（即「平日每小時工資額」係以月薪總額除以 30 再除以 8 核計者）</li> <li>現行勞基法與一例一休的例假日假設為週日，兩例的例假日為週六與週日</li> <li>現行勞基法的週六假設為約定不用上班的日子</li> <li>一例一休的休息日假設為星期六</li> <li>基於以上假設，在計算輪班制度時（例如四班二輪）可能會與實際狀況有誤差</li> <li>下面的「額外工資」欄位包含加班費與例假日上班的工資加倍發給</li> <li>原有七天假期由於以前的雙週八十四小時工時，所以週休二日的勞工沒有休假，但應映現行法令改為單週工時四十小時，週休二日的勞工也應該要放這七天，詳情請見 <a target=_blank href="https://youtu.be/4gd2m_73NHE?t=23m13s">有話好說節目的討論</a> 與 <a href="http://law.moj.gov.tw/LawClass/LawSingle.aspx?Pcode=N0030002&FLNO=23" target=_blank>勞基法施行細則 23 條</a></li> </ul> </span> </div> <h2>條件設定</h2> <p>假設勞工採月薪制，其月薪 <input class=monthly-pay number type=number v-model=monthlyPay> 元，每月總工時為 {{assumingWorkHours}} 計算，平均時薪為 {{hourlyPay.toFixed(2)}} 元。</p> <offday-condition :reason=reason @reason-changed=reasonChanged> </offday-condition> <div class=input> <label>週一 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[0]></label> <label>週二 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[1]></label> <label>週三 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[2]></label> <label>週四 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[3]></label> <label>週五 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[4]></label> <label>週六 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[5]></label> <label>週日 <input debounce=100 number type=number min=0 max=24 class=workhours v-model=workhours[6]></label> </div> <div class=row> <div class=col-md-4> <current-solution :solution=currentSolution :regular-pay=regularPay :overtime-pay-winner=mostOvertimePay.current :expand=expandDetail> </current-solution> </div> <div class=col-md-4> <one-rest-one-off-solution :solution=oneRestOneOffSolution :regular-pay=regularPay :overtime-pay-winner=mostOvertimePay.oneRestOneOff :expand=expandDetail> </one-rest-one-off-solution> </div> <div class=col-md-4> <two-off-solution :solution=twoOffSolution :regular-pay=regularPay :overtime-pay-winner=mostOvertimePay.twoOff :expand=expandDetail> </two-off-solution> </div> </div> </div> '},function(e,a,o){var t,r;o(11),t=o(3),r=o(16),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a,o){var t,r;t=o(4),r=o(17),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a,o){var t,r;o(12),t=o(5),r=o(18),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a,o){var t,r;o(13),t=o(6),r=o(19),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a,o){var t,r;t=o(7),r=o(20),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a,o){var t,r;t=o(8),r=o(21),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,a,o){var t,r;o(15),t=o(10),r=o(23),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}]);
//# sourceMappingURL=app.48edfd18e52f88a2e659.js.map