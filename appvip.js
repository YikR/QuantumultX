/*************************************

项目名称：彩云天气SVIP keepvip 波点 音乐vip Notability解锁订阅
使用声明：仅供学习与交流，请勿转载与贩卖！️

**************************************

[rewrite_local]

^https:\/\/biz\.(caiyunapp|cyapi)\.(com|cn) url script-response-body https://raw.githubusercontent.com/YikR/QuantumultX/master/caiyun.js
^https:\/\/ad\.caiyunapp\.com\/ url reject



^https:\/\/api\.gotokeep\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/keep.js



https:\/\/bd-api\.kuwo\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bodianyinyue.js



^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NotabilityProCrack.js


[mitm]

hostname = *.cyapi.cn, *.caiyunapp.com, api.gotokeep.com, bd-api.kuwo.cn, notability.com

*************************************/


var YYX = JSON.parse($response.body);
const user = '/user';
const yza = '/visitors';

if ($request.url.indexOf(user) != -1){
YYX.result.device_id = "78B61F3B-706F-44E8-9E4D-F68BDA1BA896";
YYX.result._id = "6358cb93e7a295001482d9aa";
YYX.result.svip_given = 365;
YYX.result.ranking_above = 91;
YYX.result.is_visitor = false;
YYX.result.is_phone_verified = true;
YYX.result.hasBeenInvited = true;
YYX.result.is_xy_vip = true;
YYX.result.vip_expired_at = 4092599349;
YYX.result.is_vip = true;
YYX.result.xy_svip_expire = 4092599349;
YYX.result.third_party_ids = [
     "63592fa7e7a295001888256b",
      "639ac02db1839300133031c0"
    ];
YYX.result.wt.vip = {
        "is_auto_renewal" : false,
        "enabled" : true,
        "svip_auto_renewal_type" : "",
        "expired_at" : 4092599349,
        "auto_renewal_type" : "",
        "svip_expired_at" : 4092599349
      };
YYX.result.wt.svip_given = 365;
YYX.result.wt.ranking_above = 91;
YYX.result.name = "YYX";
YYX.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLia6zPUuGQKVOJk2gnjpjHxSIuH7XaOJF2gEk9ic35ibib4QzUcbvNu6EpdHDc1Vciat1xg63ibK6EptWw/132";
YYX.result.phone_num = "13145200000";
YYX.result.vip_take_effect = 1;
YYX.result.is_auto_renewal = false;
YYX.result.is_primary = true;
YYX.result.xy_vip_expire = 0;
YYX.result.platform_id = "o3rJ_t00r0mxqS6GCVWMaVtEFLUk";
YYX.result.svip_expired_at = 4092599349;
YYX.result.svip_take_effect = 1;
YYX.result.vip_type = "s";
YYX.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
YYX.result.bound_status.qq = {
        "id" : "63592fa7e7a295001888256b",
        "username" : "YYX",
        "is_bound" : true
      };
YYX.result.bound_status.weixin = {
        "id" : "639ac02db1839300133031c0",
        "username" : "YYX",
        "is_bound" : true
      };
YYX.result.bound_statuscaiyun = {
        "id" : "6358cb93e7a295001482d9aa",
        "username" : "",
        "is_bound" : true
      };
}

