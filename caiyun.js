/*************************************

项目名称：彩云天气 解锁SVIP
下载地址：https://t.cn/A66d95hV
使用声明：仅供学习与交流，请勿转载与贩卖！️

**************************************

[rewrite_local]

^https:\/\/biz\.(caiyunapp|cyapi)\.(com|cn) url script-response-body https://raw.githubusercontent.com/YikR/QuantumultX/master/caiyun.js
^https:\/\/ad\.caiyunapp\.com\/ url reject

[mitm]

hostname = *.cyapi.cn, *.caiyunapp.com

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
