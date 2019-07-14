function Vector() {
    this.count = 0;
    this.datas = [];
}

Vector.prototype.add = function (element) {
    this.datas[this.count] = element;
    this.count++;
};

Vector.prototype.array = function () {
    return this.datas;
};

Vector.prototype.sort = function (filed) {
    return this.datas.sort(
        function(a, b)
        {
            return (a[filed] - b[filed]);
        }
    );
};

Vector.prototype.size = function () {
    return this.count;
};

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt)
{
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
};

function findJQObj(_obj) {
    if ( _obj == null ){
        return null;
    }

    if ( typeof _obj == "string" ){
        return $("#" + _obj);
    }

    if ( _obj instanceof jQuery ){
        return _obj;
    }
}


function buildTree(records, id, name, pid) {
    var treeData = [], hash = {} ,datas = [];
    $.each(records||[], function (i, record) {
        var data = {
            id: record[id],
            text: record[name],
            pid: record[pid],
            data: record,
            children: []
        };
        datas.push(data);
        hash[data["id"]] = data;
    });

    $.each(datas, function (i, data) {
        var hashVP = hash[data["pid"]];
        if (hashVP) {
            !hashVP["children"] && (hashVP["children"] = []);
            hashVP["children"].push(data);
        } else {
            treeData.push(data);
        }
    });

    return treeData;
}

function findParents(record,id,mkid,text) {
    var nodes=[],surplusNodes=[];
    var totalNodes=[];
    $.each(record,function (i,rec) {
        if(fuzzyMatches(rec['mkmc'],text)){
            nodes.push(rec);
            totalNodes.push(rec);
        }else{
            surplusNodes.push(rec);
        }
    });

        var parents=[];
        $.each(nodes,function (j,node) {
            var ss=getNode(node,surplusNodes);
            if(ss.length>0){
                $.each(ss,function (v,s) {
                    parents.push(s);
                })
            }

        });
        parents=unique(parents);
        $.each(parents,function (n,parent) {
            totalNodes.push(parent);
        });

    return  totalNodes;

}
/*判断存在字符*/
function fuzzyMatches(a,m) {
    return ( a || "").toUpperCase().indexOf(m.toUpperCase()) >= 0;
}
/*找父辈数据*/
function getNode(node,datas) {
    var dd=[];
    $.each(datas,function (i,data) {
        if(data){
                if(data['mkid']==node['fmkid']){
                    dd.push(data);
                    node=data;
                }

        }

    });
    return dd;
}
/*去重*/
function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
