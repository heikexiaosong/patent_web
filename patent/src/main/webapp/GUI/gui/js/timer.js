if (typeof layer === 'undefined') {
    throw new Error('Chooser requires layer library.');
}

if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}


(function($, window, undefined) {
    'use strict';

    var _timer = {
        value:0,
        num:0,
        trend:0,
        init:function (fun) {
        },
        setValue:function (value) {
           this.value=value;
        },
        getValue:function () {
            return this.value
        },
        setNum:function (num) {
            this.num=num
        },
        getNum:function (num) {
            return this.num
        },
        setTrend:function (trend) {
            this.trend=trend
        },
        getTrend:function () {
            return this.trend
        }

    };

    window.TimerCustom = window.TimerCustom|| _timer;

}(jQuery, window));


