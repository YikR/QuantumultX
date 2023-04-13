/*************************************

项目名称：彩云天气SVIP keepvip 波点 音乐vip
使用声明：仅供学习与交流，请勿转载与贩卖！️

**************************************

[rewrite_local]

^https:\/\/biz\.(caiyunapp|cyapi)\.(com|cn) url script-response-body https://raw.githubusercontent.com/YikR/QuantumultX/master/caiyun.js
^https:\/\/ad\.caiyunapp\.com\/ url reject



^https:\/\/api\.gotokeep\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/keep.js


https:\/\/bd-api\.kuwo\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bodianyinyue.js



[mitm]

hostname = *.cyapi.cn, *.caiyunapp.com, api.gotokeep.com, bd-api.kuwo.cn

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
