
var base = {};

// base.host = 'https://www.hechuangpark.com/';
base.host = 'http://lianchuang.tp5.com/';

//提示消息
base.msg = function(msg){
    wx.showToast({
        title: msg
    });
};
//确认框
base.alert = function(msg,callback,data){
    wx.showModal({
        title: "提示",
        content: msg,
        showCancel: false,
        success: function (res) {
            if(callback){
                callback(data);
            }
        }
    });
};
//确认框
base.confirm = function(msg,confirmFun,cancelFun){
    wx.showModal({
        title: '提示',
        content: msg,
        success:function(res) {
            if (res.confirm) {
                if(confirmFun){
                    confirmFun();
                }
            } else if (res.cancel) {
                if(cancelFun){
                    cancelFun();
                }
            }
        }
    });
};
//输入框
base.prompt= function(msg){
    // return prompt(msg);
};

//显示加载中
base.showLoading = function(){
    wx.showLoading({
        title: "加载中",
        mask: true,
    });
};
//隐藏加载中
base.hideLoading = function(){
    wx.hideLoading();
};
////////////////////////////////////移动端end///////////////////////////////////////////////////////////////


//刷新页面
base.reload = function(){
    location.reload();
}
//跳转
base.redirect = function(url,params){
    for(var k in params){
        if(url.indexOf('?')>-1){
            url += ("&"+k+"="+params[k]);
        }else{
            url += ("?"+k+"="+params[k]);
        }
    }
    wx.redirectTo({
        url: url
    })
};
//跳转,不关闭界面
base.navigate = function(url,params){
    for(var k in params){
        if(url.indexOf('?')>-1){
            url += ("&"+k+"="+params[k]);
        }else{
            url += ("?"+k+"="+params[k]);
        }
    }
    wx.navigateTo({
        url: url
    })
};
//跳转回
base.navigateBack = function(page){
    page  = page || 1;
    wx.navigateBack({
        delta: page
    })
};
//app.json定义的tabBar,主tab页面只能有这种跳转
base.switchTab = function(url){
    wx.switchTab({
        url: url
    })
};

//请求数据
base.sendGetAjax = function(url,data,successFunction,failFunction) {
    base.sendAjax(url,data,'',successFunction,failFunction,'GET');
}

//请求数据
base.sendAjax = function(url,data,redirectUrl,successFunction,failFunction,method) {
    if(!method) method = 'POST';
    base.showLoading();
    wx.request({
        url: url,
        data: data || {},
        method: method || "GET",
        success: function (res) {
            if(res.constructor !== Object){
                base.msg('返回错误');
            }
            var res1 = res['data'];
            console.log(res1);
            var msg = res1['msg'];
            var result = res1['data'];
            var code = res1['code'];

            if(code==1) {
                if (successFunction) {
                    successFunction(result);
                }
            }else if(code==0){
                base.msg(msg);
                if(failFunction){
                    failFunction(result);
                }
            }else if(code==-1){

                base.msg('未登录');
                base.redirect('/pages/signin/signin');
                return false;
                // if(failFunction){
                //     failFunction(result);
                // }
            }else{
                base.msg(msg);
                if(failFunction){
                    failFunction(result);
                }
            }
        },
        fail: function (res) {
            base.msg(res.errMsg);
        },
        complete: function (res) {
            base.hideLoading();
        }
    });

};

//登录
base.sendRegister = function(data,regexConfig,redirectUrl,successFunction,failFunction) {
    var sendUrl = "/Mobile/LoginApi/register";
    var _data = {};
    _data['_data'] = data;
    base.sendAjax(sendUrl,_data,redirectUrl,successFunction,failFunction);
}
//登录
base.sendLogin = function(data,regexConfig,redirectUrl,successFunction,failFunction) {
    var sendUrl = "/Mobile/LoginApi/login";
    var _data = {};
    _data['_data'] = data;
    base.sendAjax(sendUrl,_data,redirectUrl,successFunction,failFunction);
}
//登出
base.sendLogout = function(data,regexConfig,redirectUrl,successFunction,failFunction) {
    var sendUrl = "/Mobile/LoginApi/loginOut";
    var _data = {};
    _data['_data'] = data;
    base.sendAjax(sendUrl,_data,redirectUrl,successFunction,failFunction);
}


