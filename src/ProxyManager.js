const a0_0x39ccad=a0_0x5570;function a0_0x411d(){const _0x3233e1=['colors','promises','https://files.ramanode.top/airdrop/grass/server_5.txt','type','https://files.ramanode.top/airdrop/grass/server_6.txt','filter','log','keys','https://files.ramanode.top/airdrop/grass/server_4.txt','文件路径不能为空','exports','https://files.ramanode.top/airdrop/grass/server_1.txt','16661810qUqGUC','2474661lGIMMe','input','1197464MctIgp','red','source','\x20失败:\x20','42335wQYYvQ','\x20获取代理失败:\x20','3UrOnjw','请选择代理来源:','10ySrTTh','2142556OUkixE','green','split','386600CTRyzd','get','9jwPKHK','\x20加载数据成功','list','utf-8','readFile','message','data','https://files.ramanode.top/airdrop/grass/server_2.txt','427834bRGteX','204GnFWji','error','请输入代理来源\x20URL:'];a0_0x411d=function(){return _0x3233e1;};return a0_0x411d();}(function(_0x428416,_0x5a925d){const _0x17673e=a0_0x5570,_0x4f3288=_0x428416();while(!![]){try{const _0x4aab9c=-parseInt(_0x17673e(0x160))/0x1+-parseInt(_0x17673e(0x16a))/0x2+parseInt(_0x17673e(0x15a))/0x3*(-parseInt(_0x17673e(0x15d))/0x4)+parseInt(_0x17673e(0x158))/0x5*(-parseInt(_0x17673e(0x16b))/0x6)+parseInt(_0x17673e(0x152))/0x7+parseInt(_0x17673e(0x154))/0x8*(-parseInt(_0x17673e(0x162))/0x9)+parseInt(_0x17673e(0x15c))/0xa*(parseInt(_0x17673e(0x151))/0xb);if(_0x4aab9c===_0x5a925d)break;else _0x4f3288['push'](_0x4f3288['shift']());}catch(_0x2a5aec){_0x4f3288['push'](_0x4f3288['shift']());}}}(a0_0x411d,0x47e74),require(a0_0x39ccad(0x16e)));const axios=require('axios'),fs=require('fs'),PROXY_SOURCES={'SERVER\x201':a0_0x39ccad(0x150),'SERVER\x202':a0_0x39ccad(0x169),'SERVER\x203':'https://files.ramanode.top/airdrop/grass/server_3.txt','SERVER\x204':a0_0x39ccad(0x14d),'SERVER\x205':a0_0x39ccad(0x147),'SERVER\x206':a0_0x39ccad(0x149)};function a0_0x5570(_0x4712fd,_0x1608eb){const _0x411d8c=a0_0x411d();return a0_0x5570=function(_0x55708d,_0x26af7f){_0x55708d=_0x55708d-0x147;let _0x45197c=_0x411d8c[_0x55708d];return _0x45197c;},a0_0x5570(_0x4712fd,_0x1608eb);}async function fetchProxies(_0x5a8399){const _0x4619cc=a0_0x39ccad;try{const _0x1511ea=await axios[_0x4619cc(0x161)](_0x5a8399);return console[_0x4619cc(0x14b)](('从\x20'+_0x5a8399+'\x20获取代理成功')[_0x4619cc(0x15e)]),_0x1511ea[_0x4619cc(0x168)][_0x4619cc(0x15f)]('\x0a')[_0x4619cc(0x14a)](Boolean);}catch(_0x18e4c5){return console['error'](('从\x20'+_0x5a8399+_0x4619cc(0x159)+_0x18e4c5[_0x4619cc(0x167)])[_0x4619cc(0x155)]),[];}}async function readLines(_0xa599ad){const _0xa8211d=a0_0x39ccad;try{const _0x1b4a2=await fs[_0xa8211d(0x16f)][_0xa8211d(0x166)](_0xa599ad,_0xa8211d(0x165));return console[_0xa8211d(0x14b)](('从\x20'+_0xa599ad+_0xa8211d(0x163))[_0xa8211d(0x15e)]),_0x1b4a2[_0xa8211d(0x15f)]('\x0a')['filter'](Boolean);}catch(_0x2cb266){return console[_0xa8211d(0x16c)](('读取文件\x20'+_0xa599ad+_0xa8211d(0x157)+_0x2cb266[_0xa8211d(0x167)])['red']),[];}}async function selectProxySource(_0x2c7f12){const _0x847a0e=a0_0x39ccad,_0x5a2ee=[{'type':_0x847a0e(0x164),'name':_0x847a0e(0x148),'message':_0x847a0e(0x15b),'choices':Object[_0x847a0e(0x14c)](PROXY_SOURCES)['concat'](['文件'])},{'type':'input','name':_0x847a0e(0x156),'message':_0x847a0e(0x16d),'when':_0x55380=>_0x55380[_0x847a0e(0x148)]!=='文件','validate':_0xe87dd1=>{if(!_0xe87dd1)return'URL不能为空';return!![];}},{'type':_0x847a0e(0x153),'name':_0x847a0e(0x156),'message':'请输入代理文件路径:','when':_0x199d95=>_0x199d95[_0x847a0e(0x148)]==='文件','validate':_0x2e3dda=>{const _0x39b93d=_0x847a0e;if(!_0x2e3dda)return _0x39b93d(0x14e);return!![];}}],_0x3fe673=await _0x2c7f12['prompt'](_0x5a2ee);return _0x3fe673[_0x847a0e(0x148)]!=='文件'&&(_0x3fe673[_0x847a0e(0x156)]=PROXY_SOURCES[_0x3fe673['type']]),_0x3fe673;}module[a0_0x39ccad(0x14f)]={'fetchProxies':fetchProxies,'readLines':readLines,'selectProxySource':selectProxySource};