if ($request.url.indexOf(yza) != -1){
YYX.result.device_id = "78B61F3B-706F-44E8-9E4D-F68BDA1BA896";
YYX.result._id = "6358cb93e7a295001482d9aa";
YYX.result.svip_given = 365;
YYX.result.ranking_above = 91;
YYX.result.is_visitor = false;
YYX.result.is_phone_verified = true;
YYX.result.hasBeenInvited = true;
YYX.result.is_xy_vip = true;
YYX.result.vip_expired_at = 4092599349;
YYX.result.is_vip = true;
YYX.result.xy_svip_expire = 4092599349;
YYX.result.third_party_ids = [
     "63592fa7e7a295001888256b",
      "639ac02db1839300133031c0"
    ];
YYX.result.wt.vip = {
        "is_auto_renewal" : false,
        "enabled" : true,
        "svip_auto_renewal_type" : "",
        "expired_at" : 4092599349,
        "auto_renewal_type" : "",
        "svip_expired_at" : 4092599349
      };
YYX.result.wt.svip_given = 365;
YYX.result.wt.ranking_above = 91;
YYX.result.name = "YYX";
YYX.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLia6zPUuGQKVOJk2gnjpjHxSIuH7XaOJF2gEk9ic35ibib4QzUcbvNu6EpdHDc1Vciat1xg63ibK6EptWw/132";
YYX.result.phone_num = "13145200000";
YYX.result.vip_take_effect = 1;
YYX.result.is_auto_renewal = false;
YYX.result.is_primary = true;
YYX.result.xy_vip_expire = 0;
YYX.result.platform_id = "o3rJ_t00r0mxqS6GCVWMaVtEFLUk";
YYX.result.svip_expired_at = 4092599349;
YYX.result.svip_take_effect = 1;
YYX.result.vip_type = "s";
YYX.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
YYX.result.bound_status.qq = {
        "id" : "63592fa7e7a295001888256b",
        "username" : "YYX",
        "is_bound" : true
      };
YYX.result.bound_status.weixin = {
        "id" : "639ac02db1839300133031c0",
        "username" : "YYX",
        "is_bound" : true
      };
YYX.result.bound_statuscaiyun = {
        "id" : "6358cb93e7a295001482d9aa",
        "username" : "",
        "is_bound" : true
      };
}

$done({body : JSON.stringify(YYX)});



