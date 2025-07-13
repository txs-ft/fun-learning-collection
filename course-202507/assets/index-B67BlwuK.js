(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var h;(i=>{const e="__isExpirable__";function t(){for(let s=0;s<localStorage.length;s++){const r=localStorage.key(s);if(r!==null)try{const l=localStorage.getItem(r);if(l){const d=JSON.parse(l);d?.[e]&&d.expires<=Date.now()&&localStorage.removeItem(r)}}catch{continue}}}i.cleanUp=t;function n(){let s=0;for(let r=0;r<localStorage.length;r++){const l=localStorage.key(r);if(l!==null)try{const d=localStorage.getItem(l);d&&JSON.parse(d)?.[e]&&(localStorage.removeItem(l),console.log(`移除[${r}]：${l}`),s++)}catch{continue}}console.log(`共移除${s}个对象`)}i.removeAll=n;function o(){console.log("打印localStorage…");for(let s=0;s<localStorage.length;s++){const r=localStorage.key(s);if(r===null){console.log(`[${s}]: <空>`);continue}try{const l=localStorage.getItem(r);l?JSON.parse(l)?.[e]&&console.log(`[${s}]：${r}, ${l}`):console.log(`[${s}]: ${r}`)}catch{console.log(`[${s}]: ${r}`);continue}}console.log("完成打印")}i.printAll=o;function a(s,r,l){try{const d={[e]:!0,value:r,expires:Date.now()+l};return localStorage.setItem(s,JSON.stringify(d)),!0}catch(d){return console.error("LocalStorage put failed:",d),!1}}i.put=a;function c(s){const r=localStorage.getItem(s);if(r===null)return null;try{const l=JSON.parse(r);return!l?.[e]||l.expires===void 0?null:l.expires<=Date.now()?(localStorage.removeItem(s),null):l.value}catch{return null}}i.get=c;function u(s){return c(s)?(localStorage.removeItem(s),!0):!1}i.remove=u})(h||(h={}));var p;(i=>{i.LINK="https://txs-ft.github.io/fun-learning-collection/phrase-ground",i.SUBMISSION_COOLDOWN=60*1e3,(e=>{e.TIME=1e3*3600*24*4,e.USERDATA="course202507.expirableUserData",e.USERNAME="course202507.expirableUsername",e.SUBMISSION_CODE="course202507.submissionCode"})(i.Expiry||(i.Expiry={}))})(p||(p={}));class v{_name=null;_code;get name(){return this._name}set name(e){this._name=e,h.put(p.Expiry.USERNAME,e,p.Expiry.TIME)}get code(){return this._code}constructor(e){this._code=e}load(){this._name=h.get(p.Expiry.USERNAME)}get isValid(){return this._name!==null}}class _{_root;_style;_input;get root(){return this._root}get style(){return this._style}get input(){return this._input}constructor(e,t){this._input=t,this._root=document.createElement("div"),this._root.classList.add("course-page"),this._root.style.zIndex=String(e),this._style=document.createElement("style"),this.applyStyles(this._style)}addToDOM(){document.head.appendChild(this._style),document.body.appendChild(this._root)}removeFromDOM(){document.head.removeChild(this._style),document.body.removeChild(this._root)}}class E extends _{createUI(e){e.classList.add("loading"),e.innerHTML='<p class="text en">Loading...</p><p class="text cn">载入中</p>'}applyStyles(e){}}var w;(i=>{async function e(){try{if(!navigator.clipboard||!navigator.clipboard.readText)throw new Error("浏览器不支持Clipboard API");return await navigator.clipboard.readText()}catch(t){if(console.error("无法读取剪贴板:",t),t instanceof DOMException){if(t.name==="NotAllowedError")throw new Error("剪贴板访问被拒绝，请授予权限");if(t.name==="DataError")throw new Error("剪贴板数据无法读取")}throw new Error("读取剪贴板失败")}}i.getClipboardText=e})(w||(w={}));class S{form;entries;dummyFrame=null;constructor(e,t){this.form=document.createElement("form"),this.form.action=`https://docs.google.com/forms/d/e/${e}/formResponse`,this.form.method="post",this.form.target="dummyFrame",this.form.style="display: none;",document.body.appendChild(this.form),this.entries=[];for(let n=0;n<t.length;n++){const o=document.createElement("input");o.name=t[n],this.entries.push(o),this.form.appendChild(o)}this.dummyFrame=document.createElement("iframe"),this.dummyFrame.name="dummyFrame",this.dummyFrame.id="dummyFrame",this.dummyFrame.style="display: none;",document.body.appendChild(this.dummyFrame),this.dummyFrame.addEventListener("load",n=>{console.log(`${this.constructor.name}: Google Form大概收到紀錄了。`)}),this.dummyFrame.addEventListener("error",n=>{console.log(`${this.constructor.name}: 發生錯誤，${n.message}`)})}setRecord(...e){if(!this.entries)return;const t=this.entries.length;if(e.length!==t)throw new Error(`${this.constructor.name}: 期望${t}個參數，實際收到${e.length}個！`);for(let n=0;n<t;n++)this.entries[n].value=e[n]}submit(...e){this.form&&(this.setRecord(...e),this.form.requestSubmit())}destroy(){this.form&&(document.body.removeChild(this.form),this.form=null,this.entries=null),this.dummyFrame&&(document.body.removeChild(this.dummyFrame),this.dummyFrame=null)}}class L{pool=new Array;poolLimit;constructor(e=1){this.poolLimit=e}createCache(){let e=this.pool.pop();e?e.length=0:e=[];for(const t of this.set)e.push(t);return e}returnCache(e){e.length=0,this.pool.length<this.poolLimit&&this.pool.push(e)}set=new Set;invoke(e,...t){const{set:n}=this;if(n.size===0)return;const o=this.createCache();try{for(const a of o)try{a(e,...t)}catch(c){console.error("錯誤：",c)}}finally{this.returnCache(o)}}on(e){this.set.has(e)||this.set.add(e)}off(e){return this.set.delete(e)}clear(){this.set.clear()}freePoolMemory(){this.pool.length=0}destroy(){this.clear(),this.freePoolMemory()}}var f;(i=>{class e{changed=new L;_set;_current=0;get currentData(){return this._set.data[this._current]}get currentId(){return this._current}get dataSize(){return this._set.data.length}constructor(r){this._set=r}next(){return this._current<this._set.data.length-1?(this._current++,this.changed.invoke(this,this._current,this.currentData),!0):!1}prev(){return this._current>0?(this._current--,this.changed.invoke(this,this._current,this.currentData),!0):!1}}i.SetNavigator=e;function t(s){for(let r=s.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1));[s[r],s[l]]=[s[l],s[r]]}return s}function n(s){return s.join(" ").match(/\w+|[^\w\s]/g)||[]}function o(s,r){const l=s.sentences.map(m=>m.text),d=n(l);return t(d),d.join(r)}i.createShuffledQuestion=o;function a(s,r){const l=s.map(m=>m.text),d=n(l);return t(d),d.join(r)}i.createShuffledQuestionText=a;function c(s){try{return JSON.parse(atob(s)),!0}catch{return!1}}i.validateAnswer=c;function u(s,r){return`${s.group}${s.set}#A${r}}`}i.getAnswerKey=u})(f||(f={}));var x;(i=>{let e=!0;function t(){return e?(e=!1,setTimeout(()=>{e=!0},p.SUBMISSION_COOLDOWN),!0):!1}i.useBandwidth=t;function n(){e=!0}i.forceReset=n})(x||(x={}));class C extends _{_titleView;_imageView;_textView;_controlView;_navView;_submission;_onEndExercise;_questionId=0;_userInfo;set questionId(e){this._questionId=e;const t=this.input.data[e];this._titleView.setData(this.input,e),this._navView.setData(e,this.input.data.length),this._imageView.setData(t),this._textView.setData(t.sentences);const n=f.getAnswerKey(this.input,e),o=h.get(n);o?this._controlView.setData(o):this._controlView.setData("")}get questionId(){return this._questionId}constructor(e,t,n){super(20,e),this._userInfo=t,this._onEndExercise=n;const o=document.createElement("div");o.classList.add("question-container"),this._titleView=new I(o),this._imageView=new M(o),this._textView=new T(o),this._controlView=new k(o,this.onSubmitRequested,this.onLaunchRequested,this.onClearRequested),this.root.append(o),this._navView=new D(this.root,this.onNavRequested,this.onCloseRequested);const a=this._userInfo.code.split("@"),c=a[0],u=a[1].split("|");this._submission=new S(c,u),this.questionId=0}onSubmitRequested=e=>{if(this._submission)if(x.useBandwidth())if(this._userInfo.name){this._submission.submit(this._userInfo.name,Date.now().toString(),this.input.group,this.input.set.toString(),this._questionId.toString(),e),alert("成功提交！");const t=f.getAnswerKey(this.input,this.questionId);h.put(t,e,p.Expiry.TIME),this._controlView.setData(e)}else alert("学生名称未设定。请从首页刷新重来。");else alert("提交太频繁，请稍后再试。")};onClearRequested=()=>{const e=f.getAnswerKey(this.input,this.questionId);h.get(e)&&confirm(`清空答案？
（不会清空已提交的答案，但会清除本地记录）`)&&h.remove(e),this._controlView.setData("")};onLaunchRequested=()=>{const e=this.input.data[this.questionId].url;window.open(`${p.LINK}${e}`,"_blank")?.focus()};onCloseRequested=()=>{this._onEndExercise(this)};onNavRequested=e=>{const n=this.questionId+e;n>=0&&n<this.input.data.length&&(this.questionId=n)};applyStyles(e){e.innerHTML=`

    .next {
      position: absolute;
      top: 50%; /* 关键代码 */
      /*transform: translateY(-50%); 向上偏移自身高度的50% */
    }

    .next.left {
      left: 50px;
    }

    .next.right {
      right: 50px;
    }

    .question-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .question {
      margin-left: 100px;
      margin-right: 100px;
      font-size: 24px;
      -webkit-user-select: all; /* Safari/Chrome */
      -moz-user-select: all;   /* Firefox */
      -ms-user-select: all;    /* IE/Edge */
      user-select: all;        /* 標準屬性 */
    }

    .question-control-container {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: 25px;
    }

    .question-control-container .play {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      font-size: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      z-index: 2;
    }

    .image-container {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 25px;
    }

    .question-pic {
      aspect-ratio: 1 / 1;
      position: relative;
      border-radius: 16px;
      width: 240px;
      height: 240px;
    }

    .answer-container {
      width: 100%;
      padding-left: 100px;
      padding-right: 100px;
      box-sizing: border-box; /* 防止padding增加总宽度 */
      margin-top: 20px;
    }

    .answer {
      width: 100%;
      resize: none;
      padding: 10px;
      font-size: 20px;
      border-radius: 5px;
      font-family: 
        "SFMono-Regular",   /* macOS 10.12+ */
        "Menlo",            /* macOS 10.6+ */
        "Consolas",         /* Windows */
        "Liberation Mono",  /* Linux */
        "Courier New",      /* 旧系统回退 */
        monospace;          /* 通用等宽回退 */
      -webkit-user-select: auto; /* Safari/Chrome */
      -moz-user-select: auto;   /* Firefox */
      -ms-user-select: auto;    /* IE/Edge */
      user-select: auto;        /* 標準屬性 */
    }

    .answer.valid {
      border: 2px solid #4CAF50;
    }

    .answer.valid:focus {
      border: 2px solid #4CAF50;
    }

    .answer.invalid {
      border: 2px solid rgb(198, 13, 0);
    }

    .answer.invalid:focus {
      border: 2px solid rgb(198, 13, 0);
    }

    `}}class g{_parent;get parent(){return this._parent}constructor(e){this._parent=e}}let I=class extends g{_heading;_spanCurr;_spanSize;setData(e,t){this._heading.innerHTML=`${e.name} (${e.set})`,this._spanCurr.innerHTML=`${t+1}`,this._spanSize.innerHTML=` / ${e.data.length}`}constructor(e){super(e);const t=document.createElement("div");t.classList.add("title"),this._heading=document.createElement("h1"),t.appendChild(this._heading);const n=document.createElement("div");n.classList.add("text");const o=this._spanCurr=document.createElement("span"),a=this._spanSize=document.createElement("span");n.appendChild(o),n.appendChild(a),e.appendChild(t),e.appendChild(n)}};class M extends g{_imageContainer;setData(e){this._imageContainer.innerHTML="";for(const t of e.sentences){const n=document.createElement("img");n.classList.add("question-pic"),n.src=`/img/${t.pic}`,this._imageContainer.appendChild(n)}}constructor(e){super(e);const t=this._imageContainer=document.createElement("div");t.classList.add("image-container","text"),e.appendChild(t)}}class T extends g{_text;setData(e){this._text.innerHTML=f.createShuffledQuestionText(e," / ")}constructor(e){super(e);const t=this._text=document.createElement("div");t.classList.add("question"),e.appendChild(t)}}class k extends g{_answer;_btnSend;_btnClear;_oldAnswer="";setData(e){this._oldAnswer=e,this._answer.value=e,this.validateInput()}constructor(e,t,n,o){super(e);const a=document.createElement("div");a.classList.add("answer-container");const c=this._answer=document.createElement("input");c.type="text",c.classList.add("answer"),c.placeholder="请使用句子重组工具获取答案并黏贴于此",c.oninput=this.validateInput,c.onblur=this.validateInput,c.disabled=!0,a.appendChild(c);const u=document.createElement("div");u.classList.add("question-control-container");const s=document.createElement("button");s.classList.add("action","play"),s.innerHTML="🎮",s.onclick=()=>n(),u.appendChild(s);const r=document.createElement("button");r.classList.add("action","play"),r.innerHTML="📝",r.onclick=()=>{w.getClipboardText().then(m=>{c.value=m,this.validateInput()}).catch(m=>{alert("你的浏览器不支援剪贴板。请批准剪贴板权限，或手动黏贴内容。")})},u.appendChild(r);const l=this._btnClear=document.createElement("button");l.classList.add("action","play"),l.innerHTML="🗑️",l.onclick=o,u.appendChild(l);const d=this._btnSend=document.createElement("button");d.classList.add("action","play"),d.innerHTML="▶",d.onclick=()=>t(c.value),d.disabled=!0,u.appendChild(d),e.appendChild(a),e.appendChild(u),this.validateInput()}validateInput=()=>{const e=f.validateAnswer(this._answer.value);this._answer.classList.toggle("valid",e),this._answer.classList.toggle("invalid",!e),this._btnClear.disabled=this._answer.value==="",this._btnSend.disabled=!e||this._oldAnswer===this._answer.value}}let D=class extends g{_btnNext;_btnPrev;setData(e,t){this._btnNext.disabled=e>=t-1,this._btnPrev.disabled=e<=0}constructor(e,t,n){super(e);const o=document.createElement("button");o.innerHTML="✖",o.classList.add("action","close"),o.onclick=n,e.append(o);const a=this._btnNext=document.createElement("button");a.innerHTML="→",a.classList.add("action","next","right"),a.onclick=()=>t(1),e.append(a);const c=this._btnPrev=document.createElement("button");c.innerHTML="←",c.classList.add("action","next","left"),c.onclick=()=>t(-1),e.append(c)}};class b extends _{_loadingExercise=!1;_navView;_titleView;_userInfo;constructor(e,t){super(10,e),this._userInfo=t,this._titleView=new $(this.root),this._navView=new V(this.root,e,this.onStartExercise),h.cleanUp()}checkCanStart(){return this._userInfo.isValid}onStartExercise=e=>{if(this._loadingExercise){console.log("载入中，等等会死吗？别乱按！");return}if(!this.checkCanStart()){alert("请先设定你的中文全名！");return}const t=`/data/questions/${e.group}${e.set}.json`;this._loadingExercise=!0,b.loadExercise(t).then(n=>{new C(n,this._userInfo,this.onEndExercise).addToDOM(),this.removeFromDOM()}).catch(n=>{alert("请稍后再试。"),console.error(n)}).finally(()=>{this._loadingExercise=!1})};onEndExercise=e=>{e.removeFromDOM(),this.addToDOM()};static async loadExercise(e){let t=null;try{if(t=await fetch(e),!t.ok)throw new Error(`请求失败，状态码: ${t.status}`);return await t.json()}catch(n){throw console.error("加载练习数据失败:",n),new Error(`加载失败: ${n instanceof Error?n.message:String(n)}`)}}applyStyles(e){e.innerHTML=`
    .title h1 {
      font-size: 2.5rem;
      margin-bottom: 8px;
      letter-spacing: -0.5px;
    }

    .title h2 {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 20px;
      font-weight: 400;
    }

    .title h3 {
      font-size: 1.3rem;
      margin-bottom: 5px;
      color: #3498db;
      font-weight: 500;
    }

    .title h4 {
      font-size: 1.1rem;
      margin-top: 0;
      font-weight: 400;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
    }

    .tile {
      position: relative;
      border-radius: 16px;
      width: 240px;
      height: 240px;
      padding: 25px;
      background: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      border: 1px solid #ecf0f1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .tile:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
      border-color: #3498db;
    }

    .tile .size {
      position: absolute;
      border-radius: 50%;
      top: 15px;
      right: 15px;
      width: 36px;
      height: 36px;
      line-height: 36px;
      background-color: #2c3e50;
      color: white;
      text-align: center;
      font-weight: 600;
      font-size: 0.9rem;
      z-index: 2;
    }

    .tile .title {
      display: block;
      font-size: 1.8rem;
      font-weight: 700;
      color: #2c3e50;
      margin: 0 0 15px 0;
      padding: 0;
      border: none;
      text-align: left;
    }

    .tile .description {
      display: block;
      font-size: 1rem;
      color: #7f8c8d;
      line-height: 1.5;
      flex-grow: 1;
    }

    .tile .set {
      display: block;
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 3.5rem;
      font-style: italic;
      color: #f0f4f8;
      font-weight: 800;
      z-index: 1;
      transition: all 0.3s ease;
    }

    .tile:hover .set {
      color: #e1f0fa;
      transform: scale(1.1);
    }

    .tile::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, #3498db, #2ecc71);
      border-radius: 0 0 16px 16px;
      transition: height 0.3s ease;
    }

    .tile:hover::after {
      height: 10px;
    }

    .action.key {
      width: 40px;
      height: 40px;
      position: fixed;
      left: 10px;
      top: 60px;
    }

    .key-window {
      width: 200px;
      padding: 10px;
      position: fixed;
      left: 60px;
      top: 60px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: #ffffff;
      border: 3px solid #3498db;
    }

    .key-window .btnBox {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .key-window.hidden {
      display: none;
    }

    .key-window input {
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      
      .title h1 {
        font-size: 2rem;
      }
      
      .title h2 {
        font-size: 1.5rem;
      }
      
      .content {
        gap: 15px;
      }
      
      .tile {
        width: calc(50% - 20px);
        height: 200px;
      }
    }

    @media (max-width: 480px) {
      .tile {
        width: 100%;
      }
    }
    `}}class y{_parent;get parent(){return this._parent}constructor(e){this._parent=e}}class $ extends y{constructor(e){super(e);const t=document.createElement("div");t.classList.add("title"),t.innerHTML=`
      <h1 class="en">Summer English Class</h1>
      <h2 class="cn">暑期英文班</h2>
      <h3 class="en">16-18 July 2025</h3>
      <h4 class="cn">2025年7月16-18日</h4>
    `,e.appendChild(t)}}class V extends y{constructor(e,t,n){super(e);const o=document.createElement("div");o.classList.add("content");for(const a of t){const c=document.createElement("div");c.classList.add("tile");let u=a.description;u||(u='<p class="en">Too lazy to add anything...</p><p class="cn">老师太懒没加东西…</p>'),c.innerHTML=`
        <div class="size">${a.size}</div>
        <div class="title">${a.name}</div>
        <div class="description">${u}</div>
        <div class="set">${a.set}</div>
      `;const s=document.createElement("button");s.classList.add("action"),s.classList.add("go"),s.innerHTML="📝",s.onclick=()=>n(a),c.appendChild(s),o.appendChild(c)}e.appendChild(o)}}function O(){h.cleanUp(),N();const i=new E(10);i.addToDOM(),q(i)}document.addEventListener("DOMContentLoaded",O);function q(i){const e=A();if(!e){alert("链接无效！请重新载入！");return}fetch("/data/index.json").then(t=>{t.ok?t.json().then(n=>{Array.isArray(n)&&(i.removeFromDOM(),new b(n,e).addToDOM())}):console.log("Wrong path")}).catch(t=>{console.error(t)})}function A(){const i=new URLSearchParams(window.location.search);if(!i.has("code"))return null;const e=new v(i.get("code"));return e.load(),e.isValid||(e.name=z("请输入你的中文全名：")),e}function z(i){let e;do e=prompt(i);while(!e);return e}function N(){const i=document.createElement("button");i.classList.add("action","console"),i.innerHTML="💻",i.onclick=()=>{const e=prompt(`Command: 
(1) clear
(2) resetcd
(3) printexp`);if(e)switch(e.toLowerCase()){case"1":confirm("This will erase all expirable data!")&&h.removeAll();break;case"2":x.forceReset();break;case"3":h.printAll();break}},document.body.appendChild(i)}
