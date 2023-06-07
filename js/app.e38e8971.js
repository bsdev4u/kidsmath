(function(){"use strict";var t={3854:function(t,e,s){var i=s(8061),o=s(6252);function r(t,e,s,i,r,n){const l=(0,o.up)("UserInfo"),a=(0,o.up)("Timer"),h=(0,o.up)("Main"),c=(0,o.up)("ResultTable");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{onMb_name_change:n.mb_name_change,onMbId:n.set_mbid,onIsLogin:n.emitisLogin,onSetChatId:n.setChatId,isLogin:r.isLogin,mb_id:r.mb_id,mb_pw:r.mb_pw,userData:r.userData},null,8,["onMb_name_change","onMbId","onIsLogin","onSetChatId","isLogin","mb_id","mb_pw","userData"]),r.isStart?((0,o.wg)(),(0,o.j4)(a,{key:0,onIsTimeover:n.timeover,testTime:r.testTime},null,8,["onIsTimeover","testTime"])):(0,o.kq)("",!0),r.isLogin?((0,o.wg)(),(0,o.j4)(h,{key:1,onStartTest:n.doStart,onCheckCorrect:n.checkCorrect,onScoreStr:n.resultMsg,onSetStartDate:n.setStartDate},null,8,["onStartTest","onCheckCorrect","onScoreStr","onSetStartDate"])):(0,o.kq)("",!0),r.isResult?((0,o.wg)(),(0,o.j4)(c,{key:2,scoring:r.scoring},null,8,["scoring"])):(0,o.kq)("",!0)],64)}var n=JSON.parse('[{"id":0,"mb_id":"test","mb_pw":"test","mb_name":"테스터","lastlogin":"20221120115200","telegramIds":["66436035"]},{"id":1,"mb_id":"charlotte","mb_pw":"charlotte","mb_name":"김윤주","lastlogin":"20221120115200","telegramIds":["66436035","66824974"]},{"id":2,"mb_id":"sei","mb_pw":"sei","mb_name":"김세이","lastlogin":"20221120115200","telegramIds":["66436035","66824974"]}]'),l=s(594),a=s(6612);const h={key:0},c={class:"user-header"},m={key:1,class:"login-wrapper"},g={class:"input-group mb-3"};function d(t,e,s,r,n,l){return s.isLogin?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("h2",c,(0,a.zw)(n.user_name),1)])):!1===s.isLogin?((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",g,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>n.mb_id=t),type:"text",class:"form-control",placeholder:"User ID","aria-label":"User ID","aria-describedby":"button-addon2"},null,512),[[i.nr,n.mb_id]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.mb_pw=t),type:"password",class:"form-control",placeholder:"User Password","aria-label":"User Password","aria-describedby":"button-addon2"},null,512),[[i.nr,n.mb_pw]]),(0,o._)("button",{onClick:e[2]||(e[2]=(...t)=>l.doLogin&&l.doLogin(...t)),class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"LOGIN")])])):(0,o.kq)("",!0)}var u={name:"UserInfo",emits:["mb_name_change","mb-id","isLogin"],data(){return{mb_id:"",mb_pw:"",user_name:"",currTime:""}},methods:{doLogin(){let t=!0;for(var e=0;e<this.userData.length;e++)if(this.userData[e].mb_id===this.mb_id&&this.userData[e].mb_pw===this.mb_pw){this.$emit("mb_name_change",this.userData[e].mb_name),this.$emit("mb-id",this.userData[e].mb_id),this.$emit("set-chat-id",this.userData[e].telegramIds),this.$emit("isLogin",!0),this.user_name=this.userData[e].mb_name,this.telegramIds=this.userData[e].telegramIds,console.log("로그인 성공!!"),t=!1;break}t&&alert("아이디 또는 비밀번호가 잘 못 되었습니다.")}},props:{mb_name:String,userData:Array,isLogin:Boolean}},b=s(3744);const p=(0,b.Z)(u,[["render",d]]);var w=p;const f={key:0,class:"container text-center"},y={class:"row"},S={class:"col-3"},v={class:"col"},D={class:"col"},_={class:"col"},k=(0,o._)("div",{class:"col"},"=",-1),x={key:0,class:"col"},M={key:1,class:"col"},C={key:2,class:"col"},A={key:3,class:"col"},T={key:1,class:"header"},q={class:"header-button-left"},B={class:"header-button-center"},I={class:"header-button-right"},O={key:2,class:"container text-center",style:{width:"100vw"}},L={class:"row"},$=(0,o._)("div",{class:"col"},[(0,o._)("p",null,"연산")],-1),U={class:"col"},j=["value","selected"],X={class:"row"},R=(0,o._)("div",{class:"col"},[(0,o._)("p",null,"자리수")],-1),Q={class:"col"},z=["value","selected"],N={class:"row"},H=(0,o._)("div",{class:"col"},[(0,o._)("p",null,"문항수")],-1),P={class:"col"},V=["selected"],K={class:"row"},Y={class:"col"};function Z(t,e,s,r,n,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.isStart?((0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",y,[(0,o._)("div",S,(0,a.zw)(n.page+1)+"번 :",1),(0,o._)("div",v,(0,a.zw)(n.qA),1),(0,o._)("div",D,(0,a.zw)("구구단"===n.selSymbol?"X":n.selSymbol),1),(0,o._)("div",_,(0,a.zw)(n.qB),1),k,"÷"===n.selSymbol?((0,o.wg)(),(0,o.iD)("div",x,[(0,o.wy)((0,o._)("input",{type:"number",ref:"answerBox","onUpdate:modelValue":e[0]||(e[0]=t=>n.answer=t),onKeyup:[e[1]||(e[1]=(0,i.D2)((t=>l.drawQuestion("pre")),["left"])),e[2]||(e[2]=(0,i.D2)((t=>l.drawQuestion("next")),["right"])),e[3]||(e[3]=(0,i.D2)((t=>l.drawQuestion("next")),["enter"]))],style:{width:"80px"}},null,544),[[i.nr,n.answer,void 0,{number:!0}]])])):(0,o.kq)("",!0),"÷"===n.selSymbol?((0,o.wg)(),(0,o.iD)("div",M," ... ")):(0,o.kq)("",!0),"÷"===n.selSymbol?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.wy)((0,o._)("input",{type:"number",ref:"answerBox","onUpdate:modelValue":e[4]||(e[4]=t=>n.answer1=t),onKeyup:[e[5]||(e[5]=(0,i.D2)((t=>l.drawQuestion("pre")),["left"])),e[6]||(e[6]=(0,i.D2)((t=>l.drawQuestion("next")),["right"])),e[7]||(e[7]=(0,i.D2)((t=>l.drawQuestion("next")),["enter"]))],style:{width:"50px"},autofocus:""},null,544),[[i.nr,n.answer1,void 0,{number:!0}]])])):(0,o.kq)("",!0),"÷"!==n.selSymbol?((0,o.wg)(),(0,o.iD)("div",A,[(0,o.wy)((0,o._)("input",{type:"number",ref:"answerBox","onUpdate:modelValue":e[8]||(e[8]=t=>n.answer=t),onKeyup:[e[9]||(e[9]=(0,i.D2)((t=>l.drawQuestion("pre")),["left"])),e[10]||(e[10]=(0,i.D2)((t=>l.drawQuestion("next")),["right"])),e[11]||(e[11]=(0,i.D2)((t=>l.drawQuestion("next")),["enter"]))],style:{width:"120px"}},null,544),[[i.nr,n.answer,void 0,{number:!0}]])])):(0,o.kq)("",!0)])])):(0,o.kq)("",!0),n.isStart?((0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("div",q,[n.page>0?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-outline-primary",onClick:e[12]||(e[12]=t=>l.drawQuestion("pre"))},"이전문제")):(0,o.kq)("",!0)]),(0,o._)("div",B,[(0,o._)("button",{class:"btn btn-outline-primary",onClick:e[13]||(e[13]=(...t)=>l.showResult&&l.showResult(...t))},"결과보기")]),(0,o._)("div",I,[n.page<n.examCount-1?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-outline-primary",onClick:e[14]||(e[14]=t=>l.drawQuestion("next"))},"다음문제")):(0,o.kq)("",!0)])])):(0,o.kq)("",!0),!1===n.isStart?((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",L,[$,(0,o._)("div",U,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[15]||(e[15]=t=>n.selSymbol=t),onChange:e[16]||(e[16]=t=>l.onChange("symbol")),class:"make-select"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.symbols,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{key:t,value:t,selected:0===e},(0,a.zw)(t),9,j)))),128))],544),[[i.bM,n.selSymbol]])])]),(0,o._)("div",X,[R,(0,o._)("div",Q,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[17]||(e[17]=t=>n.selDigit=t),onChange:e[18]||(e[18]=t=>l.onChange("digit")),class:"make-select"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.digits,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{key:t,value:t,selected:0===e},(0,a.zw)(t),9,z)))),128))],544),[[i.bM,n.selDigit]])])]),(0,o._)("div",N,[H,(0,o._)("div",P,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[19]||(e[19]=t=>n.examCount=t),class:"make-select"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.examCounts,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{key:t,selected:0===e},(0,a.zw)(t),9,V)))),128))],512),[[i.bM,n.examCount,void 0,{number:!0}]])])]),(0,o._)("div",K,[(0,o._)("div",Y,[(0,o._)("button",{class:"btn btn-outline-success",onClick:e[20]||(e[20]=t=>l.doStart())},"시작")])])])):(0,o.kq)("",!0)],64)}s(7658);var F={name:"Main",emits:["startTest","checkCorrect","scoreStr","setStartDate"],data(){return{isStart:!1,symbols:["+","-","X","÷","구구단"],selSymbol:"X",digits:["1x1","2x1","2x2"],selDigit:"2x1",examCounts:Array.from({length:30},((t,e)=>e+1)).reverse(),examCount:10,answers:[],answers1:[],scoring:[],qA:0,qB:0,answer:Number,answer1:Number,testA:[],testB:[],page:0,startDate:"",endDate:""}},props:{isLogin:Boolean,isResult:Boolean,checkCorrect:Boolean,userData:Array,telegramIds:Array},methods:{onChange(t){if(console.log(t),console.log(this.selSymbol),"symbol"===t)if(this.digits=[],this.examCounts=Array.from({length:30},((t,e)=>e+1)).reverse(),"구구단"===this.selSymbol){this.digits.push("MIX");for(var e=9;e>1;e--)this.digits.push(e);this.selDigit="MIX",this.examCount=30}else"X"===this.selSymbol?(this.digits.push("1x1"),this.digits.push("2x1"),this.digits.push("2x2"),this.selDigit="2x1",this.examCount=10):(this.digits.push("한자리"),this.digits.push("두자리"),this.digits.push("세자리"),this.selDigit="두자리",this.examCount=10);console.log(this.digits)},doStart(){console.log(this.selSymbol);for(var t=0;t<this.examCount;t++)this.scoring[t]=-1,this.answers[t]=0,this.answers1[t]=0;this.isStart=!0,this.startDate=new Date,"+"===this.selSymbol?this.makePlus():"-"===this.selSymbol?this.makeMinus():"X"===this.selSymbol?this.makeMulti():"÷"===this.selSymbol?this.makeDevide():"구구단"===this.selSymbol&&this.makeMultiTable(),console.log(this.testA),console.log(this.testB),this.page=0,this.$emit("startTest",{isStart:!0,symbol:this.selSymbol})},drawQuestion(t){console.log(this.page,this.examCount,this.selSymbol,"÷"===this.selSymbol),"pre"===t&&this.page<=0||"next"===t&&this.page>=this.examCount-1||(this.answers[this.page]=this.answer,"÷"===this.selSymbol&&(this.answers1[this.page]=this.answer1),"X"===this.selSymbol||"구구단"===this.selSymbol?this.scoring[this.page]=this.qA*this.qB===this.answer?1:0:"÷"===this.selSymbol?this.scoring[this.page]=parseInt(this.qA/this.qB)===this.answer&&this.qA%this.qB===this.answer1?1:0:"+"===this.selSymbol?this.scoring[this.page]=this.qA+this.qB===this.answer?1:0:"-"===this.selSymbol&&(this.scoring[this.page]=this.qA-this.qB===this.answer?1:0),console.log(this.answers),console.log(this.scoring),"pre"===t&&this.page>0?this.page--:"next"===t&&this.page<30&&this.page++,this.qA=this.testA[this.page],this.qB=this.testB[this.page],console.log("This page :",this.page),console.log("This score :",this.scoring[this.page]),console.log(this.scoring[this.page]>=0),this.scoring[this.page]>=0?(console.log("Score True"),this.answer=this.answers[this.page],"÷"===this.selSymbol&&(this.answer1=this.answers1[this.page])):(console.log("Score False"),this.answer="","÷"===this.selSymbol&&(this.answer1="")),this.$refs["answerBox"].focus(),console.log(this.scoring.target))},makeMulti(){let t=this.selDigit.slice(0,1),e=this.selDigit.slice(2,3);console.log(t+"x"+e);let s="1"===t?3:30,i="1"===t?9:99,o="1"===e?2:20,r="1"===e?9:99;for(let n=0;n<this.examCount;n++){let t=Math.floor(Math.random()*(i-s)+s),e=Math.floor(Math.random()*(r-o)+o);if("1x1"!==this.selDigit)while(1)if(this.testA.indexOf(t)>0)t=Math.floor(Math.random()*(i-s)+s);else{if("0"!=t.toString().charAt(t.toString().length-1))break;t=Math.floor(Math.random()*(i-s)+s)}this.testA.push(t),this.testB.push(e)}this.qA=this.testA[0],this.qB=this.testB[0]},makeDevide(){let t=11,e=99;for(let s=0;s<this.examCount;s++){let s=Math.floor(Math.random()*(e-t)+t),i=Math.floor(7*Math.random()+2);while(1){if(!(this.testA.indexOf(s)>0))break;s=Math.floor(Math.random()*(e-t)+t)}this.testA.push(s),this.testB.push(i)}this.qA=this.testA[0],this.qB=this.testB[0]},makeMultiTable(){var t=1;this.examCount>16?t=Math.trunc(this.examCount/10)+1:this.examCount>8&&(t=2),console.log(t);for(let e=0;e<this.examCount;e++){let e=Math.floor(8*Math.random())+2,s=Math.floor(8*Math.random())+2;while(this.testB.filter((t=>s===t)).length>=t)s=Math.floor(8*Math.random())+2;this.testA.push(e),this.testB.push(s)}this.shuffle(this.testB),console.log("a",this.testA),console.log("b",this.testB),this.qA=this.testA[0],this.qB=this.testB[0]},makePlus(){let t="한자리"===this.selDigit?3:"두자리"===this.selDigit?30:300,e="한자리"===this.selDigit?9:"두자리"===this.selDigit?99:999;for(let s=0;s<this.examCount;s++){let s=Math.floor(Math.random()*(e-t)+t),i=Math.floor(Math.random()*(e-t)+t);if("한자리"!==this.selDigit)while(1)if(this.testA.indexOf(s)>0)s=Math.floor(Math.random()*(e-t)+t),console.log("a : ",s);else if(this.testB.indexOf(i)>0)i=Math.floor(Math.random()*(e-t)+t),console.log("a : ",i);else{if(s!==i)break;i=Math.floor(Math.random()*(e-t)+t),console.log("ab : ",i)}this.testA.push(s),this.testB.push(i)}this.qA=this.testA[0],this.qB=this.testB[0]},makeMinus(){let t="한자리"===this.selDigit?3:"두자리"===this.selDigit?30:300,e="한자리"===this.selDigit?9:"두자리"===this.selDigit?99:999,s="한자리"===this.selDigit?1:"두자리"===this.selDigit?10:100,i="한자리"===this.selDigit?9:"두자리"===this.selDigit?49:490,o="한자리"===this.selDigit?1:"두자리"===this.selDigit?10:100;for(let r=0;r<this.examCount;r++){let r=Math.floor(Math.random()*(e-t)+t),n=Math.floor(Math.random()*(i-s)+s);console.log(r,n);while(1)if(r<n)console.log(r,n),r=Math.floor(Math.random()*(e-t)+t);else{if(!(r-n<0))break;r=Math.floor(Math.random()*(e-t)+t),n=Math.floor(Math.random()*(o-s)+s),console.log(r,n)}this.testA.push(r),this.testB.push(n)}this.qA=this.testA[0],this.qB=this.testB[0]},shuffle(t){t.sort((()=>Math.random()-.5))},showResult(){this.answers[this.page]=this.answer,"÷"===this.selSymbol&&(this.answers1[this.page]=this.answer1),"구구단"===this.selSymbol||"X"===this.selSymbol?this.scoring[this.page]=this.qA*this.qB===this.answer?1:0:"÷"===this.selSymbol?this.scoring[this.page]=parseInt(this.qA/this.qB)===this.answer&&this.qA%this.qB===this.answer1?1:0:"+"===this.selSymbol?this.scoring[this.page]=this.qA+this.qB===this.answer?1:0:"-"===this.selSymbol&&(this.scoring[this.page]=this.qA-this.qB===this.answer?1:0);let t=0,e=this.scoring.length;for(let r=0;r<this.scoring.length;r++){if(this.scoring[r]<0)return void alert("문제 풀이를 완료하지 않은 문항이 있습니다.");t+=this.scoring[r],e-=this.scoring[r]}this.$emit("checkCorrect",t===this.scoring.length),this.$emit("setStartDate",this.startDate);let s="없음",i="없음";"+"===this.selSymbol?(s="더하기",i=this.selDigit):"-"===this.selSymbol?(s="빼기",i=this.selDigit):"X"===this.selSymbol?(s="곱하기",i=this.selDigit):"구구단"===this.selSymbol?(s="구구단",i=this.selDigit+"단"):"÷"===this.selSymbol&&(s="나누기",i=this.selDigit);let o=s+"("+i+") 완료 : 전체 {A}건 정답 {O}건 오답 {X}건";console.log(this.scoring),o=o.replace("{A}",this.scoring.length).replace("{O}",t).replace("{X}",e),this.$emit("scoreStr",o),this.$parent.showResult(this.scoring,!0)}}};const E=(0,b.Z)(F,[["render",Z]]);var G=E;const J={class:"container text-center",style:{overflow:"auto",width:"100%",height:"400px"}},W=(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col",style:{border:"1px solid #000"}},"문항"),(0,o._)("div",{class:"col",style:{border:"1px solid #000"}},"성적")],-1),tt={class:"col",style:{border:"1px solid #000"}},et={key:0,class:"col",style:{border:"1px solid #000",color:"blue"}},st={key:1,class:"col",style:{border:"1px solid #000",color:"red"}},it={class:"row"};function ot(t,e,s,i,r,n){return(0,o.wg)(),(0,o.iD)("div",J,[W,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.scoring,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"row",key:e},[(0,o._)("div",tt,(0,a.zw)(e+1),1),1===t?((0,o.wg)(),(0,o.iD)("div",et,"O")):((0,o.wg)(),(0,o.iD)("div",st,"X"))])))),128)),(0,o._)("div",it,[(0,o._)("button",{class:"btn btn-outline-primary",onClick:e[0]||(e[0]=(...t)=>n.callSubmit&&n.callSubmit(...t))},"제출")])])}var rt={name:"ResultTable",props:{scoring:Array},methods:{callSubmit(){this.$parent.doSubmit()}}};const nt=(0,b.Z)(rt,[["render",ot]]);var lt=nt;const at={class:"timer-main"};function ht(t,e,s,i,r,n){return(0,o.wg)(),(0,o.iD)("h2",at,(0,a.zw)(r.TimerStr),1)}var ct={name:"Timer",emits:["isTimeover"],data(){return{Timer:null,TimerStr:"",TimeCounter:5}},props:{testTime:Number},methods:{timerStart:function(){console.log(this.testTime),this.TimeCounter=this.testTime;var t=setInterval((()=>{this.TimeCounter--,this.TimerStr=this.prettyTime(),this.TimeCounter<=0&&this.timerStop(t)}),1e3);return t},timerStop:function(t){clearInterval(t),this.TimeCounter=0,alert("시간 초과로 종료 됩니다.\n문제를 처음부터 시작하세요."),this.$emit("isTimeover",!0)},prettyTime:function(){let t=this.TimeCounter/60,e=parseInt(t),s=Math.round(60*(t-e));return"남은시간 : "+e.toString().padStart(2,"0")+"분"+s.toString().padStart(2,"0")+"초"}},mounted(){null!=this.Timer&&(this.timerStop(this.Timer),this.Timer=null),this.Timer=this.timerStart()}};const mt=(0,b.Z)(ct,[["render",ht]]);var gt=mt,dt={name:"App",watch:{scoreStr(t){console.log(t)},isStart(t){console.log("isStart : "+t)},testTime(t){console.log("testTime : "+t)}},data(){return{isLogin:!1,isStart:!1,isResult:!1,isAllCorrect:!1,testTime:0,step:0,mb_id:"",mb_pw:"",mb_name:"",userData:n,telegramIds:[],qA:0,qB:0,answer:Number,answer1:Number,page:0,scoreStr:"",scoring:[]}},methods:{emitisLogin(t){this.isLogin=t},mb_name_change(t){this.mb_name=t},set_mbid(t){this.mb_id=t},setChatId(t){console.log(t),this.telegramIds=t},checkCorrect(t){this.isAllCorrect=t},setStartDate(t){this.startDate=t},resultMsg(t){this.scoreStr=t},doStart(t){console.log(t);let e=t.symbol;"test"===this.mb_id||"charlotte"===this.mb_id?this.testTime="÷"===e||"X"===e?900:420:"sei"===this.mb_id&&(this.testTime="÷"===e||"X"===e?900:600),this.isStart=t.isStart},timeover(t){t&&(Object.assign(this.$data,this.$options.data()),location.reload())},doSubmit(){if(this.endDate=new Date,!this.isAllCorrect)return void alert("오답이 존재하므로 전송할 수 없습니다.");let t=this.mb_name+" ["+this.getToday()+"] "+this.scoreStr+" - 시간 : "+this.elapsedTime(this.endDate-this.startDate);console.log(t),console.log(this.telegramIds);let e=confirm("결과를 전송하시겠습니까?");if(e){let e=!0;for(var s=0;s<this.telegramIds.length;s++){var i=this.telegramIds[s];l.Z.get(`https://api.telegram.org/bot1115153073:AAHuQ0C5Ad0oM0N6n7yTwwSk4H2lBrujnxA/sendMessage?chat_id=${i}&text=${encodeURI(t)}`).then((t=>{console.log(t)})).catch((t=>{e=!1,alert("메세지 전송 중 오류가 발생했습니다.\n"+t)}))}e&&(Object.assign(this.$data,this.$options.data()),location.reload(),this.isResult=!1,alert("메세지 전송 완료!!"))}},showResult(t,e){this.scoring=t,this.isResult=e},setSelected(t,e){"symbol"===t?this.selSymbol=e:"digit"===t?this.selDigit=e:"examcount"===t&&(this.examCount=e),this.onChange(t)},elapsedTime(t){var e=Math.floor(t/6e4),s=(t%6e4/1e3).toFixed(0);return e+"분"+(s<10?"0":"")+s+"초"},getToday(){var t=new Date,e=t.getFullYear(),s=("0"+(1+t.getMonth())).slice(-2),i=("0"+t.getDate()).slice(-2),o=("0"+t.getHours()).slice(-2),r=("0"+t.getMinutes()).slice(-2),n=("0"+t.getSeconds()).slice(-2);return e+"-"+s+"-"+i+" "+o+":"+r+":"+n}},components:{Timer:gt,ResultTable:lt,Main:G,UserInfo:w}};const ut=(0,b.Z)(dt,[["render",r]]);var bt=ut,pt=(s(8877),s(9391)),wt=s(5205);(0,wt.z)("/kidsmath/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});let ft=(0,pt.Z)(),yt=(0,i.ri)(bt);yt.config.globalProperties.emitter=ft,yt.mount("#app")}},e={};function s(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,i,o,r){if(!i){var n=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[a])}))?i.splice(a--,1):(l=!1,r<n&&(n=r));if(l){t.splice(c--,1);var h=o();void 0!==h&&(e=h)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,n=i[0],l=i[1],a=i[2],h=0;if(n.some((function(e){return 0!==t[e]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(a)var c=a(s)}for(e&&e(i);h<n.length;h++)r=n[h],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},i=self["webpackChunkkidsmath"]=self["webpackChunkkidsmath"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(3854)}));i=s.O(i)})();
//# sourceMappingURL=app.e38e8971.js.map