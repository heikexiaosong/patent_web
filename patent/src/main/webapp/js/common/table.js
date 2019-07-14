if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}

(function($, window, document,undefined) {
    'use strict';

    var _dataGridCommon = {

        datetimeFormatter: function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("yyyy-MM-dd hh:mm:ss");
        },

        dateFormatter: function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("yyyy-MM-dd");
        },

        timeFormatter: function(value,row,index) {
            if ( value==undefined || value =='' ){
                return "";
            }
            var date = new Date(parseInt(value));
            if ( isNaN(date) ){
                return ""
            }
            return date.Format("hh:mm:ss");
        }

    };

    window.DataGridCommon = window.DataGridCommon || _dataGridCommon;

})(jQuery, window, document);