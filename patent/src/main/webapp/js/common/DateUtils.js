/**
 *  时间处理类
 *
 *  @author Qi.Song(heikexiaosong@gmail.com)
 *  @since 16-12-1
 */

var DateUtils = function() {

    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return {
        /**
         *   返回指定日期月份的月初时间
         * @param date
         * @returns {*}
         */
        beginOfMonth: function (date) {
            if  ( date===undefined || date==null ){
                date = new Date();
            }

            date.setDate(1);
            date.setHours(0);    // 设置 Date 对象中的小时 (0 ~ 23)。
            date.setMinutes(0);   // 设置 Date 对象中的分钟 (0 ~ 59)。
            date.setSeconds(0);   // 设置 Date 对象中的秒钟 (0 ~ 59)。
            date.setMilliseconds(0);    // 设置 Date 对象中的毫秒 (0 ~ 999)。

            return date;
        },

        /**
         *   返回指定日期月份的月末时间
         * @param date
         * @returns {*}
         */
        endOfMonth: function (date) {
            if  ( date===undefined || date==null ){
                date = new Date();
            }

            date.setDate(days[date.getMonth()]);
            date.setHours(23);    // 设置 Date 对象中的小时 (0 ~ 23)。
            date.setMinutes(59);   // 设置 Date 对象中的分钟 (0 ~ 59)。
            date.setSeconds(59);   // 设置 Date 对象中的秒钟 (0 ~ 59)。
            date.setMilliseconds(999);    // 设置 Date 对象中的毫秒 (0 ~ 999)。

            return date;
        },
        
        /**
         *   返回指定日期的时间
         * @param date
         * @returns {*}
         */
        endOfDay: function (date) {
            if  ( date===undefined || date==null ){
                date = new Date();
            }
            date.setHours(23);    // 设置 Date 对象中的小时 (0 ~ 23)。
            date.setMinutes(59);   // 设置 Date 对象中的分钟 (0 ~ 59)。
            date.setSeconds(59);   // 设置 Date 对象中的秒钟 (0 ~ 59)。
            date.setMilliseconds(999);    // 设置 Date 对象中的毫秒 (0 ~ 999)。

            return date;
        }

    }

}();