base.add_host = function (url,host) {
    host = host || base.host;
    if(url.indexOf('http://')>-1||url.indexOf('https://')>-1){
        return url;
    }
    return host+url;
}

//接口请求数据
//regexConfig [[字段名,正则,错误消息,是否必须验证]]
base.sendApi = function(url,data,regexConfig,redirectUrl,successFunction,failFunction) {
    //验证
    if(base.validate(data,regexConfig)==false){
        return false;
    }
    //登录写在Mobile里
    var user_id = base.getCookie('user_id');
    var token = base.getCookie('token');
    data['orgin'] = '1';
    data['user_id'] = user_id?user_id:0;
    data['token'] = token?token:'';
    var sendUrl = base.host+"/app.php/"+url;
    var _data = {};
    _data['data'] = JSON.stringify(data);
    _data['apisign'] = '';
    _data['_v'] = '1.0.0';
    base.sendAjax(sendUrl,_data,redirectUrl,successFunction,failFunction);
};


base.uploadImage = function (successFunction,failFunction) {
    wx.chooseImage({
        success:function(res) {
            const tempFilePaths = res.tempFilePaths
            wx.uploadFile({
                url: base.host+"/app.php/upload/upload",
                filePath: tempFilePaths[0],
                name: "file",
                formData: {
                    user: 'test'
                },
                success:function(res) {
                    var data1 = null;
                    try{
                        data1 = JSON.parse(res.data);
                    }catch (e){
                    }
                    if(data1==null){
                        base.msg('返回数据错误');
                        return false;
                    }
                    var code = data1['code'];
                    var data = data1['data'];
                    var url = data['data'];
                    if(code==1){
                        if(successFunction){
                            successFunction(url);
                        }
                    } else if(code==0){
                        base.msg(msg);
                        if(failFunction){
                            failFunction();
                        }
                    }else if(code==-1) {
                        base.msg('未登录');
                        // base.redirect('/pages/signin/signin');
                        return false;
                    }
                }
            })
        }
    });
}


//获取总共几页
base.getPage = function(totalCount,pageSize) {
    if(totalCount<1) totalCount=1;
    var page = Math.floor((totalCount-1)/pageSize)+1;
    return page;
};


//常用正则  var bool = regex.test(value);
base.REG_REQUIRE = /\S+/;//必须
base.REG_INT = /^[0-9]*$/;//数字,正数
base.REG_NUMBER = /^(\-|\+)?\d+(\.\d+)?$/;//数字,小数
base.REG_PHONE = /^\d{11}$/;//国内手机11位数
base.PHONE = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|19[2]|18[0-9]|14[57])[0-9]{8}$/;
base.REG_EMAIL = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;//邮箱
base.REG_PASSWORD = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;//长度在6~18之间，只能包含字母数字下划线
base.REG_USERNAME = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;//字母开头，长度在5-16之间，只能包含字母数字下划线
base.REG_TEL = /^((\d{3,4})|\d{3,4}-)?\d{7,8}$/;//电话
base.REG_QQ = /^[1-9][0-9]{4,}$/;//QQ
base.REG_ZIP_CODE =/^\d{6}$/;//邮政编码
base.REG_ID_CARD =/^([0-9]){7,18}(x|X)?$/;//身份证7-18位数+x
base.REG_CHINESE = /^[\u4e00-\u9fa5]*$/;//中文
base.REG_IP = /^\d+\.\d+\.\d+\.\d+$/;//IP
base.REG_URL = /^([a-zA-z]+:\/\/)[^\s]*$/;//绝对地址
base.REG_DATETIME = /^\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$/;//年月日时分秒
base.REG_DATE = /^\d{4}-\d{1,2}-\d{1,2}$/;//年月日
base.REG_TIME = /^\d{1,2}:\d{1,2}:\d{1,2}$/;//时分秒
base.REG_TIMESTAMP = /^\d{1,}$/;//时间戳
// 同时包含数字 大小写字母特殊字符4种类型长度至少8位
base.rge_1 = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

