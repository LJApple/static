/**
 * global function for website.
 * @author Alan
 * @wechat 82100735
 * @version 1.0.0 build 2018-08-17
 * @modified Alan 2018-08-17
 */

/**
 * var app = getApp();
 * var mintUI = require("mint-ui");
 * var $http = require("axios");
 */
"use strict";$(function(){function n(){$(".header_nav").toggleClass("on")}$(".btn_menu,.mark").on("click",function(){n()}),$(".index_tab_t li").on("click",function(){var n=$(this).parent("ul").index();console.log(n);var e=$(this).index();$(".index_tab_t li").removeClass("on"),$(this).addClass("on"),0===n?$(".index_tab_c li").removeClass("on").eq(e).addClass("on"):$(".index_tab_c li").removeClass("on").eq(e+3).addClass("on")})});

$(function(){
  $('.header>a').eq(0).click(function(){
  self.location=document.referrer
    })

})
function hehome (hef) {
    var this_href = hef;
    console.log(this_href);//获取到点击聊天的页面的路径地址 记录下来

    // 再继续访问聊天窗口
    window.open('http://pht.zoosnet.net/LR/Chatpre.aspx?id=PHT73256509&lng=cn')
}

window.onload = function(){
  (function(){
    var html = document.documentElement;
    var htmlw = html.clientWidth;
    html.style.fontSize = htmlw/15 + "px";
  })();
}

/**
 * 截取字符串方法
 * 
 * @param str
 *        传入字符串
 * @param num
 *        截取的字符串长度
 * @return result
 *        截取过后的字符串加省略号
 */
function cutWords(str,num){
  return str.length > num ? str.substring(0,num) + "..." : str;
}

/**
 * 检测表单是否为空
 * 
 * @param str
 *        传入字符串
 * @return true 或 false
 */
function checkNull(str){
  return /^\s*$/.test(str);
}

/**
 * 检测手机号码是否符合规则
 * 
 * @param num
 *        传入电话号码
 * @return true 或 false
 */
function checkPhone(num){
  return /^1(3|4|5|7|8)\d{9}$/.test(num);
}

/**
 * 检测国内电话号码(0511-4405222 或 021-87888822)
 * 
 * @param str
 *        传入字符串
 * @return true 或 false
 */  
function checkTell(str) { 
  return /\d{3}-\d{8}|\d{4}-\d{7}/.test(str); 
}

/**
 * 检测是否为正整数 0 ~ ∞
 * 
 * @param num
 *        传入待检测的数字
 * @return true 或 false
 */
function checkInteger(num) {
  return /^[0-9]+.?[0-9]*/.test(num);
}

/**
 * 检测是否为正数 0 ~ ∞
 * 
 * @param num
 *        传入待检测的数字
 * @return true 或 false
 */
function checkDub(num) {
  return /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(num);
}

/**
 * 检测邮箱格式
 * 
 * @param str
 *        传入字符串
 * @return true 或 false
 */
function checkEmail(str){
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str);
} 

/**
 * 检测身份证(15位或18位) 
 * 
 * @param cardId
 *        传入身份证号码
 * @return true 或 false
 */ 
function checkCardId(cardId) { 
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cardId); 
} 

/**
 * 检测密码长度
 * 
 * @param str
 *        传入字符串
 * @return true 或 false
 */
function checkPass(passWord){
  return /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/.test(passWord);
}

/**
 * 保留小数点2位
 * 
 * @param s
 *        需要处理的数值
 * @return 
 */
function toDecimal(s){
  var re = /([0-9]+\.[0-9]{2})[0-9]*/;
  return s.replace(re,"$1");
} 

/**
 * 是否是价格
 * 
 * @param money
 *        需要处理的数值
 * @return 
 */
function toPrice(money){
  return /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/.test(money);
} 

/**
 * 替换全部
 * 
 * @param key
 *        需要替换的内容
 * @param words
 *        需要替换的范围
 * @param text
 *        替换后的新内容
 * @return
 */
function replaceAll(key, words, text){ 
  return words.replace(new RegExp(key, "g"), text);
} 
 
/**
 * 字符串去空格
 * 
 * @param 
 *        
 * @return true 或 false
 */
String.prototype.trim = function(){ 
  return this.replace(/(^\s*)|(\s*$)/g, "");
} 

