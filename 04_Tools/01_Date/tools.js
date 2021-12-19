let app = {};

// 常用正则 var bool = regex.test(val);
app.REG_REQUIRE = /\S+/;    //必须
app.REG_INT = /^[0-9]*$/;   //数字,正数
app.REG_NUMBER = /^(\-|\+)?\d+(\.\d+)?$/;   //数字,小数
app.REG_PHONE = /^\d{8,11}$/;//香港8位,国内11位
app.REG_EMAIL = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;  //邮箱
app.REG_PASSWORD = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/; //长度在8~18之间，只能包含字母数字下划线
app.REG_USERNAME = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;  //字母开头，长度在5-16之间，只能包含字母数字下划线
app.REG_TEL = /^((\d{3,4})|\d{3,4}-)?\d{7,8}$/; //电话
app.REG_QQ = /^[1-9][0-9]{4,}$/;    //QQ
app.REG_ZIP_CODE = /^\d{6}$/;   //邮政编码
app.REG_ID_CARD = /^([0-9]){7,18}(x|X)?$/;  //身份证7-18位数+x
app.REG_CHINESE = /^[\u4e00-\u9fa5]*$/; //中文
app.REG_IP = /^\d+\.\d+\.\d+\.\d+$/;    //IP
app.REG_URL = /^([a-zA-z]+:\/\/)[^\s]*$/;   //绝对地址
app.REG_DATETIME = /^\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$/;   //年月日时分秒
app.REG_DATE = /^\d{4}-\d{1,2}-\d{1,2}$/;   //年月日
app.REG_TIME = /^\d{1,2}:\d{1,2}:\d{1,2}$/; //时分秒
app.REG_TIMESTAMP = /^\d{1,}$/; //时间戳
app.REG_pass16 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/; // 6到16位数字和字母组合的密码;
app.Email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/


/**
 * 一个时间戳
 * @param {时间格式的字符串如} dateStr 
 * @returns 返回对象 包含年月日时分秒毫秒，周,自由组合显示格式           
 */
app.dateFormat = function(timeStamp){
    if(timeStamp == ""){
        return new Error("参数错误")
    }
    if( typeof timeStamp != "string"){
        return new Error("类型错误")
    }
    var d = new Date(timeStamp)
    var year = d.getFullYear()
    var month = d.getMonth()+1;
    var day = d.getDate()
    var week = d.getDay()

    var hh = d.getHours()
    var mm = d.getMinutes()
    var ss = d.getSeconds()
    var ms = d.getMilliseconds()

    var month1,day1,week1,hh,mm,ss,ms;
    switch (week){
        case 0: week1 = "星期日"; break;
        case 1: week1 = "星期一"; break;
        case 2: week1 = "星期二"; break;
        case 3: week1 = "星期三"; break;
        case 4: week1 = "星期四"; break;
        case 5: week1 = "星期五"; break;
        case 6: week1 = "星期六"; break;
    }

    month1  = month < 10?("0"+month):month
    day1    = day < 10?("0"+day):day
    hh1     = hh < 10?("0"+hh):hh
    mm1     = mm < 10?("0"+mm):mm
    ss1     = ss < 10?("0"+ss):ss
    ms1     = ms < 10?("0"+ms):ms
    return {
        year,month,day,week,
        week1,hh1,mm1,ss,ms,
    }
}

/**
 * 去除时间字符串中的中文字符 用-代替
 * @param {时间格式的字符串如2020年3月3日} dateStr 
 */
app.removeChinaese = function(dateStr){
    if (dateStr != null && dateStr != "") {
        let reg = /[\u4e00-\u9fa5]/g;
        let v1 = dateStr.replace(reg, "-");
        let v2 = v1.replace(/-$/,"")
        return v2
    } else
        return "";
}
/**
 * 给一个时间戳,格式化成倒计时格式
 * @param {时间戳} timeStamp 
 */
app.retime=function(timeStamp){
    

}
