(function(){
    var datepicker = {};
    // 获取月份;
    datepicker.getMonthData=function(year,month){
        var ret = [];
        // 没有传就使用当前日期;
        if(!year||!month){
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth()+1;
        }
        // 获取当月第一天;
        var firstDay = new Date(year,month-1,1);

        // 获取当月第一天是星期几;
        var firstDayWeekDay = firstDay.getDay();
        // 如果是周日就显示成7;
        if(firstDayWeekDay == 0){
            firstDayWeekDay = 7;
        } 

        // 或取上月的最后一天;
        var lastDayOfLastMonth = new Date(year,month - 1,0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        /*
            在日历的第一行要显示多少个上一个月的日期;
            周日-1就是六天就要显示六天;如果周五就显示4天;
            如果是周一就显示0天;  减1就是求出他前面有几天;
            范围0-6；
         */
        var preMonthDayCount = firstDayWeekDay -1;

        // 当月的最后一天;
        var lastDay = new Date(year,month,0);
        var lastDate = lastDay.getDate();
        console.log(preMonthDayCount);  //3

        /* 
            获取当月的每一天;有4周有5周和有6周都有可能;
         */ 
        for (var i = 0; i < 7*6; i++) {
            /*
                每一天的日期; 加1的目的是日期减一个数后
                是从上日期算起走就会多一天;
             */
            var date  = i +1 -preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            // 上一月;
            if(date<=0){
                thisMonth = month -1;
                showDate = lastDateOfLastMonth + date;
                 
            }
            //下一月
            else if(date > lastDate){
               
                thisMonth = month+1;
                showDate = showDate - lastDate;
            }
            if(thisMonth ===0) thisMonth = 12;
            if(thisMonth ===13) thisMonth = 1;
            ret.push({
                date:date,
                month:thisMonth,
                showDate:showDate
            })
        }
        return ret;

    }   



    window.datepicker=datepicker;
})()