if (typeof layer === 'undefined') {
    throw new Error('Chooser requires layer library.');
}

if (typeof jQuery === 'undefined') {
    throw new Error('Tabledit requires jQuery library.');
}


(function($,  window, undefined) {
    'use strict';
    var m={
        init:function (ele,opt,label) {
            var map={},initValue=opt.value;
            map[opt.Y]=0; map[opt.N]=-32;
            var checkbox=$('<div style="position: relative;" >' +
                '<span style="float: left; display: block;position: absolute;">' +
                '<a href="javascript:void(0)" class="custom-check" style="background-position: '+map[initValue]+'"></a>' +
                '<input type="checkbox" style="display: none;" value="'+initValue+'"></span>' +
                '<label style="margin-top: 9px; margin-right: 8px; margin-bottom: 9px; display: block; float: left; font-size: 12px; cursor: pointer;"></label>' +
                '</div>');
            var labelEle=$("<label style='margin-left:20px '>"+label+"</label>");
            ele.append(checkbox);
            ele.append(labelEle);
            ele.off().on('click','span,label',function (event) {
                event.stopPropagation();
                var value=$(this).parent('div').find('input').val();
                switch (value) {
                    case opt.Y:$(this).parent('div').find('a').css("background-position","-32px 0");$(this).parent('div').find('input').val(opt.N);break;
                    case opt.N:$(this).parent('div').find('a').css("background-position","0 0");$(this).parent('div').find('input').val(opt.Y);break;
                }
                if(opt.callback){
                    opt.callback();
                }
            })
        },
        create:function(ele,opt){
            var map={},initValue=opt.value;
            map[opt.Y]=0; map[opt.N]=-32;
            var checkbox=$('<div style="position: relative;" >' +
                '<span style="float: left; display: block;position: absolute;">' +
                '<a href="javascript:void(0)" class="custom-check" style="background-position: '+map[initValue]+'"></a>' +
                '<input type="checkbox" style="display: none;" name="'+ele.attr("name")+'" value="'+initValue+'"></span>' +
                '<label style="margin-top: 9px; margin-right: 8px; margin-bottom: 9px; display: block; float: left; font-size: 12px; cursor: pointer;"></label>' +
                '</div>');
            ele.replaceWith(checkbox);
            checkbox.off().on('click','span,label',function (event) {
                event.stopPropagation();
                var value=$(this).parent('div').find('input').val();
                switch (value) {
                    case opt.Y:$(this).parent('div').find('a').css("background-position","-32px 0");$(this).parent('div').find('input').val(opt.N);break;
                    case opt.N:$(this).parent('div').find('a').css("background-position","0 0");$(this).parent('div').find('input').val(opt.Y);break;
                }
                if(opt.callback){
                    opt.callback();
                }

            })

        },
        getValue:function (ele) {
            return ele.find("input").val()
        }
    };
    window.mCheckbox= window.mCheckbox ||m;


}(jQuery, window));
function customClick(event,obj) {
    event.stopPropagation();
    var  datagrid=$(obj).parents('.datagrid-view2').next('.datagrid-f');
    var input=$(obj).next('input');
    var index=$(input).data('index');
    var value=$(obj).next('input').val();
    var c='-32px';
    if(value=='N'){
        $(obj).next('input').val('Y');
        $(obj).css("background-position","0 0");
        var options=$(datagrid).datagrid('getColumnOption',$(obj).parents('td').attr('field'))['fieldType']['options'];
        $(datagrid).datagrid('getRows')[index][$(obj).parents('td').attr('field')]=options.Y;
    }else{
        $(obj).next('input').val('N');
        $(obj).css("background-position","-32px 0");
        var options=$(datagrid).datagrid('getColumnOption',$(obj).parents('td').attr('field'))['fieldType']['options'];
        $(datagrid).datagrid('getRows')[index][$(obj).parents('td').attr('field')]=options.N;
    }

    return false
}
function customRadioClick(event,obj,datagrid) {
    event.stopPropagation();
    if(datagrid==undefined){
        datagrid=$(obj).parents('.datagrid-view2').next('.datagrid-f');
    }
    var input=$(obj).next('input');
    var index=$(input).data('index');
    var name=$(input).data('name');
    var field=$(obj).parents('td').attr('field');
    var options=JSON.parse($(input).data('options').replace(/\'/g,'"'));
    var y=options.Y;var n=options.N;
    var tr=$($(datagrid).prev()).find("tr[datagrid-row-index=" + index + "]");
    if(options.mold&&options.mold=='column'){
        var elements=$(obj).parents('.datagrid-view2').find('td[field='+field+'] a.custom-check');
        $.each(elements,function (i,ele) {
            $(ele).next('input').val(n);
            $(ele).css("background-position","-32px 0");
            $(datagrid).datagrid('getRows')[i][field]=n;
        })
    }else if(name){
        var radioInput=tr.find('input[data-name="'+name+'"]');
        var value=$(input).val();
        radioInput.each(function (i,item) {
            $(item).val(n);
            $(item).prev('a').css("background-position","-32px 0");
            $(datagrid).datagrid('getRows')[index][$(item).parents('td').attr('field')]=n;
        });
    }

    $(obj).next('input').val(y);
    $(obj).css("background-position","0 0");
    $(datagrid).datagrid('getRows')[index][$(input).attr('name')]=y;
    return false
}