var _0x3bb7=['Gm17w7LDqwfCo8K6YsOYwonDqTc7bhk=','LUnDg8KuTMOCJw==','w4LCocOqwrJqHi3Dtl0BwqXDuVg=','fMKqREg=','ZMKkYBZyahA=','w6PDj3Ulwp95wow=','PMKuwrjDtj3CkcKbZ8KqRGLDsXtW','wrPDjmo+wpBWwobDlEsqwqvCuCYtacKQw5nDjg==','NcKQIcKPwoNpcTXCsULCtcOm5byl5Lmg5puj6KWR6ZWYUg==','QWIxQlXClmM=','wp3Cr8K4wqsPwrwJW8KwL8OFw6glRsKbaQLCgA==','Rxp1RcK3HDzDsG5iKMOGw7Zaw6DDgA==','XMKUN3w/w5ZlV1LCgsObZ8OGw4U=','JcKsw7LCslt0wpE=','wqLChAoU','wqwIaMOrZMKuw5A=','w7nDqwzDocOBw7dm','M8K/Z8Kjw4nCsWoLDGzCkMKsDMKJ5beW5rOb5LuKwr0=','wrLCjh4BwoHDvBw=','ZQvDssKFMsKCVg=='];(function(_0x1d3294,_0x3bb7f9){var _0x224c61=function(_0x81749a){while(--_0x81749a){_0x1d3294['push'](_0x1d3294['shift']());}};_0x224c61(++_0x3bb7f9);}(_0x3bb7,0xde));var _0x224c=function(_0x1d3294,_0x3bb7f9){_0x1d3294=_0x1d3294-0x0;var _0x224c61=_0x3bb7[_0x1d3294];if(_0x224c['JEvqhr']===undefined){(function(){var _0x4b1eb;try{var _0x5a5081=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4b1eb=_0x5a5081();}catch(_0x2ea530){_0x4b1eb=window;}var _0x3f31e8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4b1eb['atob']||(_0x4b1eb['atob']=function(_0x568a1d){var _0x2a292e=String(_0x568a1d)['replace'](/=+$/,'');var _0xf29f4b='';for(var _0x103039=0x0,_0x22dde6,_0x4b5852,_0x5f4706=0x0;_0x4b5852=_0x2a292e['charAt'](_0x5f4706++);~_0x4b5852&&(_0x22dde6=_0x103039%0x4?_0x22dde6*0x40+_0x4b5852:_0x4b5852,_0x103039++%0x4)?_0xf29f4b+=String['fromCharCode'](0xff&_0x22dde6>>(-0x2*_0x103039&0x6)):0x0){_0x4b5852=_0x3f31e8['indexOf'](_0x4b5852);}return _0xf29f4b;});}());var _0x20a7f1=function(_0x415e80,_0x15b263){var _0x49c5bf=[],_0x1dc1d6=0x0,_0x385c72,_0x39abab='',_0x448bd7='';_0x415e80=atob(_0x415e80);for(var _0x4075bf=0x0,_0x259bcb=_0x415e80['length'];_0x4075bf<_0x259bcb;_0x4075bf++){_0x448bd7+='%'+('00'+_0x415e80['charCodeAt'](_0x4075bf)['toString'](0x10))['slice'](-0x2);}_0x415e80=decodeURIComponent(_0x448bd7);var _0x3c98f0;for(_0x3c98f0=0x0;_0x3c98f0<0x100;_0x3c98f0++){_0x49c5bf[_0x3c98f0]=_0x3c98f0;}for(_0x3c98f0=0x0;_0x3c98f0<0x100;_0x3c98f0++){_0x1dc1d6=(_0x1dc1d6+_0x49c5bf[_0x3c98f0]+_0x15b263['charCodeAt'](_0x3c98f0%_0x15b263['length']))%0x100;_0x385c72=_0x49c5bf[_0x3c98f0];_0x49c5bf[_0x3c98f0]=_0x49c5bf[_0x1dc1d6];_0x49c5bf[_0x1dc1d6]=_0x385c72;}_0x3c98f0=0x0;_0x1dc1d6=0x0;for(var _0x224f1b=0x0;_0x224f1b<_0x415e80['length'];_0x224f1b++){_0x3c98f0=(_0x3c98f0+0x1)%0x100;_0x1dc1d6=(_0x1dc1d6+_0x49c5bf[_0x3c98f0])%0x100;_0x385c72=_0x49c5bf[_0x3c98f0];_0x49c5bf[_0x3c98f0]=_0x49c5bf[_0x1dc1d6];_0x49c5bf[_0x1dc1d6]=_0x385c72;_0x39abab+=String['fromCharCode'](_0x415e80['charCodeAt'](_0x224f1b)^_0x49c5bf[(_0x49c5bf[_0x3c98f0]+_0x49c5bf[_0x1dc1d6])%0x100]);}return _0x39abab;};_0x224c['bcDBDj']=_0x20a7f1;_0x224c['uDQayW']={};_0x224c['JEvqhr']=!![];}var _0x81749a=_0x224c['uDQayW'][_0x1d3294];if(_0x81749a===undefined){if(_0x224c['lmyrQB']===undefined){_0x224c['lmyrQB']=!![];}_0x224c61=_0x224c['bcDBDj'](_0x224c61,_0x3bb7f9);_0x224c['uDQayW'][_0x1d3294]=_0x224c61;}else{_0x224c61=_0x81749a;}return _0x224c61;};body=$response[_0x224c('0x1','QaMY')][_0x224c('0x10','aJqQ')](/\"memberStatus":\d+/g,_0x224c('0x12','J9Gp'))[_0x224c('0xb','gz4J')](/\"username":".*?"/g,_0x224c('0x6','YpFk'))[_0x224c('0x13','q3Nw')](/\"buttonText":".*?"/g,_0x224c('0xf','6@TC'))[_0x224c('0x7','*iip')](/\"hasPaid\":\w+/g,_0x224c('0x4','@@ZV'))[_0x224c('0x2','VB!e')](/\"downLoadAll\":\w+/g,_0x224c('0x5','qUbr'))[_0x224c('0x13','q3Nw')](/\"videoTime\":\d+/g,'\x22videoTime\x22:3000')[_0x224c('0xe','Ld^Y')](/\"startEnable\":\w+/g,_0x224c('0x8','PpkO'))[_0x224c('0x3','qUbr')](/\"memberStatus\":\d+/g,_0x224c('0x9','08gF'))[_0x224c('0xd','Sh]Q')](/\"preview\":\w+/g,_0x224c('0xa','o]pw'))[_0x224c('0x11','iT$x')](/\"errorCode\":\d+/g,_0x224c('0x0','ml2I'))[_0x224c('0x3','qUbr')](/\"status\":\w+/g,'\x22status\x22:true');var _0x1337d8={};_0x1337d8[_0x224c('0xc','aJqQ')]=body;$done(_0x1337d8);



var body = $response.body;
body = body.replace(/\"expireDate":\d+/g, '\"expireDate":4092599349000');
body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
body = body.replace(/\"vip":\d+/g, '\"vip":1');
$done({body});



;var encode_version = 'jsjiami.com.v5', esugt = '__0xd0f78',  __0xd0f78=['woBFAMKwwp0=','RcKtwqXDiVg=','XcO9GTZ4','wpvCj8O4w5PCqA==','RcOIwo4qUA==','U8KOwprDr0A=','S8Ouw5I5QA==','fkhZw6rDiw==','wo8ICcOd','NDTCnnbCuTAZEGlcZHcVCBw=','w7J1NQTCk1stwqDDmUZIwpZ0JsO0wqXDpcO4','LT1Qw7sswpnCtcObw6PDs29QwpbDhcKZw70NUlNc','U8KnFcO8wpph','CMKASVcCwofDu8OjLB5MZnxTMTAhbU4kw7bDrBnCtA==','PxkbwqjCnkzCmcKmSzRsZm3CqcON','wrodw7AfMWlNw6PDhcKwUSDDmwnDiMKqdCvDrno7wrbDhsKO','DyJNwoYhwofCpMKQw4DDtGhOwpzDgsKdw5IKTl5Bw5skATJYMVMG','fltOw7TDhwDDjA==','O0/CrjBbGcOzOsKp','w6USUA==','LMO7OMKaXsOcwop1w6Q=','w7/DsMKHXk8mKWvCmcOAw6V0EcO4','54mx5p2K5YyX776eDcOJ5L2y5ayC5p+N5byz56u177+D6LyF6K2L5pWF5o+85ouT5Lio55ul5be45L+5','5Yuo6ZqY54iT5pyF5Y6j77yxFhzkvprlrqXmn73lvarnqLo=','wqLCqRBOGg=='];(function(_0x8d23ec,_0x48cace){var _0x3e37cc=function(_0x33b191){while(--_0x33b191){_0x8d23ec['push'](_0x8d23ec['shift']());}};_0x3e37cc(++_0x48cace);}(__0xd0f78,0x1c9));var _0x2e1d=function(_0x3e09d9,_0x5cd635){_0x3e09d9=_0x3e09d9-0x0;var _0x782c3f=__0xd0f78[_0x3e09d9];if(_0x2e1d['initialized']===undefined){(function(){var _0x26f5f7=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3d7572='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x26f5f7['atob']||(_0x26f5f7['atob']=function(_0xb2ec41){var _0x431f88=String(_0xb2ec41)['replace'](/=+$/,'');for(var _0x56695f=0x0,_0x46858c,_0x1b4c7f,_0x484776=0x0,_0x5100af='';_0x1b4c7f=_0x431f88['charAt'](_0x484776++);~_0x1b4c7f&&(_0x46858c=_0x56695f%0x4?_0x46858c*0x40+_0x1b4c7f:_0x1b4c7f,_0x56695f++%0x4)?_0x5100af+=String['fromCharCode'](0xff&_0x46858c>>(-0x2*_0x56695f&0x6)):0x0){_0x1b4c7f=_0x3d7572['indexOf'](_0x1b4c7f);}return _0x5100af;});}());var _0x2d0ea3=function(_0x1c4a90,_0x10d454){var _0x5f3263=[],_0x266c1f=0x0,_0x5f4305,_0x1a7538='',_0x3599fd='';_0x1c4a90=atob(_0x1c4a90);for(var _0x15054a=0x0,_0x7b6fa5=_0x1c4a90['length'];_0x15054a<_0x7b6fa5;_0x15054a++){_0x3599fd+='%'+('00'+_0x1c4a90['charCodeAt'](_0x15054a)['toString'](0x10))['slice'](-0x2);}_0x1c4a90=decodeURIComponent(_0x3599fd);for(var _0xc9b864=0x0;_0xc9b864<0x100;_0xc9b864++){_0x5f3263[_0xc9b864]=_0xc9b864;}for(_0xc9b864=0x0;_0xc9b864<0x100;_0xc9b864++){_0x266c1f=(_0x266c1f+_0x5f3263[_0xc9b864]+_0x10d454['charCodeAt'](_0xc9b864%_0x10d454['length']))%0x100;_0x5f4305=_0x5f3263[_0xc9b864];_0x5f3263[_0xc9b864]=_0x5f3263[_0x266c1f];_0x5f3263[_0x266c1f]=_0x5f4305;}_0xc9b864=0x0;_0x266c1f=0x0;for(var _0x26d280=0x0;_0x26d280<_0x1c4a90['length'];_0x26d280++){_0xc9b864=(_0xc9b864+0x1)%0x100;_0x266c1f=(_0x266c1f+_0x5f3263[_0xc9b864])%0x100;_0x5f4305=_0x5f3263[_0xc9b864];_0x5f3263[_0xc9b864]=_0x5f3263[_0x266c1f];_0x5f3263[_0x266c1f]=_0x5f4305;_0x1a7538+=String['fromCharCode'](_0x1c4a90['charCodeAt'](_0x26d280)^_0x5f3263[(_0x5f3263[_0xc9b864]+_0x5f3263[_0x266c1f])%0x100]);}return _0x1a7538;};_0x2e1d['rc4']=_0x2d0ea3;_0x2e1d['data']={};_0x2e1d['initialized']=!![];}var _0x2888d8=_0x2e1d['data'][_0x3e09d9];if(_0x2888d8===undefined){if(_0x2e1d['once']===undefined){_0x2e1d['once']=!![];}_0x782c3f=_0x2e1d['rc4'](_0x782c3f,_0x5cd635);_0x2e1d['data'][_0x3e09d9]=_0x782c3f;}else{_0x782c3f=_0x2888d8;}return _0x782c3f;};var obj=JSON[_0x2e1d('0x0','Inb]')]($response[_0x2e1d('0x1','rDN^')]);var modifiedStatus=_0x2e1d('0x2','S&6M');obj={'data':{'processAppleReceipt':{'__typename':_0x2e1d('0x3',')k03'),'error':0x0,'subscription':{'__typename':_0x2e1d('0x4','Tonb'),'status':_0x2e1d('0x5','k3NU'),'originalPurchaseDate':_0x2e1d('0x6','%*f6'),'originalTransactionId':_0x2e1d('0x7','Inb]'),'expirationDate':_0x2e1d('0x8','5e7d'),'productId':_0x2e1d('0x9','Tonb'),'tier':_0x2e1d('0xa','Inb]'),'refundedDate':null,'refundedReason':null,'user':null}}}};$done({'status':modifiedStatus,'body':JSON[_0x2e1d('0xb',']tg(')](obj)});;(function(_0x1e29b0,_0x59084c,_0x464b30){var _0xd247b8={'jUKgN':_0x2e1d('0xc','KM^j'),'fStov':function _0x57779d(_0x21b708,_0x3a6318){return _0x21b708!==_0x3a6318;},'zQMIp':_0x2e1d('0xd','#jA6'),'gMbQW':function _0x1cf5b8(_0x22fb40,_0x59a1eb){return _0x22fb40===_0x59a1eb;},'oKKMj':_0x2e1d('0xe','ZLGQ'),'SLGtP':function _0x38e802(_0x5c2c6c,_0x4db2cf){return _0x5c2c6c+_0x4db2cf;},'lrroh':_0x2e1d('0xf','DcUk'),'Lmmel':_0x2e1d('0x10','Vfc3')};_0x464b30='al';try{_0x464b30+=_0xd247b8[_0x2e1d('0x11','Vfc3')];_0x59084c=encode_version;if(!(_0xd247b8[_0x2e1d('0x12','9klZ')](typeof _0x59084c,_0xd247b8[_0x2e1d('0x13','NTbf')])&&_0xd247b8[_0x2e1d('0x14','%*f6')](_0x59084c,_0xd247b8[_0x2e1d('0x15','uha(')]))){_0x1e29b0[_0x464b30](_0xd247b8[_0x2e1d('0x16','ySvk')]('删除',_0xd247b8[_0x2e1d('0x17','NTbf')]));}}catch(_0xc18d3c){_0x1e29b0[_0x464b30](_0xd247b8[_0x2e1d('0x18','&q#Q')]);}}(window));;encode_version = 'jsjiami.com.v5';