// 密码长度至少为8(包括)位以上字符,且包含数字、字母、特殊字符(@#$%^&+=_)
base.reg_2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;


/**
 * 验证数据
 * @param data{Object}
 * @param configs{Array} 例子[['name',base.REG_REQUIRE,'名称不能为空',must],...]
 * @returns {boolean}
 */
base.validate = function(data,configs) {
    if(data&&configs){
        var len = configs.length;
        for(var k=0;k<len;k++){
            var config = configs[k];
            if(!config){
                continue;
            }
            var field = config[0];//字段名
            var regex = config[1];//正则
            var msg = config[2];//错误消息
            var must = config[3];//不存在字段也必须验证
            if(field){
                if(must||(data.hasOwnProperty(field)&&data[field]!='')){
                    var bool = base.validateField(data[field],regex,msg,must);
                    if(bool==false){
                        return false;
                    }
                }
            }
        }
    }
    return true;
};

/**
 * 验证单个字段数据
 * @param value{string}
 * @param regex{RegExp}
 * @param msg{string}
 * @param must{string}是否必须存储
 * @returns {string}
 */
base.validateField = function(value,regex,msg,must) {
    if(must&&value===undefined&&msg){
        base.alert(msg);
        return false;
    }
    var bool = regex.test(value);
    if(bool==false&&msg){
        base.alert(msg);
    }
    return bool;
};


base.cookie_prefix = "cookie_";//对应服务端
//写cookies
base.setCookie = function(name,value,time){
    name = base.cookie_prefix+name;
    try {
        wx.setStorageSync(name,value)
    } catch (e) {
    }
};
//读取cookies
base.getCookie = function(name) {
    name = base.cookie_prefix+name;
    try {
        var value = wx.getStorageSync(name)
        if (value) {
            return value;
        }
    } catch (e) {
    }
    return null;
};
//删除cookies
base.delCookie = function(name) {
    try {
        wx.removeStorageSync(name)
    } catch (e) {
    }
};
//写cookies
base.setCookieList = function(name,list,time) {
    var value = list.join('&|&|&');
    base.setCookie(name,value,time);
};
//读取cookies
base.getCookieList = function(name) {
    var value = base.getCookie(name);
    var list = [];
    if (value) {
        list = value.split('&|&|&');
    }
    return list;
};

//写cookies
base.setCookieObject = function(name,jsonObject,time) {
    var value = JSON.stringify(jsonObject);
    base.setCookie(name,value,time);
};
//读取cookies
base.getCookieObject = function(name) {
    var value = base.getCookie(name);
    if(value){
        var jsonObject = JSON.parse(value);
        return jsonObject;
    }
    return null;
};

base.timerMap = {};//倒计时列表
base.timer = null;//倒计时对象
base.nowTime = 0;
base.timerTick = null;

/**
 * 绑定倒计时
 * @param key 唯一KEY
 * @param endTime 结束时间戳
 * @param timerTick 回调timerTick(key,time,hour,minute,second);
 */
base.bindTimer = function (key,endTime,timerTick){
    if(base.timerMap.hasOwnProperty(key)){
        //已经有定时器了
        return;
    }
    endTime = Math.floor(endTime);
    base.timerMap[key] = {endTime:endTime,timerTick:timerTick};
    if(!base.timer){
        base.nowTime = Math.floor((new Date()).getTime()/1000);
        base.timerTick = function () {
            var timerMap = base.timerMap;
            for(var k in timerMap){
                var object = timerMap[k];
                if(!object) continue;
                var key = k;//唯一KEY
                var endTime = object.endTime;//结束时间
                var timerTick = object.timerTick;//回调函数
                var time = endTime-base.nowTime;
                if(time<0) time = 0;
                if(timerTick){
                    var hour = Math.floor((time / 60 / 60));
                    var minute = Math.floor((time / 60) % 60);
                    var second = Math.floor(time % 60);
                    timerTick(key,time,hour,minute,second);//回调
                }
                if(time<=0){
                    //移除
                    base.timerMap[key] = null;
                    delete base.timerMap[key];
                }
            }
        };
        base.timer = setInterval(function () {
            base.nowTime++;
            base.timerTick();
        },1000);
    }
    base.timerTick();
};


