"use strict";(self.webpackChunkdev_knowledge=self.webpackChunkdev_knowledge||[]).push([[725],{8795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=t(5893),o=t(1151);const s={title:"Dockerfile",sidebar_position:3},i=void 0,p={id:"docker/dockerfile",title:"Dockerfile",description:"\u7f16\u8bd1 DB-GPT//github.com/eosphoros-ai/DB-GPT/tree/v0.4.3",source:"@site/docs/docker/dockerfile.md",sourceDirName:"docker",slug:"/docker/dockerfile",permalink:"/dev-knowledge/docs/docker/dockerfile",draft:!1,unlisted:!1,editUrl:"https://github.com/xtyuns/dev-knowledge/tree/main/docs/docker/dockerfile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Dockerfile",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hello Docker",permalink:"/dev-knowledge/docs/docker/install"},next:{title:"\u5de5\u5177",permalink:"/dev-knowledge/docs/python/command"}},a={},l=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u7f16\u8bd1 DB-GPT: ",(0,r.jsx)(n.a,{href:"https://github.com/eosphoros-ai/DB-GPT/tree/v0.4.3",children:"https://github.com/eosphoros-ai/DB-GPT/tree/v0.4.3"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",children:'FROM xtyuns/debian:bookworm\r\n\r\n# \u5b89\u88c5\u4f9d\u8d56\u8f6f\u4ef6\u5305\r\nRUN apt-get install -y git python3 pip python3-venv wget sqlite3 tzdata \\\r\n    && apt-get clean\r\n\r\n# \u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55\r\nRUN mkdir -p /app\r\nWORKDIR /app\r\n\r\n# \u914d\u7f6e\u9ed8\u8ba4 python venv \u73af\u5883\r\nRUN pip config --global set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  \\\r\n    && python3 -m venv /opt/dbgptpyenv\r\nENV PATH="/opt/dbgptpyenv/bin:$PATH"\r\n\r\n# \u590d\u5236\u6587\u4ef6\r\nCOPY setup.py setup.py\r\nCOPY README.md README.md\r\n\r\n# \u5b89\u88c5\u7a0b\u5e8f\u4f9d\u8d56\r\nRUN pip install ".[openai]"\r\n\r\n# \u5b89\u88c5\u5176\u4ed6\u4f9d\u8d56\r\nRUN wget https://mirror.ghproxy.com/github.com/explosion/spacy-models/releases/download/zh_core_web_sm-3.5.0/zh_core_web_sm-3.5.0-py3-none-any.whl -O /tmp/zh_core_web_sm-3.5.0-py3-none-any.whl\r\nRUN pip install /tmp/zh_core_web_sm-3.5.0-py3-none-any.whl && pip cache purge\r\n\r\n# \u590d\u5236 python \u4e3b\u7a0b\u5e8f\r\nCOPY . /app\r\n\r\n# \u521d\u59cb\u5316\u6f14\u793a\u6570\u636e\r\nRUN mkdir -p /app/pilot/data && sqlite3 /app/pilot/data/default_sqlite.db < /app/docker/examples/sqls/case_1_student_manager_sqlite.sql \\\r\n    && sqlite3 /app/pilot/data/default_sqlite.db < /app/docker/examples/sqls/case_2_ecom_sqlite.sql \\\r\n    && sqlite3 /app/pilot/data/default_sqlite.db < /app/docker/examples/sqls/test_case_info_sqlite.sql\r\n\r\n# \u8bbe\u7f6e\u65f6\u533a\r\nRUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone\r\n\r\n# \u5c06\u5f53\u524d python \u7a0b\u5e8f\u52a0\u5165 python \u73af\u5883\u53d8\u91cf\r\nENV PYTHONPATH "/app:$PYTHONPATH"\r\n\r\n# \u58f0\u660e\u5e94\u7528\u7aef\u53e3\r\nEXPOSE 5000\r\n\r\n# \u6307\u5b9a\u5bb9\u5668\u9ed8\u8ba4\u6267\u884c\u547d\u4ee4\r\nCMD ["dbgpt", "start", "webserver"]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>p,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);