/**
 * 字符串去所有空格
 * 
 * @param 
 *        
 * @return
 */
String.prototype.trimAll = function(){ 
  return this.replace(/\s+/g, "");
} 

/**
 * 字符串清除左空格
 * 
 * @param 
 *        
 * @return
 */
String.prototype.lTrim = function(){ 
  return this.replace(/(^\s*)/g, "");
} 

/**
 * 字符串清除右空格
 * 
 * @param 
 *        
 * @return
 */
String.prototype.rTrim = function(){ 
  return this.replace(/(\s*$)/g, "");
} 

/**
 * 检测字符串是否以某个字符串开头
 * 
 * @param 
 *        
 * @return
 */
String.prototype.startWith = function(s){ 
  return this.indexOf(s) == 0;
} 

/**
 * 检测字符串是否以某个字符串结束
 * 
 * @param 
 *        
 * @return
 */ 
String.prototype.endWith = function(s){ 
  var d = this.length - s.length;
  return (d >= 0 && this.lastIndexOf(s) == d);
} 

/**
 * 检测浏览器类型
 * 
 * @param 
 *        
 * @return true 或 false
 */
function isAndroid(){
  var u = navigator.userAgent, app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
  return isAndroid;
}

/**
 * 检测浏览器类型
 * 
 * @param 
 *        
 * @return true 或 false
 */
function isIOS(){
  var u = navigator.userAgent, app = navigator.appVersion;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return isIOS;
}

/**
 * 检测浏览器类型
 * 
 * @param 
 *        
 * @return true 或 false
 */
function isWechat(){  
  var ua = navigator.userAgent.toLowerCase();
  var isWechat = /micromessenger/i.test(ua) || /windows phone/i.test(ua);
  return isWechat;
}

/**
 * 格式化时间戳
 * 
 * @param 时间戳
 *        传入日期
 * @return 2018-08-17 16:32:27
 */
function dateFormat(date){
  var timer = date != null ? new Date(date) : new Date();
  var y = timer.getFullYear();
  var M = timer.getMonth() + 1;
  var d = timer.getDate();
  var h = timer.getHours();
  var m = timer.getMinutes();
  var s = timer.getSeconds();
  M = M < 10 ? "0" + M : M;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  return y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
}

/**
 * 日期转化时间戳
 * 
 * @param date
 *        传入日期
 * @return timer
 */
function formatDate(date){
  return date != null ? new Date(date).getTime() : new Date().getTime();
}

/**
 * 高亮关键词
 * 
 * @param key
 *        需要高亮的关键词
 * @param words
 *        文本范围+
 * @param tag
 *        高亮关键词标签，可省略
 * @return 
 */
function highLightKeywords(key, words, tag) {
  var tag = tag || 'span';
  return words.replace(new RegExp(key,'g'), '<'+ tag +' style="color:#e6db74;">'+key+'</'+ tag +'>');
}

/**
 * 转义html标签
 * 
 * @param text
 *        需要转义的内容
 * @return 
 */
function htmlEncode(text) { 
  return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>') 
} 

/**
 * 复制文本到剪切板
 * 
 * @param str
 *        传入被复制的字符串
 * @return 
 */
function copyToClipBoard(str) {
  var _tempInput = document.createElement('input');
  _tempInput.value = str;
  document.body.appendChild(_tempInput);
  _tempInput.select();
  document.execCommand('Copy');
  document.body.removeChild(_tempInput);
}

/**
 * 返回顶部的通用方法
 * 
 * @param btnId
 *        返回按钮id
 * @return backTop('goTop');
 */
function backTop(btnId) {
  var btn = document.getElementById(btnId);
  var d = document.documentElement;
  var b = document.body;
  window.onscroll = setState;
  btn.style.display = "none";
  btn.onclick = function(){
      btn.style.display = "none";
      window.onscroll = null;
      this.timer = setInterval(function(){
              d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
              b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
              if((d.scrollTop + b.scrollTop) == 0){
                clearInterval(btn.timer);
                window.onscroll = setState;
              }
          }, 10);
  };
  function setState(){
      btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none"
  }
}
 
/**
 * 删除数组中存在重复的元素
 * 
 * @param someArray
 *        完整的数组
 * @return newArray
 */
