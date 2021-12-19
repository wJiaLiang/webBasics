    var datepicker = {};
    datepicker.getMonthData = function (year,month){
        var ret = []; // 数组中的每一个数就是当前的日期;

        if(!year||!month){
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }
        
        var firstDay = new Date(year,month-1,1) // 获取当月的第一天;
        var firstDayweekDay = firstDay.getDay(); // 这一天是星期几;

        var lastDayOfLastMonth = new Date(year,month-1,0);      // 上个月的最后一天;实例;
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate(); // 上个月最后一天 具体日期
        // 日 一 二  三 四 五 六;
        var preMonthDayCount = firstDayweekDay; 

        var lastDay = new Date(year,month,0); // 当月的最后一天;
        var lastDate = lastDay.getDate();     // 该天是星期几


        for (var i = 0; i < 7*6; i++){
            var date = i+1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;

            // 上一月;
            if(date <= 0){
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;

            }else if(date > lastDate){
                // 下个月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }
            if(thisMonth === 0) thisMonth = 12;
            if(thisMonth === 13) thisMonth = 1;

            ret.push({
                month:thisMonth,    // 月份
                date:date,          // 真实的日期;
                showDate:showDate,  // 显示的日期;
                allDate: year+'-'+ (thisMonth<10?'0'+thisMonth:thisMonth) + '-'+ (showDate<10?'0'+showDate:showDate),
            })

        }
        return ret;
    }