//前面补0
base.strPad = function(number,n) {
    var value = number+'';
    var len = n - value.length;
    if(len<0){ 
        return value;
    }
    for(var i=0;i<len;i++){
        value = '0'+value;
    }
    return value;
};

//保留位数
base.formatNumber = function(number,n) {
    return Number(number).toFixed(n);
};

/**
 * 格式化时间
 * @param time 时间
 * @param type 0:天小时分秒,1:小时分秒,2:分秒,3:秒
 * @param format 格式,H:i:s或d天H小时i分s秒
 * @param isPad 是否需要补0
 * @returns {*}
 */
base.formatTime = function (time,type,format,isPad){
    if(format===undefined) format = 'H:i:s';//format = 'd天H小时i分s秒';
    if(type===undefined) type = 1;//默认1
    var day = hour = minute = second = 0;
    if(type==0) {
        day = Math.floor((time / 60 / 60 / 24));
        hour = Math.floor((time / 60 / 60) % 24);
        minute = Math.floor((time / 60) % 60);
        second = Math.floor(time % 60);
    }else if(type==1) {
        day = 0;
        hour = Math.floor((time / 60 / 60));
        minute = Math.floor((time / 60) % 60);
        second = Math.floor(time % 60);
    }else if(type==2) {
        day = 0;
        hour = 0;
        minute = Math.floor((time / 60));
        second = Math.floor(time % 60);
    }else if(type==3){
        day = 0;
        hour = 0;
        minute = 0;
        second = Math.floor(time);
    }
    if(isPad||isPad===undefined){
        //是否补0
        day = base.strPad(day,2);
        hour = base.strPad(hour,2);
        minute = base.strPad(minute,2);
        second = base.strPad(second,2);
    }
    var o = {
        "d+" : day, //天
        "H+" : hour, //小时
        "i+" : minute, //分
        "s+" : second //秒
    };
    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1,o[k]);
        }
    }
    return format;
};

/**
 * 格式化日期
 * @param timestamp
 * @param format 默认Y-m-d H:i:s
 * @param isPad 是否需要补0
 * @returns {*}
 */
base.formatDate = function(timestamp,format,isPad){
    if(!format) format = 'Y-m-d H:i:s';

    var date = timestamp>0?(new Date(timestamp*1000)):(new Date());
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var millisecond = date.getMilliseconds();
    if(isPad || isPad===undefined){
        //是否补0
        year = base.strPad(year,4);
        month = base.strPad(month,2);
        day = base.strPad(day,2);
        hour = base.strPad(hour,2);
        minute = base.strPad(minute,2);
        second = base.strPad(second,2);
        millisecond = base.strPad(millisecond,2);
    }
    var o = {
        "Y+" : year, //年
        "m+" : month, //月
        "d+" : day, //日
        "H+" : hour, //时
        "i+" : minute, //分
        "s+" : second, //秒
        "S+" : millisecond //毫秒
    };
    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1,o[k]);
        }
    }
    return format;
};

//
base.getKeyNameByList = function(list,key,newKey,nameObject){
    for(var i=0;i<list.length;i++){
        if(nameObject.hasOwnProperty(list[i][key])){
            list[i][newKey] = nameObject[list[i][key]];
        }else{
            list[i][newKey] = '';
        }
    }
    return list;
}

//
base.getKeyNameByObject = function(object,key,newKey,nameObject){
    if(nameObject.hasOwnProperty(object[key])){
        object[newKey] = nameObject[object[key]];
    }else{
        object[newKey] = '';
    }
    return object;
}

//
base.getFormatTimeByList = function(list,key,newKey,format){
    for(var i=0;i<list.length;i++){
        list[i][newKey] = base.formatDate(list[i][key],format);
    }
    return list;
}


module.exports = base;