function removeRepeatInArray(someArray) { 
  var newArray = [];
  for(var i = 0; i < someArray.length; i++){
    var isHas = false;
    for(var j = i + 1; j < someArray.length; j++){
      if(someArray[i] == someArray[j]){
        isHas = true;
      } 
    }
    if(!isHas)newArray.push(someArray[i]);
  }
  return newArray;
} 

/**
 * 检测数组中是否存在重复的元素
 * 
 * @param someArray
 *        完整的数组
 * @return true or false
 */
function isRepeatInArray(someArray){  
  var isRepeat = false;
  for(var i = 0; i < someArray.length; i++){ 
    for(var j = i + 1; j < someArray.length; j++){ 
      if(someArray[i] == someArray[j]){ 
        isRepeat = true;
      }
    } 
  } 
  return isRepeat; 
}  

/**
 * 检测某个值是否在数组中
 * 
 * @param someArray
 *        完整的数组
 * @param key
 *        被检测的值
 * @return true or false
 */ 
function isInArray(someArray,key){
  var isHas = false; 
  for(var i = 0; i < someArray.length; i++){ 
    if(someArray[i] == key){
      isHas = true;
      break;
    }     
  } 
  return isHas;
} 

/**
 * 检测某个值在数组中的索引位置
 * 
 * @param someArray
 *        完整的数组
 * @param key
 *        被检测的值
 * @return index
 */ 
function getInArrayIndex(someArray,key){
  var index = -1; 
  for(var i = 0; i < someArray.length; i++){ 
    if(someArray[i] == key){
      index = i;
      break;
    }     
  } 
  return index;
}

/**
 * 清除脚本内容
 * 
 * @param html
 *        匹配范围
 * @return 
 */ 
function stripScript(html){
  return html.replace(/<script.*?>.*?<\/script>/ig, '');
}  

/**
 * 设置Cookie
 * 
 * @param name
 *        cookie名称
 * @param value
 *        cookie值
 * @param hours
 *        cookie过期时间
 * @param domain
 *        cookie所属域名
 * @return 
 */ 
function setCookie(name, value, hours, domain) {
  var d = new Date();
  var offset = 8;
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = utc + (3600000 * offset);
  var exp = new Date(nd);
  exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=" + domain + ";"
}

/**
 * 读取Cookie
 * 
 * @param name
 *        cookie名称
 * @return 
 */ 
function getCookie(name){
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  return arr != null ? unescape(arr[2]) : null;
}

/**
 * 金额大写转换函数
 * 
 * @param money
 *        需要转换的金额
 * @return 
 */ 
function convertCurrency(money){ 
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money == '') { return ''; }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

/**
 * Jquery Ajax调用方法
 * 
 * @param o
 *      参数对象
 * @param success
 *      成功函数
 * @returns result
 *      返回JSON对象
 */
function sendAjax(o, success) {
  var myParams = o.params || {};
  var type = o.type || "get";

  $.ajax({
    url: o.url,
    type: type,
    data: myParams,
    success:function(res){
      success(res);
    },
    error:function(err){
      alert("ajax is error!");
    }
  })
}

/**
 * Vue版本Axios调用方法
 * 
 * @param o
 *      参数对象
 * @param success
 *      成功函数
 * @returns result
 *      返回JSON对象
 */
function sendAxios(o, success) {
  var myParams = o.params || {};
  var method = o.method || "get";

  $http({
      url: o.url,
      method: method,
      params: myParams,
  })
  .then(function(res){
      success(res);
  })
  .catch(function(err){
      alert("axios is error!");
  })
}

/**
 * 小程序Request调用方法
 * 
 * @param o
 *      参数对象
 * @param success
 *      成功函数
 * @returns result
 *      返回JSON对象
 */

function sendRequest(o, success) {
  var mydata = o.data || {};
  var method = o.method || "get";

  wx.request({
    url: o.url,
    data: mydata,
    method: method,
    success: success,
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}


var api=({
  onload:function(){
    if(this.globalData.env == "test"){
      this.globalData.server = "http://60.13.45.53/interface/interface.php";
      this.globalData.picServer = "http://60.13.45.53";
    }else{
      this.globalData.server = "http://www.dzyt.com.cn/interface/interface.php";
      this.globalData.picServer = "http://www.dzyt.com.cn";
    }
  },
  globalData:{
      env: "test",
      server: '',
      picServer:'',
  }
})